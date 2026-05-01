import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe2, BookOpen } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ToolCard } from "@/components/tools/ToolCard";
import { FAQAccordion } from "@/components/tools/FAQAccordion";
import { NewsletterForm } from "@/components/common/NewsletterForm";
import { AnimatedGlobe } from "@/components/common/AnimatedGlobe";
import { tools } from "@/data/tools-registry";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Free Immigration Tools — Visa, Citizenship & Green Card Calculators",
  description:
    "Free immigration tools that actually work. Visa-free country lookup, Schengen calculator, USCIS processing times, Express Entry CRS, and more.",
  path: "/",
});

const homeFaqs = [
  {
    question: "Who runs GlobalPathway?",
    answer:
      "GlobalPathway is an independent immigration tools site. We're not affiliated with any government agency, law firm, or immigration consultancy. Our mission is to make immigration information accessible to everyone, in plain English, for free.",
  },
  {
    question: "Where does your data come from?",
    answer:
      "All data is sourced from official government portals — USCIS, Immigration, Refugees and Citizenship Canada (IRCC), the EU Commission, and official embassy/consulate websites. We cite sources at the bottom of every tool page and update data regularly.",
  },
  {
    question: "Is this legal advice?",
    answer:
      "No. GlobalPathway is informational only and does not provide legal advice. Our tools help you understand general rules and estimate outcomes, but every immigration case is unique. Always consult a licensed immigration attorney for advice about your specific situation.",
  },
  {
    question: "How often is data updated?",
    answer:
      "We aim to review and update each tool's data at least monthly. Each tool page shows a 'Last Updated' date so you know exactly when we last verified the information. For time-sensitive decisions, always cross-check with the official government source.",
  },
  {
    question: "Do you store my information?",
    answer:
      "No. All calculations happen entirely in your browser. We do not collect, store, or transmit any personal information you enter into our tools. For analytics, we use anonymous, aggregated data only. See our Privacy Policy for full details.",
  },
  {
    question: "Can I use these tools commercially?",
    answer:
      "Yes — the tools are free to use for any purpose. If you're an immigration professional, you're welcome to use GlobalPathway alongside your practice, but please don't reproduce our content or data without attribution.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />

      {/* Hero */}
      <section className="bg-[#0f2a47] text-white py-12 sm:py-16 overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">

            {/* Left — text */}
            <div className="flex-1 max-w-xl">
              <p className="font-mono text-xs text-[#0a9e5e] uppercase tracking-widest mb-4">
                Free · No login required
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Free immigration tools that actually work.
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                Visa calculators, processing time trackers, and citizenship prep — all sourced from official government data, explained in plain English.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 bg-white text-[#0f2a47] font-semibold px-6 py-3 rounded-md hover:bg-white/90 transition-colors text-sm"
                >
                  Browse All Tools <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tools/visa-free-countries"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-sm"
                >
                  Passport Lookup
                </Link>
              </div>
              <p className="mt-6 text-xs text-white/40">
                Used by 50,000+ applicants every month · Updated from official government sources
              </p>
            </div>

            {/* Right — animated world map */}
            <div className="flex-shrink-0 w-full lg:w-[580px] h-[280px] sm:h-[360px] lg:h-[420px]">
              <AnimatedGlobe />
            </div>

          </div>
        </Container>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold text-[#0f1419] mb-2">All Tools</h2>
            <p className="text-[#64748b]">Free, browser-based tools for every stage of your immigration journey.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      {/* How we're different */}
      <section className="py-16 bg-[#f7f9fc] border-y border-[#e2e8f0]">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-[#0f1419] mb-10 text-center">How we&apos;re different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Plain English",
                body: "No bureaucratic jargon. We translate complex immigration rules into language you can actually use to make decisions.",
              },
              {
                icon: Globe2,
                title: "Always Free",
                body: "Every tool is free to use, with no paywalls, no premium tiers, and no required sign-up. Ever.",
              },
              {
                icon: ShieldCheck,
                title: "Official Sources Only",
                body: "Every data point links back to a government portal — USCIS, IRCC, EU Commission, or official embassy pages. No guesswork.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-[#0f2a47]/5 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#0f2a47]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#0f1419]">{title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="py-8 bg-white border-b border-[#e2e8f0]">
        <Container>
          <p className="text-center text-xs text-[#64748b] font-mono uppercase tracking-widest">
            Data sourced from &nbsp;·&nbsp; USCIS &nbsp;·&nbsp; IRCC (Canada) &nbsp;·&nbsp; EU Commission &nbsp;·&nbsp; Henley Passport Index &nbsp;·&nbsp; Official Embassy Portals
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <Container narrow>
          <FAQAccordion faqs={homeFaqs} />
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#0f2a47] text-white">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold mb-3">Stay on top of processing times</h2>
            <p className="text-white/70 text-sm mb-6">
              Get a monthly digest when USCIS processing times shift, new CRS draws happen, or visa rules change for your passport.
            </p>
            <NewsletterForm />
            <p className="text-xs text-white/40 mt-3">No spam. Unsubscribe any time.</p>
          </div>
        </Container>
      </section>

    </>
  );
}
