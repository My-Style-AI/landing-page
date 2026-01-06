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
          <div className="space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Terms of Service (Chrome Extension)
              </h2>
              <div className="mt-3 rounded-xl border border-[#232f48] bg-[#111722] p-4 text-sm">
                <p>
                  <span className="text-gray-400">Effective date:</span>{" "}
                  <span className="text-white">[Jan 2, 2026]</span>
                </p>
                <p className="mt-1">
                  <span className="text-gray-400">Extension name:</span>{" "}
                  <span className="text-white">[StyleAI / Virtual Fitting Room]</span>
                </p>
                <p className="mt-1">
                  <span className="text-gray-400">Contact:</span>{" "}
                  <span className="text-white">[support@yourdomain.com]</span>
                </p>
              </div>
              <p className="mt-4 leading-relaxed">
                By installing or using the Extension, you agree to these Terms.
              </p>
            </div>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">1) The service</h3>
              <p className="leading-relaxed">
                The Extension provides tools to assist with features like virtual
                try-on, comparing images, and viewing results. Features may change
                over time.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">2) Accounts</h3>
              <p className="leading-relaxed">
                If you sign in, you are responsible for maintaining the
                confidentiality of your account and for all activity that occurs
                under it.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                3) Acceptable use
              </h3>
              <p className="leading-relaxed">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Extension for illegal purposes.</li>
                <li>Interfere with or disrupt the Extension or its services.</li>
                <li>Attempt to reverse engineer, bypass security, or misuse APIs.</li>
                <li>Upload content you don&apos;t have rights to use.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                4) User content (photos and uploads)
              </h3>
              <p className="leading-relaxed">
                If you upload or provide images, you represent that you have the
                rights to do so. You grant us a limited license to process that
                content only to provide the Extension&apos;s functionality.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                5) Third-party sites and services
              </h3>
              <p className="leading-relaxed">
                The Extension may interact with third-party sites (e.g., Amazon,
                Temu, Lululemon) and third-party services (e.g.,
                authentication/storage providers). We are not responsible for
                third-party sites/services, and we are not affiliated with or
                endorsed by those retailers unless explicitly stated.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">6) Disclaimers</h3>
              <p className="leading-relaxed">
                The Extension is provided &quot;as is&quot; and &quot;as
                available.&quot; We do not guarantee uninterrupted operation,
                accuracy of results, or that results will meet your expectations.
                Virtual try-on outputs are illustrative and may be imperfect.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                7) Limitation of liability
              </h3>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, we will not be liable for
                indirect, incidental, special, consequential, or punitive damages,
                or any loss of data, revenue, or profits arising from your use of
                the Extension.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">8) Termination</h3>
              <p className="leading-relaxed">
                We may suspend or terminate access to the Extension if you violate
                these Terms or if necessary to protect the service or users. You
                may stop using the Extension at any time by uninstalling it.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                9) Changes to the terms
              </h3>
              <p className="leading-relaxed">
                We may update these Terms from time to time. Continued use after
                changes means you accept the updated Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                10) Governing law
              </h3>
              <p className="leading-relaxed">
                These Terms are governed by the laws of [Your State/Country],
                without regard to conflict of law principles.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}



