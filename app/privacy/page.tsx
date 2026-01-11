import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - TryB4Buy | AI Virtual Try-On Extension",
  description:
    "Privacy Policy for TryB4Buy Chrome extension. Learn how we collect, use, and protect your data when using our AI-powered virtual try-on extension.",
  openGraph: {
    title: "Privacy Policy - TryB4Buy",
    description: "Privacy Policy for TryB4Buy AI virtual try-on extension",
    url: "https://tryb4buy.io/privacy",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-[#232f48] bg-[#050505]/85 backdrop-blur-md">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-gradient text-[22px]">
              checkroom
            </span>
            <span className="font-bold truncate">TryB4Buy</span>
          </div>
          <a
            className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
            href="/"
          >
            Back to site
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <article className="prose prose-invert max-w-none">
          {/* Header */}
          <header className="mb-10 pb-8 border-b border-[#232f48]">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Privacy Policy
            </h1>
            <div className="mt-6 rounded-xl border border-[#232f48] bg-[#111722] p-5 text-sm">
              <p className="text-gray-300">
                <span className="text-gray-400">Effective date:</span>{" "}
                <span className="text-white font-semibold">January 2, 2026</span>
              </p>
              <p className="mt-2 text-gray-300">
                <span className="text-gray-400">Extension name:</span>{" "}
                <span className="text-white font-semibold">TryB4Buy</span>
              </p>
              <p className="mt-2 text-gray-300">
                <span className="text-gray-400">Contact:</span>{" "}
                <a
                  href="mailto:tryon.style.ai@gmail.com"
                  className="text-[#135bec] font-semibold hover:text-white transition-colors"
                >
                  tryon.style.ai@gmail.com
                </a>
              </p>
            </div>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              This Privacy Policy explains how this Chrome extension (the
              &quot;Extension&quot;) collects, uses, and shares information.
            </p>
          </header>

          {/* Content */}
          <div className="space-y-10 text-gray-300">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Information we collect
              </h2>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed">
                <li>
                  <span className="font-semibold text-white">
                    Account information:
                  </span>{" "}
                  If you sign in, we receive basic profile info from your
                  sign-in provider (e.g., name, email, profile photo) to show
                  your logged-in state.
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
                  When you use the try-on/compare features, the Extension may
                  read the current product page URL and extract product
                  images/details from the page to generate results.
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
                  Minimal runtime information may be used to display
                  in-extension error messages (we do not intend to collect
                  sensitive browsing history beyond supported pages).
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Where data is processed / stored
              </h2>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed">
                <li>
                  <span className="font-semibold text-white">
                    On your device (Chrome storage):
                  </span>{" "}
                  Some data (like session state) may be stored locally using
                  Chrome storage.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Our backend providers:
                  </span>{" "}
                  We use third-party services to provide authentication and
                  storage (e.g., Supabase). Your data may be processed/stored by
                  these providers in accordance with their policies.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                How we use information
              </h2>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed">
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

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Sharing of information
              </h2>
              <p className="leading-relaxed">
                We do not sell your personal information. We may share
                information only:
              </p>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed mt-4">
                <li>
                  With service providers (e.g., Supabase, hosting/storage) to
                  operate the Extension.
                </li>
                <li>
                  For legal reasons if required by law or to protect
                  rights/safety.
                </li>
                <li>
                  With your direction (e.g., if you explicitly initiate an
                  action that sends data to a service).
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Supported sites / permissions
              </h2>
              <p className="leading-relaxed">
                The Extension is designed to operate on supported shopping sites
                (e.g., Amazon, Temu, Lululemon). It may inject scripts into
                supported pages to detect product images and enable try-on
                features. It does not intentionally collect data from unrelated
                sites.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Data retention</h2>
              <p className="leading-relaxed">
                We keep data only as long as necessary to provide the Extension
                and related services, unless a longer retention period is
                required by law.
              </p>
              <p className="leading-relaxed mt-4">
                You can request deletion of your account-related data by
                contacting us at{" "}
                <a
                  href="mailto:tryon.style.ai@gmail.com"
                  className="text-[#135bec] font-semibold hover:text-white transition-colors"
                >
                  tryon.style.ai@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Security</h2>
              <p className="leading-relaxed">
                We use reasonable safeguards to protect information. However, no
                method of transmission or storage is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Your choices and rights
              </h2>
              <p className="leading-relaxed">
                Depending on your location, you may have rights to access,
                correct, or delete your personal information. Contact{" "}
                <a
                  href="mailto:tryon.style.ai@gmail.com"
                  className="text-[#135bec] font-semibold hover:text-white transition-colors"
                >
                  tryon.style.ai@gmail.com
                </a>{" "}
                to make a request.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Children&apos;s privacy
              </h2>
              <p className="leading-relaxed">
                The Extension is not intended for children under 13 (or the age
                required by local law). We do not knowingly collect data from
                children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Changes to this policy
              </h2>
              <p className="leading-relaxed">
                We may update this policy from time to time. We will update the
                &quot;Effective date&quot; above when changes are posted.
              </p>
            </section>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-[#232f48]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-sm text-gray-500">
                Last updated: January 2, 2026
              </p>
              <a
                href="/"
                className="text-sm text-[#135bec] font-semibold hover:text-white transition-colors"
              >
                ← Back to Home
              </a>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}


