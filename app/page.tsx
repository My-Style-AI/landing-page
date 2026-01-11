"use client";

import { useState } from "react";
import { MediaModal } from "./components/MediaModal";
import { PolicyModal } from "./components/PolicyModal";
import { TermsModal } from "./components/TermsModal";
import { SupportModal } from "./components/SupportModal";

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // TODO: Replace with your real embed URL (YouTube/Vimeo). Example:
  // https://www.youtube.com/embed/VIDEO_ID?autoplay=1
  const demoEmbedUrl =
    "https://www.loom.com/embed/17fab80c3e1d4aebad1f2b397a21870f";

  return (
    <main className="flex flex-col pt-16">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-[#232f48] bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gradient text-3xl">
                  checkroom
                </span>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  TryB4Buy
                </h2>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                href="#benefits"
              >
                Benefits
              </a>
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
                href="/coming-soon"
                target="_blank"
              >
                Coming Soon
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
              <button
                className="md:hidden text-white"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                type="button"
              >
                <span className="material-symbols-outlined">
                  {isMobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-90 md:hidden" id="mobile-nav">
          <button
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            type="button"
          />
          <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-4 pt-4 pb-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gradient text-3xl">
                    checkroom
                  </span>
                  <span className="text-lg font-bold tracking-tight text-white">
                    TryB4Buy
                  </span>
                </div>
                <button
                  className="rounded-lg border border-[#232f48] bg-[#111722] px-3 py-2 text-white hover:border-[#324467]"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  type="button"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="mt-6 flex-1 overflow-y-auto">
                <nav className="flex flex-col gap-4">
                  <a
                    className="text-2xl font-bold text-white"
                    href="#features"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a
                    className="text-2xl font-bold text-white"
                    href="#how-it-works"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    How it Works
                  </a>
                  <a
                    className="text-2xl font-bold text-white"
                    href="#benefits"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Benefits
                  </a>
                  <a
                    className="text-2xl font-bold text-white"
                    href="/coming-soon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Coming Soon
                  </a>

                  <div className="mt-10 grid grid-cols-1 gap-4">
                    <button
                      className="h-16 rounded-2xl bg-[#135bec] px-6 text-lg font-bold text-white hover:bg-[#1d6bf5]"
                      onClick={() => setIsMobileMenuOpen(false)}
                      type="button"
                    >
                      Add to Chrome
                    </button>
                    <button
                      className="h-16 rounded-2xl border border-[#324467] bg-[#111722]/50 px-6 text-lg font-bold text-white hover:bg-[#111722] hover:border-gray-500"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsDemoOpen(true);
                      }}
                      type="button"
                    >
                      Watch Demo
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      ) : null}

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
                  New v1.0 Released
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
                <button
                  className="flex h-14 items-center justify-center rounded-lg border border-[#324467] bg-[#111722]/50 px-8 text-base font-medium text-white transition-all hover:bg-[#111722] hover:border-gray-500 cursor-pointer"
                  onClick={() => setIsDemoOpen(true)}
                >
                  <span className="material-symbols-outlined mr-2">
                    play_circle
                  </span>
                  Watch Demo
                </button>
              </div>

              {/*  <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 pt-2">
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
                 {" "}
              </div> */}
            </div>

            {/* Right Visual */}
            <div className="relative z-10 group flex justify-center lg:justify-end h-full">
              <div className="absolute -inset-2 bg-gradient-brand rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" />
              <div className="relative rounded-[2rem] bg-[#111722] border border-[#232f48] overflow-hidden w-full max-w-[450px] aspect-[3/4] shadow-2xl group cursor-col-resize select-none">
                <div
                  className="absolute inset-0 bg-cover bg-top"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                  }}
                >
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl font-bold text-xs tracking-widest flex items-center gap-2 shadow-lg">
                      <span className="material-symbols-outlined text-sm">
                        person
                      </span>
                      ORIGINAL
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 bg-cover bg-top animate-hero-animation-mask group-hover:[animation-play-state:paused] will-change-[clip-path]"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPGOkFOLa2tT-XSLKtLkOQg-u9Zp_o-R-AWpxRRBd8gQCTgQ3jcTiLsFvtjH_67tsNqik7e25qSSUkBhocoLdKaHoBB0yRFJ1TpltiyhtZersuBt7rRp5HZ2-otdcz2c_e8UxJGcEXCqVDMU1ffHpIt7ku9HB--HNF6G2ID2ttK7AvA4Dd6_hsO9c5a9n02-fi-yOHaWQcYRLs3T2dDEnTg0cRnLwRONCrni3NpcPNKW_3HxjSQ2wS8Wz4NdxDD21FhkB_fomzpnY")',
                  }}
                >
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-gradient-brand text-black px-4 py-2 rounded-xl font-bold text-xs tracking-widest flex items-center gap-2 shadow-lg">
                      <span className="material-symbols-outlined text-sm">
                        auto_awesome
                      </span>
                      AI TRY-ON
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 bottom-0 w-1 bg-white z-30 shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-hero-animation-handle group-hover:[animation-play-state:paused] flex items-center justify-center will-change-[left]">
                  <div className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white text-primary hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl font-bold">
                      compare_arrows
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none border-[12px] border-[#111722] rounded-[2rem] z-40" />
              </div>
            </div>
            {/* end right */}
          </div>
        </div>
      </section>

      {/* Value / Benefits */}
      <section
        className="py-24 bg-[#0a0e17] relative overflow-hidden"
        id="benefits"
      >
        {/* subtle glows (same palette) */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#135bec] rounded-full blur-[160px] opacity-[0.08] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#feca57] rounded-full blur-[160px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-5">
              How It <span className="text-gradient">Benefits You</span>
            </h2>
            <p className="text-gray-400 text-lg">
              The “try before you buy” advantage—built for confidence and fewer
              returns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Tile 1 */}
            <div className="group rounded-xl bg-[#111722] border border-[#232f48] p-6 hover:border-[#135bec]/30 transition-all hover:translate-y-[-4px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#192233] flex items-center justify-center group-hover:bg-gradient-brand transition-colors duration-300 shrink-0">
                  <span className="material-symbols-outlined text-white text-[28px]">
                    assignment_return
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Reduce Returns
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Make smarter picks upfront with fewer “doesn’t fit / doesn’t
                    suit me” surprises.
                  </p>
                </div>
              </div>
            </div>
            {/* Tile 2 */}
            <div className="group rounded-xl bg-[#111722] border border-[#232f48] p-6 hover:border-[#135bec]/30 transition-all hover:translate-y-[-4px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#192233] flex items-center justify-center group-hover:bg-gradient-brand transition-colors duration-300 shrink-0">
                  <span className="material-symbols-outlined text-white text-[28px]">
                    schedule
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Save Time Shopping
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Compare looks in seconds and move on fast—no more endless
                    tabs and second-guessing.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile 3 */}
            <div className="group rounded-xl bg-[#111722] border border-[#232f48] p-6 hover:border-[#ff6b6b]/30 transition-all hover:translate-y-[-4px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#192233] flex items-center justify-center group-hover:bg-gradient-brand transition-colors duration-300 shrink-0">
                  <span className="material-symbols-outlined text-white text-[28px]">
                    auto_fix_high
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Stop Guessing Looks
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Instantly preview how the outfit works with your body,
                    lighting, and vibe.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile 4 */}
            <div className="group rounded-xl bg-[#111722] border border-[#232f48] p-6 hover:border-[#feca57]/30 transition-all hover:translate-y-[-4px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#192233] flex items-center justify-center group-hover:bg-gradient-brand transition-colors duration-300 shrink-0">
                  <span className="material-symbols-outlined text-white text-[28px]">
                    checkroom
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Buy What Actually Suits You
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Choose pieces that flatter your shape and match your
                    personal style—on purpose.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile 5 */}
            <div className="group rounded-xl bg-[#111722] border border-[#232f48] p-6 hover:border-[#feca57]/30 transition-all hover:translate-y-[-4px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#192233] flex items-center justify-center group-hover:bg-gradient-brand transition-colors duration-300 shrink-0">
                  <span className="material-symbols-outlined text-white text-[28px]">
                    verified
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Shop with Confidence
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    See the look on you before you buy, so you feel confident
                    checking out.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile 6 */}
            <div className="group rounded-xl bg-[#111722] border border-[#232f48] p-6 hover:border-[#feca57]/30 transition-all hover:translate-y-[-4px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#192233] flex items-center justify-center group-hover:bg-gradient-brand transition-colors duration-300 shrink-0">
                  <span className="material-symbols-outlined text-white text-[28px]">
                    lock
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Privacy-First by Design
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Your photo stays yours—designed to keep your try-ons private
                    while you browse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative overflow-hidden" id="features">
        <div className="absolute top-[20%] left-[-20%] w-[800px] h-[800px] bg-[#135bec]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-6">
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
              <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-6">
                How It <span className="text-gradient">Works</span>
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
                <a
                  className="cursor-pointer flex items-center gap-2 text-[#135bec] font-bold hover:text-white transition-colors"
                  href="/docs"
                  target="_blank"
                >
                  Read the Docs{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </a>
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
                <button
                  className="absolute inset-0 bg-black/50 flex items-center justify-center group hover:bg-black/40 transition-colors"
                  onClick={() => setIsDemoOpen(true)}
                  aria-label="Play demo video"
                >
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-5xl fill-current">
                      play_arrow
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MediaModal
        open={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        title="Demo"
        embedUrl={demoEmbedUrl}
      />

      <PolicyModal
        open={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <TermsModal open={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <SupportModal
        open={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
        email="tryon.style.ai@gmail.com"
      />

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
            <a href="/" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-400">
                checkroom
              </span>
              <span className="font-bold text-lg">TryB4Buy</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-sm text-gray-400">
            <a className="hover:text-white transition-colors" href="/privacy">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="/terms">
              Terms of Service
            </a>
            <button
              className="hover:text-white transition-colors"
              onClick={() => setIsSupportOpen(true)}
              type="button"
            >
              Support
            </button>
            <a
              className="hover:text-white transition-colors"
              href="https://docs.google.com/forms/d/e/1FAIpQLScXTUCnfWs4ekkP5FsUvBi_Im_Dl8ES6xiU-YSYC9PfTtwdog/viewform"
              target="_blank"
            >
              Leave Feedback
            </a>
            <a className="hover:text-white transition-colors" href="/docs">
              Docs
            </a>
            <a
              className="hover:text-white transition-colors"
              href="/coming-soon"
            >
              Coming Soon
            </a>
          </div>
          <div className="text-sm text-gray-600">
            © 2026 TryB4Buy Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
