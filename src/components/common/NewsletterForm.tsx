"use client";
import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  if (submitted) {
    return (
      <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-5 py-3 max-w-sm mx-auto">
        <span className="text-[#0a9e5e] text-lg">✓</span>
        <p className="text-sm text-white/80">You&apos;re on the list. We&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <form
      className="flex gap-2 flex-col sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setSubmitted(true);
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a9e5e] focus:bg-white/15"
      />
      <button
        type="submit"
        className="bg-[#0a9e5e] hover:bg-[#0a9e5e]/90 text-white font-semibold px-5 py-2.5 rounded-md text-sm transition-colors whitespace-nowrap"
      >
        Notify me
      </button>
    </form>
  );
}
