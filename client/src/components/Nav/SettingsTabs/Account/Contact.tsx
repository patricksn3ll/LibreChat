import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (!res.ok) throw new Error('Failed to send message');
      setStatus('sent');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      setStatus('error');
      setError(err.message || 'Unknown error');
    }
  };

  return (
    <form className="w-full flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold">Contact</h2>

      {status === 'sent' && <div className="bg-green-100 text-green-700 border border-green-300 rounded p-2">Message sent!</div>}
      {status === 'error' && <div className="bg-red-100 text-red-700 border border-red-300 rounded p-2">{error}</div>}

      <input
        type="email"
        className="form-input input w-full"
        placeholder="Your email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <textarea
        className="form-textarea form-input input w-full"
        placeholder="Your message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={5}
        required
      />
      <button type="submit" className="btn btn-primary justify-center w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default Contact;
