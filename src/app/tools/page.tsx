import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolCard } from "@/components/tools/ToolCard";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { tools } from "@/data/tools-registry";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "All Immigration Tools — Free Visa & Citizenship Calculators 2026",
  description:
    "Browse all 7 free immigration tools: visa-free passport checker, Schengen calculator, USCIS processing times, CRS score calculator, and more.",
  path: "/tools",
});

const categories = [...new Set(tools.map((t) => t.category))];

export default function ToolsPage() {
  return (
    <main>
      <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-10">
        <Container>
          <Breadcrumbs items={[{ label: "Tools" }]} />
          <h1 className="font-serif text-4xl font-bold text-[#0f1419] mt-4">All Immigration Tools</h1>
          <p className="text-[#64748b] mt-2 text-lg max-w-xl">
            Free, browser-based calculators and trackers for every stage of your immigration journey.
          </p>
        </Container>
      </div>

      <Container className="py-12">
        {categories.map((cat) => (
          <div key={cat} className="mb-10">
            <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-4 border-b border-[#e2e8f0] pb-2">
              {cat}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools
                .filter((t) => t.category === cat)
                .map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
          </div>
        ))}
      </Container>
    </main>
  );
}
