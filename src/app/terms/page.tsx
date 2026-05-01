import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LastUpdated } from "@/components/common/LastUpdated";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service — GlobalPathway",
  description: "GlobalPathway Terms of Service. Rules for using our immigration tools and website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container narrow>
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-4">Terms of Service</h1>
          <p className="text-[#64748b] mt-2">Last updated: April 26, 2026</p>
        </Container>
      </div>

      <Container narrow className="py-12">
        <div className="space-y-8 text-[#64748b] text-sm leading-relaxed">

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using GlobalPathway at globalpathway.app (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use the Site.</p>
            <p className="mt-2">These Terms apply to all visitors, users, and others who access the Site. We reserve the right to update these Terms at any time. Continued use of the Site after changes constitutes acceptance of the new Terms.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">2. Description of Service</h2>
            <p>GlobalPathway provides free, informational tools related to immigration processes worldwide, including but not limited to: visa-free country lookups, Schengen day calculators, USCIS processing time references, Express Entry CRS score calculators, visa cost estimates, and document checklists.</p>
            <p className="mt-2">All tools are provided &ldquo;as is&rdquo; for informational purposes only. They do not constitute legal advice and do not create any professional relationship between you and GlobalPathway. See our <a href="/disclaimer" className="text-[#0f2a47] underline">Disclaimer</a> for full details.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">3. Permitted Use</h2>
            <p>You may use the Site for lawful, personal, or professional informational purposes. You may:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Use any tool on the Site without restriction</li>
              <li>Share links to our tools and pages</li>
              <li>Reference our content with attribution</li>
              <li>Use our tools as part of professional immigration practice (with appropriate client disclosures)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">4. Prohibited Use</h2>
            <p>You may not:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Scrape, copy, or reproduce our content, data, or tools without prior written permission</li>
              <li>Use the Site for any unlawful purpose or in violation of any applicable regulation</li>
              <li>Attempt to interfere with or disrupt the Site or servers</li>
              <li>Use automated tools (bots, crawlers) to access the Site at a rate that impairs performance for other users</li>
              <li>Misrepresent output from our tools as official government determinations or legal advice</li>
              <li>Resell or repackage our tools or data without attribution</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">5. Intellectual Property</h2>
            <p>All content on the Site — including text, design, code, images, and tool logic — is the intellectual property of GlobalPathway unless otherwise noted. Government data (such as USCIS processing times or IRCC scoring tables) reproduced on this site is in the public domain as produced by the respective government and is attributed accordingly.</p>
            <p className="mt-2">You may not reproduce, modify, distribute, or create derivative works from our proprietary content without written permission.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">6. Disclaimer of Warranties</h2>
            <p>THE SITE AND ALL TOOLS ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            <p className="mt-2">We do not warrant that the Site will be uninterrupted, error-free, or that any specific results will be obtained from use of the tools. Immigration rules change frequently; we cannot guarantee that information is current at the time of your use.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">7. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GLOBALPATHWAY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DENIAL OF VISA, DEPORTATION, OR ANY OTHER IMMIGRATION OUTCOME — ARISING FROM YOUR USE OF OR RELIANCE ON THE SITE OR ITS TOOLS.</p>
            <p className="mt-2">Our total liability for any claim arising from use of the Site shall not exceed the amount you paid to access the Site, which is zero.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">8. Third-Party Links</h2>
            <p>The Site contains links to official government websites and other third-party sources. These links are provided for convenience and informational purposes. We are not responsible for the content, accuracy, or privacy practices of any third-party site, including official government portals.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. By using this Site, you agree that any disputes will be resolved through good-faith negotiation. For formal legal matters, contact us at legal@globalpathway.app to establish jurisdiction by mutual agreement.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">10. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:legal@globalpathway.app" className="text-[#0f2a47] underline">legal@globalpathway.app</a>.</p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
          <LastUpdated date="2026-04-26" />
        </div>
      </Container>
    </main>
  );
}
