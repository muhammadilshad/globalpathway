import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { ChecklistClient } from "./ChecklistClient";

export const metadata: Metadata = buildMetadata({
  title: "Visa Document Checklist Generator 2026 — Printable PDF | GlobalPathway",
  description:
    "Generate a categorized, printable document checklist for any visa application. Covers USA, Canada, UK, Australia, Schengen, UAE, Japan, and more.",
  path: "/tools/document-checklist",
});

const faqs = [
  {
    question: "Is this checklist complete for my application?",
    answer:
      "This checklist covers the standard documents required for most applicants. Your individual case may require additional documents based on your nationality, personal history, or specific visa subcategory. Always verify against the official embassy or consulate website for your destination.",
  },
  {
    question: "How do I save or print this checklist?",
    answer:
      "Click the Print button at the top of your checklist, then select 'Save as PDF' in your browser's print dialog to download it. The checklist is formatted cleanly for A4 and US Letter paper.",
  },
  {
    question: "How far in advance should I start gathering documents?",
    answer:
      "For tourist visas to most countries, 2–4 weeks is usually sufficient. For work or family visas — especially to the US, Canada, or UK — start at least 3–6 months in advance, as some documents (police certificates, medical exams) require significant lead time.",
  },
  {
    question: "Do I need originals or copies?",
    answer:
      "Requirements vary by country and visa type. For most applications, you'll need both originals and certified/notarized copies. Financial documents are typically acceptable as certified bank-stamped printouts. Always check the specific requirements for your destination.",
  },
  {
    question: "What does 'certified' or 'notarized' mean for documents?",
    answer:
      "A certified document is an official copy authenticated by the issuing authority or a notary public. A notarized document has been signed before and verified by a licensed notary. For translations, most countries require certified translations by an accredited translator.",
  },
];

const article = (
  <>
    <p>
      A missing document is the single most common reason visa applications are delayed or rejected. Embassies and consulates operate on strict document requirements — if something is missing, your application is typically returned or put on hold, adding weeks or months to an already long process. Getting your documents right the first time is not optional; it&apos;s the most important thing you can do before you apply.
    </p>
    <p>
      Document requirements fall into five categories. <strong>Identity documents</strong> are the foundation — your passport must typically be valid for at least 6 months beyond your intended stay, and many countries require a minimum number of blank pages. <strong>Financial documents</strong> prove you can support yourself during your visit and have sufficient ties to return home — bank statements, payslips, tax returns, and proof of employment all serve this purpose. <strong>Supporting documents</strong> are specific to your visa type and purpose of travel — hotel bookings, invitation letters, enrollment letters, or job offers. <strong>Photos</strong> must meet exact specifications that vary by country (size, background colour, recency). <strong>Forms</strong> must be completed accurately and signed — errors on forms are a frequent cause of delays.
    </p>
    <p>
      A few documents that frequently catch applicants off guard: many countries require <strong>police clearance certificates</strong> from every country where you lived for 6+ months after age 16 — and these can take weeks to obtain. <strong>Medical examinations</strong> for long-stay and immigrant visas must be performed by a government-approved physician and are valid for a limited window. <strong>Certified translations</strong> are required for any document not in the destination country&apos;s official language — and must be done by an accredited translator, not Google Translate.
    </p>
    <p>
      Select your destination and visa type below to generate your personalised checklist. Check each item as you collect it, then print or save as PDF to track your progress offline.
    </p>
  </>
);

export default function DocumentChecklistPage() {
  return (
    <ToolLayout
      toolId="document-checklist"
      title="Visa Document Checklist Generator"
      intro="Select your destination and visa type to generate a categorized checklist of required documents. Check items off as you collect them, then print or save as PDF."
      article={article}
      source="Official embassy and consulate document requirement pages"
      sourceUrl="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/list-of-posts.html"
      lastUpdated="2026-04-26"
      faqs={faqs}
    >
      <ChecklistClient />
    </ToolLayout>
  );
}
