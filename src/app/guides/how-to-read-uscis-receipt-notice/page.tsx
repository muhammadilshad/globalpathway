import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LastUpdated } from "@/components/common/LastUpdated";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Read Your USCIS Receipt Notice (I-797) | GlobalPathway",
  description:
    "Your I-797 receipt notice contains critical information about your immigration case. This guide explains every field in plain English.",
  path: "/guides/how-to-read-uscis-receipt-notice",
});

export default function USCISReceiptGuide() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container narrow>
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "How to Read Your I-797" }]} />
          <span className="text-xs font-semibold text-[#0a9e5e] uppercase tracking-wider mt-4 block">US Immigration</span>
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-2 leading-tight">
            How to Read Your USCIS Receipt Notice (I-797)
          </h1>
          <p className="text-[#64748b] mt-3 text-lg">6 min read · Last updated April 26, 2026</p>
        </Container>
      </div>

      <Container narrow className="py-12">
        <article className="space-y-6 text-[#64748b] text-sm leading-relaxed">
          <p className="text-base">
            When you file a petition or application with USCIS, one of the first things you receive is a <strong>Form I-797 Notice of Action</strong> — commonly called a &ldquo;receipt notice.&rdquo; This small piece of paper is more important than it looks. It confirms USCIS has your application, gives you a receipt number to track your case, and contains details you&apos;ll reference throughout the entire immigration process.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">The receipt number</h2>
          <p>
            The most important item on your I-797 is the <strong>receipt number</strong> — a 13-character identifier in the format <span className="font-mono bg-[#f7f9fc] px-1 rounded">EAC-24-123-45678</span>. Break it down:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>First 3 letters</strong> — your service center: EAC (Vermont), WAC (California), LIN (Nebraska), SRC (Texas), MSC (Potomac), IOE (USCIS Electronic Immigration System)</li>
            <li><strong>Next 2 digits</strong> — fiscal year the case was received (24 = FY2024)</li>
            <li><strong>Next 3 digits</strong> — day of the fiscal year</li>
            <li><strong>Last 5 digits</strong> — unique case identifier</li>
          </ul>
          <p>
            You&apos;ll use this receipt number to check your case status at <strong>egov.uscis.gov</strong> and in all correspondence with USCIS. Keep it safe.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">Notice date vs. receipt date</h2>
          <p>
            Your I-797 shows two dates. The <strong>notice date</strong> is when USCIS generated the notice — usually a few days after they actually received your package. The <strong>receipt date</strong> (sometimes called the priority date for certain visa categories) is the date USCIS officially accepted your application into their system.
          </p>
          <p>
            For processing time purposes, USCIS measures from the <strong>receipt date</strong>. For immigrant visa priority dates (green card queues), the receipt date determines your place in line for certain employment-based and family-based categories.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">What &ldquo;approved&rdquo; vs &ldquo;pending&rdquo; notices look like</h2>
          <p>
            The I-797 comes in several varieties:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>I-797C (Receipt Notice)</strong> — confirms USCIS has your application. No action required from you yet.</li>
            <li><strong>I-797 (Approval Notice)</strong> — your petition or application was approved. This is the document you may need to show at a consulate interview or port of entry.</li>
            <li><strong>I-797E (Request for Evidence / RFE)</strong> — USCIS needs more information. You must respond by the deadline shown or your case may be denied.</li>
            <li><strong>I-797 (Transfer Notice)</strong> — your case has been moved to a different service center. Your receipt number stays the same.</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">Biographic information section</h2>
          <p>
            Check the name, date of birth, and alien registration number (A-number, if shown) on your notice carefully. If any of this information is wrong, contact USCIS immediately — errors can cause serious delays or complications later in the process.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">What to do after you receive your receipt notice</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Make several photocopies and store the original safely.</li>
            <li>Set up online case tracking at egov.uscis.gov using your receipt number.</li>
            <li>Note the processing time for your form and service center — use our tracker below.</li>
            <li>Do not call USCIS unless your case is outside normal processing time and past the inquiry date.</li>
          </ol>

          <div className="mt-8 p-5 bg-[#f7f9fc] rounded-md border border-[#e2e8f0]">
            <p className="font-semibold text-[#0f1419] text-sm mb-2">Check processing times for your form</p>
            <p className="text-xs text-[#64748b] mb-3">Select your form type and service center to see current processing time estimates.</p>
            <Link
              href="/tools/uscis-processing-times"
              className="inline-flex items-center gap-2 bg-[#0f2a47] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#0f2a47]/90 transition-colors"
            >
              Open Processing Times Tracker →
            </Link>
          </div>
        </article>
        <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
          <LastUpdated date="2026-04-26" />
        </div>
      </Container>
    </main>
  );
}
