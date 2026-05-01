"use client";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`GlobalPathway Contact: ${data.get("subject") || "General enquiry"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nMessage:\n${data.get("message")}`
    );
    window.location.href = `mailto:hello@globalpathway.app?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-[#0a9e5e]/30 bg-green-50 p-6 text-center">
        <p className="text-[#0a9e5e] font-semibold text-sm">Your email client should have opened.</p>
        <p className="text-[#64748b] text-sm mt-1">
          If not, email us directly at <strong>hello@globalpathway.app</strong>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#0f1419] mb-1" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-3 py-2 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47]"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#0f1419] mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-3 py-2 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47]"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#0f1419] mb-1" htmlFor="subject">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-3 py-2 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] bg-white"
        >
          <option>Data error or outdated information</option>
          <option>Tool suggestion or feature request</option>
          <option>General question</option>
          <option>Partnership or press inquiry</option>
          <option>Privacy or data request</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#0f1419] mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-3 py-2 border border-[#e2e8f0] rounded-md text-sm text-[#0f1419] focus:outline-none focus:ring-2 focus:ring-[#0f2a47]/20 focus:border-[#0f2a47] resize-none"
          placeholder="Please include as much detail as possible. If reporting a data error, include the tool name and the specific information that appears incorrect."
        />
      </div>

      <p className="text-xs text-[#64748b]">
        We cannot provide immigration legal advice. For questions about your specific case, please consult a licensed immigration attorney.
      </p>

      <button
        type="submit"
        className="bg-[#0f2a47] hover:bg-[#0f2a47]/90 text-white font-semibold px-6 py-2.5 rounded-md text-sm transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
