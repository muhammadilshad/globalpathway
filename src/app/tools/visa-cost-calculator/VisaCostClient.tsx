"use client";
import { useState, useMemo } from "react";
import { DollarSign, Info } from "lucide-react";
import feesData from "@/data/visa-fees.json";

type DestKey = keyof typeof feesData.destinations;
type VisaType = "Tourist" | "Student" | "Work" | "Family" | "Business";

const destinations = feesData.destinations as Record<DestKey, {
  name: string;
  currency: string;
  exchangeRate: number;
  types: Record<VisaType, { govFee: number; biometricFee: number; premiumProcessing: number; serviceFee: number; notes: string }>;
}>;

const destKeys = Object.keys(destinations) as DestKey[];
const visaTypes: VisaType[] = ["Tourist", "Student", "Work", "Family", "Business"];

export function VisaCostClient() {
  const [dest, setDest] = useState<DestKey>("US");
  const [visaType, setVisaType] = useState<VisaType>("Tourist");

  const destData = destinations[dest];
  const visaData = useMemo(() => {
    return destData?.types[visaType] || null;
  }, [destData, visaType]);

  const totalUSD = visaData
    ? Math.round(
        (visaData.govFee + visaData.biometricFee + visaData.serviceFee) *
        (destData.exchangeRate || 1)
      )
    : 0;

  const totalLocal = visaData
    ? visaData.govFee + visaData.biometricFee + visaData.serviceFee
    : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#0f1419] mb-1">Destination Country</label>
          <select
            value={dest}
            onChange={(e) => setDest(e.target.value as DestKey)}
            className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
          >
            {destKeys.map((key) => (
              <option key={key} value={key}>{destinations[key].name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#0f1419] mb-1">Visa Type</label>
          <select
            value={visaType}
            onChange={(e) => setVisaType(e.target.value as VisaType)}
            className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
          >
            {visaTypes
              .filter((t) => destData?.types[t])
              .map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
          </select>
        </div>
      </div>

      {visaData && destData && (
        <>
          {/* Fee breakdown */}
          <div className="rounded-md border border-[#e2e8f0] overflow-hidden">
            <div className="bg-[#f7f9fc] px-5 py-3 border-b border-[#e2e8f0]">
              <h3 className="font-semibold text-sm text-[#0f1419]">Fee Breakdown — {destData.name} {visaType} Visa</h3>
              <p className="text-xs text-[#64748b] mt-0.5">Fees shown in {destData.currency}. USD equivalent also shown.</p>
            </div>
            <div className="divide-y divide-[#e2e8f0]">
              {[
                { label: "Government / Application Fee", amount: visaData.govFee, required: true },
                { label: "Biometric Fee", amount: visaData.biometricFee, required: visaData.biometricFee > 0 },
                { label: "Service / VAC Fee", amount: visaData.serviceFee, required: visaData.serviceFee > 0 },
                { label: "Premium Processing (optional)", amount: visaData.premiumProcessing, required: false },
              ]
                .filter((item) => item.amount > 0)
                .map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-5 py-3">
                    <div>
                      <p className="text-sm text-[#0f1419]">{item.label}</p>
                      {!item.required && (
                        <p className="text-xs text-[#64748b]">Optional — not included in total below</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-mono font-semibold text-[#0f1419]">
                        {destData.currency} {item.amount.toLocaleString()}
                      </p>
                      {destData.exchangeRate !== 1 && (
                        <p className="font-mono text-xs text-[#64748b]">
                          ~USD {Math.round(item.amount * destData.exchangeRate)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              <div className="flex items-center justify-between px-5 py-4 bg-[#0f2a47] text-white">
                <p className="font-semibold">Estimated Total (required fees)</p>
                <div className="text-right">
                  <p className="font-mono text-xl font-bold">{destData.currency} {totalLocal.toLocaleString()}</p>
                  {destData.exchangeRate !== 1 && (
                    <p className="font-mono text-sm text-white/70">~USD {totalUSD}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="flex gap-3 p-4 bg-amber-50 border border-[#d97706]/20 rounded-md">
            <Info className="h-4 w-4 text-[#d97706] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#64748b] leading-relaxed">
              <strong className="text-[#0f1419]">Notes:</strong> {visaData.notes}
            </p>
          </div>

          <div className="text-xs text-[#64748b] bg-[#f7f9fc] p-3 rounded border border-[#e2e8f0]">
            <strong className="text-[#0f1419]">Exchange rates:</strong> USD amounts are estimates based on approximate exchange rates as of April 2026. Actual USD equivalents will vary with currency movements. Always check current rates and verify fees with the official embassy or consulate before applying.
          </div>
        </>
      )}
    </div>
  );
}
