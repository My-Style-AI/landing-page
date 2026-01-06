"use client";

import { useEffect } from "react";

type PolicyModalProps = {
  open: boolean;
  onClose: () => void;
};

export function PolicyModal({ open, onClose }: PolicyModalProps) {
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
      aria-label="Privacy Policy"
    >
      <button
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close privacy policy"
      />

      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-[#232f48] bg-[#0a0e17] shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-[#232f48] px-4 py-3">
          <p className="text-sm font-semibold text-white">Privacy Policy</p>
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
                Privacy Policy (Chrome Extension)
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
                This Privacy Policy explains how this Chrome extension (the
                &quot;Extension&quot;) collects, uses, and shares information.
              </p>
            </div>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Information we collect
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-white">
                    Account information:
                  </span>{" "}
                  If you sign in, we receive basic profile info from your sign-in
                  provider (e.g., name, email, profile photo) to show your logged-in
                  state.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Authentication tokens:
                  </span>{" "}
                  We store session/auth tokens needed to keep you signed in.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Product/page data you use with the Extension:
                  </span>{" "}
                  When you use the try-on/compare features, the Extension may read
                  the current product page URL and extract product images/details
                  from the page to generate results.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    User content you provide:
                  </span>{" "}
                  Photos you choose to upload or use for try-on (if applicable).
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Troubleshooting data:
                  </span>{" "}
                  Minimal runtime information may be used to display in-extension
                  error messages (we do not intend to collect sensitive browsing
                  history beyond supported pages).
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Where data is processed / stored
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-white">
                    On your device (Chrome storage):
                  </span>{" "}
                  Some data (like session state) may be stored locally using Chrome
                  storage.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Our backend providers:
                  </span>{" "}
                  We use third-party services to provide authentication and storage
                  (e.g., Supabase). Your data may be processed/stored by these
                  providers in accordance with their policies.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                How we use information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Provide the Extension features (sign-in, showing your account
                  state, generating try-on/compare results).
                </li>
                <li>
                  Maintain and improve reliability (error handling, performance,
                  bug fixes).
                </li>
                <li>
                  Security (fraud/abuse prevention, protecting accounts and
                  services).
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Sharing of information
              </h3>
              <p className="leading-relaxed">
                We do not sell your personal information. We may share information
                only:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  With service providers (e.g., Supabase, hosting/storage) to
                  operate the Extension.
                </li>
                <li>
                  For legal reasons if required by law or to protect rights/safety.
                </li>
                <li>
                  With your direction (e.g., if you explicitly initiate an action
                  that sends data to a service).
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Supported sites / permissions
              </h3>
              <p className="leading-relaxed">
                The Extension is designed to operate on supported shopping sites
                (e.g., Amazon, Temu, Lululemon). It may inject scripts into
                supported pages to detect product images and enable try-on
                features. It does not intentionally collect data from unrelated
                sites.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Data retention</h3>
              <p className="leading-relaxed">
                We keep data only as long as necessary to provide the Extension
                and related services, unless a longer retention period is required
                by law.
              </p>
              <p className="leading-relaxed">
                You can request deletion of your account-related data by
                contacting us at <span className="text-white">[support@yourdomain.com]</span>.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Security</h3>
              <p className="leading-relaxed">
                We use reasonable safeguards to protect information. However, no
                method of transmission or storage is 100% secure.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Your choices and rights
              </h3>
              <p className="leading-relaxed">
                Depending on your location, you may have rights to access,
                correct, or delete your personal information. Contact{" "}
                <span className="text-white">[support@yourdomain.com]</span> to make
                a request.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Children&apos;s privacy
              </h3>
              <p className="leading-relaxed">
                The Extension is not intended for children under 13 (or the age
                required by local law). We do not knowingly collect data from
                children.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Changes to this policy
              </h3>
              <p className="leading-relaxed">
                We may update this policy from time to time. We will update the
                &quot;Effective date&quot; above when changes are posted.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}



