import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Immigration Guides — Plain-English Explainers | GlobalPathway",
  description:
    "Free plain-English guides on immigration rules, visa processes, and citizenship pathways. Written for applicants, not lawyers.",
  path: "/guides",
});

const guides = [
  {
    slug: "schengen-90-180-rule",
    title: "The Schengen 90/180 Day Rule: Complete Guide 2026",
    excerpt: "The most misunderstood travel rule in Europe — explained clearly, with examples and common mistakes to avoid.",
    readTime: "8 min read",
    category: "Europe Travel",
  },
  {
    slug: "how-to-read-uscis-receipt-notice",
    title: "How to Read Your USCIS Receipt Notice (I-797)",
    excerpt: "Your I-797 Notice of Action contains critical information about your case. Here's exactly what every field means.",
    readTime: "6 min read",
    category: "US Immigration",
  },
  {
    slug: "express-entry-vs-pnp",
    title: "Express Entry vs Provincial Nominee Program (PNP): Which is Right for You?",
    excerpt: "Canada has two main pathways to permanent residence. Understanding the difference could save you years of waiting.",
    readTime: "10 min read",
    category: "Canada Immigration",
  },
  {
    slug: "how-to-check-uscis-case-status",
    title: "How to Check Your USCIS Case Status — And What the Updates Mean",
    excerpt: "USCIS status updates use confusing language. This guide translates every status message into plain English.",
    readTime: "7 min read",
    category: "US Immigration",
  },
  {
    slug: "strongest-passports-2026",
    title: "The World's Strongest Passports in 2026 — Full Rankings",
    excerpt: "Which passport opens the most doors? We break down the Henley Index rankings and what drives passport power.",
    readTime: "9 min read",
    category: "Travel",
  },
  {
    slug: "canada-pr-pathways",
    title: "5 Ways to Get Canadian Permanent Residence in 2026",
    excerpt: "From Express Entry to family sponsorship to the Atlantic Immigration Program — a clear overview of every main PR pathway.",
    readTime: "12 min read",
    category: "Canada Immigration",
  },
];

export default function GuidesPage() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container>
          <Breadcrumbs items={[{ label: "Guides" }]} />
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-4">Immigration Guides</h1>
          <p className="text-[#64748b] mt-2 text-lg max-w-xl">
            Plain-English explainers on immigration rules, visa processes, and citizenship pathways. No jargon.
          </p>
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex flex-col p-6 border border-[#e2e8f0] rounded-md bg-white hover:border-[#0f2a47]/30 hover:shadow-sm transition-all"
            >
              <span className="text-xs font-semibold text-[#0a9e5e] uppercase tracking-wider mb-2">{guide.category}</span>
              <h2 className="font-serif text-lg font-semibold text-[#0f1419] leading-snug mb-2 group-hover:text-[#0f2a47]">
                {guide.title}
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed flex-1">{guide.excerpt}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="flex items-center gap-1 text-xs text-[#64748b]">
                  <Clock className="h-3 w-3" /> {guide.readTime}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0f2a47] group-hover:gap-2 transition-all">
                  Read guide <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
