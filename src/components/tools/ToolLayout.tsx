import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Disclaimer } from "@/components/common/Disclaimer";
import { SourceCitation } from "@/components/common/SourceCitation";
import { LastUpdated } from "@/components/common/LastUpdated";
import { FAQAccordion } from "./FAQAccordion";
import { RelatedTools } from "./RelatedTools";
import { Container } from "@/components/layout/Container";

interface ToolLayoutProps {
  toolId: string;
  title: string;
  intro: string;
  article?: React.ReactNode;
  source: string;
  sourceUrl: string;
  lastUpdated: string;
  faqs: { question: string; answer: string }[];
  children: React.ReactNode;
}

export function ToolLayout({
  toolId,
  title,
  intro,
  article,
  source,
  sourceUrl,
  lastUpdated,
  faqs,
  children,
}: ToolLayoutProps) {
  return (
    <main className="min-h-screen">
      <Disclaimer variant="banner" />
      <Container narrow className="py-8">
        <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: title }]} />

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0f1419] mt-4 mb-2 leading-tight">
          {title}
        </h1>
        <p className="text-[#64748b] leading-relaxed mb-6">{intro}</p>

        {article && (
          <div className="mb-6 text-sm text-[#64748b] leading-relaxed space-y-3 border-b border-[#e2e8f0] pb-6">
            {article}
          </div>
        )}

        <div className="mt-2">{children}</div>

        <div className="mt-10 space-y-4">
          <Disclaimer variant="callout" />
          <SourceCitation source={source} url={sourceUrl} />
          <LastUpdated date={lastUpdated} />
        </div>

        <FAQAccordion faqs={faqs} />
        <RelatedTools toolId={toolId} />
      </Container>
    </main>
  );
}
