import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LastUpdated } from "@/components/common/LastUpdated";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — GlobalPathway",
  description: "GlobalPathway's privacy policy. How we collect, use, and protect your information under GDPR and CCPA.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container narrow>
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-4">Privacy Policy</h1>
          <p className="text-[#64748b] mt-2">Last reviewed: April 26, 2026</p>
        </Container>
      </div>

      <Container narrow className="py-12">
        <div className="space-y-8 text-[#64748b] text-sm leading-relaxed">

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">1. Introduction</h2>
            <p>GlobalPathway (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you visit globalpathway.app (the &ldquo;Site&rdquo;). We operate in compliance with the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other applicable data protection laws.</p>
            <p className="mt-2">By using the Site, you agree to the collection and use of information in accordance with this policy. If you do not agree, please stop using the Site.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">2. Information We Collect</h2>
            <h3 className="font-semibold text-[#0f1419] text-sm mb-2">2.1 Information You Enter Into Tools</h3>
            <p>Our immigration tools (calculators, trackers, checklists) run entirely in your browser. <strong className="text-[#0f1419]">We do not transmit, store, or process any personal information you enter into these tools on our servers.</strong> All calculations are performed locally on your device. This includes information such as your nationality, travel dates, language test scores, work history, or any other inputs you provide.</p>

            <h3 className="font-semibold text-[#0f1419] text-sm mb-2 mt-4">2.2 Information Collected Automatically</h3>
            <p>When you visit the Site, our servers and third-party analytics services may automatically collect certain information, including:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>IP address (anonymized where required by law)</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring URL</li>
              <li>Device type and operating system</li>
              <li>Country or region (derived from anonymized IP)</li>
            </ul>
            <p className="mt-2">This information is used in aggregate form to understand how visitors use the Site and to improve our tools.</p>

            <h3 className="font-semibold text-[#0f1419] text-sm mb-2 mt-4">2.3 Information You Provide Voluntarily</h3>
            <p>If you contact us via the contact form or by email, we collect the information you provide in that communication (name, email address, and message content) solely for the purpose of responding to your enquiry.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">3. Cookies</h2>
            <p>We use cookies and similar technologies. You can control cookie settings through the consent banner that appears on your first visit. We use the following types of cookies:</p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-xs border border-[#e2e8f0] rounded-md overflow-hidden">
                <thead className="bg-[#f7f9fc]">
                  <tr>
                    <th className="text-left px-4 py-2 font-semibold text-[#0f1419]">Cookie Type</th>
                    <th className="text-left px-4 py-2 font-semibold text-[#0f1419]">Purpose</th>
                    <th className="text-left px-4 py-2 font-semibold text-[#0f1419]">Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2e8f0]">
                  <tr><td className="px-4 py-2">Functional</td><td className="px-4 py-2">Cookie consent preference, tool progress (localStorage)</td><td className="px-4 py-2">Yes</td></tr>
                  <tr><td className="px-4 py-2">Analytics</td><td className="px-4 py-2">Aggregate usage stats (e.g., Google Analytics)</td><td className="px-4 py-2">No (consent required)</td></tr>
                  <tr><td className="px-4 py-2">Advertising</td><td className="px-4 py-2">Google AdSense — served after approval</td><td className="px-4 py-2">No (consent required)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">4. Google AdSense</h2>
            <p>This site uses Google AdSense to display advertisements. AdSense uses cookies to serve ads based on your prior visits to this site and other sites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" className="text-[#0f2a47] underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>
            <p className="mt-2">AdSense cookies may track your browsing behavior across websites. This tracking only occurs if you have accepted our cookie consent banner. If you decline cookies, we will not activate third-party advertising cookies.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">5. Third-Party Services</h2>
            <p>We use the following third-party services that may collect information about you:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong className="text-[#0f1419]">Google Analytics</strong> — anonymized usage analytics. <a href="https://policies.google.com/privacy" className="text-[#0f2a47] underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</li>
              <li><strong className="text-[#0f1419]">Google AdSense</strong> — advertising. <a href="https://policies.google.com/technologies/ads" className="text-[#0f2a47] underline" target="_blank" rel="noopener noreferrer">Google Ads Policy</a>.</li>
              <li><strong className="text-[#0f1419]">Vercel</strong> — hosting and infrastructure. <a href="https://vercel.com/legal/privacy-policy" className="text-[#0f2a47] underline" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.</li>
            </ul>
            <p className="mt-2">We do not sell your personal information to any third party.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">6. Your Rights (GDPR &amp; CCPA)</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong className="text-[#0f1419]">Right of Access:</strong> Request a copy of personal data we hold about you.</li>
              <li><strong className="text-[#0f1419]">Right of Rectification:</strong> Request correction of inaccurate data.</li>
              <li><strong className="text-[#0f1419]">Right of Erasure:</strong> Request deletion of your personal data.</li>
              <li><strong className="text-[#0f1419]">Right to Object:</strong> Object to processing of your data for direct marketing or analytics.</li>
              <li><strong className="text-[#0f1419]">Right to Data Portability:</strong> Request your data in a portable format.</li>
              <li><strong className="text-[#0f1419]">CCPA Right to Know / Delete:</strong> California residents may request disclosure or deletion of personal information we have collected.</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, contact us at <a href="mailto:privacy@globalpathway.app" className="text-[#0f2a47] underline">privacy@globalpathway.app</a>. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">7. Data Retention</h2>
            <p>We retain contact form submissions for up to 12 months. Analytics data is retained for 26 months in aggregate, anonymized form. We do not retain any personal information entered into our tools, as it is never transmitted to our servers.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">8. Children&apos;s Privacy</h2>
            <p>The Site is not directed to children under the age of 13 (or 16 under GDPR). We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately and we will delete it.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last reviewed&rdquo; date at the top of this page. Continued use of the Site after any changes constitutes your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-3">10. Contact</h2>
            <p>For privacy-related inquiries, contact us at <a href="mailto:privacy@globalpathway.app" className="text-[#0f2a47] underline">privacy@globalpathway.app</a> or via our <a href="/contact" className="text-[#0f2a47] underline">Contact page</a>.</p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
          <LastUpdated date="2026-04-26" />
        </div>
      </Container>
    </main>
  );
}
