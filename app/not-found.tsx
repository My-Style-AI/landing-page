import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* Top Navigation */}
      <div className="border-b border-[#232f48] bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/TryB4Buy_logo.png"
                alt="TryB4Buy Logo"
                className="h-12 w-auto"
              />
              <h2 className="text-xl font-bold tracking-tight text-white">
                TryB4Buy
              </h2>
            </Link>
          </header>
        </div>
      </div>

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Background Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#ff6b6b] rounded-full blur-[120px] opacity-10 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#feca57] rounded-full blur-[120px] opacity-10 pointer-events-none" />

          {/* 404 Number */}
          <div className="relative z-10 mb-8">
            <h1 className="text-9xl md:text-[12rem] font-black leading-none text-gradient">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="relative z-10 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
              Oops! The page you&apos;re looking for seems to have tried on a
              different outfit and walked away. Let&apos;s get you back to
              shopping.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link
              href="/"
              className="flex h-14 items-center justify-center rounded-lg bg-[#135bec] px-8 text-base font-bold text-white shadow-lg shadow-[#135bec]/25 transition-all hover:bg-[#1d6bf5] hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined mr-2">home</span>
              Go Home
            </Link>
            <Link
              href="/docs"
              className="flex h-14 items-center justify-center rounded-lg border border-[#324467] bg-[#111722]/50 px-8 text-base font-medium text-white transition-all hover:bg-[#111722] hover:border-gray-500"
            >
              <span className="material-symbols-outlined mr-2">menu_book</span>
              View Docs
            </Link>
          </div>

          {/* Quick Links */}
          <div className="relative z-10 mt-12 pt-8 border-t border-[#232f48]">
            <p className="text-sm text-gray-500 mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/docs"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-[#232f48] py-8">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="/TryB4Buy_logo.png"
              alt="TryB4Buy Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-lg">TryB4Buy</span>
          </div>
          <p className="text-sm text-gray-600">
            © 2026 TryB4Buy Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

