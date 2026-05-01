import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { SchengenClient } from "./SchengenClient";

export const metadata: Metadata = buildMetadata({
  title: "Schengen 90/180 Day Calculator — Free 2026 Tool | GlobalPathway",
  description:
    "Track your Schengen Area days accurately. Calculate days used, days remaining, and your next eligible entry date for the 90/180-day rule.",
  path: "/tools/schengen-calculator",
});

const faqs = [
  {
    question: "What is the Schengen 90/180 rule?",
    answer:
      "Non-EU visitors who don't need a Schengen visa (or who have one) can stay in the Schengen Area for a maximum of 90 days in any 180-day period. The 180-day window is 'rolling' — it moves forward each day, not based on calendar months.",
  },
  {
    question: "Which countries are in the Schengen Area?",
    answer:
      "As of 2026, the Schengen Area includes 29 countries: Austria, Belgium, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, and Switzerland.",
  },
  {
    question: "Does the UK count toward Schengen days?",
    answer:
      "No. The UK is not part of the Schengen Area and has its own separate rules (generally 6 months for eligible nationalities under the Electronic Travel Authorisation system). UK days do not count toward your 90 Schengen days.",
  },
  {
    question: "What happens if I overstay the 90-day limit?",
    answer:
      "Overstaying is a serious violation. You may be denied re-entry to the Schengen Area, deported, fined, or banned from future entry. Border officers can see your travel history in the Entry/Exit System (EES). Do not overstay.",
  },
  {
    question: "Do day-trip exits and re-entries reset the count?",
    answer:
      "No. Brief exits to non-Schengen countries (e.g., a day trip to the UK, Serbia, or Albania) and re-entries do not reset your 90-day counter. The calculation is based on total days present in the Schengen Area in the rolling 180-day window.",
  },
];

const article = (
  <>
    <p>
      The Schengen 90/180-day rule is one of the most misunderstood travel regulations in the world — and violating it, even by accident, can result in fines, being turned back at the border, or a ban on future entry to Europe. Here&apos;s exactly how it works.
    </p>
    <p>
      The rule is simple in principle: <strong>you can spend a maximum of 90 days in the Schengen Area within any 180-day period.</strong> The critical word is &ldquo;any&rdquo; — the 180-day window isn&apos;t based on calendar months or your entry date. It rolls forward every single day. This means border officers don&apos;t just look at when you arrived this trip — they look back 180 days from today and count every day you were present in the Schengen Area during that window.
    </p>
    <p>
      The most common mistake travellers make: they leave the Schengen Area briefly — a weekend in the UK, a few days in Serbia — and assume this &ldquo;resets&rdquo; their 90 days. It does not. Days outside the Schengen Area simply don&apos;t count toward your total, but they don&apos;t erase days you already spent inside.
    </p>
    <p>
      The Schengen Area currently includes 29 countries: all major Western and Central European nations including France, Germany, Italy, Spain, the Netherlands, and also non-EU members Norway, Switzerland, Iceland, and Liechtenstein. The UK is <strong>not</strong> part of the Schengen Area — UK days are tracked separately.
    </p>
    <p>
      Add all your past trips and planned trips using the tool below. It calculates your exact position in the rolling window and tells you either how many days you have left, or — if you&apos;ve used all 90 — the exact date you can next enter.
    </p>
  </>
);

export default function SchengenCalculatorPage() {
  return (
    <ToolLayout
      toolId="schengen-calculator"
      title="Schengen 90/180 Day Calculator"
      intro="Add your trips to the Schengen Area to calculate exactly how many of your 90 days you've used — and when you can safely re-enter if you've hit the limit."
      article={article}
      source="EU Commission — Schengen Borders Code (Regulation (EU) 2016/399)"
      sourceUrl="https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa_en"
      lastUpdated="2026-04-26"
      faqs={faqs}
    >
      <SchengenClient />
    </ToolLayout>
  );
}
