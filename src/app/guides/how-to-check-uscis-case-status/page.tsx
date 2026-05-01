import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LastUpdated } from "@/components/common/LastUpdated";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Check Your USCIS Case Status — Every Update Explained | GlobalPathway",
  description:
    "What does 'Case Is Being Actively Reviewed' mean? Every USCIS online case status message translated into plain English.",
  path: "/guides/how-to-check-uscis-case-status",
});

export default function USCISCaseStatusGuide() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container narrow>
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "USCIS Case Status Guide" }]} />
          <span className="text-xs font-semibold text-[#0a9e5e] uppercase tracking-wider mt-4 block">US Immigration</span>
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-2 leading-tight">
            How to Check Your USCIS Case Status — And What Every Update Means
          </h1>
          <p className="text-[#64748b] mt-3 text-lg">7 min read · Last updated April 26, 2026</p>
        </Container>
      </div>

      <Container narrow className="py-12">
        <article className="space-y-6 text-[#64748b] text-sm leading-relaxed">
          <p className="text-base">
            Checking your USCIS case status is both the most helpful and most anxiety-inducing part of the immigration process. The status messages USCIS uses are written in bureaucratic language that often raises more questions than it answers. This guide translates every major status message into plain English.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">How to check your case status</h2>
          <p>
            Go to <strong>egov.uscis.gov/casestatus/landing.do</strong> and enter your receipt number from your I-797 notice. You can also sign up for email or text notifications at my.uscis.gov so you&apos;re alerted when your status changes.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">Status messages — translated</h2>

          <div className="space-y-4">
            {[
              { status: "Case Was Received", meaning: "USCIS has your application and has entered it into their system. Your I-797 receipt notice has been or will shortly be mailed. No action needed from you." },
              { status: "Case Is Being Actively Reviewed by USCIS", meaning: "An officer is currently reviewing your case. This is a normal step. It does not mean anything is wrong. Do not contact USCIS unless you&apos;re past the inquiry date." },
              { status: "Request for Evidence Was Sent", meaning: "USCIS needs more documentation. You will receive a letter (RFE) explaining exactly what is required and the deadline — usually 87 days. Respond by the deadline or your case may be denied." },
              { status: "Response to USCIS&apos; Request for Evidence Was Received", meaning: "USCIS received your RFE response. Your case is back in the queue. Processing continues from this point." },
              { status: "Case Was Transferred and a New Office Has Jurisdiction", meaning: "Your case moved to a different service center. Your receipt number stays the same. Processing time resets to the new center&apos;s timeline." },
              { status: "Case Was Approved", meaning: "Your petition or application was approved. For some forms (like I-130), this is just the first step — you may still need a visa interview. For others (like N-400), approval means you can proceed to oath ceremony scheduling." },
              { status: "Case Was Denied", meaning: "USCIS denied your application. The denial letter explains the reason. You may have options to file a motion to reopen, motion to reconsider, or an appeal depending on the form. Consult an immigration attorney." },
              { status: "Fingerprint Fee Was Received", meaning: "USCIS received your biometrics fee payment and will send a biometrics appointment notice (ASC appointment)." },
              { status: "Case Was Sent to the National Visa Center", meaning: "For immigrant visa petitions (green card from abroad), your approved I-130 has been forwarded to the National Visa Center (NVC) for processing. NVC will contact you to collect fees and documents." },
              { status: "Interview Was Scheduled by USCIS", meaning: "Your biometrics appointment or USCIS interview has been scheduled. Check your mail for the appointment notice." },
            ].map(({ status, meaning }) => (
              <div key={status} className="p-4 border border-[#e2e8f0] rounded-md bg-white">
                <p className="font-semibold text-[#0f1419] text-sm mb-1">&ldquo;{status}&rdquo;</p>
                <p className="text-xs text-[#64748b] leading-relaxed">{meaning}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">When should you contact USCIS?</h2>
          <p>
            USCIS discourages unnecessary inquiries, and contacting them before your case is outside normal processing time typically does nothing. You can submit a case inquiry when:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your receipt date is before the &ldquo;inquiry date&rdquo; shown on the USCIS processing times tool for your form and service center</li>
            <li>You have a pressing need (travel emergency, job start date) — you can request expedited processing with documentation</li>
            <li>Your status hasn&apos;t changed in over 6 months and you&apos;re well outside normal processing time</li>
          </ul>
          <p>
            Submit inquiries online at <strong>egov.uscis.gov/e-request</strong>. Calling the USCIS Contact Center (1-800-375-5283) is an option, but wait times are long and agents typically cannot expedite your case or provide information beyond what the online tracker shows.
          </p>

          <div className="mt-8 p-5 bg-[#f7f9fc] rounded-md border border-[#e2e8f0]">
            <p className="font-semibold text-[#0f1419] text-sm mb-2">Is your case outside normal processing time?</p>
            <p className="text-xs text-[#64748b] mb-3">Check current processing times for your form and service center.</p>
            <Link
              href="/tools/uscis-processing-times"
              className="inline-flex items-center gap-2 bg-[#0f2a47] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#0f2a47]/90 transition-colors"
            >
              Check Processing Times →
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
