"use client";

import { useEffect, useState } from "react";

type SupportModalProps = {
  open: boolean;
  onClose: () => void;
  email: string;
};

export function SupportModal({ open, onClose, email }: SupportModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setCopied(false);
  }, [open]);

  if (!open) return null;

  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    "TryB4Buy Support"
  )}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op (clipboard may be blocked)
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Support"
    >
      <button
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close support"
      />

      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#232f48] bg-[#0a0e17] shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-[#232f48] px-4 py-3">
          <p className="text-sm font-semibold text-white">Support</p>
          <button
            className="rounded-lg border border-[#232f48] bg-[#111722] px-3 py-1.5 text-sm font-semibold text-white hover:border-[#324467]"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="px-6 py-6">
          <p className="text-gray-300">
            Need help, found a bug, or have a question? Email us at:
          </p>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1 rounded-xl border border-[#232f48] bg-[#111722] px-4 py-3">
              <p className="text-white font-semibold">{email}</p>
            </div>

            <div className="flex gap-3">
              <button
                className="rounded-xl bg-[#135bec] px-4 py-3 text-sm font-bold text-white hover:bg-[#1d6bf5]"
                onClick={copy}
                type="button"
              >
                {copied ? "Copied" : "Copy"}
              </button>
              <a
                className="rounded-xl border border-[#232f48] bg-[#111722] px-4 py-3 text-sm font-bold text-white hover:border-[#324467]"
                href={mailto}
              >
                Email
              </a>
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-400">
            We typically respond within 24–48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}













