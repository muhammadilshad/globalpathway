"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const COOKIE_KEY = "gp_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 no-print" role="dialog" aria-label="Cookie consent">
      <div className="mx-auto max-w-3xl bg-[#0f2a47] text-white rounded-md shadow-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm flex-1">
          We use cookies to improve your experience and serve relevant ads. By continuing, you agree to our{" "}
          <Link href="/privacy" className="underline hover:text-white/80">Privacy Policy</Link>.
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="text-xs text-white/70 hover:text-white px-3 py-1.5 rounded border border-white/30 hover:border-white/60 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-xs bg-[#0a9e5e] hover:bg-[#0a9e5e]/90 text-white font-semibold px-4 py-1.5 rounded transition-colors"
          >
            Accept
          </button>
          <button onClick={accept} aria-label="Close" className="text-white/60 hover:text-white ml-1">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
