export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  category: string;
  icon: string;
  relatedToolIds: string[];
  source?: string;
  lastUpdated: string;
}

export const tools: Tool[] = [
  {
    id: "visa-free-countries",
    name: "Visa-Free Countries by Passport",
    slug: "/tools/visa-free-countries",
    description: "See every country your passport can enter — visa-free, on arrival, or with an eTA.",
    longDescription:
      "Select your passport and instantly see which countries you can visit without a visa, which offer visa-on-arrival, and which require advance applications. Includes max stay durations and real-time counts.",
    category: "Travel",
    icon: "Globe",
    relatedToolIds: ["schengen-calculator", "visa-cost-calculator", "document-checklist"],
    source: "Henley Passport Index / Official Government Portals",
    lastUpdated: "2026-04-26",
  },
  {
    id: "schengen-calculator",
    name: "Schengen 90/180 Day Calculator",
    slug: "/tools/schengen-calculator",
    description: "Track your days in the Schengen Area and find out when you can safely re-enter.",
    longDescription:
      "Add your past and planned trips to the Schengen Area. The calculator automatically computes your rolling 180-day window, shows how many days you have left, and tells you your next eligible entry date.",
    category: "Travel",
    icon: "CalendarDays",
    relatedToolIds: ["visa-free-countries", "visa-cost-calculator", "document-checklist"],
    source: "EU Commission Schengen Borders Code",
    lastUpdated: "2026-04-26",
  },
  {
    id: "us-citizenship-test",
    name: "US Citizenship Test Practice",
    slug: "/tools/us-citizenship-test",
    description: "Practice all 100 USCIS civics questions for the naturalization interview.",
    longDescription:
      "Study all 100 official USCIS civics questions in Practice, Study, or full Test mode. Track your progress, mark questions as learned, and review by category — American Government, History, or Integrated Civics.",
    category: "US Immigration",
    icon: "Star",
    relatedToolIds: ["uscis-processing-times", "document-checklist", "express-entry-crs"],
    source: "USCIS 100 Civics Questions (2008 Version)",
    lastUpdated: "2026-04-26",
  },
  {
    id: "uscis-processing-times",
    name: "USCIS Processing Times Tracker",
    slug: "/tools/uscis-processing-times",
    description: "Look up current USCIS processing times for I-130, I-485, N-400, and more.",
    longDescription:
      "Select your form type and USCIS service center to see the current processing time range, inquiry dates, and official source links. Data is updated monthly from USCIS.gov.",
    category: "US Immigration",
    icon: "Clock",
    relatedToolIds: ["us-citizenship-test", "document-checklist", "visa-cost-calculator"],
    source: "USCIS Processing Times Tool (egov.uscis.gov)",
    lastUpdated: "2026-04-26",
  },
  {
    id: "express-entry-crs",
    name: "Canada Express Entry CRS Calculator",
    slug: "/tools/express-entry-crs",
    description: "Calculate your Comprehensive Ranking System score for Canadian immigration.",
    longDescription:
      "Get your full CRS score using IRCC's official formula. Enter your age, education, language scores, and work experience to see your Section A–D breakdown and compare against recent draw cutoffs.",
    category: "Canada Immigration",
    icon: "BarChart3",
    relatedToolIds: ["document-checklist", "visa-cost-calculator", "uscis-processing-times"],
    source: "Immigration, Refugees and Citizenship Canada (IRCC)",
    lastUpdated: "2026-04-26",
  },
  {
    id: "visa-cost-calculator",
    name: "Visa Cost Calculator",
    slug: "/tools/visa-cost-calculator",
    description: "Get a full fee breakdown — government fee, biometrics, service charges — before you apply.",
    longDescription:
      "Choose your destination country and visa type to see an itemized cost breakdown including government fees, biometric fees, premium processing options, and service fees. Shown in USD and local currency.",
    category: "Travel",
    icon: "DollarSign",
    relatedToolIds: ["visa-free-countries", "document-checklist", "schengen-calculator"],
    source: "Official embassy and consulate fee schedules",
    lastUpdated: "2026-04-26",
  },
  {
    id: "document-checklist",
    name: "Document Checklist Generator",
    slug: "/tools/document-checklist",
    description: "Generate a printable, categorized document checklist for any visa application.",
    longDescription:
      "Select your destination and visa type to get a detailed, categorized checklist of required documents — Identity, Financial, Supporting, Photos, and Forms. Download as PDF or print directly.",
    category: "Travel",
    icon: "ClipboardList",
    relatedToolIds: ["visa-cost-calculator", "visa-free-countries", "schengen-calculator"],
    source: "Official embassy/consulate document requirement pages",
    lastUpdated: "2026-04-26",
  },
];

export const getToolById = (id: string): Tool | undefined =>
  tools.find((t) => t.id === id);

export const getRelatedTools = (toolId: string): Tool[] => {
  const tool = getToolById(toolId);
  if (!tool) return [];
  return tool.relatedToolIds
    .map((id) => getToolById(id))
    .filter((t): t is Tool => t !== undefined);
};
