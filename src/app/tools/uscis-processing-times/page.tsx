import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ProcessingTimesClient } from "./ProcessingTimesClient";

export const metadata: Metadata = buildMetadata({
  title: "USCIS Processing Times Tracker 2026 — I-130, I-485, N-400 & More | GlobalPathway",
  description:
    "Look up current USCIS processing times for I-130, I-485, I-765, N-400, I-129F, I-751, I-90, and I-131. Select your service center for accurate time ranges.",
  path: "/tools/uscis-processing-times",
});

const faqs = [
  {
    question: "How do I find my service center?",
    answer:
      "Your service center is printed on your I-797 Notice of Action (receipt notice) — look for the three-letter code at the top (e.g., EAC = Eastern/Vermont, WAC = Western/California, LIN = Nebraska, SRC = Texas, MSC = Potomac). You can also find it by checking your case status at egov.uscis.gov.",
  },
  {
    question: "My case is outside the normal processing time. What should I do?",
    answer:
      "If your receipt date is before the 'inquiry date' shown for your form and service center, you may be able to submit a service request to USCIS. Go to egov.uscis.gov/e-request to submit an inquiry online, or contact the USCIS Contact Center.",
  },
  {
    question: "Why do processing times vary between service centers?",
    answer:
      "USCIS distributes cases among service centers based on capacity. Processing times differ because centers have different staffing, caseloads, and resource levels. USCIS does not guarantee a transfer if your center is slower.",
  },
  {
    question: "Does premium processing apply to all forms?",
    answer:
      "No. Premium processing (currently $2,805 for most forms, guaranteeing a decision within 15 business days) is only available for certain employment-based petitions like I-129 and I-140. It is not available for I-485, I-130, N-400, or most family-based forms.",
  },
  {
    question: "How often do you update these times?",
    answer:
      "We review the official USCIS Processing Times tool monthly and update this data accordingly. The 'Last Updated' date at the bottom of this page shows when we last verified the numbers. Always check uscis.gov for the most current information.",
  },
];

const article = (
  <>
    <p>
      USCIS processing times are one of the most-checked pieces of information in the US immigration world — and also one of the most misunderstood. The times USCIS publishes are not guarantees; they are estimates based on how long it has taken to complete 80% of cases of that type at that service center. Your case may move faster or slower.
    </p>
    <p>
      Each form is processed at a specific <strong>service center</strong> — and which center handles your case depends on where you live, which form you filed, and how USCIS has allocated its workload. Your service center is printed on your I-797 receipt notice. The three-letter code tells you everything: <strong>EAC</strong> = Vermont (Eastern Adjudication Center), <strong>WAC</strong> = California (Western), <strong>LIN</strong> = Nebraska, <strong>SRC</strong> = Texas, <strong>MSC</strong> = Potomac.
    </p>
    <p>
      Processing times can shift dramatically month to month — sometimes by several months in either direction — based on staffing, policy changes, and the volume of applications USCIS receives. The COVID-19 pandemic caused historic backlogs, and while USCIS has worked to reduce them, waits for some forms remain significantly longer than pre-2020 levels.
    </p>
    <p>
      The <strong>inquiry date</strong> shown in this tool is the receipt date before which you may be eligible to submit a case inquiry to USCIS if your case hasn&apos;t been decided. You can submit an inquiry online at egov.uscis.gov/e-request. USCIS is not obligated to expedite your case simply because you inquire, but it can sometimes prompt a review of stuck cases.
    </p>
    <p>
      Always cross-check this tool with the live USCIS processing times page before making any decisions — we update our data monthly, but USCIS updates theirs more frequently.
    </p>
  </>
);

export default function USCISProcessingTimesPage() {
  return (
    <ToolLayout
      toolId="uscis-processing-times"
      title="USCIS Processing Times Tracker"
      intro="Select your form type and USCIS service center to see the current estimated processing time range and inquiry eligibility date."
      article={article}
      source="USCIS Processing Times Tool"
      sourceUrl="https://egov.uscis.gov/processing-times/"
      lastUpdated="2026-04-26"
      faqs={faqs}
    >
      <ProcessingTimesClient />
    </ToolLayout>
  );
}
