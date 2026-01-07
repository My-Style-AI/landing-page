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
                  <h3 className="text-lg font-bold">Amazon</h3>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    amazon.com, amazon.ca, amazon.co.uk, amazon.de, amazon.fr,
                    amazon.it, amazon.es, amazon.co.jp, amazon.com.au,
                    amazon.com.mx, amazon.nl, amazon.se, amazon.pl,
                    amazon.com.br, amazon.in, amazon.sg, amazon.ae, amazon.sa,
                    amazon.tr, and all regional subdomains.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#232f48] bg-[#111722] p-5">
                  <h3 className="text-lg font-bold">Temu</h3>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    temu.com and all regional subdomains.
                  </p>
                </div>
                <div className="rounded-2xl border border-[#232f48] bg-[#111722] p-5">
                  <h3 className="text-lg font-bold">Lululemon</h3>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    lululemon.com, lululemon.com.hk, and all regional
                    subdomains.
                  </p>
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
                  {
                    title: "Size-Conscious Buyers",
                    body: "Visualize how different sizes and styles fit your body type.",
                  },
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
