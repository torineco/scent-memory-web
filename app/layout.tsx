import type { Metadata, Viewport } from "next";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Scent Memory",
    default: "Scent Memory",
  },
  description: "自分の香りを探す旅の、静かな相棒。",
};

export const viewport: Viewport = {
  themeColor: "#f6f2e9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 sm:px-8">
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
