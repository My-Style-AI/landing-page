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
          <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300">
            <h2>Privacy Policy (Chrome Extension)</h2>
            <p>
              <strong>Effective date:</strong> [Jan 2, 2026]
              <br />
              <strong>Extension name:</strong> [StyleAI / Virtual Fitting Room]
              <br />
              <strong>Contact:</strong> [support@yourdomain.com]
            </p>

            <p>
              This Privacy Policy explains how this Chrome extension (the
              “Extension”) collects, uses, and shares information.
            </p>

            <h3>Information we collect</h3>
            <ul>
              <li>
                <strong>Account information:</strong> If you sign in, we receive
                basic profile info from your sign-in provider (e.g., name, email,
                profile photo) to show your logged-in state.
              </li>
              <li>
                <strong>Authentication tokens:</strong> We store session/auth
                tokens needed to keep you signed in.
              </li>
              <li>
                <strong>Product/page data you use with the Extension:</strong>{" "}
                When you use the try-on/compare features, the Extension may read
                the current product page URL and extract product images/details
                from the page to generate results.
              </li>
              <li>
                <strong>User content you provide:</strong> Photos you choose to
                upload or use for try-on (if applicable).
              </li>
              <li>
                <strong>Troubleshooting data:</strong> Minimal runtime
                information may be used to display in-extension error messages
                (we do not intend to collect sensitive browsing history beyond
                supported pages).
              </li>
            </ul>

            <h3>Where data is processed / stored</h3>
            <ul>
              <li>
                <strong>On your device (Chrome storage):</strong> Some data
                (like session state) may be stored locally using Chrome storage.
              </li>
              <li>
                <strong>Our backend providers:</strong> We use third-party
                services to provide authentication and storage (e.g., Supabase).
                Your data may be processed/stored by these providers in
                accordance with their policies.
              </li>
            </ul>

            <h3>How we use information</h3>
            <ul>
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

            <h3>Sharing of information</h3>
            <p>We do not sell your personal information. We may share information only:</p>
            <ul>
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

            <h3>Supported sites / permissions</h3>
            <p>
              The Extension is designed to operate on supported shopping sites
              (e.g., Amazon, Temu, Lululemon). It may inject scripts into
              supported pages to detect product images and enable try-on
              features. It does not intentionally collect data from unrelated
              sites.
            </p>

            <h3>Data retention</h3>
            <p>
              We keep data only as long as necessary to provide the Extension and
              related services, unless a longer retention period is required by
              law.
            </p>
            <p>
              You can request deletion of your account-related data by
              contacting us at [support@yourdomain.com].
            </p>

            <h3>Security</h3>
            <p>
              We use reasonable safeguards to protect information. However, no
              method of transmission or storage is 100% secure.
            </p>

            <h3>Your choices and rights</h3>
            <p>
              Depending on your location, you may have rights to access,
              correct, or delete your personal information. Contact
              [support@yourdomain.com] to make a request.
            </p>

            <h3>Children’s privacy</h3>
            <p>
              The Extension is not intended for children under 13 (or the age
              required by local law). We do not knowingly collect data from
              children.
            </p>

            <h3>Changes to this policy</h3>
            <p>
              We may update this policy from time to time. We will update the
              “Effective date” above when changes are posted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



