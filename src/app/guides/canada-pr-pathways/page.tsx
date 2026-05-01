import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LastUpdated } from "@/components/common/LastUpdated";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "5 Ways to Get Canadian Permanent Residence in 2026 | GlobalPathway",
  description:
    "A clear overview of the main pathways to Canadian permanent residence — Express Entry, PNP, family sponsorship, the Atlantic Immigration Program, and more.",
  path: "/guides/canada-pr-pathways",
});

export default function CanadaPRPathways() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container narrow>
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Canada PR Pathways 2026" }]} />
          <span className="text-xs font-semibold text-[#0a9e5e] uppercase tracking-wider mt-4 block">Canada Immigration</span>
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-2 leading-tight">
            5 Ways to Get Canadian Permanent Residence in 2026
          </h1>
          <p className="text-[#64748b] mt-3 text-lg">12 min read · Last updated April 26, 2026</p>
        </Container>
      </div>

      <Container narrow className="py-12">
        <article className="space-y-6 text-[#64748b] text-sm leading-relaxed">
          <p className="text-base">
            Canada has over 100 immigration programs, which makes the system both comprehensive and confusing. Most people who successfully get Canadian permanent residence (PR) do so through one of five main pathways. Here&apos;s a clear breakdown of each — who it&apos;s for, what the requirements are, and how long it realistically takes.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">1. Express Entry (Federal Skilled Programs)</h2>
          <p>
            Express Entry is the federal government&apos;s points-based system for skilled workers. It manages three programs: the Federal Skilled Worker Program (FSWP), the Federal Skilled Trades Program (FSTP), and the Canadian Experience Class (CEC). You create a profile, get scored using the Comprehensive Ranking System (CRS), and wait for IRCC to invite you to apply.
          </p>
          <p><strong>Best for:</strong> Skilled workers with post-secondary education, strong English or French, and professional work experience.</p>
          <p><strong>Typical timeline:</strong> 6 months from ITA to PR. But getting the ITA can take months or years depending on your CRS score.</p>
          <p><strong>Key requirements:</strong> Meet minimum criteria for one of the three programs; language test results (IELTS or CELPIP for English, TEF for French); educational credential assessment (ECA) if educated outside Canada.</p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">2. Provincial Nominee Program (PNP)</h2>
          <p>
            Each Canadian province and territory (except Quebec and Nunavut) runs its own immigration streams targeting workers in specific occupations, industries, or situations. A provincial nomination adds 600 points to your Express Entry CRS score (for enhanced streams) or gives you a direct path to PR outside Express Entry (for base streams).
          </p>
          <p><strong>Best for:</strong> Candidates with lower Express Entry CRS scores; workers in occupations that specific provinces are targeting; international graduates from provincial universities; people with a job offer in a specific province.</p>
          <p><strong>Typical timeline:</strong> 12–24 months for base streams; much faster with enhanced PNP + Express Entry.</p>
          <p><strong>Notable streams:</strong> Ontario Immigrant Nominee Program (OINP), BC Provincial Nominee Program (BC PNP), Alberta Advantage Immigration Program (AAIP), Saskatchewan Immigrant Nominee Program (SINP).</p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">3. Family Sponsorship</h2>
          <p>
            Canadian citizens and permanent residents can sponsor certain family members for PR. The most common streams are spousal/partner sponsorship, dependent children, and parents/grandparents.
          </p>
          <p><strong>Best for:</strong> Spouses, common-law partners, or dependent children of Canadian citizens or PRs. Also for parents and grandparents (through the Parents and Grandparents Program, which has a lottery intake process).</p>
          <p><strong>Typical timeline:</strong> Spousal sponsorship from inside Canada (inland): 12 months. Spousal sponsorship from outside Canada (outland): 12–18 months. Parents and grandparents: 20–24 months after invitation to apply.</p>
          <p><strong>Key requirements for sponsors:</strong> Must meet income thresholds (LICO — Low Income Cut-Off). Must sign an undertaking to financially support the sponsored person for 3 years (spouse) or 20 years (parents/grandparents).</p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">4. Atlantic Immigration Program (AIP)</h2>
          <p>
            The Atlantic Immigration Program is a pathway specifically for the four Atlantic provinces: Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador. It was created to address severe labour shortages in the region and has more flexible requirements than Express Entry — including a lower language requirement and no points-based competition.
          </p>
          <p><strong>Best for:</strong> Workers with a job offer from a designated employer in an Atlantic province. International graduates from Atlantic institutions.</p>
          <p><strong>Typical timeline:</strong> 12–18 months from application to PR.</p>
          <p><strong>Key advantage:</strong> No CRS score required. If you have a qualifying job offer and meet the requirements, you can apply directly without competing in a points-based pool.</p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">5. Rural and Northern Immigration Pilot (RNIP)</h2>
          <p>
            The RNIP is designed to spread immigration more evenly across Canada by encouraging newcomers to settle in smaller, rural communities. Participating communities include towns like North Bay (Ontario), Sault Ste. Marie, Brandon (Manitoba), and Vernon (British Columbia), among others.
          </p>
          <p><strong>Best for:</strong> Workers with a job offer from a participating community&apos;s recommended employer. Those willing to live outside major cities.</p>
          <p><strong>Typical timeline:</strong> 12–18 months.</p>
          <p><strong>Key note:</strong> Community recommendation is required. You must demonstrate genuine intent to settle in the recommending community — this is assessed during the application.</p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">How to choose the right pathway</h2>
          <p>
            The right pathway depends on your specific situation: your work history, language scores, education, whether you have family in Canada, and which province might be most interested in your occupation. Most immigration consultants recommend a parallel strategy: create an Express Entry profile immediately, research PNP streams simultaneously, and explore the Atlantic or Rural pilots if you&apos;re open to smaller communities.
          </p>
          <p>
            A licensed immigration consultant (RCIC) or immigration lawyer can map out your specific situation across multiple pathways — the initial consultation is often worth the cost given how much is at stake.
          </p>

          <div className="mt-8 p-5 bg-[#f7f9fc] rounded-md border border-[#e2e8f0]">
            <p className="font-semibold text-[#0f1419] text-sm mb-2">Calculate your Express Entry CRS score</p>
            <p className="text-xs text-[#64748b] mb-3">See your estimated score and compare it against recent draw cutoffs to gauge your Express Entry competitiveness.</p>
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
