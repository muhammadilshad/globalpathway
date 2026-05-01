import { AlertTriangle } from "lucide-react";
import Link from "next/link";

interface DisclaimerProps {
  variant?: "banner" | "callout";
}

export function Disclaimer({ variant = "banner" }: DisclaimerProps) {
  if (variant === "callout") {
    // Subtle footnote — no aggressive warning box
    return (
      <p className="text-xs text-[#64748b] mt-2">
        Results are estimates based on official rules. Always verify with the{" "}
        <Link href="/disclaimer" className="underline hover:text-[#0f2a47]">
          official source
        </Link>{" "}
        before making any decisions.
      </p>
    );
  }

  return (
    <div className="bg-[#f7f9fc] border-b border-[#e2e8f0] py-2 px-4 text-center no-print">
      <p className="text-xs text-[#64748b]">
        <AlertTriangle className="h-3 w-3 inline-block mr-1 text-[#d97706]" />
        Informational only — not legal advice.{" "}
        <Link href="/disclaimer" className="underline hover:text-[#0f2a47]">Learn more</Link>
      </p>
    </div>
  );
}
