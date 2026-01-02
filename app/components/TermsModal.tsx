"use client";

import { useEffect } from "react";

type TermsModalProps = {
  open: boolean;
  onClose: () => void;
};

export function TermsModal({ open, onClose }: TermsModalProps) {
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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Terms of Service"
    >
      <button
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close terms of service"
      />

      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-[#232f48] bg-[#0a0e17] shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-[#232f48] px-4 py-3">
          <p className="text-sm font-semibold text-white">Terms of Service</p>
          <button
            className="rounded-lg border border-[#232f48] bg-[#111722] px-3 py-1.5 text-sm font-semibold text-white hover:border-[#324467]"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
          <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300">
            <h2>Terms of Service (Chrome Extension)</h2>
            <p>
              <strong>Effective date:</strong> [Jan 2, 2026]
              <br />
              <strong>Extension name:</strong> [StyleAI / Virtual Fitting Room]
              <br />
              <strong>Contact:</strong> [support@yourdomain.com]
            </p>
            <p>
              By installing or using the Extension, you agree to these Terms.
            </p>

            <h3>1) The service</h3>
            <p>
              The Extension provides tools to assist with features like virtual
              try-on, comparing images, and viewing results. Features may change
              over time.
            </p>

            <h3>2) Accounts</h3>
            <p>
              If you sign in, you are responsible for maintaining the
              confidentiality of your account and for all activity that occurs
              under it.
            </p>

            <h3>3) Acceptable use</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Extension for illegal purposes.</li>
              <li>Interfere with or disrupt the Extension or its services.</li>
              <li>Attempt to reverse engineer, bypass security, or misuse APIs.</li>
              <li>Upload content you don’t have rights to use.</li>
            </ul>

            <h3>4) User content (photos and uploads)</h3>
            <p>
              If you upload or provide images, you represent that you have the
              rights to do so. You grant us a limited license to process that
              content only to provide the Extension’s functionality.
            </p>

            <h3>5) Third-party sites and services</h3>
            <p>
              The Extension may interact with third-party sites (e.g., Amazon,
              Temu, Lululemon) and third-party services (e.g.,
              authentication/storage providers). We are not responsible for
              third-party sites/services, and we are not affiliated with or
              endorsed by those retailers unless explicitly stated.
            </p>

            <h3>6) Disclaimers</h3>
            <p>
              The Extension is provided “as is” and “as available.” We do not
              guarantee uninterrupted operation, accuracy of results, or that
              results will meet your expectations. Virtual try-on outputs are
              illustrative and may be imperfect.
            </p>

            <h3>7) Limitation of liability</h3>
            <p>
              To the maximum extent permitted by law, we will not be liable for
              indirect, incidental, special, consequential, or punitive damages,
              or any loss of data, revenue, or profits arising from your use of
              the Extension.
            </p>

            <h3>8) Termination</h3>
            <p>
              We may suspend or terminate access to the Extension if you violate
              these Terms or if necessary to protect the service or users. You
              may stop using the Extension at any time by uninstalling it.
            </p>

            <h3>9) Changes to the terms</h3>
            <p>
              We may update these Terms from time to time. Continued use after
              changes means you accept the updated Terms.
            </p>

            <h3>10) Governing law</h3>
            <p>
              These Terms are governed by the laws of [Your State/Country],
              without regard to conflict of law principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


