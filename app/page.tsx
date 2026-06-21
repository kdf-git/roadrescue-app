import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const services = [
  {
    title: "Tire Services",
    desc: "Flat tire repair, replacement, and emergency tire changes",
    items: ["Flat tire repair", "Tire replacement", "Spare tire installation"],
    icon: "🔧",
  },
  {
    title: "Engine Won't Start",
    desc: "Battery jump-starts and basic engine diagnostics",
    items: ["Battery jump-start", "Basic diagnostics", "Alternator check"],
    icon: "🔋",
  },
  {
    title: "Out of Gas",
    desc: "Emergency fuel delivery to get you back on the road",
    items: ["Emergency fuel delivery", "Gas tank filling", "Fuel system check"],
    icon: "⛽",
  },
  {
    title: "Basic Towing",
    desc: "Safe and professional towing services",
    items: ["Local towing", "Long-distance towing", "Vehicle transport"],
    icon: "🚛",
  },
  {
    title: "Vehicle Stuck",
    desc: "Professional extraction from mud, snow, or ditches",
    items: ["Mud extraction", "Snow removal", "Ditch recovery"],
    icon: "🚗",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a3a5c] to-[#0f2240] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Need Roadside Help?</h1>
        <p className="text-lg text-gray-300 mb-8">Fast, reliable assistance when you need it most</p>
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium">
          {["24/7 Availability", "Nationwide Coverage", "Professional Service"].map((f) => (
            <span key={f} className="bg-white/10 border border-white/20 rounded-full px-5 py-2">{f}</span>
          ))}
        </div>
        <a
          href="tel:8626584395"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-colors"
        >
          Get Help Now
        </a>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1a3a5c] mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-semibold text-[#1a3a5c] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
                <ul className="space-y-1">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-[#1a3a5c] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Emergency Contact</h2>
        <a href="tel:8626584395" className="text-4xl font-extrabold text-yellow-400 hover:text-yellow-300 block mb-2">
          (862) 658-4395
        </a>
        <p className="text-gray-300 mb-2">Available 24/7</p>
        <a href="mailto:help@roadrescue.com" className="text-gray-400 hover:text-white transition-colors">
          help@roadrescue.com
        </a>
      </section>

      <Footer />
    </>
  );
}
