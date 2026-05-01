import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { CitizenshipTestClient } from "./CitizenshipTestClient";

export const metadata: Metadata = buildMetadata({
  title: "US Citizenship Test Practice — All 100 USCIS Questions 2026 | GlobalPathway",
  description:
    "Practice all 100 official USCIS civics questions for the naturalization interview. Study mode, practice mode, and full test mode with scoring.",
  path: "/tools/us-citizenship-test",
});

const faqs = [
  {
    question: "How many questions are on the actual USCIS civics test?",
    answer:
      "During the naturalization interview, a USCIS officer will ask you up to 10 civics questions. You must answer at least 6 correctly (60%) to pass. The officer draws from the official list of 100 questions.",
  },
  {
    question: "Do I need to answer word-for-word?",
    answer:
      "No. USCIS publishes acceptable answers for each question, and many questions have multiple acceptable answers. The officer is testing your understanding, not rote memorization. Our tool shows all USCIS-accepted answers for each question.",
  },
  {
    question: "Are these the current official questions?",
    answer:
      "Yes. These are the 2008 version of the 100 USCIS civics questions, which remain in use for most applicants. USCIS has a revised 2020 version, but as of 2026, most applicants are still tested on the 2008 version. Check uscis.gov to confirm which version applies to your interview.",
  },
  {
    question: "Will my progress be saved?",
    answer:
      "Yes. Questions you mark as 'learned' are saved in your browser's local storage. This data stays on your device and is never sent to us. Clearing your browser cache will erase your progress.",
  },
  {
    question: "What happens at 65 years old?",
    answer:
      "If you are 65 years or older and have been a permanent resident for 20 or more years, you only need to study 20 of the 100 civics questions (marked with an asterisk on the USCIS website). You are tested on only those 20 questions.",
  },
];

const article = (
  <>
    <p>
      The civics test is one of the most important parts of the US naturalization interview — and also one of the easiest to prepare for, because USCIS publishes the exact list of 100 possible questions in advance. There are no surprises. The officer will ask up to 10 questions from this official list, and you need to answer at least 6 correctly to pass.
    </p>
    <p>
      The 100 questions are divided into three categories. <strong>American Government</strong> covers the principles of democracy, the structure of Congress, the role of the President, and the rights and responsibilities of citizens — this is the largest section and the one most people focus on first. <strong>American History</strong> covers the colonial period, independence, the Civil War, and significant 20th-century events. <strong>Integrated Civics</strong> covers geography, national symbols, and federal holidays.
    </p>
    <p>
      A few things most applicants don&apos;t know going in: First, many questions have multiple acceptable answers — the officer is looking for understanding, not word-for-word memorization. Second, questions about current officials (the President, Vice President, your Governor, your Senators) require up-to-date answers — these change with elections. Third, applicants who are 65 or older and have been a permanent resident for 20+ years only need to study a subset of 20 questions marked with an asterisk on the USCIS site.
    </p>
    <p>
      Use <strong>Study Mode</strong> to read through all 100 questions and mark ones you find difficult. Use <strong>Practice Mode</strong> for 10 random questions with instant feedback. When you feel ready, take <strong>Test Mode</strong> — 50 questions, scored exactly like the real interview. A score of 60% or above means you would pass.
    </p>
  </>
);

export default function USCitizenshipTestPage() {
  return (
    <ToolLayout
      toolId="us-citizenship-test"
      title="US Citizenship Test Practice"
      intro="Study all 100 official USCIS civics questions in Practice, Study, or full Test mode. Progress is saved in your browser."
      article={article}
      source="USCIS — 100 Civics Questions and Answers (2008 Version)"
      sourceUrl="https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test/100-civics-questions-and-answers-with-mp3-audio-2008-version"
      lastUpdated="2026-04-26"
      faqs={faqs}
    >
      <CitizenshipTestClient />
    </ToolLayout>
  );
}
