import Link from "next/link";
import { ArrowRight, Globe, CalendarDays, Star, Clock, BarChart3, DollarSign, ClipboardList } from "lucide-react";
import type { Tool } from "@/data/tools-registry";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  CalendarDays,
  Star,
  Clock,
  BarChart3,
  DollarSign,
  ClipboardList,
};

export function ToolCard({ tool }: { tool: Tool }) {
  const Icon = iconMap[tool.icon] ?? Globe;
  return (
    <Link
      href={tool.slug}
      className="group flex flex-col p-6 rounded-md border border-[#e2e8f0] bg-white hover:border-[#0f2a47]/30 hover:shadow-sm transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-md bg-[#f7f9fc] border border-[#e2e8f0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0f2a47]/5 transition-colors">
          <Icon className="h-4 w-4 text-[#0f2a47]" />
        </div>
        <span className="text-xs font-medium text-[#64748b] uppercase tracking-wider">{tool.category}</span>
      </div>
      <h3 className="font-serif text-[#0f1419] font-semibold text-base mb-2 leading-snug">{tool.name}</h3>
      <p className="text-sm text-[#64748b] flex-1 leading-relaxed">{tool.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0f2a47] group-hover:gap-2 transition-all">
        Open tool <ArrowRight className="h-3 w-3" />
      </span>
    </Link>
  );
}
