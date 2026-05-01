import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LastUpdated } from "@/components/common/LastUpdated";
import { buildMetadata } from "@/lib/seo";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Legal Disclaimer — GlobalPathway",
  description:
    "Important disclaimer: GlobalPathway is not a law firm and does not provide legal advice. Our tools are informational only.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <main>
      <div className="bg-amber-50 border-b border-[#d97706]/30 py-10">
        <Container narrow>
          <Breadcrumbs items={[{ label: "Disclaimer" }]} />
          <div className="flex items-start gap-3 mt-4">
            <AlertTriangle className="h-7 w-7 text-[#d97706] flex-shrink-0 mt-1" />
            <div>
              <h1 className="font-serif text-4xl font-bold text-[#0f1419]">Legal Disclaimer</h1>
              <p className="text-[#64748b] mt-2 text-lg">Please read this before relying on any information from GlobalPathway.</p>
            </div>
          </div>
        </Container>
      </div>

      <Container narrow className="py-12">

        {/* Big bold disclaimer box */}
        <div className="rounded-md border-2 border-[#d97706] bg-amber-50 p-6 mb-10">
          <p className="font-bold text-[#0f1419] text-base leading-relaxed">
            GlobalPathway is not a law firm and does not provide legal advice. All tools, calculators, and information on this site are provided for informational and educational purposes only. Nothing on this site constitutes legal advice, nor does use of this site create an attorney-client or any other professional relationship between you and GlobalPathway.
          </p>
          <p className="font-bold text-[#d97706] text-base leading-relaxed mt-4">
            Always verify immigration information with the official government source for your specific situation. For any immigration matter that could affect your legal status, visa eligibility, or right to remain in a country, consult a licensed immigration attorney.
          </p>
        </div>

        <div className="space-y-8 text-[#64748b] text-sm leading-relaxed">

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">Not Legal Advice</h2>
            <p>The tools, calculators, data, and written content on GlobalPathway are provided solely for general informational and educational purposes. They are not intended to be and should not be treated as legal advice. Immigration law is highly complex, varies significantly between jurisdictions, and changes frequently. The same set of facts can lead to very different outcomes depending on which country is involved, which visa category is applicable, your individual immigration history, and many other factors.</p>
            <p className="mt-2">No output from any GlobalPathway tool — including CRS score estimates, processing time references, visa eligibility assessments, or document checklists — constitutes a legal determination of any kind. These tools produce estimates and general guidance based on public rules. They do not and cannot account for every nuance of your individual case.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">No Attorney-Client Relationship</h2>
            <p>Using GlobalPathway does not create an attorney-client relationship, a consultant-client relationship, or any other professional relationship between you and GlobalPathway or any person associated with it. We are not your representatives, advisors, or advocates.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">Data Accuracy &amp; Currency</h2>
            <p>We make every effort to ensure the accuracy and currency of the information on this site by sourcing data from official government portals and reviewing it regularly. However, immigration rules, processing times, visa fees, and documentation requirements change frequently — sometimes without public notice. <strong className="text-[#0f1419]">We cannot guarantee that any information on this site is accurate, complete, or up to date at the time you access it.</strong></p>
            <p className="mt-2">Always verify the information you find here against the current official government source before taking any action. We display &ldquo;Last Updated&rdquo; dates on each tool page to help you assess the currency of the data.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">Official Sources</h2>
            <p>For authoritative information about immigration matters, consult the relevant official government source directly:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong className="text-[#0f1419]">US Immigration (USCIS):</strong> <a href="https://www.uscis.gov" target="_blank" rel="noopener noreferrer" className="text-[#0f2a47] underline">uscis.gov</a></li>
              <li><strong className="text-[#0f1419]">Canada Immigration (IRCC):</strong> <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer" className="text-[#0f2a47] underline">canada.ca/immigration</a></li>
              <li><strong className="text-[#0f1419]">UK Immigration:</strong> <a href="https://www.gov.uk/browse/visas-immigration" target="_blank" rel="noopener noreferrer" className="text-[#0f2a47] underline">gov.uk/visas-immigration</a></li>
              <li><strong className="text-[#0f1419]">EU/Schengen:</strong> <a href="https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa_en" target="_blank" rel="noopener noreferrer" className="text-[#0f2a47] underline">EU Home Affairs</a></li>
              <li><strong className="text-[#0f1419]">Australia Immigration:</strong> <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#0f2a47] underline">immi.homeaffairs.gov.au</a></li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">Consult a Licensed Professional</h2>
            <p>If you have any doubt about how immigration rules apply to your specific situation — or if you are making a significant decision (applying for a visa, preparing a petition, responding to an RFE, facing removal proceedings) — please consult a licensed immigration attorney or accredited representative in your jurisdiction. The consequences of immigration errors can be severe and long-lasting, including inadmissibility, visa denial, or removal from a country.</p>
            <p className="mt-2">In the United States, you can find licensed immigration attorneys through the <a href="https://www.aila.org/find-an-immigration-lawyer" target="_blank" rel="noopener noreferrer" className="text-[#0f2a47] underline">American Immigration Lawyers Association (AILA)</a>. In the UK, use the <a href="https://www.oisc.gov.uk/about_us/adviser-finder/" target="_blank" rel="noopener noreferrer" className="text-[#0f2a47] underline">OISC Adviser Finder</a>. In Canada, use the <a href="https://iccrc-crcic.ca/find-a-professional/" target="_blank" rel="noopener noreferrer" className="text-[#0f2a47] underline">ICCRC Professional Finder</a>.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">Limitation of Liability</h2>
            <p>GlobalPathway, its operators, contributors, and affiliates expressly disclaim all liability for any decisions made or actions taken in reliance on information from this site. We are not responsible for any adverse immigration outcome — including but not limited to visa denial, deportation, removal, or inadmissibility — that results from reliance on our tools or content.</p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
          <LastUpdated date="2026-04-26" />
        </div>
      </Container>
    </main>
  );
}
