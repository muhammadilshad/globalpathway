import { formatLastUpdated } from "@/lib/utils";

export function LastUpdated({ date }: { date: string }) {
  return (
    <p className="font-mono text-xs text-[#64748b] tracking-wider">
      LAST UPDATED · {formatLastUpdated(date)}
    </p>
  );
}
