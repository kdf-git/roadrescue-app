import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | RoadRescue", description: "Privacy policy for RoadRescue roadside assistance services." };

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <section className="bg-[#1a3a5c] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-3">Privacy Policy</h1>
        <p className="text-gray-300">Last updated: January 1, 2024</p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {[
            { title: "1. Information We Collect", body: "We collect information you provide directly, including your name, phone number, email address, and location when you request our services. We may also collect device and usage data when you visit our website." },
            { title: "2. How We Use Your Information", body: "We use your information to dispatch roadside assistance, communicate about your service request, send service confirmations, improve our services, and comply with legal obligations. We do not sell your personal information to third parties." },
            { title: "3. Location Data", body: "To provide roadside assistance, we need your location. This data is used solely to dispatch a technician to you and is not stored beyond the completion of your service unless you consent." },
            { title: "4. Data Sharing", body: "We may share your information with our network of service technicians to fulfill your request, with payment processors to complete transactions, and with law enforcement when required by law." },
            { title: "5. Data Security", body: "We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure." },
            { title: "6. Your Rights", body: "You have the right to access, correct, or delete your personal information. Contact us at help@roadrescue.com to make a request." },
            { title: "7. Cookies", body: "Our website uses cookies to improve your browsing experience. You can disable cookies in your browser settings, though this may affect site functionality." },
            { title: "8. Contact Us", body: "For privacy questions or concerns, contact us at help@roadrescue.com or call (862) 658-4395." },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-[#1a3a5c] mb-2">{section.title}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
