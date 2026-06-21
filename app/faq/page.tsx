import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "FAQ | RoadRescue", description: "Frequently asked questions about RoadRescue roadside assistance." };

const faqs = [
  { q: "How quickly can you arrive?", a: "Our average response time is under 30 minutes. Exact time depends on your location and current demand, but we always dispatch the nearest available technician." },
  { q: "Are you available on holidays?", a: "Yes — 100%. We operate 24 hours a day, 365 days a year, including all major holidays. Roadside emergencies don't take days off, and neither do we." },
  { q: "What areas do you cover?", a: "We provide nationwide coverage. Whether you're in a city, suburb, or on a rural highway, we'll dispatch a technician to your location." },
  { q: "Do you accept insurance?", a: "We work with many roadside assistance insurance plans and memberships. Call us and have your policy info ready — we'll verify coverage on the spot." },
  { q: "What if my car needs to be towed to a shop?", a: "We offer both local and long-distance towing. If your vehicle can't be repaired on-site, we'll safely transport it to a shop of your choice." },
  { q: "Is payment required upfront?", a: "Payment is due upon service completion. We accept all major credit cards, debit cards, and digital payments. We provide a full breakdown before starting any work." },
  { q: "What if I run out of gas on the highway?", a: "Stay safe — turn on your hazard lights and call us immediately. We'll deliver emergency fuel directly to your location." },
  { q: "Can you replace my tire if I don't have a spare?", a: "Yes. If you don't have a spare, we can arrange tire delivery and replacement from a local supplier. Additional costs may apply." },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <section className="bg-[#1a3a5c] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-3">Frequently Asked Questions</h1>
        <p className="text-gray-300">Everything you need to know about our services</p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-[#1a3a5c] text-lg mb-2">{faq.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
        <div className="text-center pt-8">
          <p className="text-gray-600 mb-4">Still have questions? Call us directly.</p>
          <a href="tel:+19735247656" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow transition-colors">
            Call +1 (973) 524-7656
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
