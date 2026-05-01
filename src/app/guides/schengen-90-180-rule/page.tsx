import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LastUpdated } from "@/components/common/LastUpdated";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "The Schengen 90/180 Day Rule: Complete Guide 2026 | GlobalPathway",
  description:
    "The Schengen 90/180-day rule explained clearly. How the rolling window works, common mistakes, and how to calculate your remaining days.",
  path: "/guides/schengen-90-180-rule",
});

export default function SchengenGuide() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container narrow>
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Schengen 90/180 Rule" }]} />
          <span className="text-xs font-semibold text-[#0a9e5e] uppercase tracking-wider mt-4 block">Europe Travel</span>
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-2 leading-tight">
            The Schengen 90/180 Day Rule: Complete Guide 2026
          </h1>
          <p className="text-[#64748b] mt-3 text-lg">8 min read · Last updated April 26, 2026</p>
        </Container>
      </div>

      <Container narrow className="py-12">
        <article className="space-y-6 text-[#64748b] text-sm leading-relaxed">
          <p className="text-base">
            The Schengen 90/180-day rule is the regulation that governs how long non-EU visitors can stay in Europe without a long-stay visa. It sounds straightforward — 90 days in 180 — but the &ldquo;rolling window&rdquo; mechanics trip up even experienced travellers, and the consequences of getting it wrong are serious.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">What the rule actually says</h2>
          <p>
            Under the Schengen Borders Code, non-EU nationals who are eligible for visa-free access may not spend more than <strong>90 days in any 180-day period</strong> in the Schengen Area. The 180-day period is not a fixed calendar window — it is a <em>rolling</em> window that moves forward one day at a time.
          </p>
          <p>
            This means border officers do not ask &ldquo;when did you enter this year?&rdquo; They ask: &ldquo;How many days have you spent in the Schengen Area in the 180 days leading up to today?&rdquo; Any day you were physically present in any Schengen country within that window counts toward your 90-day total.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">Which countries are in the Schengen Area?</h2>
          <p>As of 2026, the Schengen Area includes 29 countries:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>EU members:</strong> Austria, Belgium, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden</li>
            <li><strong>Non-EU members:</strong> Iceland, Liechtenstein, Norway, Switzerland</li>
          </ul>
          <p>
            Notably <strong>not</strong> in Schengen: the UK, Ireland, Cyprus, Bulgaria, and Romania (Romania joined in 2024 for air/sea but land borders are still being integrated). Days in these countries do not count toward your 90 Schengen days.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">How the rolling window works — with an example</h2>
          <p>
            Imagine you entered France on January 1 and stayed for 45 days, leaving on February 14. You then returned to Germany on May 1. How many Schengen days have you used?
          </p>
          <p>
            On May 1, the relevant 180-day window looks back to November 2 of the previous year. Your January 1–February 14 stay (45 days) falls within that window. So you have <strong>45 days used</strong>, 45 remaining.
          </p>
          <p>
            Now imagine you stayed in Germany until June 30 (another 61 days). You&apos;ve now used 106 days total — but wait. By June 30, the rolling window has moved forward. January 1–14 (the first 14 days of your January trip) have now dropped off the back of the 180-day window. So your actual count on June 30 is 92 days — 2 days over the limit. You would have needed to leave by June 28.
          </p>
          <p>
            This is why a calculator is essential. Mental arithmetic on rolling windows is unreliable.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">Common mistakes</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong>Thinking short exits &ldquo;reset&rdquo; the counter.</strong> They don&apos;t. A weekend trip to the UK or Serbia pauses your count for those days, but the days you already spent in Schengen remain in the window.
            </li>
            <li>
              <strong>Counting from entry date instead of rolling back 180 days.</strong> The rule is not &ldquo;90 days per trip&rdquo; or &ldquo;90 days per year.&rdquo; It is 90 days in any rolling 180-day period.
            </li>
            <li>
              <strong>Forgetting transit days.</strong> If you spend a night in a Schengen country during a layover and pass through immigration, that day counts.
            </li>
            <li>
              <strong>Assuming different countries have separate counters.</strong> All 29 Schengen countries share the same counter. 30 days in France + 30 days in Germany + 31 days in Spain = 91 days used, regardless of which country you were in.
            </li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">What happens if you overstay?</h2>
          <p>
            Overstaying the Schengen limit is a violation of EU law. Potential consequences include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Being refused entry on your next visit</li>
            <li>Deportation at your own expense</li>
            <li>A temporary or permanent ban on re-entry to the Schengen Area</li>
            <li>Fines (amount varies by country)</li>
            <li>Being flagged in the Schengen Information System (SIS)</li>
          </ul>
          <p>
            Border officers have access to the Entry/Exit System (EES), which records all entries and exits. Claiming you lost track of your days is not a defence.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">If you need to stay longer</h2>
          <p>
            If 90 days isn&apos;t enough, you have options — but they require advance planning:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>National long-stay visa (Type D):</strong> Issued by individual Schengen countries for stays over 90 days. Each country has its own requirements — freelancer visas, digital nomad visas, student visas, and retirement visas are common options depending on the country.</li>
            <li><strong>Residency permit:</strong> If you plan to live in Europe long-term, residency is the right path. Many countries have started offering remote work residence permits.</li>
          </ul>

          <div className="mt-8 p-5 bg-[#f7f9fc] rounded-md border border-[#e2e8f0]">
            <p className="font-semibold text-[#0f1419] text-sm mb-2">Use our free calculator</p>
            <p className="text-xs text-[#64748b] mb-3">Add your past and planned trips to get an exact day count and next eligible entry date.</p>
            <Link
              href="/tools/schengen-calculator"
              className="inline-flex items-center gap-2 bg-[#0f2a47] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#0f2a47]/90 transition-colors"
            >
              Open Schengen Calculator →
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
