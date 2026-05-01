"use client";
import { useState, useEffect, useCallback } from "react";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, BookOpen, Shuffle, Award } from "lucide-react";
import questionsData from "@/data/citizenship-questions.json";

type Mode = "menu" | "practice" | "study" | "test" | "result";
type Category = "American Government" | "American History" | "Integrated Civics" | "all";

interface Question {
  id: number;
  category: string;
  subcategory: string;
  question: string;
  answers: string[];
  choices: string[];
}

const questions: Question[] = questionsData.questions as Question[];

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function pickN<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

function QuestionCard({
  question,
  onAnswer,
  showFeedback,
  selectedAnswer,
  mode,
}: {
  question: Question;
  onAnswer: (a: string) => void;
  showFeedback: boolean;
  selectedAnswer: string | null;
  mode: "practice" | "test" | "study";
}) {
  const isCorrect = (a: string) => question.answers.some((ans) => a.toLowerCase().includes(ans.toLowerCase()));

  return (
    <div className="space-y-4">
      <p className="text-[#0f1419] font-medium leading-relaxed">{question.question}</p>
      <div className="space-y-2">
        {question.choices.map((choice) => {
          let bg = "border-[#e2e8f0] bg-white hover:bg-[#f7f9fc]";
          if (showFeedback && selectedAnswer === choice) {
            bg = isCorrect(choice) ? "border-[#0a9e5e] bg-green-50" : "border-red-400 bg-red-50";
          } else if (showFeedback && isCorrect(choice)) {
            bg = "border-[#0a9e5e] bg-green-50";
          }
          return (
            <button
              key={choice}
              onClick={() => !showFeedback && onAnswer(choice)}
              disabled={showFeedback}
              className={`w-full text-left px-4 py-3 border rounded-md text-sm transition-colors flex items-center justify-between gap-3 ${bg}`}
            >
              <span>{choice}</span>
              {showFeedback && selectedAnswer === choice && (
                isCorrect(choice)
                  ? <CheckCircle2 className="h-4 w-4 text-[#0a9e5e] flex-shrink-0" />
                  : <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
              )}
              {showFeedback && selectedAnswer !== choice && isCorrect(choice) && (
                <CheckCircle2 className="h-4 w-4 text-[#0a9e5e] flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>
      {showFeedback && (
        <div className={`p-3 rounded-md text-sm ${isCorrect(selectedAnswer || "") ? "bg-green-50 text-[#0a9e5e] border border-[#0a9e5e]/20" : "bg-red-50 text-red-700 border border-red-200"}`}>
          <strong>Correct answer{question.answers.length > 1 ? "s" : ""}:</strong> {question.answers.slice(0, 3).join(", ")}
          {question.answers.length > 3 && " (and more)"}
        </div>
      )}
    </div>
  );
}

export function CitizenshipTestClient() {
  const [mode, setMode] = useState<Mode>("menu");
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState<Category>("all");
  const [learned, setLearned] = useState<Set<number>>(() => {
    if (typeof window === "undefined") return new Set();
    try { return new Set(JSON.parse(localStorage.getItem("gp_learned") || "[]")); } catch { return new Set(); }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("gp_learned", JSON.stringify([...learned]));
    }
  }, [learned]);

  function startMode(m: "practice" | "test" | "study") {
    const pool = categoryFilter === "all" ? questions : questions.filter((q) => q.category === categoryFilter);
    if (m === "practice") setActiveQuestions(pickN(pool, 10));
    else if (m === "test") setActiveQuestions(pickN(pool, 50));
    else setActiveQuestions(pool);
    setCurrent(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setMode(m);
  }

  function handleAnswer(answer: string) {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    const q = activeQuestions[current];
    const correct = q.answers.some((a) => answer.toLowerCase().includes(a.toLowerCase()));
    if (correct) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= activeQuestions.length) {
      setMode("result");
    } else {
      setCurrent(current + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  }

  const toggleLearned = useCallback((id: number) => {
    setLearned((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const categories: Category[] = ["all", "American Government", "American History", "Integrated Civics"];
  const q = activeQuestions[current];

  // MENU
  if (mode === "menu") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategoryFilter(c)}
              className={`px-3 py-2 text-xs rounded border font-medium transition-colors ${categoryFilter === c ? "bg-[#0f2a47] text-white border-[#0f2a47]" : "border-[#e2e8f0] text-[#64748b] hover:bg-[#f7f9fc]"}`}
            >
              {c === "all" ? "All Categories" : c.replace("American ", "")}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Practice Mode", desc: "10 random questions. Get feedback after each answer.", icon: Shuffle, action: () => startMode("practice") },
            { label: "Study Mode", desc: "Browse all 100 questions at your own pace.", icon: BookOpen, action: () => startMode("study") },
            { label: "Test Mode", desc: "50 random questions, scored like the real interview.", icon: Award, action: () => startMode("test") },
          ].map(({ label, desc, icon: Icon, action }) => (
            <button
              key={label}
              onClick={action}
              className="p-5 border border-[#e2e8f0] rounded-md text-left hover:border-[#0f2a47]/30 hover:bg-[#f7f9fc] transition-all group"
            >
              <Icon className="h-6 w-6 text-[#0f2a47] mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-[#0f1419] text-sm">{label}</h3>
              <p className="text-xs text-[#64748b] mt-1">{desc}</p>
            </button>
          ))}
        </div>

        <div className="text-xs text-[#64748b] bg-[#f7f9fc] p-3 rounded border border-[#e2e8f0]">
          <strong className="text-[#0f1419]">Progress:</strong> You&apos;ve marked {learned.size} of 100 questions as learned.
          {learned.size > 0 && (
            <button
              onClick={() => setLearned(new Set())}
              className="ml-2 text-[#0f2a47] underline"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    );
  }

  // RESULT
  if (mode === "result") {
    const pct = Math.round((score / activeQuestions.length) * 100);
    const passed = pct >= 60;
    return (
      <div className="text-center space-y-5">
        <div className={`rounded-md border-2 p-8 ${passed ? "border-[#0a9e5e] bg-green-50" : "border-red-300 bg-red-50"}`}>
          {passed ? <CheckCircle2 className="h-12 w-12 text-[#0a9e5e] mx-auto mb-3" /> : <XCircle className="h-12 w-12 text-red-500 mx-auto mb-3" />}
          <p className="font-mono text-5xl font-bold text-[#0f1419]">{pct}%</p>
          <p className="text-[#64748b] mt-2 text-sm">{score} of {activeQuestions.length} correct</p>
          <p className={`font-semibold mt-2 ${passed ? "text-[#0a9e5e]" : "text-red-600"}`}>
            {passed ? "You would pass the civics test!" : "Keep studying — the passing score is 6/10 correct."}
          </p>
        </div>
        <div className="flex gap-3 justify-center flex-wrap">
          <button onClick={() => setMode("menu")} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0f2a47] text-white text-sm font-semibold rounded-md hover:bg-[#0f2a47]/90 transition-colors">
            <RotateCcw className="h-4 w-4" /> Try Again
          </button>
        </div>
      </div>
    );
  }

  // STUDY MODE
  if (mode === "study") {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-xs font-mono text-[#64748b]">Question {current + 1} of {activeQuestions.length}</p>
          <button onClick={() => setMode("menu")} className="text-xs text-[#64748b] hover:text-[#0f2a47]">← Back to menu</button>
        </div>
        <div className="p-5 border border-[#e2e8f0] rounded-md">
          <span className="text-xs text-[#64748b] font-medium uppercase tracking-wide">{q.category} · {q.subcategory}</span>
          <p className="text-[#0f1419] font-medium mt-2 leading-relaxed">{q.question}</p>
          <div className="mt-4 p-3 bg-[#f7f9fc] rounded-md border border-[#e2e8f0]">
            <p className="text-xs font-semibold text-[#64748b] mb-1">USCIS Acceptable Answer(s):</p>
            <ul className="text-sm text-[#0f1419] space-y-0.5">
              {q.answers.map((a, i) => <li key={i} className="flex gap-1.5"><span className="text-[#0a9e5e]">✓</span> {a}</li>)}
            </ul>
          </div>
          <button
            onClick={() => toggleLearned(q.id)}
            className={`mt-3 text-xs px-3 py-1.5 rounded border transition-colors ${learned.has(q.id) ? "bg-[#0a9e5e] text-white border-[#0a9e5e]" : "border-[#e2e8f0] text-[#64748b] hover:bg-[#f7f9fc]"}`}
          >
            {learned.has(q.id) ? "✓ Marked as learned" : "Mark as learned"}
          </button>
        </div>
        <div className="flex justify-between">
          <button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0} className="px-4 py-2 text-sm border border-[#e2e8f0] rounded-md disabled:opacity-30 hover:bg-[#f7f9fc]">← Previous</button>
          {current + 1 < activeQuestions.length
            ? <button onClick={() => setCurrent(current + 1)} className="px-4 py-2 text-sm bg-[#0f2a47] text-white rounded-md hover:bg-[#0f2a47]/90">Next →</button>
            : <button onClick={() => setMode("menu")} className="px-4 py-2 text-sm bg-[#0a9e5e] text-white rounded-md">Finish</button>
          }
        </div>
      </div>
    );
  }

  // PRACTICE / TEST
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs font-mono text-[#64748b]">Question {current + 1} of {activeQuestions.length}</p>
          {mode === "test" && <p className="text-xs text-[#64748b]">Score: {score}/{current + (showFeedback ? 1 : 0)}</p>}
        </div>
        <button onClick={() => setMode("menu")} className="text-xs text-[#64748b] hover:text-[#0f2a47]">← Back</button>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-[#f7f9fc] rounded-full overflow-hidden">
        <div className="h-full bg-[#0f2a47] rounded-full transition-all" style={{ width: `${((current + 1) / activeQuestions.length) * 100}%` }} />
      </div>

      <QuestionCard
        question={q}
        onAnswer={handleAnswer}
        showFeedback={showFeedback}
        selectedAnswer={selectedAnswer}
        mode={mode}
      />

      {showFeedback && (
        <button
          onClick={next}
          className="w-full flex items-center justify-center gap-2 py-3 bg-[#0f2a47] text-white text-sm font-semibold rounded-md hover:bg-[#0f2a47]/90 transition-colors"
        >
          {current + 1 >= activeQuestions.length ? "See Results" : "Next Question"}
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
