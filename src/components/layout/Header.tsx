"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e2e8f0]">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold text-[#0f2a47]">
            <Globe className="h-5 w-5 text-[#0a9e5e]" />
            GlobalPathway
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-[#0f2a47]"
                    : "text-[#64748b] hover:text-[#0f2a47]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tools"
              className="rounded-md bg-[#0f2a47] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0f2a47]/90 transition-colors"
            >
              Open a Tool
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-[#64748b]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden border-t border-[#e2e8f0] bg-white">
          <Container>
            <nav className="flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    pathname === link.href
                      ? "bg-[#f7f9fc] text-[#0f2a47]"
                      : "text-[#64748b] hover:bg-[#f7f9fc] hover:text-[#0f2a47]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
