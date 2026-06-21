import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact | RoadRescue", description: "Get in touch with RoadRescue for 24/7 roadside assistance." };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="bg-[#1a3a5c] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-3">Contact Us</h1>
        <p className="text-gray-300">We&apos;re here 24/7 — reach us any way you prefer</p>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Get in Touch</h2>
          <div className="space-y-5 text-gray-700">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📞</span>
              <div>
                <p className="font-semibold">Emergency Line (24/7)</p>
                <a href="tel:+19735247656" className="text-red-600 font-bold text-xl hover:text-red-700">+1 (973) 524-7656</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">✉️</span>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:help@roadrescue.com" className="text-[#1a3a5c] hover:underline">help@roadrescue.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">🕐</span>
              <div>
                <p className="font-semibold">Hours</p>
                <p>24 hours a day, 7 days a week, 365 days a year</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">📍</span>
              <div>
                <p className="font-semibold">Coverage</p>
                <p>Nationwide — we come to you wherever you are</p>
              </div>
            </div>
          </div>
          <a
            href="tel:+19735247656"
            className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow transition-colors"
          >
            Call Now — +1 (973) 524-7656
          </a>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" placeholder="Your name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" placeholder="(555) 000-0000" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} placeholder="Describe your situation..." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]" />
            </div>
            <button type="submit" className="w-full bg-[#1a3a5c] text-white font-bold py-3 rounded-lg hover:bg-[#0f2240] transition-colors">
              Send Message
            </button>
            <p className="text-xs text-gray-400 text-center">For emergencies, please call directly — +1 (973) 524-7656</p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
