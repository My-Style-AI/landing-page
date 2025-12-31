"use client";

import { useEffect } from "react";

type MediaModalProps = {
  open: boolean;
  title?: string;
  embedUrl?: string; // e.g. https://www.youtube.com/embed/..., https://player.vimeo.com/video/...
  onClose: () => void;
};

export function MediaModal({ open, title, embedUrl, onClose }: MediaModalProps) {
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
      aria-label={title ?? "Media player"}
    >
      <button
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-[#232f48] bg-[#0a0e17] shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-[#232f48] px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              {title ?? "Demo"}
            </p>
          </div>
          <button
            className="rounded-lg border border-[#232f48] bg-[#111722] px-3 py-1.5 text-sm font-semibold text-white hover:border-[#324467]"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="relative w-full aspect-video bg-black">
          {embedUrl ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={embedUrl}
              title={title ?? "Demo video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
              <p className="text-white font-semibold">No video URL set yet</p>
              <p className="text-gray-400 text-sm max-w-lg">
                Tell me your YouTube/Vimeo embed URL (or a hosted MP4) and I’ll
                wire it in so the demo plays here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


