"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="mt-10">
      <h2 className="font-serif text-xl font-semibold text-[#0f1419] mb-4">Frequently Asked Questions</h2>
      <div className="divide-y divide-[#e2e8f0] border border-[#e2e8f0] rounded-md overflow-hidden">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-[#f7f9fc] transition-colors"
              aria-expanded={open === i}
            >
              <span className="text-sm font-medium text-[#0f1419] pr-4">{faq.question}</span>
              <ChevronDown
                className={cn("h-4 w-4 flex-shrink-0 text-[#64748b] transition-transform", open === i && "rotate-180")}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-4 pt-1 bg-white">
                <p className="text-sm text-[#64748b] leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
