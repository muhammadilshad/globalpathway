"use client";
import { useState } from "react";
import { CheckSquare, Square, Printer, Download } from "lucide-react";
import requirementsData from "@/data/document-requirements.json";

type DestKey = keyof typeof requirementsData.destinations;
type VisaType = "Tourist" | "Student" | "Work" | "Family" | "Business";

const destinations = requirementsData.destinations as Record<
  DestKey,
  Partial<Record<VisaType, Record<string, string[]>>>
>;

const destKeys = Object.keys(destinations) as DestKey[];
const destNames: Record<DestKey, string> = {
  US: "United States",
  CA: "Canada",
  GB: "United Kingdom",
  AU: "Australia",
  Schengen: "Schengen Area (Europe)",
  AE: "UAE",
  JP: "Japan",
  SG: "Singapore",
  NZ: "New Zealand",
  DE: "Germany",
};

const categoryOrder = ["Identity", "Financial", "Supporting", "Photos", "Forms"];
const categoryColors: Record<string, string> = {
  Identity: "bg-blue-50 border-blue-200 text-blue-800",
  Financial: "bg-green-50 border-green-200 text-green-800",
  Supporting: "bg-purple-50 border-purple-200 text-purple-800",
  Photos: "bg-orange-50 border-orange-200 text-orange-800",
  Forms: "bg-[#f7f9fc] border-[#e2e8f0] text-[#0f1419]",
};

export function ChecklistClient() {
  const [dest, setDest] = useState<DestKey>("US");
  const [visaType, setVisaType] = useState<VisaType>("Tourist");
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const destData = destinations[dest];
  const visaTypes = Object.keys(destData) as VisaType[];
  const checklist = destData[visaType] || null;

  function toggle(key: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  const allItems = checklist
    ? categoryOrder.flatMap((cat) =>
        (checklist[cat] || []).map((item, i) => `${cat}-${i}-${item}`)
      )
    : [];
  const total = allItems.length;
  const done = allItems.filter((k) => checked.has(k)).length;

  function resetChecklist() {
    setChecked(new Set());
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#0f1419] mb-1">Destination Country</label>
          <select
            value={dest}
            onChange={(e) => { setDest(e.target.value as DestKey); setChecked(new Set()); }}
            className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
          >
            {destKeys.map((k) => (
              <option key={k} value={k}>{destNames[k] || k}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#0f1419] mb-1">Visa Type</label>
          <select
            value={visaType}
            onChange={(e) => { setVisaType(e.target.value as VisaType); setChecked(new Set()); }}
            className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
          >
            {visaTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {checklist && (
        <>
          {/* Progress */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#0f1419]">
                {done} of {total} items collected
              </p>
              <div className="mt-1 h-2 w-48 bg-[#e2e8f0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0a9e5e] rounded-full transition-all"
                  style={{ width: total > 0 ? `${(done / total) * 100}%` : "0%" }}
                />
              </div>
            </div>
            <div className="flex gap-2 no-print">
              <button
                onClick={resetChecklist}
                className="text-xs text-[#64748b] hover:text-[#0f2a47] px-3 py-1.5 border border-[#e2e8f0] rounded-md hover:bg-[#f7f9fc] transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 text-xs text-[#0f2a47] font-semibold px-3 py-1.5 border border-[#0f2a47]/30 rounded-md hover:bg-[#f7f9fc] transition-colors"
              >
                <Printer className="h-3.5 w-3.5" /> Print
              </button>
            </div>
          </div>

          {/* Print header (only visible when printing) */}
          <div className="hidden print-only mb-4">
            <h2 className="text-2xl font-bold text-[#0f1419]">
              Document Checklist: {destNames[dest]} — {visaType} Visa
            </h2>
            <p className="text-sm text-[#64748b] mt-1">Generated by GlobalPathway.app · globalpathway.app/tools/document-checklist</p>
            <hr className="mt-3 border-[#e2e8f0]" />
          </div>

          {/* Checklist by category */}
          <div className="space-y-5">
            {categoryOrder
              .filter((cat) => checklist[cat]?.length)
              .map((cat) => (
                <div key={cat}>
                  <div className={`inline-flex items-center px-3 py-1 rounded border text-xs font-semibold uppercase tracking-wider mb-3 ${categoryColors[cat]}`}>
                    {cat} Documents
                  </div>
                  <div className="space-y-2">
                    {(checklist[cat] || []).map((item, i) => {
                      const key = `${cat}-${i}-${item}`;
                      const isChecked = checked.has(key);
                      return (
                        <button
                          key={key}
                          onClick={() => toggle(key)}
                          className={`w-full flex items-start gap-3 px-4 py-3 border rounded-md text-left transition-colors ${
                            isChecked
                              ? "border-[#0a9e5e]/30 bg-green-50"
                              : "border-[#e2e8f0] bg-white hover:bg-[#f7f9fc]"
                          }`}
                        >
                          {isChecked ? (
                            <CheckSquare className="h-4 w-4 text-[#0a9e5e] flex-shrink-0 mt-0.5" />
                          ) : (
                            <Square className="h-4 w-4 text-[#64748b] flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm leading-relaxed ${isChecked ? "text-[#64748b] line-through" : "text-[#0f1419]"}`}>
                            {item}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>

          {/* Download PDF note */}
          <div className="p-4 bg-[#f7f9fc] rounded-md border border-[#e2e8f0] flex items-start gap-3 no-print">
            <Download className="h-4 w-4 text-[#64748b] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-[#0f1419]">Save as PDF</p>
              <p className="text-xs text-[#64748b] mt-0.5">
                Click <strong>Print</strong> above and choose &ldquo;Save as PDF&rdquo; from your print dialog to download this checklist.
              </p>
            </div>
          </div>
        </>
      )}

      {!checklist && (
        <div className="text-center py-8 text-[#64748b]">
          <p className="text-sm">No checklist available for this combination yet. Try a different destination or visa type.</p>
        </div>
      )}
    </div>
  );
}
