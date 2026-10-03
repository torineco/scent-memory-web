import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "サポート",
};

const FEEDBACK_URL = "https://tally.so/r/XxZjWj";
const CONTACT_EMAIL = "kaihatuappkanri@gmail.com";

export default function SupportPage() {
  return (
    <>
      <PageHeader />
      <article className="pb-16">
        <h1 className="text-2xl font-medium tracking-wide">
          Scent Memory サポート
        </h1>
        <p className="mt-10 text-[15px] leading-8">
          バグのご報告や改善のご要望は、フィードバックフォームからお送りください。
        </p>

        <section className="mt-14">
          <h2 className="text-xs tracking-[0.12em] text-muted">
            フィードバック
          </h2>
          <a
            href={FEEDBACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[15px] underline decoration-hairline decoration-1 underline-offset-[6px] transition-colors hover:decoration-foreground"
          >
            フィードバックフォームを開く
          </a>
        </section>

        <section className="mt-12">
          <h2 className="text-xs tracking-[0.12em] text-muted">
            その他のお問い合わせ
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 inline-block break-all text-[15px] underline decoration-hairline decoration-1 underline-offset-[6px] transition-colors hover:decoration-foreground"
          >
            {CONTACT_EMAIL}
          </a>
        </section>
      </article>
    </>
  );
}
