import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - TryB4Buy | AI Virtual Try-On Extension",
  description:
    "Terms of Service for TryB4Buy Chrome extension. Read our terms and conditions for using the AI-powered virtual try-on extension.",
  openGraph: {
    title: "Terms of Service - TryB4Buy",
    description: "Terms of Service for TryB4Buy AI virtual try-on extension",
    url: "https://tryb4buy.io/terms",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
              Terms of Service
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
              By installing or using the Extension, you agree to these Terms.
            </p>
          </header>

          {/* Content */}
          <div className="space-y-10 text-gray-300">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1) The service</h2>
              <p className="leading-relaxed">
                The Extension provides tools to assist with features like
                virtual try-on, comparing images, and viewing results. Features
                may change over time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2) Accounts</h2>
              <p className="leading-relaxed">
                If you sign in, you are responsible for maintaining the
                confidentiality of your account and for all activity that occurs
                under it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                3) Acceptable use
              </h2>
              <p className="leading-relaxed">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed mt-4">
                <li>Use the Extension for illegal purposes.</li>
                <li>
                  Interfere with or disrupt the Extension or its services.
                </li>
                <li>
                  Attempt to reverse engineer, bypass security, or misuse APIs.
                </li>
                <li>Upload content you don&apos;t have rights to use.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                4) User content (photos and uploads)
              </h2>
              <p className="leading-relaxed">
                If you upload or provide images, you represent that you have the
                rights to do so. You grant us a limited license to process that
                content only to provide the Extension&apos;s functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                5) Third-party sites and services
              </h2>
              <p className="leading-relaxed">
                The Extension may interact with third-party sites (e.g., Amazon,
                Temu, Lululemon, ASOS, Nike, Target, Zara, Shein) and third-party services (e.g.,
                authentication/storage providers). We are not responsible for
                third-party sites/services, and we are not affiliated with or
                endorsed by those retailers unless explicitly stated.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6) Disclaimers</h2>
              <p className="leading-relaxed">
                The Extension is provided &quot;as is&quot; and &quot;as
                available.&quot; We do not guarantee uninterrupted operation,
                accuracy of results, or that results will meet your
                expectations. Virtual try-on outputs are illustrative and may be
                imperfect.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                7) Limitation of liability
              </h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, we will not be liable
                for indirect, incidental, special, consequential, or punitive
                damages, or any loss of data, revenue, or profits arising from
                your use of the Extension.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8) Termination</h2>
              <p className="leading-relaxed">
                We may suspend or terminate access to the Extension if you
                violate these Terms or if necessary to protect the service or
                users. You may stop using the Extension at any time by
                uninstalling it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                9) Changes to the terms
              </h2>
              <p className="leading-relaxed">
                We may update these Terms from time to time. Continued use after
                changes means you accept the updated Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">10) Governing law</h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of British Columbia, Canada
                and by the local laws of the user&apos;s country, without regard
                to conflict of law principles.
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










