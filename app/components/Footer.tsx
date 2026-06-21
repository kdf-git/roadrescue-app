import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-2">RoadRescue</h3>
          <p className="text-gray-300 text-sm">Professional roadside assistance available 24/7 nationwide.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-yellow-400">Services</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link href="/#services" className="hover:text-white">Tire Services</Link></li>
            <li><Link href="/#services" className="hover:text-white">Battery Jump-Start</Link></li>
            <li><Link href="/#services" className="hover:text-white">Fuel Delivery</Link></li>
            <li><Link href="/#services" className="hover:text-white">Towing</Link></li>
            <li><Link href="/#services" className="hover:text-white">Vehicle Recovery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-yellow-400">Support</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="tel:+19735247656" className="hover:text-white">24/7 Emergency Line</a></li>
            <li><Link href="/service-areas" className="hover:text-white">Service Areas</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
          <div className="mt-4 text-sm text-gray-300">
            <p className="font-semibold text-white">+1 (973) 524-7656</p>
            <p>Available 24/7</p>
            <p>help@roadrescue.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between text-xs text-gray-400 gap-2">
        <p>© 2024 RoadRescue. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
