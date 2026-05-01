import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { VisaCostClient } from "./VisaCostClient";

export const metadata: Metadata = buildMetadata({
  title: "Visa Cost Calculator 2026 — Government Fees & Biometrics | GlobalPathway",
  description:
    "Get a full visa fee breakdown before you apply. Government fees, biometric fees, and service charges for USA, Canada, UK, Australia, Schengen, UAE, Singapore, Japan, and more.",
  path: "/tools/visa-cost-calculator",
});

const faqs = [
  {
    question: "Why does the total vary from what I see on the embassy website?",
    answer:
      "Fees change periodically and may vary by nationality, application center, or time of year. Our figures are updated regularly but may not reflect the most recent changes. Always verify the current fee with the official embassy or consulate before submitting payment.",
  },
  {
    question: "Are service fees always required?",
    answer:
      "Service fees are charged by third-party Visa Application Centers (VAC) such as VFS Global or TLScontact, which many countries use to accept applications. They are typically mandatory if you're applying through one of these centers, which is required in most countries.",
  },
  {
    question: "What is premium processing?",
    answer:
      "Premium processing is an optional paid service that guarantees faster processing of your application. In the US, USCIS offers premium processing for certain employment-based petitions. In the UK, premium services are available at UKVCAS service centers for an additional fee.",
  },
  {
    question: "Are visa fees refundable if denied?",
    answer:
      "Generally, no. Visa application fees are non-refundable in most countries, regardless of the outcome of your application. Biometric and service fees are also typically non-refundable. Read the terms carefully before applying.",
  },
  {
    question: "Do children pay the same visa fee?",
    answer:
      "Many countries offer reduced fees for children under certain ages (commonly under 6 or under 12). The fees shown here are for adult applications. Check the specific embassy or consulate website for child fee schedules.",
  },
];

const article = (
  <>
    <p>
      Visa fees are rarely just one number. Most applications involve a combination of charges — the government&apos;s application fee, a separate biometric fee, a Visa Application Center (VAC) service fee, and sometimes optional premium processing. Applicants who don&apos;t budget for all of these are often surprised when they reach the payment screen.
    </p>
    <p>
      The <strong>government fee</strong> is the core non-refundable charge paid to the embassy or immigration authority. This goes directly to the government and is non-negotiable regardless of whether your visa is approved. The <strong>biometric fee</strong> covers fingerprinting and photograph collection, usually done at a VAC like VFS Global or TLScontact. The <strong>service fee</strong> is the VAC&apos;s own charge for accepting and processing your application — it is separate from and additional to the government fee.
    </p>
    <p>
      <strong>Premium processing</strong> — where available — lets you pay extra to jump the queue. In the US, USCIS offers premium processing for certain employment-based petitions (currently around $2,805), guaranteeing a decision within 15 business days. In the UK, priority and super-priority services are available at UKVCAS service centers for additional fees. Most family and tourist visas do not offer premium processing options.
    </p>
    <p>
      One critical note: <strong>visa fees are almost universally non-refundable</strong> even if your application is denied. For high-cost visas (US family visa at ~$325, Australian partner visa at ~$8,000+), this is a meaningful financial risk. Make sure your application is as strong as possible before you pay.
    </p>
    <p>
      Fees below are in local currency with approximate USD equivalents. Exchange rates fluctuate — always verify the current exact fee on the official embassy or government website before submitting payment.
    </p>
  </>
);

export default function VisaCostCalculatorPage() {
  return (
    <ToolLayout
      toolId="visa-cost-calculator"
      title="Visa Cost Calculator"
      intro="See a full breakdown of government fees, biometrics, and service charges before you start your application — in local currency and USD."
      article={article}
      source="Official embassy and consulate fee schedules"
      sourceUrl="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/fees-visa-services.html"
      lastUpdated="2026-04-26"
      faqs={faqs}
    >
      <VisaCostClient />
    </ToolLayout>
  );
}
