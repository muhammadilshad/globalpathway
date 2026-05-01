"use client";
import { useState, useMemo } from "react";
import { Plus, Trash2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { addDays, differenceInDays, format, isWithinInterval, parseISO, subDays } from "date-fns";

interface Trip {
  id: string;
  entry: string;
  exit: string;
}

function calcDaysInWindow(trips: Trip[], referenceDate: Date): number {
  const windowStart = subDays(referenceDate, 179);
  let total = 0;
  for (const trip of trips) {
    if (!trip.entry || !trip.exit) continue;
    const entry = parseISO(trip.entry);
    const exit = parseISO(trip.exit);
    if (exit < entry) continue;
    const overlapStart = entry < windowStart ? windowStart : entry;
    const overlapEnd = exit > referenceDate ? referenceDate : exit;
    if (overlapEnd >= overlapStart) {
      total += differenceInDays(overlapEnd, overlapStart) + 1;
    }
  }
  return Math.min(total, 90);
}

function findNextEligibleEntry(trips: Trip[]): Date | null {
  const today = new Date();
  const daysUsed = calcDaysInWindow(trips, today);
  if (daysUsed < 90) return null;
  for (let i = 1; i <= 180; i++) {
    const candidate = addDays(today, i);
    const used = calcDaysInWindow(trips, subDays(candidate, 1));
    if (used < 90) return candidate;
  }
  return null;
}

export function SchengenClient() {
  const [trips, setTrips] = useState<Trip[]>([{ id: "1", entry: "", exit: "" }]);

  function addTrip() {
    setTrips([...trips, { id: Date.now().toString(), entry: "", exit: "" }]);
  }

  function removeTrip(id: string) {
    setTrips(trips.filter((t) => t.id !== id));
  }

  function updateTrip(id: string, field: "entry" | "exit", value: string) {
    setTrips(trips.map((t) => (t.id === id ? { ...t, [field]: value } : t)));
  }

  const validTrips = trips.filter((t) => t.entry && t.exit && t.exit >= t.entry);
  const today = new Date();
  const daysUsed = useMemo(() => calcDaysInWindow(validTrips, today), [validTrips]);
  const daysRemaining = Math.max(0, 90 - daysUsed);
  const isMaxed = daysUsed >= 90;
  const nextEntry = useMemo(() => (isMaxed ? findNextEligibleEntry(validTrips) : null), [isMaxed, validTrips]);

  return (
    <div className="space-y-6">
      {/* Trip rows */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-semibold text-[#0f1419]">Your Trips to the Schengen Area</h3>
          <button
            onClick={addTrip}
            className="inline-flex items-center gap-1 text-xs text-[#0f2a47] hover:text-[#0f2a47]/80 font-semibold border border-[#0f2a47]/20 px-3 py-1.5 rounded-md hover:bg-[#f7f9fc] transition-colors"
          >
            <Plus className="h-3 w-3" /> Add Trip
          </button>
        </div>

        <div className="space-y-2">
          {trips.map((trip, i) => (
            <div key={trip.id} className="flex items-center gap-3 p-3 border border-[#e2e8f0] rounded-md bg-white">
              <span className="font-mono text-xs text-[#64748b] w-5 flex-shrink-0">#{i + 1}</span>
              <div className="flex-1 grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-[#64748b] mb-1">Entry Date</label>
                  <input
                    type="date"
                    value={trip.entry}
                    onChange={(e) => updateTrip(trip.id, "entry", e.target.value)}
                    className="w-full px-3 py-2 border border-[#e2e8f0] rounded text-sm text-[#0f1419] focus:outline-none focus:ring-1 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#64748b] mb-1">Exit Date</label>
                  <input
                    type="date"
                    value={trip.exit}
                    min={trip.entry}
                    onChange={(e) => updateTrip(trip.id, "exit", e.target.value)}
                    className="w-full px-3 py-2 border border-[#e2e8f0] rounded text-sm text-[#0f1419] focus:outline-none focus:ring-1 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47]"
                  />
                </div>
              </div>
              {trips.length > 1 && (
                <button
                  onClick={() => removeTrip(trip.id)}
                  className="p-1.5 text-[#64748b] hover:text-red-500 transition-colors"
                  aria-label="Remove trip"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      {validTrips.length > 0 && (
        <div className={`rounded-md border-2 p-5 ${isMaxed ? "border-red-300 bg-red-50" : daysUsed > 75 ? "border-[#d97706]/40 bg-amber-50" : "border-[#0a9e5e]/30 bg-green-50"}`}>
          <div className="flex items-start gap-3">
            {isMaxed ? (
              <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="h-5 w-5 text-[#0a9e5e] flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="font-mono text-3xl font-bold text-[#0f1419]">{daysUsed}</p>
                  <p className="text-xs text-[#64748b] mt-0.5">Days Used</p>
                </div>
                <div>
                  <p className={`font-mono text-3xl font-bold ${daysRemaining === 0 ? "text-red-600" : daysRemaining < 15 ? "text-[#d97706]" : "text-[#0a9e5e]"}`}>
                    {daysRemaining}
                  </p>
                  <p className="text-xs text-[#64748b] mt-0.5">Days Remaining</p>
                </div>
                <div>
                  <p className="font-mono text-3xl font-bold text-[#0f1419]">90</p>
                  <p className="text-xs text-[#64748b] mt-0.5">Day Maximum</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-3 bg-white rounded-full overflow-hidden border border-[#e2e8f0]">
                <div
                  className={`h-full rounded-full transition-all ${daysUsed >= 90 ? "bg-red-500" : daysUsed > 75 ? "bg-[#d97706]" : "bg-[#0a9e5e]"}`}
                  style={{ width: `${Math.min(100, (daysUsed / 90) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-[#64748b] mt-1">{daysUsed}/90 days used in the current 180-day window (as of {format(today, "MMM d, yyyy")})</p>

              {isMaxed && nextEntry && (
                <div className="mt-4 p-3 bg-white rounded border border-red-200">
                  <p className="text-sm font-semibold text-[#0f1419]">
                    You&apos;ve reached the 90-day limit.
                  </p>
                  <p className="text-sm text-[#64748b] mt-1">
                    Your next eligible entry date is <strong className="text-[#0f1419] font-mono">{format(nextEntry, "MMMM d, yyyy")}</strong>.
                  </p>
                </div>
              )}

              {daysUsed > 75 && !isMaxed && (
                <p className="mt-3 text-sm text-[#d97706] font-semibold">
                  You&apos;re approaching the 90-day limit. Plan your exit carefully.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="text-xs text-[#64748b] bg-[#f7f9fc] rounded-md p-3 border border-[#e2e8f0]">
        <strong className="text-[#0f1419]">How the 90/180 rule works:</strong> You can stay in the Schengen Area for a maximum of 90 days in any rolling 180-day period. The 180-day window moves forward every day, so days from older trips &ldquo;fall off&rdquo; as they age past 180 days.
      </div>
    </div>
  );
}
