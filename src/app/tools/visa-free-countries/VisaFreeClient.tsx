"use client";
import { useState, useMemo } from "react";
import { Search, Globe, CheckCircle2, Clock3, Plane, XCircle } from "lucide-react";
import passportData from "@/data/passports.json";
import visaRulesData from "@/data/visa-rules.json";

type RuleType = "visa-free" | "visa-on-arrival" | "eta" | "esta" | "e-visa" | "visa-required";

interface Rule {
  passport: string;
  destination: string;
  type: RuleType;
  maxStay: number;
}

interface Passport {
  iso: string;
  name: string;
  flag: string;
  rank: number;
  visaFreeCount: number;
}

const typeConfig: Record<RuleType, { label: string; color: string; icon: React.ComponentType<{ className?: string }> }> = {
  "visa-free":      { label: "Visa-Free",      color: "text-[#0a9e5e] bg-green-50 border-[#0a9e5e]/20",   icon: CheckCircle2 },
  "visa-on-arrival":{ label: "Visa on Arrival", color: "text-blue-700 bg-blue-50 border-blue-200",         icon: Plane },
  "eta":            { label: "eTA Required",    color: "text-purple-700 bg-purple-50 border-purple-200",   icon: Globe },
  "esta":           { label: "ESTA (US)",        color: "text-purple-700 bg-purple-50 border-purple-200",   icon: Globe },
  "e-visa":         { label: "e-Visa",           color: "text-orange-700 bg-orange-50 border-orange-200",  icon: Clock3 },
  "visa-required":  { label: "Visa Required",   color: "text-red-700 bg-red-50 border-red-200",            icon: XCircle },
};

// Country name + flag lookup by ISO code
const countryMeta: Record<string, { name: string; flag: string }> = {
  AF: { name: "Afghanistan", flag: "🇦🇫" }, AE: { name: "UAE", flag: "🇦🇪" }, AR: { name: "Argentina", flag: "🇦🇷" },
  AU: { name: "Australia", flag: "🇦🇺" }, AZ: { name: "Azerbaijan", flag: "🇦🇿" }, BB: { name: "Barbados", flag: "🇧🇧" },
  BD: { name: "Bangladesh", flag: "🇧🇩" }, BE: { name: "Belgium", flag: "🇧🇪" }, BO: { name: "Bolivia", flag: "🇧🇴" },
  BR: { name: "Brazil", flag: "🇧🇷" }, BS: { name: "Bahamas", flag: "🇧🇸" }, CA: { name: "Canada", flag: "🇨🇦" },
  CD: { name: "DR Congo", flag: "🇨🇩" }, CG: { name: "Congo", flag: "🇨🇬" }, CH: { name: "Switzerland", flag: "🇨🇭" },
  CI: { name: "Ivory Coast", flag: "🇨🇮" }, CL: { name: "Chile", flag: "🇨🇱" }, CM: { name: "Cameroon", flag: "🇨🇲" },
  CN: { name: "China", flag: "🇨🇳" }, CO: { name: "Colombia", flag: "🇨🇴" }, CR: { name: "Costa Rica", flag: "🇨🇷" },
  CU: { name: "Cuba", flag: "🇨🇺" }, CZ: { name: "Czech Republic", flag: "🇨🇿" }, DE: { name: "Germany", flag: "🇩🇪" },
  DK: { name: "Denmark", flag: "🇩🇰" }, DO: { name: "Dominican Republic", flag: "🇩🇴" }, EC: { name: "Ecuador", flag: "🇪🇨" },
  EE: { name: "Estonia", flag: "🇪🇪" }, EG: { name: "Egypt", flag: "🇪🇬" }, ES: { name: "Spain", flag: "🇪🇸" },
  ET: { name: "Ethiopia", flag: "🇪🇹" }, FI: { name: "Finland", flag: "🇫🇮" }, FR: { name: "France", flag: "🇫🇷" },
  GB: { name: "United Kingdom", flag: "🇬🇧" }, GH: { name: "Ghana", flag: "🇬🇭" }, GR: { name: "Greece", flag: "🇬🇷" },
  GT: { name: "Guatemala", flag: "🇬🇹" }, HN: { name: "Honduras", flag: "🇭🇳" }, HT: { name: "Haiti", flag: "🇭🇹" },
  HU: { name: "Hungary", flag: "🇭🇺" }, ID: { name: "Indonesia", flag: "🇮🇩" }, IE: { name: "Ireland", flag: "🇮🇪" },
  IL: { name: "Israel", flag: "🇮🇱" }, IN: { name: "India", flag: "🇮🇳" }, IQ: { name: "Iraq", flag: "🇮🇶" },
  IR: { name: "Iran", flag: "🇮🇷" }, IS: { name: "Iceland", flag: "🇮🇸" }, IT: { name: "Italy", flag: "🇮🇹" },
  JM: { name: "Jamaica", flag: "🇯🇲" }, JP: { name: "Japan", flag: "🇯🇵" }, KE: { name: "Kenya", flag: "🇰🇪" },
  KR: { name: "South Korea", flag: "🇰🇷" }, LI: { name: "Liechtenstein", flag: "🇱🇮" }, LK: { name: "Sri Lanka", flag: "🇱🇰" },
  LT: { name: "Lithuania", flag: "🇱🇹" }, LU: { name: "Luxembourg", flag: "🇱🇺" }, LV: { name: "Latvia", flag: "🇱🇻" },
  LY: { name: "Libya", flag: "🇱🇾" }, MA: { name: "Morocco", flag: "🇲🇦" }, MT: { name: "Malta", flag: "🇲🇹" },
  MU: { name: "Mauritius", flag: "🇲🇺" }, MV: { name: "Maldives", flag: "🇲🇻" }, MW: { name: "Malawi", flag: "🇲🇼" },
  MX: { name: "Mexico", flag: "🇲🇽" }, MY: { name: "Malaysia", flag: "🇲🇾" }, MZ: { name: "Mozambique", flag: "🇲🇿" },
  NG: { name: "Nigeria", flag: "🇳🇬" }, NI: { name: "Nicaragua", flag: "🇳🇮" }, NL: { name: "Netherlands", flag: "🇳🇱" },
  NO: { name: "Norway", flag: "🇳🇴" }, NP: { name: "Nepal", flag: "🇳🇵" }, NZ: { name: "New Zealand", flag: "🇳🇿" },
  PA: { name: "Panama", flag: "🇵🇦" }, PE: { name: "Peru", flag: "🇵🇪" }, PH: { name: "Philippines", flag: "🇵🇭" },
  PK: { name: "Pakistan", flag: "🇵🇰" }, PL: { name: "Poland", flag: "🇵🇱" }, PT: { name: "Portugal", flag: "🇵🇹" },
  PY: { name: "Paraguay", flag: "🇵🇾" }, RU: { name: "Russia", flag: "🇷🇺" }, RW: { name: "Rwanda", flag: "🇷🇼" },
  SA: { name: "Saudi Arabia", flag: "🇸🇦" }, SD: { name: "Sudan", flag: "🇸🇩" }, SE: { name: "Sweden", flag: "🇸🇪" },
  SG: { name: "Singapore", flag: "🇸🇬" }, SK: { name: "Slovakia", flag: "🇸🇰" }, SN: { name: "Senegal", flag: "🇸🇳" },
  SO: { name: "Somalia", flag: "🇸🇴" }, SV: { name: "El Salvador", flag: "🇸🇻" }, SY: { name: "Syria", flag: "🇸🇾" },
  TH: { name: "Thailand", flag: "🇹🇭" }, TR: { name: "Turkey", flag: "🇹🇷" }, TT: { name: "Trinidad & Tobago", flag: "🇹🇹" },
  TZ: { name: "Tanzania", flag: "🇹🇿" }, UA: { name: "Ukraine", flag: "🇺🇦" }, UG: { name: "Uganda", flag: "🇺🇬" },
  US: { name: "United States", flag: "🇺🇸" }, UY: { name: "Uruguay", flag: "🇺🇾" }, VE: { name: "Venezuela", flag: "🇻🇪" },
  VN: { name: "Vietnam", flag: "🇻🇳" }, YE: { name: "Yemen", flag: "🇾🇪" }, ZA: { name: "South Africa", flag: "🇿🇦" },
  ZM: { name: "Zambia", flag: "🇿🇲" }, ZW: { name: "Zimbabwe", flag: "🇿🇼" },
};

function getCountry(iso: string) {
  return countryMeta[iso] ?? { name: iso, flag: "🌐" };
}

const passports: Passport[] = passportData.passports as Passport[];
const allRules: Rule[] = visaRulesData.rules as Rule[];

export function VisaFreeClient() {
  const [selectedPassport, setSelectedPassport] = useState<string>("");
  const [search, setSearch] = useState("");
  const [passportSearch, setPassportSearch] = useState("");
  const [filterType, setFilterType] = useState<RuleType | "all">("all");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredPassports = passports.filter((p) =>
    p.name.toLowerCase().includes(passportSearch.toLowerCase()) ||
    p.iso.toLowerCase().includes(passportSearch.toLowerCase())
  );

  const selectedPassportData = passports.find((p) => p.iso === selectedPassport);

  const rules = useMemo(() => {
    if (!selectedPassport) return [];
    return allRules.filter((r) => r.passport === selectedPassport);
  }, [selectedPassport]);

  const counts = useMemo(() => {
    const c = { "visa-free": 0, "visa-on-arrival": 0, "eta": 0, "esta": 0, "e-visa": 0, "visa-required": 0 };
    rules.forEach((r) => { c[r.type] = (c[r.type] || 0) + 1; });
    return c;
  }, [rules]);

  const filteredRules = rules.filter((r) => {
    if (filterType !== "all" && r.type !== filterType) return false;
    const country = getCountry(r.destination);
    if (search && !country.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  // Sort: visa-free first, then on-arrival, then e-visa, then required
  const sortOrder: Record<RuleType, number> = {
    "visa-free": 0, "eta": 1, "esta": 1, "visa-on-arrival": 2, "e-visa": 3, "visa-required": 4,
  };
  const sortedRules = [...filteredRules].sort((a, b) => sortOrder[a.type] - sortOrder[b.type]);

  return (
    <div className="space-y-6">
      {/* Passport selector */}
      <div className="relative">
        <label className="block text-xs font-semibold text-[#0f1419] mb-1">Select Your Passport</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748b]" />
          <input
            type="text"
            placeholder="Search country (e.g. India, United States)..."
            value={showDropdown ? passportSearch : (selectedPassportData ? `${selectedPassportData.flag} ${selectedPassportData.name}` : passportSearch)}
            onFocus={() => { setShowDropdown(true); setPassportSearch(""); }}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            onChange={(e) => { setPassportSearch(e.target.value); setShowDropdown(true); }}
            className="w-full pl-9 pr-4 py-3 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
          />
        </div>
        {showDropdown && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-[#e2e8f0] rounded-md shadow-lg max-h-60 overflow-y-auto">
            {filteredPassports.length === 0 ? (
              <p className="px-4 py-3 text-sm text-[#64748b]">No passports found</p>
            ) : (
              filteredPassports.slice(0, 50).map((p) => (
                <button
                  key={p.iso}
                  className="w-full px-4 py-2.5 text-left text-sm hover:bg-[#f7f9fc] flex items-center justify-between"
                  onMouseDown={() => { setSelectedPassport(p.iso); setShowDropdown(false); setPassportSearch(""); }}
                >
                  <span>{p.flag} {p.name}</span>
                  <span className="text-xs text-[#64748b] font-mono">Rank #{p.rank}</span>
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {/* Results */}
      {selectedPassportData && (
        <>
          {/* Passport summary */}
          <div className="flex items-center gap-3 p-4 bg-[#0f2a47] rounded-md text-white">
            <span className="text-3xl">{selectedPassportData.flag}</span>
            <div>
              <p className="font-serif font-semibold text-lg">{selectedPassportData.name} Passport</p>
              <p className="text-xs text-white/60">Henley Rank #{selectedPassportData.rank} · {selectedPassportData.visaFreeCount} visa-free destinations globally</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Visa-Free", count: counts["visa-free"], color: "text-[#0a9e5e]", type: "visa-free" as RuleType },
              { label: "On Arrival / eTA", count: counts["visa-on-arrival"] + counts["eta"] + counts["esta"], color: "text-blue-600", type: "visa-on-arrival" as RuleType },
              { label: "e-Visa", count: counts["e-visa"], color: "text-orange-600", type: "e-visa" as RuleType },
              { label: "Visa Required", count: counts["visa-required"], color: "text-red-600", type: "visa-required" as RuleType },
            ].map(({ label, count, color, type }) => (
              <button
                key={label}
                onClick={() => setFilterType(filterType === type ? "all" : type)}
                className={`p-4 rounded-md border text-left transition-colors ${filterType === type ? "border-[#0f2a47] bg-[#f7f9fc]" : "border-[#e2e8f0] bg-white hover:bg-[#f7f9fc]"}`}
              >
                <p className={`font-mono text-2xl font-bold ${color}`}>{count}</p>
                <p className="text-xs text-[#64748b] mt-0.5">{label}</p>
              </button>
            ))}
          </div>

          {/* Filter bar */}
          <div className="flex gap-3 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748b]" />
              <input
                type="text"
                placeholder="Filter destinations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47]"
              />
            </div>
            {filterType !== "all" && (
              <button
                onClick={() => setFilterType("all")}
                className="text-xs text-[#64748b] hover:text-[#0f2a47] px-3 py-2 border border-[#e2e8f0] rounded-md"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Destination list */}
          {sortedRules.length === 0 ? (
            <p className="text-sm text-[#64748b] py-4 text-center">No destinations match your filter.</p>
          ) : (
            <div className="space-y-1">
              {sortedRules.map((rule) => {
                const cfg = typeConfig[rule.type] || typeConfig["visa-required"];
                const Icon = cfg.icon;
                const country = getCountry(rule.destination);
                return (
                  <div
                    key={`${rule.passport}-${rule.destination}`}
                    className="flex items-center justify-between py-3 px-4 border border-[#e2e8f0] rounded-md bg-white hover:bg-[#f7f9fc] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl w-8 flex-shrink-0">{country.flag}</span>
                      <span className="text-sm font-medium text-[#0f1419]">{country.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {rule.maxStay > 0 && (
                        <span className="font-mono text-xs text-[#64748b] hidden sm:block">
                          {rule.maxStay === -1 ? "Unlimited" : `${rule.maxStay} days`}
                        </span>
                      )}
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border ${cfg.color}`}>
                        <Icon className="h-3 w-3" />
                        {cfg.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="rounded-md bg-[#f7f9fc] border border-[#e2e8f0] p-4 text-xs text-[#64748b]">
            <strong className="text-[#0f1419]">Data note:</strong> Shows curated major passport × destination pairs. For a complete list of all 193+ destinations, verify with the official source below. Results sorted by access level (best first).
          </div>
        </>
      )}

      {!selectedPassport && (
        <div className="text-center py-12 text-[#64748b]">
          <Globe className="h-12 w-12 mx-auto mb-3 text-[#e2e8f0]" />
          <p className="text-sm font-medium">Select your passport above to see destinations.</p>
          <p className="text-xs mt-1 text-[#64748b]">Results sorted from easiest to hardest access.</p>
        </div>
      )}
    </div>
  );
}
