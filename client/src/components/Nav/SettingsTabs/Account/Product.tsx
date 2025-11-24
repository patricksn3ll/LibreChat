import React, { useState } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { useAuthContext } from '~/hooks';
import { PRODUCTS } from './products';
import { useCreateStripeCheckoutSession } from './useCreateStripeCheckoutSession';
import { useCancelSubscription } from './useCancelSubscription';
import { Dropdown } from '@librechat/client';

function Product({ open, onOpenChange }: TDialogProps) {
  const { user, token } = useAuthContext();
  //const { mutate: createCheckoutSession, isLoading: purchasing, variables: subscribingPlan } = useCreateStripeCheckoutSession();
  const [purchasing, setPurchasing] = useState('');
  const [billingLoading, setBillingLoading] = useState(false);
  const navigate = useNavigate();

  const navigateToChat = () => {
    open = false;
    if (onOpenChange)  {
      onOpenChange(open);
    }
  }

  const handleCancel = () => {
    setShowConfirm(true);
  };

  async function onChange(value: string) {
    console.log('Selected product id:', value);
    // Get the price for the selected product id
    const price = PRODUCTS.find(product => product.id === value)?.price;
    await handlePurchaseClick(value, price);
  }

  async function handlePurchaseClick(priceId, amount) {
    try {
      setPurchasing(priceId);
      // Hardcoded priceId for demo; replace with your actual Stripe Price ID
      const res = await fetch('/api/stripe/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          priceId: priceId, //
          quantity: 1,
          metadata: { tokenAmount: amount}
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

  const productOptions = [
    { value: PRODUCTS[0].id, label:  PRODUCTS[0].name },
    { value: PRODUCTS[1].id, label: PRODUCTS[1].name },
    { value: PRODUCTS[2].id, label: PRODUCTS[2].name },
    { value: PRODUCTS[3].id, label: PRODUCTS[3].name }
  ];

  return (
    <div className="flex flex-col gap-3 p-1 text-sm text-text-primary">  
      <p>Purchase additional credits safley and securly. Your credits ever expire.</p>
      <div className="mt-2">
        <Dropdown
          value={productOptions[1].id}
          onChange={onChange}
          options={productOptions}
          sizeClasses="w-[300px]"
          className="z-50"
        />        
        {/* {PRODUCTS.map((p) => (
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
                {(purchasing === p.id) ? 'Redirecting...' : `${p.name}` }
              </span>
            </button>
          </div>
        ))}         */}
      </div>
      <div className="flex gap-4">
        <img src="assets/stripe-security-badge.png" alt="Stripe Security Badge" className="h-30"/>
      </div>
    </div>        
  );
}

export default React.memo(Product);
