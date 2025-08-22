import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const cookieStore = cookies();
  const session = cookieStore.get('session');
  if (!session) redirect('/auth');
  let email = '';
  try {
    email = JSON.parse(session.value).email || '';
  } catch {
    redirect('/auth');
  }

  return (
    <section className="section">
      <div className="container-responsive">
        <h1 className="section-title">Dashboard</h1>
        <p className="section-subtitle">Signed in as {email}.</p>
        <div className="mt-8 flex items-center gap-3">
          <form action="/api/auth/logout" method="post">
            <button className="btn btn-secondary h-10 px-4" type="submit">Sign out</button>
          </form>
          <Link href="/" className="btn btn-primary h-10 px-4">Back to site</Link>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6"><h3 className="font-semibold">Your projects</h3><p className="text-sm text-gray-600 mt-2">Create and manage your projects here.</p></div>
          <div className="card p-6"><h3 className="font-semibold">Billing</h3><p className="text-sm text-gray-600 mt-2">View plans and invoices.</p></div>
          <div className="card p-6"><h3 className="font-semibold">Settings</h3><p className="text-sm text-gray-600 mt-2">Update account preferences.</p></div>
        </div>
      </div>
    </section>
  );
}
