import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call Now – Emergency Tire Service | RoadRescue",
  description: "Flat tire? We come to you! Emergency mobile tire repair available 24/7. Call +1 (973) 524-7656 now.",
};

const PHONE = "+1 (973) 524-7656";
const PHONE_TEL = "tel:+19735247656";

export default function CallNowPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1a3a5c] text-white py-4 px-6 flex items-center justify-between sticky top-0 z-50 shadow-lg">
        <span className="text-2xl font-bold">RoadRescue</span>
        <a href={PHONE_TEL} className="bg-yellow-400 text-[#1a3a5c] font-bold px-5 py-2 rounded-full text-sm hover:bg-yellow-300 transition-colors">
          {PHONE}
        </a>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#dc2626] to-[#9b1c1c] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Flat Tire? We Come to You!</h1>
        <p className="text-lg text-red-100 mb-8">Emergency tire service that comes directly to your location</p>
        <a
          href={PHONE_TEL}
          className="inline-block bg-yellow-400 text-[#1a3a5c] font-extrabold text-xl px-12 py-5 rounded-full shadow-xl hover:bg-yellow-300 transition-colors animate-pulse"
        >
          Tap to Call {PHONE}
        </a>
        <p className="mt-4 text-red-200 text-sm">Available 24/7</p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[
            { title: "Available 24/7", desc: "Emergency tire service anytime, day or night" },
            { title: "We Come to You", desc: "Mobile tire repair at your exact location" },
            { title: "Expert Service", desc: "Professional technicians with all equipment" },
          ].map((b) => (
            <div key={b.title} className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center max-w-xs">
              <p className="font-bold text-lg">{b.title}</p>
              <p className="text-red-100 text-sm mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a3a5c] mb-10">Emergency Tire Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Flat Tire Repair", desc: "Quick patch and plug repairs on-site", icon: "🔧" },
              { title: "Tire Replacement", desc: "Install your spare or new tire", icon: "🔄" },
              { title: "Tire Inflation", desc: "Air pressure check and fill-up", icon: "💨" },
              { title: "Emergency Service", desc: "Safe, reliable help when you need it most", icon: "🚨" },
            ].map((s) => (
              <div key={s.title} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#1a3a5c]">{s.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={PHONE_TEL}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-colors"
            >
              Call Now for Immediate Help
            </a>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a3a5c] mb-10">Why Call RoadRescue?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { title: "Trusted Service", desc: "Licensed, insured, and experienced technicians", icon: "✅" },
              { title: "Fast Response", desc: "Average arrival time under 30 minutes", icon: "⚡" },
              { title: "Always Available", desc: "24/7 emergency tire service, no exceptions", icon: "🕐" },
            ].map((w) => (
              <div key={w.title} className="bg-white rounded-2xl shadow p-6 border border-gray-100">
                <div className="text-4xl mb-3">{w.icon}</div>
                <h3 className="font-semibold text-[#1a3a5c] text-lg mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1a3a5c] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Don&apos;t Wait - Get Help Now!</h2>
        <p className="text-gray-300 mb-8">Professional mobile tire repair service comes directly to you</p>
        <a
          href={PHONE_TEL}
          className="inline-block bg-yellow-400 text-[#1a3a5c] font-extrabold text-xl px-12 py-5 rounded-full shadow-xl hover:bg-yellow-300 transition-colors"
        >
          Tap to Call {PHONE}
        </a>
        <p className="mt-4 text-gray-400 text-sm">Available 24/7 • Fast Response • Professional Service</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2240] text-white py-6 px-6 text-center text-sm">
        <p className="font-semibold">RoadRescue</p>
        <p className="text-gray-400">Emergency Roadside Assistance • Mobile Tire Repair</p>
        <p className="text-yellow-400 font-bold mt-1">{PHONE}</p>
        <p className="text-gray-500 mt-1">Licensed • Insured • Available 24/7</p>
      </footer>
    </div>
  );
}
