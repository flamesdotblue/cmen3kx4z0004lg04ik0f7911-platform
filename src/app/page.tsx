import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-responsive pt-20 sm:pt-28 pb-16 sm:pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Launch faster with a clean SaaS boilerplate
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-prose">
              AcmeCloud helps you ship stunning landing pages, pricing, and authentication out of the box. Built with Next.js and Tailwind CSS.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link href="/pricing" className="btn btn-primary h-11 px-6 text-base">View pricing</Link>
              <Link href="#features" className="btn btn-secondary h-11 px-6 text-base">Explore features</Link>
            </div>
            <div className="mt-6 text-sm text-gray-500">No credit card required. Open source friendly.</div>
          </div>
          <div className="relative">
            <div className="card p-6 bg-white">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-brand-100 to-brand-300 flex items-center justify-center text-brand-800 font-semibold">
                Demo Dashboard Preview
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>• App Router, fully typed</li>
                <li>• Tailwind CSS UI components</li>
                <li>• Simple cookie-based auth</li>
                <li>• Ready to deploy on Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section border-t">
        <div className="container-responsive">
          <h2 className="section-title">Everything you need</h2>
          <p className="section-subtitle max-w-2xl">We focused on essentials so you can focus on your product. Clean code, solid defaults, and flexible components.</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card p-6">
                <div className="h-10 w-10 rounded-md bg-brand-600 text-white flex items-center justify-center font-semibold">{f.icon}</div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 border-t">
        <div className="container-responsive grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="section-title">Transparent pricing that scales with you</h2>
            <p className="section-subtitle">Start free, then upgrade as you grow. No hidden fees.</p>
          </div>
          <div className="flex lg:justify-end">
            <Link href="/pricing" className="btn btn-primary h-11 px-6">See plans</Link>
          </div>
        </div>
      </section>

      <section id="faq" className="section border-t">
        <div className="container-responsive">
          <h2 className="section-title">Frequently asked questions</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const features = [
  { title: 'Auth Included', desc: 'Cookie-based auth endpoints with redirect protection.', icon: '🔐' },
  { title: 'Pricing Pages', desc: 'Production-ready pricing tiers and call-to-actions.', icon: '💳' },
  { title: 'Responsive UI', desc: 'Looks great on mobile and desktop with Tailwind.', icon: '📱' },
  { title: 'Fast by default', desc: 'Next.js App Router, ISR-ready, edge-capable.', icon: '⚡' },
  { title: 'Accessible', desc: 'Keyboard-friendly and semantic HTML.', icon: '♿' },
  { title: 'Typed', desc: 'Typescript configuration for safer code.', icon: '🧠' }
];

const faqs = [
  { q: 'Can I use this in production?', a: 'Yes. It is designed to be a great starting point and easy to extend.' },
  { q: 'How do I add real auth?', a: 'Swap the cookie endpoints for your provider (NextAuth, Clerk, Auth0) and wire the session.' },
  { q: 'Is it deployable on Vercel?', a: 'Absolutely. It is optimized for Vercel out of the box.' },
  { q: 'Does it support TypeScript?', a: 'Yes, the project is fully typed and strict mode is enabled.' }
];
