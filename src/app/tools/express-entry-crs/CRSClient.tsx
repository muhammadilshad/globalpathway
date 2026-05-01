"use client";
import { useState, useMemo } from "react";
import crsData from "@/data/crs-scoring.json";

type CLB = "clb4" | "clb5" | "clb6" | "clb7" | "clb8" | "clb9" | "clb10+";
type EducationLevel = keyof typeof crsData.education.withSpouse;

const clbOptions: { value: CLB; label: string }[] = [
  { value: "clb4", label: "CLB 4 (IELTS: 4.5/4.0/3.5/4.0)" },
  { value: "clb5", label: "CLB 5 (IELTS: 5.0/5.0/4.0/4.5)" },
  { value: "clb6", label: "CLB 6 (IELTS: 5.5/5.5/5.0/5.5)" },
  { value: "clb7", label: "CLB 7 (IELTS: 6.0/6.0/6.0/6.0)" },
  { value: "clb8", label: "CLB 8 (IELTS: 6.5/7.5/6.5/6.5)" },
  { value: "clb9", label: "CLB 9 (IELTS: 7.0/8.0/7.0/7.0)" },
  { value: "clb10+", label: "CLB 10+ (IELTS: 7.5+/8.5/8.0/7.5)" },
];

const educationOptions: { value: EducationLevel; label: string }[] = [
  { value: "less_than_secondary", label: "Less than secondary (high school)" },
  { value: "secondary", label: "Secondary diploma (high school)" },
  { value: "one_year_post_secondary", label: "1-year post-secondary program" },
  { value: "two_year_post_secondary", label: "2-year post-secondary program" },
  { value: "bachelors", label: "Bachelor's degree (3-year or more)" },
  { value: "two_or_more_degrees", label: "Two or more post-secondary degrees" },
  { value: "masters", label: "Master's degree" },
  { value: "doctoral", label: "Doctoral (PhD) degree" },
];

const workExpOptions = [
  { value: "0", label: "None" },
  { value: "1", label: "1 year" },
  { value: "2", label: "2 years" },
  { value: "3", label: "3 years" },
  { value: "4", label: "4 years" },
  { value: "5+", label: "5 or more years" },
];

interface FormState {
  age: number;
  hasSpouse: boolean;
  education: EducationLevel;
  firstLangSpeaking: CLB;
  firstLangListening: CLB;
  firstLangReading: CLB;
  firstLangWriting: CLB;
  canadianWorkExp: string;
  hasProvincialNomination: boolean;
  hasSiblingInCanada: boolean;
  hasFrenchCLB7: boolean;
  hasArrangedEmployment: boolean;
}

function getSectionA(form: FormState): number {
  const key = form.hasSpouse ? "withSpouse" : "withoutSpouse";

  // Age
  const ageData = crsData.age[key];
  const ageEntry = ageData.find((a) => a.age === form.age) || { points: 0 };
  const agePoints = ageEntry.points;

  // Education
  const eduPoints = crsData.education[key][form.education] || 0;

  // Language
  const langData = crsData.firstLanguage[key];
  const langPoints =
    (langData.speaking[form.firstLangSpeaking] || 0) +
    (langData.listening[form.firstLangListening] || 0) +
    (langData.reading[form.firstLangReading] || 0) +
    (langData.writing[form.firstLangWriting] || 0);

  // Canadian work experience
  const cwKey = form.canadianWorkExp as keyof typeof crsData.canadianWorkExperience.withSpouse;
  const cwPoints = (crsData.canadianWorkExperience[key] as Record<string, number>)[cwKey] || 0;

  return agePoints + eduPoints + langPoints + cwPoints;
}

function getSectionD(form: FormState): number {
  let pts = 0;
  if (form.hasProvincialNomination) pts += crsData.additionalPoints.provincialNomination;
  if (form.hasSiblingInCanada) pts += crsData.additionalPoints.siblingInCanada;
  if (form.hasFrenchCLB7) pts += crsData.additionalPoints.frenchLanguage_clb7_noEnglish;
  if (form.hasArrangedEmployment) pts += crsData.additionalPoints.arrangedEmployment_other;
  return pts;
}

export function CRSClient() {
  const [form, setForm] = useState<FormState>({
    age: 28,
    hasSpouse: false,
    education: "bachelors",
    firstLangSpeaking: "clb8",
    firstLangListening: "clb8",
    firstLangReading: "clb8",
    firstLangWriting: "clb8",
    canadianWorkExp: "0",
    hasProvincialNomination: false,
    hasSiblingInCanada: false,
    hasFrenchCLB7: false,
    hasArrangedEmployment: false,
  });

  const { sectionA, sectionD, total } = useMemo(() => {
    const a = getSectionA(form);
    const d = getSectionD(form);
    return { sectionA: a, sectionD: d, total: a + d };
  }, [form]);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  const draws = crsData.recentDraws;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#0f1419] mb-1">Age</label>
          <input
            type="number"
            min={18}
            max={45}
            value={form.age}
            onChange={(e) => set("age", parseInt(e.target.value) || 18)}
            className="w-full px-3 py-2 border border-[#e2e8f0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#0f1419] mb-1">Marital Status</label>
          <select
            value={form.hasSpouse ? "yes" : "no"}
            onChange={(e) => set("hasSpouse", e.target.value === "yes")}
            className="w-full px-3 py-2 border border-[#e2e8f0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
          >
            <option value="no">Single / Separated / Divorced / Widowed</option>
            <option value="yes">Married / Common-law (partner coming to Canada)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#0f1419] mb-1">Highest Level of Education</label>
        <select
          value={form.education}
          onChange={(e) => set("education", e.target.value as EducationLevel)}
          className="w-full px-3 py-2 border border-[#e2e8f0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
        >
          {educationOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-[#0f1419] mb-2">First Official Language (English or French)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(["speaking", "listening", "reading", "writing"] as const).map((skill) => (
            <div key={skill}>
              <label className="block text-xs text-[#64748b] mb-1 capitalize">{skill}</label>
              <select
                value={form[`firstLang${skill.charAt(0).toUpperCase() + skill.slice(1)}` as keyof FormState] as string}
                onChange={(e) => set(`firstLang${skill.charAt(0).toUpperCase() + skill.slice(1)}` as keyof FormState, e.target.value as CLB)}
                className="w-full px-2 py-2 border border-[#e2e8f0] rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
              >
                {clbOptions.map((o) => <option key={o.value} value={o.value}>{o.value.toUpperCase()}</option>)}
              </select>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#0f1419] mb-1">Canadian Work Experience</label>
        <select
          value={form.canadianWorkExp}
          onChange={(e) => set("canadianWorkExp", e.target.value)}
          className="w-full px-3 py-2 border border-[#e2e8f0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
        >
          {workExpOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-[#0f1419] mb-2">Additional Points (Section D)</h3>
        <div className="space-y-2">
          {[
            { key: "hasProvincialNomination" as const, label: "Provincial Nomination (+600)", sub: "Nominated by a province or territory" },
            { key: "hasArrangedEmployment" as const, label: "Arranged Employment (+200)", sub: "Valid job offer from a Canadian employer" },
            { key: "hasSiblingInCanada" as const, label: "Sibling in Canada (+15)", sub: "Brother or sister who is a Canadian citizen or PR" },
            { key: "hasFrenchCLB7" as const, label: "Strong French Skills (+25/50)", sub: "French CLB 7+ (and English CLB 5+)" },
          ].map(({ key, label, sub }) => (
            <label key={key} className="flex items-start gap-3 p-3 border border-[#e2e8f0] rounded-md bg-white hover:bg-[#f7f9fc] cursor-pointer">
              <input
                type="checkbox"
                checked={form[key] as boolean}
                onChange={(e) => set(key, e.target.checked)}
                className="mt-0.5"
              />
              <div>
                <p className="text-sm text-[#0f1419] font-medium">{label}</p>
                <p className="text-xs text-[#64748b]">{sub}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Score card */}
      <div className="rounded-md border-2 border-[#0f2a47] bg-[#0f2a47] text-white p-6">
        <h3 className="font-mono text-xs uppercase tracking-widest text-white/60 mb-4">Your Estimated CRS Score</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="font-mono text-2xl font-bold">{sectionA}</p>
            <p className="text-xs text-white/60">Section A (Core)</p>
          </div>
          <div>
            <p className="font-mono text-lg font-bold text-white/40">—</p>
            <p className="text-xs text-white/40">Section B+C</p>
            <p className="text-xs text-white/30 mt-0.5">not calculated</p>
          </div>
          <div>
            <p className="font-mono text-2xl font-bold">{sectionD}</p>
            <p className="text-xs text-white/60">Section D (Bonus)</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-4">
          <p className="font-mono text-5xl font-bold">{total}</p>
          <p className="text-xs text-white/60 mt-1">Total CRS Score</p>
        </div>
      </div>

      {/* Recent draws */}
      <div>
        <h3 className="font-serif text-base font-semibold text-[#0f1419] mb-3">Recent Draw Cutoffs</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border border-[#e2e8f0] rounded-md overflow-hidden">
            <thead className="bg-[#f7f9fc]">
              <tr>
                <th className="text-left px-4 py-2 font-semibold text-[#0f1419]">Date</th>
                <th className="text-left px-4 py-2 font-semibold text-[#0f1419]">Program</th>
                <th className="text-right px-4 py-2 font-semibold text-[#0f1419]">Cutoff</th>
                <th className="text-right px-4 py-2 font-semibold text-[#0f1419]">ITAs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0]">
              {draws.map((draw, i) => (
                <tr key={i} className={total >= draw.cutoff ? "bg-green-50" : ""}>
                  <td className="px-4 py-2 font-mono">{draw.date}</td>
                  <td className="px-4 py-2">{draw.program}</td>
                  <td className="px-4 py-2 text-right font-mono font-bold">{draw.cutoff}</td>
                  <td className="px-4 py-2 text-right font-mono">{draw.invitations.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#64748b] mt-2">Rows highlighted in green indicate draws where your current score would have received an ITA.</p>
      </div>
    </div>
  );
}
