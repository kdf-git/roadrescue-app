import Link from "next/link";

export default function Navbar({ phone = "(862) 658-4395" }: { phone?: string }) {
  return (
    <header className="bg-[#1a3a5c] text-white py-4 px-6 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        RoadRescue
      </Link>
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <Link href="/#services" className="hover:text-yellow-400 transition-colors">Services</Link>
        <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
      </nav>
      <a
        href={`tel:${phone.replace(/\D/g, "")}`}
        className="text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-colors"
      >
        24/7 Emergency: {phone}
      </a>
    </header>
  );
}
