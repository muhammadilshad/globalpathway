import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { CRSClient } from "./CRSClient";

export const metadata: Metadata = buildMetadata({
  title: "Canada Express Entry CRS Calculator 2026 — Free Score Estimator | GlobalPathway",
  description:
    "Calculate your Comprehensive Ranking System (CRS) score for Canada Express Entry. Full IRCC formula with Section A–D breakdown and recent draw comparison.",
  path: "/tools/express-entry-crs",
});

const faqs = [
  {
    question: "What is the CRS score?",
    answer:
      "The Comprehensive Ranking System (CRS) is a points-based system used by Immigration, Refugees and Citizenship Canada (IRCC) to assess and score candidates in the Express Entry immigration pool. IRCC conducts regular draws and invites the highest-scoring candidates to apply for permanent residence.",
  },
  {
    question: "What is an ITA?",
    answer:
      "ITA stands for Invitation to Apply. When IRCC holds a draw, candidates above the cutoff score receive an ITA — an invitation to submit a full application for Canadian permanent residence. Once you receive an ITA, you have 60 days to submit a complete application.",
  },
  {
    question: "How accurate is this calculator?",
    answer:
      "This calculator implements the official IRCC scoring formula for Sections A and D. Section B (spouse factors) and Section C (skill transferability) are simplified in this version. For an exact score, use the official IRCC CRS calculator at canada.ca.",
  },
  {
    question: "What's the minimum CRS score to get invited?",
    answer:
      "There is no fixed minimum. The cutoff changes with every draw and depends on how many candidates are in the pool and how many ITAs IRCC plans to issue. Recent cutoffs have ranged from roughly 470 to 550 for all-programs draws.",
  },
  {
    question: "Does a provincial nomination give me 600 extra points?",
    answer:
      "Yes. A provincial or territorial nomination (PNP) adds 600 CRS points, which in practice virtually guarantees an ITA in the next draw. However, you must first receive the nomination from the province — that process is separate from Express Entry.",
  },
];

const article = (
  <>
    <p>
      Canada&apos;s Express Entry system is the federal government&apos;s primary pathway for skilled workers to get permanent residence. Since it launched in 2015, it has replaced the old first-come, first-served queue with a points-based ranking system — and understanding your score is the first step to understanding your chances.
    </p>
    <p>
      The <strong>Comprehensive Ranking System (CRS)</strong> scores candidates out of a maximum of 1,200 points, though most candidates without a provincial nomination score between 400 and 550. The score is calculated across four sections. <strong>Section A</strong> (Core Human Capital) covers your age, education, official language ability, and Canadian work experience — this is worth up to 500 points if you have a spouse, or 600 without. <strong>Section B</strong> covers your spouse&apos;s human capital factors. <strong>Section C</strong> rewards skill transferability — combinations of strong language scores with foreign work experience or education. <strong>Section D</strong> is where bonus points are added for things like a provincial nomination (+600 points), arranged employment, a sibling in Canada, or strong French skills.
    </p>
    <p>
      IRCC conducts draws from the Express Entry pool roughly every two weeks, inviting the highest-scoring candidates to apply for permanent residence. The cutoff score — the lowest score that received an Invitation to Apply (ITA) — changes with every draw. In recent years, all-programs cutoffs have ranged from roughly 470 to 550. Program-specific draws (for Federal Skilled Workers or Canadian Experience Class only) often have different cutoffs.
    </p>
    <p>
      Enter your profile below. Your estimated score will update in real time as you fill in each field, and you&apos;ll see how it stacks up against the last six draws.
    </p>
  </>
);

export default function ExpressEntryCRSPage() {
  return (
    <ToolLayout
      toolId="express-entry-crs"
      title="Canada Express Entry CRS Calculator"
      intro="Enter your profile details to estimate your Comprehensive Ranking System (CRS) score and see how it compares against recent Express Entry draw cutoffs."
      article={article}
      source="Immigration, Refugees and Citizenship Canada (IRCC) — CRS Criteria"
      sourceUrl="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/criteria-comprehensive-ranking-system/grid.html"
      lastUpdated="2026-04-26"
      faqs={faqs}
    >
      <CRSClient />
    </ToolLayout>
  );
}
