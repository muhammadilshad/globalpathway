import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LastUpdated } from "@/components/common/LastUpdated";
import { buildMetadata } from "@/lib/seo";
import { ShieldCheck, RefreshCw, Users, FileText } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About GlobalPathway — Free Immigration Tools",
  description:
    "Learn about GlobalPathway's mission to make immigration information accessible, accurate, and free. How we source data, who we serve, and our commitment to transparency.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container narrow>
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-4">About GlobalPathway</h1>
          <p className="text-[#64748b] mt-2 text-lg">Plain-English immigration tools, built on official data.</p>
        </Container>
      </div>

      <Container narrow className="py-12">
        <article className="prose prose-slate max-w-none">

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419] mt-0">Our Mission</h2>
          <p className="text-[#64748b] leading-relaxed">
            Immigration affects millions of people every year — families trying to reunite, professionals seeking new opportunities, and individuals fleeing impossible situations. Yet the information that governs these life-changing decisions is often buried in government websites, written in dense legalese, and scattered across dozens of jurisdictions.
          </p>
          <p className="text-[#64748b] leading-relaxed">
            GlobalPathway exists to fix that. We build free, browser-based tools that translate official immigration data into plain English. No subscriptions. No upsells. No accounts required. Our tools run entirely in your browser — we never see the information you enter.
          </p>
          <p className="text-[#64748b] leading-relaxed">
            We are not immigration lawyers, and we don&apos;t pretend to be. What we are is a team of researchers and engineers who believe that access to accurate, well-organized immigration information is a public good — and one that shouldn&apos;t cost anything.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 not-prose">
            {[
              { icon: ShieldCheck, title: "Accuracy First", body: "We only publish data we can trace to an official government source. If we can't verify it, we say so." },
              { icon: RefreshCw, title: "Regular Updates", body: "Processing times, fee schedules, and visa rules change. We review every tool's data at least monthly." },
              { icon: Users, title: "Built for Real People", body: "Our users are applicants preparing a case, not lawyers billing by the hour. We write for them." },
              { icon: FileText, title: "Full Transparency", body: "Every tool cites its source. Every data point links to the government page where we found it." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 p-5 border border-[#e2e8f0] rounded-md bg-[#f7f9fc]">
                <div className="w-9 h-9 rounded-md bg-[#0f2a47]/5 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-[#0f2a47]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f1419] text-sm mb-1">{title}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">Who We Serve</h2>
          <p className="text-[#64748b] leading-relaxed">
            Our users span every immigration scenario imaginable. The Nigerian software engineer working out whether his H-1B petition is still inside normal processing times. The French couple planning a long trip through North America and needing to stay on the right side of the Schengen 90-day rule. The Indian family watching the USCIS case tracker and wondering what &ldquo;RFE issued&rdquo; actually means for their I-485.
          </p>
          <p className="text-[#64748b] leading-relaxed">
            We also serve immigration professionals — paralegals, consultants, and attorneys — who use GlobalPathway as a quick-reference sanity check alongside their own more detailed work. Our tools are fast, reliable, and free: a useful supplement to professional advice, never a replacement for it.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">Our Methodology</h2>
          <p className="text-[#64748b] leading-relaxed">
            Every tool on GlobalPathway is built from the same foundation: we read the official government source, extract the relevant rules or data, and encode them into our calculators. For tools like the USCIS Processing Times Tracker, this means manually reviewing the USCIS processing times page each month and updating our JSON data file. For the Express Entry CRS Calculator, it means implementing IRCC&apos;s published scoring grid line by line and cross-checking against the official IRCC scoring tables.
          </p>
          <p className="text-[#64748b] leading-relaxed">
            We are not scraping data automatically, because automated scrapers miss context. When USCIS changes how it reports times — as it has several times — a human needs to understand what changed and update the tool accordingly. We prefer slower, more reliable updates over fast but potentially wrong ones.
          </p>
          <p className="text-[#64748b] leading-relaxed">
            Where we use placeholder or estimated data for v1 of a tool, we say so clearly in the tool itself. Our goal is to be transparently incomplete rather than confidently wrong.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">What We&apos;re Not</h2>
          <p className="text-[#64748b] leading-relaxed">
            We are not a law firm. We do not provide legal advice. No tool on GlobalPathway creates an attorney-client relationship or substitutes for professional immigration counsel. The information we provide is general in nature and may not apply to your specific situation, your country of origin, your visa category, or your individual history.
          </p>
          <p className="text-[#64748b] leading-relaxed">
            Immigration law is one of the most complex areas of law in any jurisdiction. The consequences of errors can include denial, inadmissibility, detention, or deportation. If you have any doubt about how immigration rules apply to your case, please consult a licensed immigration attorney. Our tools can help you understand the landscape — a qualified attorney can help you navigate it safely.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">Transparency Commitment</h2>
          <p className="text-[#64748b] leading-relaxed">
            We are committed to the following standards of transparency on this site:
          </p>
          <ul className="list-disc pl-5 text-[#64748b] space-y-2 text-sm leading-relaxed">
            <li>Every tool page displays a <strong>Last Updated</strong> date so you know when the data was last reviewed.</li>
            <li>Every data-driven tool links directly to the official government source used to build it.</li>
            <li>Where data is estimated, preliminary, or from a third-party (non-government) source, we say so explicitly.</li>
            <li>We do not accept payment to feature, promote, or modify information about any immigration service, attorney, or government program.</li>
            <li>We do not use affiliate links in our tool pages or data citations.</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">Contact Us</h2>
          <p className="text-[#64748b] leading-relaxed">
            Found an error? Have a suggestion for a new tool? Want to report outdated data? We want to hear from you. Visit our <a href="/contact" className="text-[#0f2a47] underline">Contact page</a> to reach us directly. We review all messages and take data accuracy reports seriously — they usually get a response within 48 hours.
          </p>
        </article>

        <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
          <LastUpdated date="2026-04-26" />
        </div>
      </Container>
    </main>
  );
}
