import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TryB4Buy Documentation - How to Use AI Virtual Try-On Extension",
  description:
    "Complete documentation for TryB4Buy. Learn how to use the AI-powered virtual try-on extension on Amazon, Temu, and Lululemon. Step-by-step guide, troubleshooting, and FAQs.",
  openGraph: {
    title: "TryB4Buy Documentation",
    description: "Complete guide to using TryB4Buy AI virtual try-on extension",
    url: "https://tryb4buy.io/docs",
  },
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Top bar (docs-like) */}
      <div className="sticky top-0 z-50 border-b border-[#232f48] bg-[#050505]/85 backdrop-blur-md">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-gradient text-[22px]">
              checkroom
            </span>
            <span className="font-bold truncate">TryB4Buy Docs</span>
          </div>
          <a
            className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
            href="/"
          >
            Back to site
          </a>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                On this page
              </p>
              <nav className="mt-4 space-y-2 text-sm">
                <a
                  className="block text-gray-300 hover:text-white"
                  href="#supported-sites"
                >
                  Supported Sites
                </a>
                <a
                  className="block text-gray-300 hover:text-white"
                  href="#supported-clothing-types"
                >
                  Supported Clothing Types
                </a>
                <a
                  className="block text-gray-300 hover:text-white"
                  href="#how-to-use"
                >
                  How to Use
                </a>
                <div className="ml-4 space-y-1">
                  <a
                    className="block text-gray-400 hover:text-white"
                    href="#step-1"
                  >
                    Step 1 — Install
                  </a>
                  <a
                    className="block text-gray-400 hover:text-white"
                    href="#step-2"
                  >
                    Step 2 — Product page
                  </a>
                  <a
                    className="block text-gray-400 hover:text-white"
                    href="#step-3"
                  >
                    Step 3 — Try It On
                  </a>
                  <a
                    className="block text-gray-400 hover:text-white"
                    href="#step-4"
                  >
                    Step 4 — Sign in
                  </a>
                  <a
                    className="block text-gray-400 hover:text-white"
                    href="#step-5"
                  >
                    Step 5 — Upload photos
                  </a>
                  <a
                    className="block text-gray-400 hover:text-white"
                    href="#step-6"
                  >
                    Step 6 — Generate
                  </a>
                  <a
                    className="block text-gray-400 hover:text-white"
                    href="#step-7"
                  >
                    Step 7 — Compare
                  </a>
                </div>
                <a
                  className="block text-gray-300 hover:text-white"
                  href="#photo-requirements"
                >
                  Photo Requirements
                </a>
                <a
                  className="block text-gray-300 hover:text-white"
                  href="#usage-limits"
                >
                  Usage Limits
                </a>
                <a
                  className="block text-gray-300 hover:text-white"
                  href="#screenshots"
                >
                  Screenshots
                </a>
                <a
                  className="block text-gray-300 hover:text-white"
                  href="#who-is-this-for"
                >
                  Who Is This Best For?
                </a>
                <a
                  className="block text-gray-300 hover:text-white"
                  href="#feedback"
                >
                  Feedback
                </a>
                <a
                  className="block text-gray-300 hover:text-white"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="block text-gray-300 hover:text-white"
                  href="#troubleshooting"
                >
                  Troubleshooting
                </a>
                <div className="ml-4 space-y-1">
                  <a
                    className="block text-gray-400 hover:text-white"
                    href="#issue-try-it-on-button"
                  >
                    Try It On missing
                  </a>
                  <a
                    className="block text-gray-400 hover:text-white"
                    href="#issue-upload-fails"
                  >
                    Upload fails
                  </a>
                  <a
                    className="block text-gray-400 hover:text-white"
                    href="#issue-generation-fails"
                  >
                    Generation fails
                  </a>
                </div>
                <a
                  className="block text-gray-300 hover:text-white"
                  href="#changelog"
                >
                  Changelog
                </a>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <article className="min-w-0">
            {/* Title */}
            <header className="pb-8 border-b border-[#232f48]">
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                Documentation
              </h1>
              <p className="mt-4 text-gray-300 max-w-3xl leading-relaxed">
                Supported sites, step-by-step instructions, troubleshooting, and
                version details — all on one page.
              </p>
            </header>

            {/* Supported Sites */}
            <section
              id="supported-sites"
              className="scroll-mt-24 py-10 border-b border-[#232f48]"
            >
              <h2 className="text-2xl font-bold">Supported Sites</h2>
              <p className="mt-3 text-gray-300 leading-relaxed">
                The extension detects supported product pages. Look for the{" "}
                <span className="text-white font-semibold">“Try It On”</span>{" "}
                floating button.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-[#232f48] bg-[#111722] p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="shrink-0 w-7 h-7 flex items-center justify-center bg-white rounded p-1">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                        alt="Amazon logo"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold">Amazon</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    amazon.com, and all regional subdomains.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#232f48] bg-[#111722] p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="shrink-0 w-7 h-7 flex items-center justify-center">
                      <img
                        src="/temu.webp"
                        alt="Temu logo"
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold">Temu</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    temu.com and all regional subdomains.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#232f48] bg-[#111722] p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="shrink-0 w-7 h-7 flex items-center justify-center">
                      <img
                        src="/lululemon.png"
                        alt="Lululemon logo"
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold">Lululemon</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    lululemon.com, lululemon.com.hk, and all regional
                    subdomains.
                  </p>
                </div>
              </div>
            </section>

            {/* Supported Clothing Types */}
            <section
              id="supported-clothing-types"
              className="scroll-mt-24 py-10 border-b border-[#232f48]"
            >
              <h2 className="text-2xl font-bold">Supported Clothing Types</h2>
              <p className="mt-3 text-gray-300 leading-relaxed">
                The extension supports these clothing categories:
              </p>

              <div className="mt-8 space-y-8">
                {/* Tops & Shirts */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Tops &amp; Shirts
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">
                        Shirts (dress shirts, casual shirts)
                      </p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">T-shirts</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Polos</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Sleepshirts</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Tank tops</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Crop tops</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Halter tops</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Tube tops</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Camisoles</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Bodysuits</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Blouses</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Tops (general)</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Peplum tops</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Wrap tops</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Off-shoulder tops</p>
                    </div>
                  </div>
                </div>

                {/* Bottoms */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Bottoms
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Trousers</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Pants</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Jeans</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Sweatpants</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Joggers</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Chinos</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Cargo pants</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Leggings</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Shorts</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Skirts</p>
                    </div>
                  </div>
                </div>

                {/* Dresses & Gowns */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Dresses &amp; Gowns
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Dresses</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Gowns</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Nightgowns</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Wrap dresses</p>
                    </div>
                  </div>
                </div>

                {/* Outerwear */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Outerwear
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Jackets</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Blazers</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Bomber jackets</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Coats</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Overcoats</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Trench coats</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Sweaters</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Cardigans</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Hoodies</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Pullovers</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Sweatshirts</p>
                    </div>
                  </div>
                </div>

                {/* Other */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Other
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Robes</p>
                    </div>
                    <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4">
                      <p className="text-sm text-gray-300">Kimonos</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Use */}
            <section
              id="how-to-use"
              className="scroll-mt-24 py-10 border-b border-[#232f48]"
            >
              <h2 className="text-2xl font-bold">How to Use</h2>
              <div className="mt-6 space-y-6">
                <div id="step-1" className="scroll-mt-24">
                  <h3 className="text-lg font-bold">
                    Step 1: Install the Extension
                  </h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    Install from the Chrome Web Store. The extension appears in
                    your browser toolbar.
                  </p>
                </div>
                <div className="h-px bg-[#232f48]" />

                <div id="step-2" className="scroll-mt-24">
                  <h3 className="text-lg font-bold">
                    Step 2: Navigate to a Product Page
                  </h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    Visit a product page on Amazon, Temu, or Lululemon. Works
                    with:
                  </p>
                  <ul className="mt-3 list-disc pl-6 space-y-1 text-gray-300">
                    <li>
                      Shirts, T-shirts, Polos, Blouses, Tops, Tank Tops, Crop
                      Tops, Halter Tops
                    </li>
                    <li>
                      Trousers, Pants, Jeans, Leggings, Sweatpants, Joggers,
                      Chinos, Cargos
                    </li>
                    <li>Skirts, Shorts</li>
                    <li>Dresses, Gowns, Nightgowns, Wrap Dresses</li>
                    <li>
                      Jackets, Coats, Sweaters, Hoodies, Cardigans, Pullovers
                    </li>
                    <li>Robes, Kimonos</li>
                    <li>And other clothing items</li>
                  </ul>
                </div>
                <div className="h-px bg-[#232f48]" />

                <div id="step-3" className="scroll-mt-24">
                  <h3 className="text-lg font-bold">
                    Step 3: Click “Try It On”
                  </h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    On a supported product page, click the floating{" "}
                    <span className="text-white font-semibold">
                      “Try It On”
                    </span>{" "}
                    button in the bottom-right corner to open the virtual
                    fitting room.
                  </p>
                </div>
                <div className="h-px bg-[#232f48]" />

                <div id="step-4" className="scroll-mt-24">
                  <h3 className="text-lg font-bold">Step 4: Sign In</h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    Sign in with your Google account to access the try-on
                    feature.
                  </p>
                </div>
                <div className="h-px bg-[#232f48]" />

                <div id="step-5" className="scroll-mt-24">
                  <h3 className="text-lg font-bold">
                    Step 5: Upload Your Photo
                  </h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    Upload up to 2 photos of yourself. You can drag and drop
                    images into the upload area, or click to browse and select
                    files.
                  </p>
                  <div className="mt-4 rounded-2xl border border-[#232f48] bg-[#111722] p-5">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <span className="font-semibold text-white">
                        Supported formats:
                      </span>{" "}
                      JPEG, PNG, GIF, WebP, HEIC, HEIF, BMP, SVG
                      <br />
                      <span className="font-semibold text-white">
                        Maximum file size:
                      </span>{" "}
                      10 MB per image
                    </p>
                  </div>
                </div>
                <div className="h-px bg-[#232f48]" />

                <div id="step-6" className="scroll-mt-24">
                  <h3 className="text-lg font-bold">
                    Step 6: Select Your Photo &amp; Generate
                  </h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    Choose one of your uploaded photos, then click{" "}
                    <span className="text-white font-semibold">
                      “Generate Try-On”
                    </span>
                    . The AI processes your image and creates a virtual try-on
                    result.
                  </p>
                </div>
                <div className="h-px bg-[#232f48]" />

                <div id="step-7" className="scroll-mt-24">
                  <h3 className="text-lg font-bold">
                    Step 7: View &amp; Compare Results
                  </h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    Once generated, you can view the try-on full screen, compare
                    with the original via slider, download, share, and browse
                    your history.
                  </p>
                </div>
              </div>
            </section>

            {/* Photo Requirements */}
            <section
              id="photo-requirements"
              className="scroll-mt-24 py-10 border-b border-[#232f48]"
            >
              <h2 className="text-2xl font-bold">
                Photo Requirements for Best Results
              </h2>
              <p className="mt-3 text-gray-300 leading-relaxed">
                The extension shows a tooltip with these guidelines:
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-[#232f48] bg-[#111722] p-5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-[#192233] flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-lg">
                        person
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Single person only
                      </h3>
                      <p className="text-gray-400">
                        No group photos — the AI works best with photos
                        containing only one person.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#232f48] bg-[#111722] p-5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-[#192233] flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-lg">
                        straighten
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Full body visible
                      </h3>
                      <p className="text-gray-400">
                        Head to feet in frame — ensure your entire body is
                        visible from head to toe.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#232f48] bg-[#111722] p-5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-[#192233] flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-lg">
                        camera_front
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Front-facing pose
                      </h3>
                      <p className="text-gray-400">
                        Facing the camera — stand facing forward for the best
                        results.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-[#232f48] bg-[#111722] p-5">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-[#192233] flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-lg">
                        accessibility_new
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        No sitting down
                      </h3>
                      <p className="text-gray-400">
                        Standing pose preferred — standing photos produce more
                        accurate try-on results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Usage Limits */}
            <section
              id="usage-limits"
              className="scroll-mt-24 py-10 border-b border-[#232f48]"
            >
              <h2 className="text-2xl font-bold">Usage Limits</h2>
              <p className="mt-3 text-gray-300 leading-relaxed">
                Important information about try-on generation limits:
              </p>

              <div className="mt-6 rounded-2xl border border-[#feca57]/50 bg-[#111722] p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#feca57]/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#feca57] text-xl">
                      info
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Try-On Limit
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Users are limited to{" "}
                      <span className="text-white font-semibold">
                        3 try-on generations
                      </span>{" "}
                      per 24-hr period. Choose your photos and products
                      carefully to make the most of your tries.
                    </p>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                      This limit helps ensure fair usage and optimal performance
                      for all users. Each successful generation counts toward
                      your limit.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Screenshots */}
            <section
              id="screenshots"
              className="scroll-mt-24 py-10 border-b border-[#232f48]"
            >
              <h2 className="text-2xl font-bold">Screenshots</h2>
              <p className="mt-3 text-gray-300 leading-relaxed">
                See TryB4Buy in action. These screenshots show the key features
                and interface of the extension.
              </p>

              <div className="mt-8 space-y-12">
                {/* Popup Screenshot */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Try-On Popup Interface
                    </h3>
                    <p className="text-sm text-gray-400">
                      The popup that appears when you click &quot;Try It
                      On&quot;. Upload your photos and select the clothing item
                      you want to try on.
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4 overflow-hidden">
                    <img
                      src="/popup.png"
                      alt="TryB4Buy popup interface showing photo selection and current clothing item"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Try-On Result Screenshot */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      AI-Generated Try-On Result
                    </h3>
                    <p className="text-sm text-gray-400">
                      See how the AI seamlessly applies clothing to your photo.
                      The result shows a realistic visualization of how the item
                      looks on you.
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4 overflow-hidden">
                    <img
                      src="/tryon-result.png"
                      alt="TryB4Buy AI virtual try-on result showing a man wearing a grey sweater"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Compare Results Screenshot */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Compare Before &amp; After
                    </h3>
                    <p className="text-sm text-gray-400">
                      Use the comparison view to see your original photo
                      side-by-side with the AI-generated try-on. Navigate
                      between results and download your favorites.
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#232f48] bg-[#111722] p-4 overflow-hidden">
                    <img
                      src="/compare-results.png"
                      alt="TryB4Buy compare results interface showing before and after comparison with navigation controls"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Who is this best for */}
            <section
              id="who-is-this-for"
              className="scroll-mt-24 py-10 border-b border-[#232f48]"
            >
              <h2 className="text-2xl font-bold">Who Is This Best For?</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Online Shoppers",
                    body: "Reduce returns and make confident buying decisions by seeing how clothes look before purchasing.",
                  },
                  {
                    title: "Fashion Enthusiasts",
                    body: "Experiment with different styles and see how various items complement your look.",
                  },
                  /* {
                    title: "Size-Conscious Buyers",
                    body: "Visualize how different sizes and styles fit your body type.",
                  }, */
                  {
                    title: "Time-Saving Shoppers",
                    body: "Quickly preview multiple items without physical try-ons or returns.",
                  },
                  {
                    title: "International Shoppers",
                    body: "See how items look before ordering from international retailers where returns are difficult or expensive.",
                  },
                  {
                    title: "Gift Buyers",
                    body: "Ensure items will look good on the recipient before purchasing.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl border border-[#232f48] bg-[#111722] p-6"
                  >
                    <h3 className="text-lg font-bold">{x.title}</h3>
                    <p className="mt-2 text-gray-300 leading-relaxed">
                      {x.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Feedback */}
            <section
              id="feedback"
              className="scroll-mt-24 py-10 border-b border-[#232f48]"
            >
              <h2 className="text-2xl font-bold">How to Leave Feedback</h2>
              <div className="mt-6 rounded-2xl border border-[#232f48] bg-[#111722] p-6 space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  We value your feedback. Share your thoughts, suggestions, or
                  report issues.
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    Submit Feedback:
                  </span>{" "}
                  <a
                    className="text-[#135bec] font-semibold hover:text-white transition-colors"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScXTUCnfWs4ekkP5FsUvBi_Im_Dl8ES6xiU-YSYC9PfTtwdog/viewform"
                    target="_blank"
                  >
                    Click here to open the feedback form
                  </a>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>
                    Click the “Leave feedback” button in the toolbar popup
                  </li>
                  <li>Click the “Leave feedback” button on the results page</li>
                </ul>
              </div>
            </section>

            {/* About */}
            <section
              id="about"
              className="scroll-mt-24 py-10 border-b border-[#232f48]"
            >
              <h2 className="text-2xl font-bold">About</h2>
              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="rounded-2xl border border-[#232f48] bg-[#111722] p-6">
                  <h3 className="text-lg font-bold">Version Information</h3>
                  <ul className="mt-3 list-disc pl-6 space-y-1 text-gray-300">
                    <li>Version: 1.0.0</li>
                    <li>Technology: AI-Powered Virtual Try-On</li>
                    <li>Platform: Chrome Extension (Manifest V3)</li>
                    <li>Last Updated: January 2025</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#232f48] bg-[#111722] p-6">
                  <h3 className="text-lg font-bold">Features</h3>
                  <ul className="mt-3 list-disc pl-6 space-y-1 text-gray-300">
                    <li>Real-time virtual try-on using AI</li>
                    <li>Support for multiple clothing categories</li>
                    <li>Compare mode to see before/after</li>
                    <li>Download and share try-on results</li>
                    <li>History of previous try-ons</li>
                    <li>Works on major e-commerce platforms</li>
                    <li>Secure Google OAuth authentication</li>
                    <li>Fast and responsive interface</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#232f48] bg-[#111722] p-6">
                  <h3 className="text-lg font-bold">System Requirements</h3>
                  <ul className="mt-3 list-disc pl-6 space-y-1 text-gray-300">
                    <li>Google Chrome browser (latest version recommended)</li>
                    <li>Active internet connection</li>
                    <li>Google account for authentication</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#232f48] bg-[#111722] p-6 space-y-3">
                  <h3 className="text-lg font-bold">Privacy &amp; Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Photos uploaded for virtual try-on are processed securely
                    and used only for generating try-on results. We do not share
                    your personal information or photos with third parties
                    without your explicit consent.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    If you encounter issues or have questions, use the feedback
                    option above. We aim to respond within 48 hours.
                  </p>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section
              id="troubleshooting"
              className="scroll-mt-24 py-10 border-b border-[#232f48]"
            >
              <h2 className="text-2xl font-bold">Troubleshooting</h2>
              <div className="mt-6 space-y-6">
                <div id="issue-try-it-on-button" className="scroll-mt-24">
                  <h3 className="text-lg font-bold">
                    The “Try It On” button doesn’t appear
                  </h3>
                  <ul className="mt-3 list-disc pl-6 space-y-1 text-gray-300">
                    <li>
                      Ensure you&apos;re on a product page (not a category or
                      search page)
                    </li>
                    <li>Check that the product is a supported clothing item</li>
                    <li>Refresh the page and try again</li>
                    <li>Make sure the extension is enabled in Chrome</li>
                  </ul>
                </div>
                <div className="h-px bg-[#232f48]" />

                <div id="issue-upload-fails" className="scroll-mt-24">
                  <h3 className="text-lg font-bold">Upload fails</h3>
                  <ul className="mt-3 list-disc pl-6 space-y-1 text-gray-300">
                    <li>Check that your image is under 10 MB</li>
                    <li>
                      Ensure the file format is supported (JPEG, PNG, GIF, WebP,
                      HEIC, BMP, SVG)
                    </li>
                    <li>Try a different image</li>
                    <li>Check your internet connection</li>
                  </ul>
                </div>
                <div className="h-px bg-[#232f48]" />

                <div id="issue-generation-fails" className="scroll-mt-24">
                  <h3 className="text-lg font-bold">Try-on generation fails</h3>
                  <ul className="mt-3 list-disc pl-6 space-y-1 text-gray-300">
                    <li>Ensure you&apos;re signed in with Google</li>
                    <li>Check your internet connection</li>
                    <li>Try refreshing the page and generating again</li>
                    <li>Contact support via feedback if the issue persists</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Changelog */}
            <section id="changelog" className="scroll-mt-24 py-10">
              <h2 className="text-2xl font-bold">Changelog</h2>
              <div className="mt-6 rounded-2xl border border-[#232f48] bg-[#111722] p-6">
                <h3 className="text-lg font-bold">
                  Version 1.0.0 (January 2025)
                </h3>
                <ul className="mt-3 list-disc pl-6 space-y-1 text-gray-300">
                  <li>Initial release</li>
                  <li>Support for Amazon, Temu, and Lululemon</li>
                  <li>Virtual try-on functionality</li>
                  <li>Photo upload and management</li>
                  <li>Result comparison and sharing</li>
                  <li>History tracking</li>
                </ul>
              </div>

              <footer className="mt-10 pt-6 border-t border-[#232f48] text-sm text-gray-500">
                © 2025 TryB4Buy. All rights reserved.
              </footer>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
