import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-[#64748b] no-print">
      <Link href="/" className="hover:text-[#0f2a47] flex items-center gap-1">
        <Home className="h-3 w-3" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3 flex-shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-[#0f2a47]">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#0f1419] font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
