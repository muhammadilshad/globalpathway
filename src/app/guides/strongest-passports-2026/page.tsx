import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LastUpdated } from "@/components/common/LastUpdated";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "World's Strongest Passports 2026 — Full Rankings | GlobalPathway",
  description:
    "Which passport opens the most doors in 2026? Full Henley Passport Index rankings with analysis of what drives passport power.",
  path: "/guides/strongest-passports-2026",
});

export default function StrongestPassports() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container narrow>
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Strongest Passports 2026" }]} />
          <span className="text-xs font-semibold text-[#0a9e5e] uppercase tracking-wider mt-4 block">Travel</span>
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-2 leading-tight">
            The World&apos;s Strongest Passports in 2026 — Full Rankings
          </h1>
          <p className="text-[#64748b] mt-3 text-lg">9 min read · Last updated April 26, 2026</p>
        </Container>
      </div>

      <Container narrow className="py-12">
        <article className="space-y-6 text-[#64748b] text-sm leading-relaxed">
          <p className="text-base">
            Passport power is one of the starkest inequalities in the modern world. The holder of a Japanese or Singaporean passport can visit 193 countries without applying for a visa in advance. The holder of an Afghan or Yemeni passport may need a visa for almost every destination on Earth. The gap between the strongest and weakest passports has never been wider.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">How passport rankings work</h2>
          <p>
            The most widely cited passport ranking is the <strong>Henley Passport Index</strong>, published quarterly by Henley &amp; Partners. It ranks passports by the number of destinations their holders can access without a prior visa — counting visa-free access, visa on arrival, and electronic travel authorization (eTA) as &ldquo;open&rdquo; access.
          </p>
          <p>
            The index is updated in real time as bilateral visa agreements change. A single diplomatic agreement between two countries can move a passport several places on the index overnight.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">Top 10 strongest passports 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-[#e2e8f0] rounded-md overflow-hidden">
              <thead className="bg-[#f7f9fc]">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-[#0f1419]">Rank</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0f1419]">Countries</th>
                  <th className="text-right px-4 py-3 font-semibold text-[#0f1419]">Visa-Free Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {[
                  { rank: 1, countries: "🇯🇵 Japan, 🇸🇬 Singapore", access: 193 },
                  { rank: 2, countries: "🇫🇷 France, 🇩🇪 Germany, 🇮🇹 Italy, 🇪🇸 Spain, 🇫🇮 Finland, 🇰🇷 South Korea", access: 192 },
                  { rank: 3, countries: "🇦🇹 Austria, 🇩🇰 Denmark, 🇮🇪 Ireland, 🇱🇺 Luxembourg, 🇳🇱 Netherlands, 🇸🇪 Sweden", access: 191 },
                  { rank: 4, countries: "🇧🇪 Belgium, 🇳🇴 Norway, 🇵🇹 Portugal, 🇨🇭 Switzerland, 🇬🇧 United Kingdom", access: 190 },
                  { rank: 5, countries: "🇨🇿 Czech Republic, 🇬🇷 Greece, 🇲🇹 Malta", access: 189 },
                  { rank: 6, countries: "🇵🇱 Poland, 🇭🇺 Hungary, 🇱🇹 Lithuania, 🇸🇰 Slovakia", access: 188 },
                  { rank: 7, countries: "🇺🇸 United States, 🇨🇦 Canada, 🇱🇻 Latvia, 🇪🇪 Estonia", access: 186 },
                  { rank: 8, countries: "🇦🇺 Australia, 🇳🇿 New Zealand", access: 185 },
                  { rank: 11, countries: "🇦🇪 UAE", access: 180 },
                  { rank: 15, countries: "🇲🇾 Malaysia, 🇨🇱 Chile", access: 175 },
                ].map(({ rank, countries, access }) => (
                  <tr key={rank}>
                    <td className="px-4 py-3 font-mono font-bold text-[#0f2a47]">#{rank}</td>
                    <td className="px-4 py-3">{countries}</td>
                    <td className="px-4 py-3 text-right font-mono font-semibold text-[#0a9e5e]">{access}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">What drives passport power?</h2>
          <p>
            Passport strength is not random — it correlates strongly with a country&apos;s diplomatic relationships, economic development, and geopolitical standing. Three factors matter most:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Bilateral visa agreements:</strong> When two countries establish visa-free travel between them, both passports get stronger. These agreements are typically negotiated based on factors like migration risk, reciprocity, and trade relationships.</li>
            <li><strong>EU membership:</strong> EU citizens benefit from freedom of movement within the EU plus strong bilateral agreements the bloc has negotiated collectively with third countries. This is why most EU passports cluster near the top of the rankings.</li>
            <li><strong>Economic and political stability:</strong> Countries that are seen as stable and low migration-risk typically have stronger passports. High rates of visa overstays or asylum seekers from a given country often lead other nations to impose visa requirements.</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">The UAE&apos;s remarkable rise</h2>
          <p>
            One of the most dramatic passport power stories of the last decade is the UAE. In 2010, the UAE passport ranked in the 60s. By 2026, it ranks 11th — giving its holders visa-free access to 180 countries. This was achieved through an aggressive diplomatic campaign to negotiate bilateral visa-free agreements, combined with the UAE&apos;s status as a major transit hub and economic centre.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#0f1419]">The weakest passports</h2>
          <p>
            At the other end of the spectrum, passports from Afghanistan, Syria, Iraq, Yemen, Pakistan, and Somalia offer access to fewer than 40 countries without a prior visa. Citizens of these countries face significant friction in travelling internationally — a situation that reflects geopolitical instability, migration concerns, and diplomatic isolation rather than the merit or intentions of individual travellers.
          </p>

          <div className="mt-8 p-5 bg-[#f7f9fc] rounded-md border border-[#e2e8f0]">
            <p className="font-semibold text-[#0f1419] text-sm mb-2">Check your passport&apos;s visa-free access</p>
            <p className="text-xs text-[#64748b] mb-3">Select your passport to see a full list of destinations with access type and max stay.</p>
            <Link
              href="/tools/visa-free-countries"
              className="inline-flex items-center gap-2 bg-[#0f2a47] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#0f2a47]/90 transition-colors"
            >
              Open Passport Lookup →
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
