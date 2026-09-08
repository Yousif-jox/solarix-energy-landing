import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import solarHero from "../assets/solar-hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Solarix — Solar Energy Solutions" },
      {
        name: "description",
        content:
          "Solarix designs, installs, and monitors solar systems for homes, businesses, and industry. Clean sun, captured with precision.",
      },
      { property: "og:title", content: "Solarix — Solar Energy Solutions" },
      {
        property: "og:description",
        content:
          "Solarix designs, installs, and monitors solar systems for homes, businesses, and industry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "System type",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="font-sans antialiased">
      {/* HERO */}
      <section className="caustic text-amber-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <header className="flex items-center justify-between mb-14">
            <div className="flex items-center gap-2.5">
              <div className="size-8 rounded-full bg-brand/90 grid place-items-center">
                <div className="size-3.5 rounded-full bg-white/90" />
              </div>
              <span className="font-display font-semibold text-lg tracking-tight text-white">
                Solarix
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-amber-50/70">
              <a href="#solutions" className="hover:text-white transition-colors">
                Solutions
              </a>
              <a href="#how-it-works" className="hover:text-white transition-colors">
                How it works
              </a>
              <a href="#results" className="hover:text-white transition-colors">
                Results
              </a>
            </nav>
            <a
              href="#quote"
              className="text-sm font-medium text-navy bg-amber rounded-full px-4 py-2 ring-1 ring-amber transition-transform hover:-translate-y-0.5"
            >
              Request a quote
            </a>
          </header>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-brand/90 tracking-[0.14em] uppercase mb-5">
                Residential · Commercial · Industrial
              </p>
              <h1 className="font-display font-medium text-white text-balance text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-[18ch]">
                Clean sun, captured with precision.
              </h1>
              <p className="text-pretty text-amber-50/75 text-base max-w-[46ch] mt-6">
                Solarix designs, installs, and monitors solar systems that turn open
                roof space into dependable, bankable energy — built to perform for
                decades.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-9">
                <a
                  href="#quote"
                  className="text-sm font-medium text-navy bg-brand rounded-full px-5 py-3 ring-1 ring-brand transition-transform hover:-translate-y-0.5"
                >
                  Get a free assessment
                </a>
                <a
                  href="#how-it-works"
                  className="text-sm font-medium text-amber-50/85 rounded-full px-5 py-3 ring-1 ring-white/15 hover:ring-white/30 transition-all"
                >
                  See how it works
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass rounded-2xl outline outline-1 -outline-offset-1 outline-white/10 overflow-hidden">
                <img
                  src={solarHero}
                  alt="Modern rooftop solar array at sunset with teal dusk sky"
                  width={1024}
                  height={1280}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-[#f6f4ef] text-navy">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-end justify-between gap-6 mb-12">
            <h2 className="font-display font-medium text-3xl lg:text-4xl leading-tight text-balance max-w-[24ch]">
              How a Solarix system comes online
            </h2>
            <p className="text-pretty text-navy/60 text-sm max-w-[30ch] hidden md:block">
              A clear, four-step path from first site visit to first kWh of clean
              power.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Site survey",
                text: "We map roof structure, shading, and grid connection to size your system.",
              },
              {
                step: "02",
                title: "System design",
                text: "A tailored panel, inverter, and storage plan with projected yield.",
              },
              {
                step: "03",
                title: "Certified install",
                text: "Licensed crews install and commission, then hand over a full warranty.",
              },
              {
                step: "04",
                title: "Monitoring",
                text: "Real-time output tracking with proactive maintenance alerts.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/70 rounded-xl p-6 ring-1 ring-black/5"
              >
                <span className="font-display text-brand text-2xl font-medium">
                  {item.step}
                </span>
                <h3 className="font-display font-semibold text-lg mt-4">
                  {item.title}
                </h3>
                <p className="text-pretty text-navy/65 text-sm mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="caustic text-amber-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="font-display font-medium text-3xl lg:text-4xl leading-tight text-balance max-w-[26ch] text-white mb-12">
            Solutions scaled to your footprint
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Residential",
                text: "Rooftop arrays and home batteries that cut monthly bills and hedge against outages.",
                iconBg: "bg-brand/15",
                iconColor: "bg-brand",
              },
              {
                title: "Commercial",
                text: "Warehouse and office systems engineered for payback and corporate targets.",
                iconBg: "bg-teal/40",
                iconColor: "bg-amber",
              },
              {
                title: "Industrial",
                text: "Utility-scale parks and hybrid storage delivering firm, dispatchable power.",
                iconBg: "bg-white/10",
                iconColor: "bg-brand",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="glass rounded-2xl p-7 outline outline-1 -outline-offset-1 outline-white/10 transition-transform hover:-translate-y-1"
              >
                <div
                  className={`size-10 rounded-lg ${card.iconBg} grid place-items-center mb-5`}
                >
                  <div className={`size-4 rounded-sm ${card.iconColor}`} />
                </div>
                <h3 className="font-display font-semibold text-xl text-white">
                  {card.title}
                </h3>
                <p className="text-pretty text-amber-50/70 text-sm mt-3">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="results" className="bg-brand text-navy">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "840 MW", label: "Capacity delivered to date" },
              { value: "19,200", label: "Systems in operation" },
              { value: "62%", label: "Avg. reduction in customer bills" },
              { value: "25 yr", label: "Performance warranty coverage" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-medium">{stat.value}</div>
                <p className="text-pretty text-navy/70 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#f6f4ef] text-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="size-9 rounded-full bg-brand/20 grid place-items-center mx-auto mb-8">
            <div className="size-4 rounded-full bg-brand" />
          </div>
          <blockquote className="font-display font-medium text-2xl lg:text-3xl text-balance leading-tight max-w-[30ch] mx-auto">
            Solarix paid attention to the details other installers skip. Three years
            in, our output still beats the original projection.
          </blockquote>
          <p className="text-sm font-medium mt-6">Layla Mansour</p>
          <p className="text-sm text-navy/55 mt-1">Operations Lead, Northgate Logistics</p>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="caustic text-amber-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="glass rounded-[min(1.5vw,20px)] outline outline-1 -outline-offset-1 outline-white/10 p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display font-medium text-3xl lg:text-4xl leading-tight text-balance max-w-[20ch] text-white">
                Start your assessment
              </h2>
              <p className="text-pretty text-amber-50/75 text-base max-w-[40ch] mt-4">
                Share a few details and a Solarix engineer will return a tailored
                estimate within two business days.
              </p>
            </div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <div className="size-12 rounded-full bg-brand/20 grid place-items-center mb-4">
                  <div className="size-5 rounded-full bg-brand" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white">
                  Request received
                </h3>
                <p className="text-amber-50/70 text-sm mt-2">
                  A Solarix engineer will reach out within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg bg-white/8 ring-1 ring-white/15 px-4 py-3 text-sm text-white placeholder:text-amber-50/40 outline-none focus:ring-2 focus:ring-brand"
                />
                <input
                  type="email"
                  placeholder="Work email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg bg-white/8 ring-1 ring-white/15 px-4 py-3 text-sm text-white placeholder:text-amber-50/40 outline-none focus:ring-2 focus:ring-brand"
                />
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full rounded-lg bg-white/8 ring-1 ring-white/15 px-4 py-3 text-sm text-amber-50/70 outline-none focus:ring-2 focus:ring-brand"
                >
                  <option>System type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                </select>
                <button
                  type="submit"
                  className="w-full text-sm font-medium text-navy bg-brand rounded-lg py-3 ring-1 ring-brand transition-transform hover:-translate-y-0.5"
                >
                  Request my quote
                </button>
              </form>
            )}
          </div>
          <p className="text-center text-xs text-amber-50/45 mt-8">
            Solarix · Independent energy solutions · Fully licensed &amp; insured
          </p>
        </div>
      </section>
    </main>
  );
}
