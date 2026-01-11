import Link from "next/link";

export default function ComingSoonPage() {
  const columns: Array<{
    title: string;
    hint: string;
    accent: "amber" | "blue" | "coral";
    items: Array<{ title: string; description: string }>;
  }> = [
    {
      title: "Planned",
      hint: "Queued up next",
      accent: "amber",
      items: [
        {
          title: "Virtual Wardrobe",
          description: "Save and organize all your try-ons in one place.",
        },
        /*  {
          title: "Size Recommendation Engine",
          description: "AI-powered size suggestions based on your measurements.",
        }, */
        {
          title: "Style Matching",
          description: "Get outfit suggestions and build complete looks.",
        },
        {
          title: "Fit Prediction",
          description: "See how items will fit your body type before buying.",
        },
        {
          title: "Price Tracking",
          description: "Get alerts when items you love go on sale.",
        },
      ],
    },
    {
      title: "In Progress",
      hint: "Actively building",
      accent: "blue",
      items: [
        {
          title: "Multi-product comparison",
          description:
            "Compare multiple products side-by-side to choose the best fit and look faster.",
        },
        {
          title: "Enhanced History",
          description: "Organize favorites and wishlists.",
        },
      ],
    },
    {
      title: "Exploring",
      hint: "Research & experiments",
      accent: "coral",
      items: [
        {
          title: "Batch Try-On",
          description: "Try multiple items at once.",
        },
        {
          title: "Social Sharing",
          description: "Share try-ons and get community feedback.",
        },
        {
          title: "Style Quiz",
          description: "Personalized recommendations based on your style.",
        },
        {
          title: "3D/AR Try-On",
          description: "Premium 3D rotation and AR experience.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-[#232f48] bg-[#050505]/85 backdrop-blur-md">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-gradient text-[22px]">
                checkroom
              </span>
              <span className="font-bold truncate">TryB4Buy</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <a
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              href="/docs"
            >
              Docs
            </a>
            <a
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
              href="/"
            >
              Back to site
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#232f48]/50 border border-[#232f48] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-brand animate-pulse" />
            <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
              Roadmap
            </span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            <span className="text-gradient">🚀 Coming Soon</span>
          </h1>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Here’s what we’re building next for TryB4Buy. This is a living
            roadmap—items may shift as we learn from feedback.
          </p>
        </div>
      </div>

      {/* Board */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {columns.map((col) => {
            const accent =
              col.accent === "amber"
                ? {
                    top: "bg-gradient-brand",
                    badge: "bg-[#feca57]/15 text-[#feca57] border-[#feca57]/20",
                    glow: "shadow-[0_0_80px_-30px_rgba(254,202,87,0.25)]",
                  }
                : col.accent === "blue"
                ? {
                    top: "bg-[#135bec]",
                    badge: "bg-[#135bec]/15 text-[#6ea8ff] border-[#135bec]/25",
                    glow: "shadow-[0_0_80px_-30px_rgba(19,91,236,0.25)]",
                  }
                : {
                    top: "bg-[#ff6b6b]",
                    badge: "bg-[#ff6b6b]/15 text-[#ff9a9a] border-[#ff6b6b]/25",
                    glow: "shadow-[0_0_80px_-30px_rgba(255,107,107,0.22)]",
                  };

            return (
              <div
                key={col.title}
                className={`rounded-2xl border border-[#232f48] bg-[#0a0e17] overflow-hidden ${accent.glow}`}
              >
                <div className={`h-1 w-full ${accent.top}`} />
                <div className="px-5 py-4 border-b border-[#232f48] bg-[#050505]/35">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-bold text-white">
                        {col.title}
                      </h2>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full border ${accent.badge}`}
                      >
                        {col.hint}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {col.items.length}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  {col.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-[#232f48] bg-[#111722] p-4 hover:border-[#324467] transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#192233] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-white text-[20px]">
                            auto_awesome
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-[#232f48] bg-[#111722] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-white font-bold">
              Want to influence the roadmap?
            </p>
            <p className="text-gray-400">
              Send feedback and tell us what to build next.
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center h-12 rounded-xl bg-[#135bec] px-6 text-sm font-bold text-white hover:bg-[#1d6bf5] transition-colors"
            href="https://docs.google.com/forms/d/e/1FAIpQLScXTUCnfWs4ekkP5FsUvBi_Im_Dl8ES6xiU-YSYC9PfTtwdog/viewform"
            target="_blank"
          >
            Send feedback
          </a>
        </div>
      </section>

      <footer className="border-t border-[#232f48] py-10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 TryB4Buy Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="/docs">
              Docs
            </a>
            <a className="hover:text-white transition-colors" href="/">
              Home
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
