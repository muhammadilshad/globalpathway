"use client";
import { useState } from "react";
import { Clock, ExternalLink } from "lucide-react";
import processingData from "@/data/uscis-processing.json";

type FormKey = keyof typeof processingData.forms;
type CenterKey = string;

const forms = processingData.forms as Record<FormKey, {
  name: string;
  description: string;
  centers: Record<CenterKey, { min: number; max: number; unit: string; inquiryDate: string }>;
}>;

const formKeys = Object.keys(forms) as FormKey[];
const centerKeys = Object.keys(forms["I-130"].centers);

export function ProcessingTimesClient() {
  const [selectedForm, setSelectedForm] = useState<FormKey>("I-130");
  const [selectedCenter, setSelectedCenter] = useState<CenterKey>(centerKeys[0]);

  const form = forms[selectedForm];
  const centerData = form?.centers[selectedCenter];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#0f1419] mb-1">Form Type</label>
          <select
            value={selectedForm}
            onChange={(e) => setSelectedForm(e.target.value as FormKey)}
            className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
          >
            {formKeys.map((key) => (
              <option key={key} value={key}>
                {key} — {forms[key].name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#0f1419] mb-1">Service Center</label>
          <select
            value={selectedCenter}
            onChange={(e) => setSelectedCenter(e.target.value)}
            className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
          >
            {centerKeys.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {form && (
        <div className="p-4 bg-[#f7f9fc] rounded-md border border-[#e2e8f0]">
          <p className="text-xs text-[#64748b]">{form.description}</p>
        </div>
      )}

      {centerData && (
        <div className="rounded-md border-2 border-[#0f2a47]/20 bg-white p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-[#0f2a47]" />
            <h3 className="font-serif text-lg font-semibold text-[#0f1419]">Current Processing Time</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="text-center p-4 bg-[#f7f9fc] rounded-md border border-[#e2e8f0]">
              <p className="font-mono text-3xl font-bold text-[#0f2a47]">{centerData.min}</p>
              <p className="text-xs text-[#64748b] mt-1">Minimum ({centerData.unit})</p>
            </div>
            <div className="text-center p-4 bg-[#f7f9fc] rounded-md border border-[#e2e8f0] flex items-center justify-center">
              <p className="text-xs font-semibold text-[#64748b]">to</p>
            </div>
            <div className="text-center p-4 bg-[#f7f9fc] rounded-md border border-[#e2e8f0]">
              <p className="font-mono text-3xl font-bold text-[#0f2a47]">{centerData.max}</p>
              <p className="text-xs text-[#64748b] mt-1">Maximum ({centerData.unit})</p>
            </div>
          </div>

          <div className="text-center">
            <p className="font-mono text-2xl font-bold text-[#0f1419]">
              {centerData.min}–{centerData.max} {centerData.unit}
            </p>
            <p className="text-xs text-[#64748b] mt-1">
              at the {selectedCenter}
            </p>
          </div>

          <div className="mt-4 p-3 bg-amber-50 border border-[#d97706]/20 rounded-md">
            <p className="text-xs text-[#64748b]">
              <strong className="text-[#0f1419]">Inquiry date:</strong> If your receipt date is before{" "}
              <span className="font-mono font-semibold text-[#0f1419]">
                {new Date(centerData.inquiryDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              , you may be eligible to submit a case inquiry to USCIS.
            </p>
          </div>
        </div>
      )}

      <a
        href="https://egov.uscis.gov/processing-times/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#0f2a47] text-[#0f2a47] rounded-md text-sm font-semibold hover:bg-[#f7f9fc] transition-colors"
      >
        Check Live Times on USCIS.gov <ExternalLink className="h-3 w-3" />
      </a>

      <div className="text-xs text-[#64748b] bg-[#f7f9fc] p-3 rounded border border-[#e2e8f0]">
        <strong className="text-[#0f1419]">Important:</strong> Processing times fluctuate. The times shown here were last verified on April 26, 2026. Always check the official USCIS Processing Times tool for current data before making any decisions. Times shown are for informational purposes only.
      </div>
    </div>
  );
}
