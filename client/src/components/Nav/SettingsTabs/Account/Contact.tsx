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
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold">Contact Support</h2>
      <input
        type="email"
        className="input"
        placeholder="Your email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <textarea
        className="input"
        placeholder="Your message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={5}
        required
      />
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>
      {status === 'sent' && <div className="text-green-600">Message sent!</div>}
      {status === 'error' && <div className="text-red-600">{error}</div>}
    </form>
  );
};

export default Contact;
