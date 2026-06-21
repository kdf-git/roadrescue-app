import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions | RoadRescue", description: "Terms and conditions for RoadRescue roadside assistance services." };

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <section className="bg-[#1a3a5c] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-3">Terms &amp; Conditions</h1>
        <p className="text-gray-300">Last updated: January 1, 2024</p>
      </section>
      <section className="py-16 px-6 max-w-3xl mx-auto prose prose-gray">
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {[
            { title: "1. Acceptance of Terms", body: "By using RoadRescue services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services." },
            { title: "2. Services Provided", body: "RoadRescue provides emergency roadside assistance including but not limited to: tire repair and replacement, battery jump-starts, fuel delivery, towing, and vehicle extraction. All services are subject to availability and technician assessment." },
            { title: "3. Payment", body: "Payment is due upon completion of service. We accept all major credit cards, debit cards, and digital payment methods. Prices are provided upfront and may vary based on location, time of service, and complexity of the job." },
            { title: "4. Service Limitations", body: "RoadRescue is not responsible for pre-existing damage to your vehicle. Our technicians will assess the situation and advise if a service cannot be safely performed. We reserve the right to refuse service in unsafe conditions." },
            { title: "5. Response Times", body: "Estimated response times are provided as a courtesy and are not guaranteed. Response times may vary due to traffic, weather, distance, and technician availability." },
            { title: "6. Liability", body: "RoadRescue's liability is limited to the cost of the service provided. We are not liable for consequential, incidental, or indirect damages arising from the use of our services." },
            { title: "7. Cancellations", body: "You may cancel a service request before a technician is dispatched at no charge. Cancellations after dispatch may incur a trip fee." },
            { title: "8. Privacy", body: "Your personal information is collected and used in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your information as described." },
            { title: "9. Changes to Terms", body: "RoadRescue reserves the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the updated Terms." },
            { title: "10. Contact", body: "For questions about these Terms, contact us at help@roadrescue.com or call +1 (973) 524-7656." },
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
