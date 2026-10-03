import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { terms } from "@/content/terms";

export const metadata: Metadata = {
  title: "利用規約",
};

export default function TermsPage() {
  return <LegalDocument content={terms} />;
}
