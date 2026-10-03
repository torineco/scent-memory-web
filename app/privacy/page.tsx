import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { privacy } from "@/content/privacy";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return <LegalDocument content={privacy} />;
}
