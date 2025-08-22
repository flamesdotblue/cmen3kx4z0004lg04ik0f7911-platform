"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If session exists, redirect to dashboard
    fetch('/api/auth/session', { cache: 'no-store' })
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data?.email) router.replace('/dashboard');
      })
      .catch(() => {});
  }, [router]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || 'Login failed');
      }
      router.replace('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section">
      <div className="container-responsive max-w-md">
        <h1 className="section-title">Welcome back</h1>
        <p className="section-subtitle">Sign in to your account or create a new one.</p>
        <form onSubmit={onSubmit} className="card p-6 mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border-gray-300 focus:border-brand-500 focus:ring-brand-500"/>
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border-gray-300 focus:border-brand-500 focus:ring-brand-500"/>
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button type="submit" className="btn btn-primary h-10 px-4 w-full" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
          <p className="text-xs text-gray-500 text-center">By continuing you agree to our Terms and Privacy Policy.</p>
        </form>
      </div>
    </section>
  );
}
