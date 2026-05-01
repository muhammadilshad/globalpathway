import { getRelatedTools } from "@/data/tools-registry";
import { ToolCard } from "./ToolCard";

export function RelatedTools({ toolId }: { toolId: string }) {
  const related = getRelatedTools(toolId);
  if (!related.length) return null;
  return (
    <section className="mt-12">
      <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-4">Related Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
