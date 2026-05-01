import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { tools } from "@/data/tools-registry";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center">
      <Container narrow className="py-16 text-center">
        <p className="font-mono text-sm text-[#64748b] uppercase tracking-widest mb-4">404</p>
        <h1 className="font-serif text-4xl font-bold text-[#0f1419] mb-3">Page not found</h1>
        <p className="text-[#64748b] mb-8">
          This page doesn&apos;t exist. Try one of our tools below, or go back to the homepage.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Link
            href="/"
            className="px-5 py-2.5 bg-[#0f2a47] text-white text-sm font-semibold rounded-md hover:bg-[#0f2a47]/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/tools"
            className="px-5 py-2.5 border border-[#e2e8f0] text-[#0f1419] text-sm font-semibold rounded-md hover:bg-[#f7f9fc] transition-colors"
          >
            Browse All Tools
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-md mx-auto">
          {tools.slice(0, 4).map((tool) => (
            <Link
              key={tool.id}
              href={tool.slug}
              className="px-4 py-2 text-sm text-[#0f2a47] hover:underline border border-[#e2e8f0] rounded-md hover:bg-[#f7f9fc]"
            >
              {tool.name}
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
