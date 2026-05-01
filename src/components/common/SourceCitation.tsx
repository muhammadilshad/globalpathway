import { ExternalLink } from "lucide-react";

interface SourceCitationProps {
  source: string;
  url: string;
  note?: string;
}

export function SourceCitation({ source, url, note }: SourceCitationProps) {
  return (
    <div className="border border-[#e2e8f0] rounded-md p-4 bg-[#f7f9fc]">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-1">Official Source</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-[#0f2a47] font-medium hover:underline"
      >
        {source}
        <ExternalLink className="h-3 w-3" />
      </a>
      {note && <p className="mt-1 text-xs text-[#64748b]">{note}</p>}
    </div>
  );
}
