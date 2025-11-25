import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { useAuthContext } from '~/hooks';
// import { PRODUCTS } from './products';
import { useCreateStripeCheckoutSession } from './useCreateStripeCheckoutSession';
import { useCancelSubscription } from './useCancelSubscription';
import { useGetStartupConfig } from '~/data-provider';

function Product({ open, onOpenChange }: TDialogProps) {
  const { user, token } = useAuthContext();
  const [purchasing, setPurchasing] = useState('');
  const [billingLoading, setBillingLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const { data: startupConfig } = useGetStartupConfig();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      setLoadingProducts(true);
      try {
        const stripeProductSource = (startupConfig?.stripeProductSource) || 'cribmetrics';
        const res = await fetch(`/api/stripe/products/by-metadata?key=source&value=${stripeProductSource}`, {
          headers: { 'Authorization': `Bearer ${token}` },
          credentials: 'include',
        });
        const data = await res.json();
        
        // Sort data.products lexicographical on product name
        data.products.sort((a, b) => Number(a.metadata.amount) - Number(b.metadata.amount));        
        setProducts(data.products || []);
      } catch (err) {
        setProducts([]);
      } finally {
        setLoadingProducts(false);
      }
    }
    fetchProducts();
  }, [token]);

  const navigateToChat = () => {
    open = false;
    if (onOpenChange)  {
      onOpenChange(open);
    }
  }

  const handleCancel = () => {
    setShowConfirm(true);
  };

  async function handlePurchaseClick(priceId) {
    try {
      setPurchasing(priceId);
      const res = await fetch('/api/stripe/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          priceId: priceId, //
          quantity: 1
        }),
        credentials: 'include',
      });
      const data = await res.json();
      if (res.ok && data?.url) {
        window.location.href = data.url;
      } else {
        alert('Purchase failed: ' + (data?.error || res.statusText));
      }
    } catch (error) {
      alert('Purchase failed: ' + (error.message || error));
    } finally {
      setPurchasing(false);
    }
  }

  const handleBillingPortal = () => {
    setBillingLoading(true);
    fetch('/api/stripe/billing-portal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    })
      .then(async (res) => {
        const data = await res.json();
        if (data?.url) {
          window.open(data.url, '_blank', 'noopener,noreferrer');
        } else {
          window.alert('Failed to get billing portal URL.');
        }
      })
      .catch((err) => {
        window.alert('Failed to open billing portal: ' + (err?.message || err));
      })
      .finally(() => setBillingLoading(false));
  };

  return (
    <div className="flex flex-col gap-3 p-1 text-sm text-text-primary">  
      <p className="mt-2 text-text-secondary">Select a package below to add more to your balance, these credits will never expire. Your transactions are secure and protected.</p>
      <div className="mt-2">
        {loadingProducts ? (
          <div className="text-center py-4">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-4">No products found.</div>
        ) : products.length % 2 === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((p) => (
              <button
                key={p.id}
                className="px-4 py-2 rounded bg-primary text-white font-medium hover:bg-primary-dark disabled:opacity-60 w-full"
                onClick={() => handlePurchaseClick(p.default_price)}
                disabled={purchasing}
              >
                <span className="font-semibold text-secondary text-lg">
                  {(purchasing === p.id) ? 'Redirecting...' : `${p.description || p.id}` }
                </span>
              </button>
            ))}
          </div>
        ) : (
          products.map((p) => (
            <div
              key={p.id}
              className="flex flex-col md:flex-row px-4 py-2 md:items-center md:gap-4 md:col-span-2"
            >
              <button
                className="px-4 py-2 rounded bg-primary text-white font-medium hover:bg-primary-dark disabled:opacity-60 w-full"
                onClick={() => handlePurchaseClick(p.id, p.amount)}
                disabled={purchasing}
              >
                <span className="font-semibold text-secondary text-lg">
                  {(purchasing === p.id) ? 'Redirecting...' : `${p.name || p.id}` }
                </span>
              </button>
            </div>
          ))
        )}
      </div>
      <div className="mt-4 flex justify-center">
        <img src="assets/stripe-security-badge.png" alt="Stripe Security Badge" className="w-full max-w-xs" />
      </div>
    </div>        
  );
}

export default React.memo(Product);
