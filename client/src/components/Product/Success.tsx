import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubscriptionSuccess() {
  const navigate = useNavigate();
  return (
    <div className="max-w-md p-6">
      <h1 className="text-lg font-medium leading-6 text-text-primary">Purchase Successful!</h1>
      <p className="my-4 text-sm font-light text-gray-700 dark:text-white">Your payment was successful and your account has been credited.</p>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary border border-border-light bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" 
      onClick={() => navigate('/c/new')}>Continue</button>
    </div>
  );
}
