import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Service Areas | RoadRescue", description: "RoadRescue provides 24/7 roadside assistance nationwide." };

const regions = [
  { region: "Northeast", states: ["New York", "New Jersey", "Connecticut", "Massachusetts", "Pennsylvania", "Rhode Island", "Vermont", "New Hampshire", "Maine"] },
  { region: "Southeast", states: ["Florida", "Georgia", "North Carolina", "South Carolina", "Virginia", "Tennessee", "Alabama", "Mississippi", "Louisiana"] },
  { region: "Midwest", states: ["Illinois", "Ohio", "Michigan", "Indiana", "Wisconsin", "Minnesota", "Missouri", "Iowa", "Kansas", "Nebraska"] },
  { region: "Southwest", states: ["Texas", "Arizona", "New Mexico", "Oklahoma", "Nevada"] },
  { region: "West", states: ["California", "Washington", "Oregon", "Colorado", "Utah", "Montana", "Idaho", "Wyoming"] },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Navbar />
      <section className="bg-[#1a3a5c] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-3">Service Areas</h1>
        <p className="text-gray-300">Nationwide coverage — we come to you wherever you are</p>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center mb-12">
          <p className="text-lg font-semibold text-[#1a3a5c]">🗺️ We provide coverage across all 50 states.</p>
          <p className="text-gray-600 text-sm mt-1">If you&apos;re not sure whether we cover your area, just call — we&apos;ll get someone to you.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((r) => (
            <div key={r.region} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-[#1a3a5c] text-lg mb-3">{r.region}</h3>
              <ul className="space-y-1">
                {r.states.map((s) => (
                  <li key={s} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-green-500">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need help right now? We dispatch from the nearest location.</p>
          <a href="tel:+19735247656" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow transition-colors">
            Call +1 (973) 524-7656 — 24/7
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
