import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { VisaFreeClient } from "./VisaFreeClient";

export const metadata: Metadata = buildMetadata({
  title: "Visa-Free Countries by Passport — Free 2026 Lookup | GlobalPathway",
  description:
    "See which countries your passport can enter visa-free, on arrival, or with an eTA. Instant lookup for 100+ passports. Updated 2026.",
  path: "/tools/visa-free-countries",
});

const faqs = [
  {
    question: "What does 'visa-free' mean?",
    answer:
      "Visa-free means citizens of that passport can enter a country without obtaining a visa in advance. You simply show your passport at the border. Most visa-free arrangements allow stays of 30–90 days and do not permit you to work.",
  },
  {
    question: "What's the difference between visa-on-arrival and an eTA?",
    answer:
      "Visa-on-arrival means you apply and pay for a visa at the port of entry (airport or border crossing). An Electronic Travel Authorization (eTA) is a pre-travel online authorization — typically cheaper and faster — required before boarding. Both are different from a traditional visa application at an embassy.",
  },
  {
    question: "Can I use this tool to plan actual travel?",
    answer:
      "Yes, as a starting point — but always verify against the official government source before booking. Rules change frequently, and individual circumstances (criminal history, prior overstays, etc.) can affect your eligibility even for 'visa-free' entry.",
  },
  {
    question: "Why doesn't my destination show up?",
    answer:
      "This tool covers the most common passport × destination combinations. We add more destinations regularly. For less common routes, check the official source linked below.",
  },
  {
    question: "What does 'max stay' mean?",
    answer:
      "Max stay is the maximum number of continuous days you're typically permitted in the destination country per visit. For Schengen countries, the limit applies across the entire Schengen Area (90 days in any 180-day period) — use our Schengen Calculator for those trips.",
  },
];

const article = (
  <>
    <p>
      Your passport is one of the most powerful documents you own — and depending on where you were born, it can open or close doors to over 190 countries around the world. The <strong>Henley Passport Index</strong>, which ranks passports by how many destinations their holders can access without a prior visa, shows a dramatic gap: the strongest passports (Japan, Singapore, Germany) unlock 190+ countries visa-free, while the weakest open fewer than 30.
    </p>
    <p>
      But &ldquo;visa-free&rdquo; isn&apos;t the only type of access. There are four main categories you&apos;ll encounter:
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li><strong>Visa-free</strong> — you land, show your passport, you&apos;re in. No pre-approval needed.</li>
      <li><strong>Visa on arrival (VOA)</strong> — you get a visa stamp at the airport, usually for a small fee. You don&apos;t apply in advance, but you do pay and fill out a form on arrival.</li>
      <li><strong>eTA / ESTA</strong> — an Electronic Travel Authorization. Required before you board your flight, completed online in minutes, usually valid for multiple trips. Canada, Australia, the US (ESTA), and New Zealand all use versions of this system.</li>
      <li><strong>Visa required</strong> — you must apply at an embassy or consulate before you travel, often weeks in advance, with supporting documents and an interview.</li>
    </ul>
    <p>
      The maximum stay column is equally important. Visa-free access to the Schengen Area, for example, is limited to 90 days in any 180-day rolling period — a rule that catches many long-term travellers off guard. Japan allows most Western passport holders 90 days, but Thailand offers only 30 days visa-free for many nationalities. Always check the max stay and whether it resets on re-entry before you plan a long trip.
    </p>
    <p>
      Use this tool as your starting point. Then verify the exact current rules with the official embassy or government portal for your destination before booking — visa policies change, sometimes with very little notice.
    </p>
  </>
);

export default function VisaFreeCountriesPage() {
  return (
    <ToolLayout
      toolId="visa-free-countries"
      title="Visa-Free Countries by Passport"
      intro="Select your passport to instantly see which countries you can visit without a visa, which offer visa-on-arrival access, and which require advance applications. Includes max stay durations for each destination."
      article={article}
      source="Henley Passport Index / Official Government Portals"
      sourceUrl="https://www.henleyglobal.com/passport-index"
      lastUpdated="2026-04-26"
      faqs={faqs}
    >
      <VisaFreeClient />
    </ToolLayout>
  );
}
