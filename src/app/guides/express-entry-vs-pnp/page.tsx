import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LastUpdated } from "@/components/common/LastUpdated";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Express Entry vs Provincial Nominee Program (PNP) 2026 | GlobalPathway",
  description:
    "Compare Canada's two main pathways to permanent residence — Express Entry and the Provincial Nominee Program. Which is right for your situation?",
  path: "/guides/express-entry-vs-pnp",
});

export default function ExpressEntryVsPNP() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container narrow>
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Express Entry vs PNP" }]} />
          <span className="text-xs font-semibold text-[#0a9e5e] uppercase tracking-wider mt-4 block">Canada Immigration</span>
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-2 leading-tight">
            Express Entry vs Provincial Nominee Program: Which is Right for You?
          </h1>
          <p className="text-[#64748b] mt-3 text-lg">10 min read · Last updated April 26, 2026</p>
        </Container>
      </div>

      <Container narrow className="py-12">
        <article className="space-y-6 text-[#64748b] text-sm leading-relaxed">
          <p className="text-base">
            Canada offers over 100 immigration pathways, but for most skilled workers, the decision comes down to two: <strong>Express Entry</strong> and the <strong>Provincial Nominee Program (PNP)</strong>. They are not mutually exclusive — in fact, a provincial nomination is one of the most powerful ways to boost your Express Entry score. But they work very differently, and choosing the right approach for your situation can make the difference between getting permanent residence in 6 months or waiting 3 years.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">What is Express Entry?</h2>
          <p>
            Express Entry is Canada&apos;s federal digital system for managing applications for three programs: the Federal Skilled Worker Program (FSWP), the Federal Skilled Trades Program (FSTP), and the Canadian Experience Class (CEC). You create a profile, receive a Comprehensive Ranking System (CRS) score, and enter a pool of candidates. IRCC holds draws from this pool every two weeks, inviting the highest-scoring candidates to apply for permanent residence.
          </p>
          <p>
            The strength of Express Entry is speed — once you receive an Invitation to Apply (ITA), you have 60 days to submit a complete application, and IRCC targets a 6-month processing time. The weakness is competitiveness: CRS cutoffs have ranged from 470 to 550+ in recent years, meaning many qualified candidates wait months or years in the pool without receiving an invitation.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">What is the Provincial Nominee Program?</h2>
          <p>
            The PNP allows individual Canadian provinces and territories to nominate immigrants who meet their specific labour market needs. Each province runs its own streams with its own eligibility criteria — some target specific occupations, others target international graduates from local universities, and others focus on entrepreneurs or investors.
          </p>
          <p>
            There are two ways PNP nominations work with Express Entry:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Enhanced nomination (linked to Express Entry):</strong> If a province nominates you through an Express Entry-linked stream, you receive <strong>600 additional CRS points</strong> — which virtually guarantees an ITA in the next draw. This is by far the fastest path to Canadian PR for most applicants.</li>
            <li><strong>Base nomination (outside Express Entry):</strong> Some PNP streams are not linked to Express Entry. In this case, you apply directly to the federal government through a paper-based process. It&apos;s slower (12–20 months), but available to candidates who don&apos;t qualify for Express Entry programs.</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">Which should you pursue?</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-[#e2e8f0] rounded-md overflow-hidden">
              <thead className="bg-[#f7f9fc]">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-[#0f1419]">Your situation</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0f1419]">Best approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                <tr><td className="px-4 py-3">CRS score above 470</td><td className="px-4 py-3">Express Entry alone — you may receive an ITA without PNP</td></tr>
                <tr><td className="px-4 py-3">CRS score below 440</td><td className="px-4 py-3">Target a PNP stream for the 600-point boost</td></tr>
                <tr><td className="px-4 py-3">Work experience in a specific trade or tech role</td><td className="px-4 py-3">Research province-specific tech or trade streams (BC PNP Tech, Ontario OINP)</td></tr>
                <tr><td className="px-4 py-3">Recently graduated from a Canadian university</td><td className="px-4 py-3">CEC + check your province&apos;s international graduate stream</td></tr>
                <tr><td className="px-4 py-3">Job offer in a rural area or Atlantic province</td><td className="px-4 py-3">Atlantic Immigration Program or Rural and Northern Immigration Pilot</td></tr>
                <tr><td className="px-4 py-3">Strong French language skills</td><td className="px-4 py-3">Express Entry with French bonus points (+25 to +50 CRS)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">The most important thing to know</h2>
          <p>
            Express Entry and PNP are not either/or choices — the optimal strategy for most candidates is to <strong>create an Express Entry profile first</strong> (which puts you in the pool), then simultaneously research PNP streams that match your profile. If you receive a provincial nomination, your CRS score gets the 600-point boost and you&apos;ll almost certainly receive an ITA in the next draw. If a high-CRS Express Entry draw happens before that, even better.
          </p>

          <div className="mt-8 p-5 bg-[#f7f9fc] rounded-md border border-[#e2e8f0]">
            <p className="font-semibold text-[#0f1419] text-sm mb-2">Calculate your CRS score</p>
            <p className="text-xs text-[#64748b] mb-3">See your estimated score and compare it against recent draw cutoffs.</p>
            <Link
              href="/tools/express-entry-crs"
              className="inline-flex items-center gap-2 bg-[#0f2a47] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#0f2a47]/90 transition-colors"
            >
              Open CRS Calculator →
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
