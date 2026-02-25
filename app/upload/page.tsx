"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useState } from "react";

type Status = "idle" | "uploading" | "success" | "error";

/** Photo requirements from docs (Photo Requirements for Best Results) */
const PHOTO_REQUIREMENTS_MODAL = [
  { id: "single-person", title: "Single person only" },
  { id: "full-body", title: "Full body visible" },
  { id: "front-facing", title: "Front-facing pose" },
  { id: "standing", title: "No sitting down" },
  { id: "background", title: "Clear background" },
] as const;

const ICON_COLOR = "#feca57";

/** Inline SVG icons for the modal so no font/text flashes before load */
function RequirementIcon({ id }: { id: string }) {
  const size = 24;
  const className = "shrink-0";
  switch (id) {
    case "single-person":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill={ICON_COLOR} />
        </svg>
      );
    case "full-body":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 3c-1.66 0-3 1.34-3 3v1h6v-1c0-1.66-1.34-3-3-3zm0 4h-3v8h2v-4h2v4h2v-8h-3z" fill={ICON_COLOR} />
        </svg>
      );
    case "front-facing":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 12.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-2.67 0-5.17-.87-7.24-2.35.43-.94 1.44-1.62 2.49-1.62 1.66 0 2.75 1.34 2.75 3 0 .98-.4 1.86-1.03 2.51.98.32 2.03.46 3.03.46s2.05-.14 3.03-.46c-.63-.65-1.03-1.53-1.03-2.51 0-1.66 1.09-3 2.75-3 1.05 0 2.06.68 2.49 1.62C17.17 19.13 14.67 20 12 20z" fill={ICON_COLOR} />
        </svg>
      );
    case "standing":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 4c2.21 0 4 1.79 4 4v6H8v-6c0-2.21 1.79-4 4-4zm0 2c-1.1 0-2 .9-2 2v4h4v-4c0-1.1-.9-2-2-2z" fill={ICON_COLOR} />
        </svg>
      );
    case "background":
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5v-2zm0 4h5v2H5v-2zm7 0h2v2h-2v-2z" fill={ICON_COLOR} />
        </svg>
      );
    default:
      return null;
  }
}

function CloseIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor" />
    </svg>
  );
}

const PHOTO_REQUIREMENTS = [
  {
    id: "lighting",
    title: "Good Lighting",
    description: "Avoid shadows and backlighting.",
    icon: "wb_sunny",
  },
  {
    id: "background",
    title: "Clear Background",
    description: "Stand against a plain, solid wall.",
    icon: "photo_size_select_large",
  },
  {
    id: "form",
    title: "Form Fitting",
    description: "Wear clothes that show your silhouette.",
    icon: "person",
  },
] as const;

function UploadPageContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [requirementsOpen, setRequirementsOpen] = useState<boolean>(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(true);

  const closeWelcomeModal = useCallback(() => {
    setShowWelcomeModal(false);
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = e.target.files?.[0];
      if (!selected) return;
      if (!selected.type.startsWith("image/")) {
        setErrorMessage("Please choose an image file (e.g. JPG, PNG).");
        return;
      }
      setErrorMessage("");
      setFile(selected);
      const url = URL.createObjectURL(selected);
      setPreview((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return url;
      });
      setStatus("idle");
    },
    []
  );

  const clearSelection = useCallback(() => {
    setFile(null);
    if (preview) {
      URL.revokeObjectURL(preview);
      setPreview(null);
    }
    setStatus("idle");
    setErrorMessage("");
  }, [preview]);

  const handleSubmit = useCallback(async () => {
    if (!file || !token.trim()) {
      setErrorMessage(
        token.trim()
          ? "Please select a photo."
          : "Invalid link. Scan the QR code again from the extension."
      );
      setStatus("error");
      return;
    }

    setStatus("uploading");
    setErrorMessage("");

    const formData = new FormData();
    formData.append("token", token);
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(
          (data as { message?: string }).message ||
            `Upload failed (${res.status}). Try again.`
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage(
        "Network error. Check your connection and try again."
      );
      setStatus("error");
    }
  }, [file, token]);

  const toggleRequirement = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <main
      className="min-h-dvh bg-[#0d0d0f] text-white flex flex-col pb-[env(safe-area-inset-bottom)] max-w-[100vw] overflow-x-hidden"
      style={{
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      {/* First-visit: Photo Requirements modal (from docs) */}
      {showWelcomeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            paddingLeft: "env(safe-area-inset-left)",
            paddingRight: "env(safe-area-inset-right)",
          }}
        >
          <div
            className="upload-modal-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden
            onClick={closeWelcomeModal}
          />
          <div
            className="upload-modal-panel relative w-[80%] max-w-[420px] max-h-[85dvh] flex flex-col rounded-3xl bg-[#1a1a1e] border border-[#232f48] shadow-2xl"
            role="dialog"
            aria-labelledby="photo-requirements-modal-title"
            aria-modal="true"
          >
            <div className="shrink-0 px-5 pt-5 pb-3 border-b border-[#232f48] flex items-start justify-between gap-3">
              <h2
                id="photo-requirements-modal-title"
                className="text-lg font-bold text-white"
              >
                Photo requirements
              </h2>
              <button
                type="button"
                onClick={closeWelcomeModal}
                className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-[#232f48] transition-colors"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
              <ul className="space-y-3">
                {PHOTO_REQUIREMENTS_MODAL.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-3 rounded-xl border border-[#232f48] bg-[#111722] p-4 items-center"
                  >
                    <RequirementIcon id={item.id} />
                    <h3 className="font-semibold text-white text-sm">
                      {item.title}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 p-4 pt-3 border-t border-[#232f48]">
              <button
                type="button"
                onClick={closeWelcomeModal}
                className="w-full h-12 rounded-xl font-semibold text-[#0d0d0f] transition-opacity active:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(255, 107, 107), rgb(254, 202, 87))",
                }}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header - mobile: TryB4Buy logo + close */}
      <header className="shrink-0 border-b border-[#232f48] bg-[#0d0d0f] sticky top-0 z-10">
        <div className="px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <img
              src="/TryB4Buy_logo.png"
              alt="TryB4Buy"
              className="h-9 w-auto"
            />
            <span className="font-bold text-lg truncate text-white">
              TryB4Buy
            </span>
          </Link>
          <Link
            href="/"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#feca57] text-black hover:bg-[#feca57]/90 active:opacity-90 transition-opacity"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex flex-col px-4 pb-6 pt-4 w-full">
        {status === "success" ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#feca57] flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-5xl text-black">
                check
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Photo uploaded
            </h1>
            <p className="text-gray-400 text-base leading-relaxed max-w-[280px]">
              Return to your computer and refresh the TryB4Buy extension to use
              your new photo.
            </p>
          </div>
        ) : (
          <>
            {/* Photo Requirements - accordion at TOP */}
            <section className="mb-6">
              <button
                type="button"
                onClick={() => setRequirementsOpen((o) => !o)}
                className="w-full flex items-center justify-between py-2 text-left"
                aria-expanded={requirementsOpen}
              >
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#feca57]">
                  Photo Requirements
                </h2>
                <span
                  className={`material-symbols-outlined text-xl text-[#feca57] transition-transform duration-200 ${
                    requirementsOpen ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              {requirementsOpen && (
                <div className="space-y-2 mt-1">
                  {PHOTO_REQUIREMENTS.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl bg-[#1a1a1e] border border-[#232f48] overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggleRequirement(item.id)}
                        className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
                      >
                        <span className="material-symbols-outlined text-[#feca57] text-xl shrink-0">
                          {item.icon}
                        </span>
                        <span className="font-semibold text-white flex-1 text-left">
                          {item.title}
                        </span>
                        <span
                          className={`material-symbols-outlined text-gray-400 shrink-0 transition-transform duration-200 ${
                            expandedId === item.id ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                      {expandedId === item.id && (
                        <p className="px-4 pb-3.5 pt-0 pl-13 text-sm text-gray-400">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Title & subtitle */}
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-white mb-1">
                Upload Your Photo
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed">
                Let&apos;s get your perfect look. Follow the guide above for best
                AI results.
              </p>
            </div>

            {!token && (
              <div className="rounded-xl bg-[#232f48]/40 border border-[#232f48] px-4 py-3 mb-4 text-sm text-gray-300">
                Missing link. Scan the QR code again from the TryB4Buy extension
                on your computer.
              </div>
            )}

            {/* Upload zone - dashed border, tap to start */}
            <div className="rounded-2xl border-2 border-dashed border-[#feca57]/60 bg-[#1a1a1e]/80 min-h-[220px] mb-5 flex items-center justify-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full min-h-[220px] object-contain"
                />
              ) : (
                <label className="flex flex-col items-center justify-center gap-2 w-full min-h-[220px] cursor-pointer p-6">
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#feca57]/25 text-[#feca57]">
                    <span className="material-symbols-outlined text-4xl">
                      add_a_photo
                    </span>
                  </span>
                  <span className="text-base font-semibold text-white">
                    Tap to start
                  </span>
                  <span className="text-sm text-gray-500 text-center">
                    Your photo will appear here
                  </span>
                </label>
              )}
            </div>

            {/* Actions - gradient Take photo (opens camera), Choose gallery */}
            <div className="flex flex-col gap-3">
              <label
                className="flex h-14 items-center justify-center gap-2 rounded-xl text-white font-bold text-base cursor-pointer active:opacity-90 transition-opacity shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(255, 107, 107), rgb(254, 202, 87))",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  capture
                  className="sr-only"
                  onChange={handleFileChange}
                />
                <span className="material-symbols-outlined text-xl">
                  camera_alt
                </span>
                Take a Photo
              </label>

              <label className="flex h-14 items-center justify-center gap-2 rounded-xl bg-[#135bec] text-white font-semibold text-base cursor-pointer active:opacity-90 transition-opacity">
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleFileChange}
                />
                <span className="material-symbols-outlined text-xl">
                  photo_library
                </span>
                Choose from Gallery
              </label>

              {file && (
                <>
                  <button
                    type="button"
                    onClick={clearSelection}
                    className="h-12 rounded-xl border border-[#232f48] text-gray-400 text-sm font-medium active:bg-[#111722]"
                  >
                    Remove photo
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "uploading"}
                    className="h-14 rounded-xl bg-[#135bec] text-white font-bold text-base shadow-lg shadow-[#135bec]/25 active:bg-[#1d6bf5] disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {status === "uploading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined animate-spin">
                          progress_activity
                        </span>
                        Uploading…
                      </span>
                    ) : (
                      "Upload photo"
                    )}
                  </button>
                </>
              )}
            </div>

            {errorMessage && (
              <p className="mt-4 text-sm text-[#ff6b6b] text-center">
                {errorMessage}
              </p>
            )}
          </>
        )}
      </div>

      {/* Footer disclaimer */}
      <footer className="shrink-0 border-t border-[#232f48] bg-[#0d0d0f] py-4 px-4">
        <p className="text-[10px] text-gray-500 text-center leading-relaxed uppercase tracking-wide">
          Photos are processed securely and deleted automatically after 24
          hours. Your privacy is our priority.
        </p>
      </footer>
    </main>
  );
}

function UploadPageFallback() {
  return (
    <main className="min-h-dvh bg-[#0d0d0f] flex items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-[#feca57] border-t-transparent animate-spin" aria-hidden />
    </main>
  );
}

export default function UploadPage() {
  return (
    <Suspense fallback={<UploadPageFallback />}>
      <UploadPageContent />
    </Suspense>
  );
}
