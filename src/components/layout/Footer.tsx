import Link from "next/link";
import { Globe } from "lucide-react";
import { Container } from "./Container";

const toolLinks = [
  { href: "/tools/visa-free-countries", label: "Visa-Free Countries" },
  { href: "/tools/schengen-calculator", label: "Schengen Calculator" },
  { href: "/tools/us-citizenship-test", label: "Citizenship Test" },
  { href: "/tools/uscis-processing-times", label: "USCIS Processing Times" },
  { href: "/tools/express-entry-crs", label: "Express Entry CRS" },
  { href: "/tools/visa-cost-calculator", label: "Visa Cost Calculator" },
  { href: "/tools/document-checklist", label: "Document Checklist" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-[#f7f9fc] mt-auto">
      <Container>
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-serif text-lg font-bold text-[#0f2a47]">
              <Globe className="h-4 w-4 text-[#0a9e5e]" />
              GlobalPathway
            </Link>
            <p className="mt-3 text-xs text-[#64748b] leading-relaxed">
              Free immigration tools for visa, citizenship, and green card processes. Plain English, always free.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0f1419] mb-3">Tools</h3>
            <ul className="space-y-2">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-[#64748b] hover:text-[#0f2a47] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0f1419] mb-3">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-xs text-[#64748b] hover:text-[#0f2a47]">About Us</Link></li>
              <li><Link href="/contact" className="text-xs text-[#64748b] hover:text-[#0f2a47]">Contact</Link></li>
              <li><Link href="/tools" className="text-xs text-[#64748b] hover:text-[#0f2a47]">All Tools</Link></li>
              <li><Link href="/guides" className="text-xs text-[#64748b] hover:text-[#0f2a47]">Guides</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0f1419] mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-xs text-[#64748b] hover:text-[#0f2a47]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-xs text-[#64748b] hover:text-[#0f2a47]">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-xs text-[#64748b] hover:text-[#0f2a47]">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e2e8f0] py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#64748b]">
            &copy; {new Date().getFullYear()} GlobalPathway. All rights reserved.
          </p>
          <p className="text-xs text-[#64748b] text-center">
            Not a law firm. <Link href="/disclaimer" className="underline hover:text-[#0f2a47]">Informational only</Link> — always verify with the official source.
          </p>
        </div>
      </Container>
    </footer>
  );
}
