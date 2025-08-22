import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    features: ['Up to 3 projects', 'Community support', 'Basic analytics'],
    cta: 'Get started',
    href: '/auth'
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics'],
    cta: 'Start free trial',
    href: '/auth'
  },
  {
    name: 'Business',
    price: '$49',
    period: '/mo',
    features: ['SLA + SSO', 'Team management', 'Custom reports'],
    cta: 'Contact sales',
    href: '/auth'
  }
];

export default function PricingPage() {
  return (
    <section className="section">
      <div className="container-responsive">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="section-title">Simple pricing</h1>
          <p className="section-subtitle">Choose a plan that fits your needs. Upgrade, downgrade, or cancel anytime.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="card p-6 flex flex-col">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-gray-500">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Link href={p.href} className="btn btn-primary h-10 px-4 mt-8">{p.cta}</Link>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-sm text-gray-600">Prices in USD. Taxes may apply.</div>
      </div>
    </section>
  );
}
