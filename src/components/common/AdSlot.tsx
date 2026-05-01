/*
 * HOW TO ACTIVATE ADSENSE AFTER APPROVAL:
 * 1. Add this script to src/app/layout.tsx <head>:
 *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" />
 * 2. Replace each <AdSlot> with the real <ins class="adsbygoogle"> tag from your AdSense dashboard.
 * 3. Remove this placeholder component.
 */

interface AdSlotProps {
  slot: "header" | "inline" | "sidebar" | "footer";
  className?: string;
}

const dimensions: Record<AdSlotProps["slot"], string> = {
  header: "h-24",
  inline: "h-24",
  sidebar: "h-[600px]",
  footer: "h-24",
};

export function AdSlot({ slot, className = "" }: AdSlotProps) {
  return (
    <div
      className={`ad-slot border border-dashed border-slate-300 bg-slate-50 my-6 flex items-center justify-center text-xs uppercase tracking-widest text-slate-400 w-full rounded-md no-print ${dimensions[slot]} ${className}`}
      aria-hidden="true"
    >
      Advertisement
    </div>
  );
}
