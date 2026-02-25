import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Upload photo | TryB4Buy",
  description:
    "Upload your photo from your phone to use with TryB4Buy virtual try-on.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function UploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
