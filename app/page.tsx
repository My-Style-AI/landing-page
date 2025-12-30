export default function Home() {
  return (
    <main className="flex flex-col pt-16">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-[#232f48] bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gradient text-3xl">
                checkroom
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white">
                AI Try-On
              </h2>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                href="#features"
              >
                Features
              </a>
              <a
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                href="#how-it-works"
              >
                How it Works
              </a>
              <a
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                href="#reviews"
              >
                Reviews
              </a>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex group relative overflow-hidden rounded-lg bg-[#135bec] px-5 py-2 transition-all hover:bg-[#1d6bf5] hover:scale-105 active:scale-95">
                <span className="relative z-10 text-sm font-bold text-white flex items-center gap-2">
                  Add to Chrome
                  <span className="material-symbols-outlined text-[18px]">
                    add_circle
                  </span>
                </span>
              </button>

              {/* Mobile Menu Icon */}
              <button className="md:hidden text-white" aria-label="Open menu">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#ff6b6b] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#feca57] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        <div className="layout-content-container max-w-[1280px] px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#232f48]/50 border border-[#232f48] w-fit mx-auto lg:mx-0 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-gradient-brand animate-pulse" />
                <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">
                  New v2.0 Released
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                Shop Smarter.
                <br />
                <span className="text-gradient">Try Before You Buy.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                The first AI-powered Chrome extension that lets you visualize
                any outfit on{" "}
                <span className="text-white font-medium">your body</span>{" "}
                instantly while you browse your favorite stores.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button className="flex h-14 items-center justify-center rounded-lg bg-[#135bec] px-8 text-base font-bold text-white shadow-lg shadow-[#135bec]/25 transition-all hover:bg-[#1d6bf5] hover:scale-105 active:scale-95">
                  Add to Chrome - It&apos;s Free
                </button>
                <button className="flex h-14 items-center justify-center rounded-lg border border-[#324467] bg-[#111722]/50 px-8 text-base font-medium text-white transition-all hover:bg-[#111722] hover:border-gray-500">
                  <span className="material-symbols-outlined mr-2">
                    play_circle
                  </span>
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 pt-2">
                <div className="flex -space-x-2">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-600 bg-center bg-cover"
                    aria-label="User avatar 1"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtmjcE8HAiZ9SHeoIM1Z65cGX3aUwI64mIBAvaTtlqa1AkF3EiwJbh_EL1QfwSqnOzfJFAIzyBJV-e64rd_lnCrnCsEo5KhbKnapyrZlkgQOheCFdG3HtxQvZLmaNj3lZDvfFcA5X_RI7uH9C_BV7yOXy2o-DkeviZSgcNpDKHhL5B9pGxErESGwxaZ3OFDt21xs-McCWrTK0hsBY3QusB322Z676SjbjC7TX-2OJ_HNnAV5kO07MhKt-CqNlJjOz_0kW57nT_Zfw")',
                    }}
                  />
                  <div
                    className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-600 bg-center bg-cover"
                    aria-label="User avatar 2"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkvkfVpVY_dSRZ9DXXYTkTusm80krtETGIfByzyMr61e1YS-Qr0aWl6ybfqbaE6SV7Kslp-DHI6pGoBz3UlCmpNk3Osp9sPJSyMMAWNEsYrzpj2aaYicEZ4E3wriolGdHuWrXY8wsjuxbNpnjEYNaqy8gn-BEEyb_m2-4wUCIsayWswLVXJnOml-AfUAv8I3BVQi40l3XhufCirl-quy2DgigDU7rq30lf4OmtRl7mtk9p1hKflsZfrTOCWIwOX8GjYr1PXnrS9pw")',
                    }}
                  />
                  <div
                    className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-600 bg-center bg-cover"
                    aria-label="User avatar 3"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFMi70qLNR2FdEYd1ws0c62ChkdE1exXSxYBczmzCwDhg4aBdux506IvCYJfFD5IH-Cw9bd88g16AGi7KT0itsMJ_17C82yuF80t-UC4GFH-uavGVdIq1XsQUvKAn7vyA_Han4tp2uTwOw7qMLDBbA-3Rd1KYkv2lvDV9zhIp66nB5pUd4Zfe0o8mFiiv3zWYz2IivXsSQAT26kZxAPd7E8Uj6ScLsbwANWiw1s1FUaN85cLiNFCT17blrF7vQqp6_6YZHJzJiRxE")',
                    }}
                  />
                </div>
                <p>Used by 10,000+ shoppers</p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative z-10 group">
              <div className="absolute -inset-1 bg-gradient-brand rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative rounded-2xl bg-[#111722] border border-[#232f48] overflow-hidden aspect-4/3 shadow-2xl">
                {/* Mockup Header */}
                <div className="h-8 bg-[#0a0e17] flex items-center px-4 gap-2 border-b border-[#232f48]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <div className="ml-4 flex-1 h-5 bg-[#1c2536] rounded-md flex items-center px-2 text-[10px] text-gray-500 font-mono">
                    fashion-store.com/product/summer-jacket
                  </div>
                </div>

                {/* Mockup Content */}
                <div
                  className="relative h-full w-full bg-cover bg-center"
                  aria-label="Split screen showing a model on the left and the same model wearing a digitally applied yellow jacket on the right"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMf0Btt1fIhQoNfv0c3dpHQl1JY7Oh_P6HtwswzYIZzGhLXbVaHFukQzpGvhpjIGbsKnUYVKKOKKOSwVBRP6evUPAC0EgQn3un8NZkZfJT9qOvNfhDKlqXFioYkUznT50h5F6aim6BkDR9JzaUsNhaINOsX17hu3nyCJGSFWDzxueV2WxyfIEH1r22z3BCsyPRLSdGyn1QC5sOSqnqVlE5cpndUO5LppHYKjOBagRhol782hjg9Sxw41gSU9OTnOyncBVfQGIjsR4")',
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="bg-[#111722]/90 p-1 rounded-xl border border-[#324467] shadow-2xl flex gap-1 items-center">
                      <div className="w-48 h-64 rounded-lg overflow-hidden relative">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          aria-label="Original model photo"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIYZ9DwhRXyqZQIYAO80Veui5jXtAxJupMNR92BzyJjKh_ofgw1ac3UViTDP3vsU9DGTQnaH3GwUc7sU-3d3PmW6IFJnPM7NjN_lWCW4Zn-sYvO71eMgIB2sZwdY3FTDyuPfXOaHlliuTMDXimjPgFdCTfU_eZIltbgzjtNxmGiih4LQySOwrCXHHNntVqFEZSGLEsfk5nokwgewm2d_0HOOEQ8GyKOHskbjkDvD3G4R9Nhwau9NAjpJuEvvciroKmg6-UPCd0Mxg")',
                          }}
                        />
                        <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-[10px] font-bold">
                          BEFORE
                        </div>
                      </div>

                      <div className="h-64 w-px bg-[#324467]" />

                      <div className="w-48 h-64 rounded-lg overflow-hidden relative">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          aria-label="Model photo with AI applied clothing"
                          style={{
                            backgroundImage:
                              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzBpzu0SAKiy2E9dZb5W2ioZIL43fQrPJ8vDn4mxKCV1lPmxobtkfSXweFR5hleWS-e49oN1hIWWpyz_4vtnkvgYgXcrwJDNyw957UI_weAESc_IORPeDY6PRITqJjx3FbrqKKqBe9lS_BtJm1uE5BOVMhSaRx3gfvcMcRs-y3d5W1BL1CklG-J1qrmsCcFkXS954Pqu2jLoktXItemNyIAUankyz2DopUlcTGDal7q-PMkKJVxycZkTsoJ9krj0bh67KPhGXRtc8")',
                          }}
                        />
                        <div className="absolute top-2 right-2 bg-gradient-brand text-black font-bold px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">
                            auto_awesome
                          </span>
                          AI ON
                        </div>
                        <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-[10px] font-bold">
                          AFTER
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end right */}
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="border-y border-[#232f48] bg-[#0a0e17]" id="reviews">
        <div className="max-w-[1280px] mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between items-center gap-8">
            {/* Rating Widget */}
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-black text-gradient">4.9</span>
                  <div className="flex text-[#feca57] pb-2">
                    <span className="material-symbols-outlined fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined fill-current">
                      star_half
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Based on 2,400+ Chrome Store reviews
                </p>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-bold font-display">
                FASHION<span className="font-light">NOVA</span>
              </span>
              <span className="text-xl font-bold font-display italic">
                ASOS
              </span>
              <span className="text-xl font-bold font-display">ZARA</span>
              <span className="text-xl font-bold font-display tracking-widest">
                H&amp;M
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative overflow-hidden" id="features">
        <div className="absolute top-[20%] left-[-20%] w-[800px] h-[800px] bg-[#135bec]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Experience the <span className="text-gradient">Magic of AI</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Our trailblazing technology adapts to your body shape, lighting,
              and pose to deliver the most realistic try-on experience on the
              web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-[#111722] border border-[#232f48] hover:border-[#ff6b6b]/30 transition-all hover:translate-y-[-4px]">
              <div className="w-14 h-14 rounded-xl bg-[#192233] flex items-center justify-center mb-6 group-hover:bg-gradient-brand transition-colors duration-300">
                <span className="material-symbols-outlined text-white text-3xl">
                  accessibility_new
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Body-Adaptive Fit
              </h3>
              <p className="text-gray-400 leading-relaxed">
                The AI maps the clothing to your specific measurements, showing
                exactly how tight or loose the fit will be.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-[#111722] border border-[#232f48] hover:border-[#feca57]/30 transition-all hover:translate-y-[-4px]">
              <div className="w-14 h-14 rounded-xl bg-[#192233] flex items-center justify-center mb-6 group-hover:bg-gradient-brand transition-colors duration-300">
                <span className="material-symbols-outlined text-white text-3xl">
                  universal_currency_alt
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Universal Compatibility
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Works on 100+ top fashion sites including Zara, H&amp;M, ASOS,
                and more. No integration needed by the store.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-[#111722] border border-[#232f48] hover:border-[#ff6b6b]/30 transition-all hover:translate-y-[-4px]">
              <div className="w-14 h-14 rounded-xl bg-[#192233] flex items-center justify-center mb-6 group-hover:bg-gradient-brand transition-colors duration-300">
                <span className="material-symbols-outlined text-white text-3xl">
                  dresser
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Virtual Wardrobe
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Save your favorite tries to your digital closet. Mix and match
                items from different stores in one view.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#0a0e17]" id="how-it-works">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                How It Works
              </h2>

              <div className="flex flex-col gap-8">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center font-bold text-xl text-black shadow-lg shadow-[#feca57]/20">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Install Extension
                    </h3>
                    <p className="text-gray-400">
                      Get it from the Chrome Web Store in seconds. Pin it to
                      your browser for easy access.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center font-bold text-xl text-black shadow-lg shadow-[#feca57]/20">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Upload Your Photo
                    </h3>
                    <p className="text-gray-400">
                      Upload a full-body photo to your secure private vault.
                      Your photos never leave your device.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center font-bold text-xl text-black shadow-lg shadow-[#feca57]/20">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Browse &amp; Click &apos;Try On&apos;
                    </h3>
                    <p className="text-gray-400">
                      Shop as usual. When you see something you like, click the
                      &quot;Try On&quot; button that appears at the bottom of
                      the product page.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button className="flex items-center gap-2 text-[#135bec] font-bold hover:text-white transition-colors">
                  View full tutorial{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-[#232f48]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  aria-label="Video thumbnail showing the extension in action on a laptop screen"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDU7HvsFuuG10B6qscuVQcjZbnvQdqro0rpKaYvdrmwsjH4pcDZ7LkVP1iKEyuDQezJE2-GybEnjd3tYtrthUjeAhLLc7aPJLX17GB3xmQIIiOvZgB3mHSBaxJx-yECOGWbgZ9CcsqUqJs0bI3TBMWz1QFI9NsRUYyHR2TgIITqj0_KFVAj62D6pDOLIs4wv0EjAVKxdcDv6D0Q7snyOg1exP9yxZZ55qEJsefrFWnXQfr4rEIxqAf8cDXHojrZijADILlr6NB_pwI")',
                  }}
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group cursor-pointer hover:bg-black/40 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-5xl fill-current">
                      play_arrow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-5" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#324467] to-transparent" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to stop guessing?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the future of fashion. Save time, reduce returns, and shop with
            confidence.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button className="flex min-w-[240px] h-16 items-center justify-center rounded-xl bg-[#135bec] px-8 text-lg font-bold text-white shadow-[0_0_40px_-10px_#135bec] transition-all hover:bg-[#1d6bf5] hover:scale-105 hover:shadow-[0_0_60px_-10px_#135bec]">
              <span className="mr-2">Add to Chrome</span>
              <span className="material-symbols-outlined">rocket_launch</span>
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Compatible with Chrome, Brave, and Edge browsers.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-[#232f48] py-12">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gray-400">
              checkroom
            </span>
            <span className="font-bold text-lg">AI Try-On</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Support
            </a>
          </div>
          <div className="text-sm text-gray-600">
            © 2023 AI Try-On Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
