import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pricing | RoadRescue", description: "Transparent pricing for all RoadRescue roadside assistance services." };

const plans = [
  {
    service: "Tire Repair (Patch/Plug)",
    price: "From $65",
    includes: ["On-site diagnosis", "Patch or plug repair", "Inflation & safety check"],
  },
  {
    service: "Tire Replacement",
    price: "From $85",
    includes: ["Spare tire installation", "Torque check", "Disposal of damaged tire"],
  },
  {
    service: "Battery Jump-Start",
    price: "From $55",
    includes: ["Jump-start service", "Battery health check", "Alternator check"],
  },
  {
    service: "Fuel Delivery",
    price: "From $65",
    includes: ["Up to 3 gallons delivered", "Fuel system check", "Safe restart assistance"],
  },
  {
    service: "Local Towing (up to 10 mi)",
    price: "From $95",
    includes: ["Safe loading & securing", "Transport to destination", "Basic assessment"],
  },
  {
    service: "Vehicle Extraction",
    price: "From $120",
    includes: ["Mud, snow, or ditch recovery", "Winching service", "Damage inspection"],
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <section className="bg-[#1a3a5c] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-3">Transparent Pricing</h1>
        <p className="text-gray-300">No hidden fees. You know what you&apos;re paying before we arrive.</p>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.service} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-[#1a3a5c] mb-1">{p.service}</h3>
              <p className="text-3xl font-extrabold text-red-600 mb-4">{p.price}</p>
              <ul className="space-y-2">
                {p.includes.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-green-500">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-3">Need a Custom Quote?</h2>
          <p className="text-gray-600 mb-6">Long-distance towing, specialty vehicles, or complex situations — call us for an accurate quote.</p>
          <a href="tel:8626584395" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow transition-colors">
            Call (862) 658-4395
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
