import PageHeader from "@/components/PageHeader";

export type LegalBlock =
  | string
  | { list: string[] }
  | { contact: { operator: string; email: string } };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalContent = {
  title: string;
  /** 例: "2026年10月3日" */
  enactedAt: string;
  intro?: string[];
  sections: LegalSection[];
};

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") {
    return <p>{block}</p>;
  }

  if ("list" in block) {
    return (
      <ul className="space-y-1.5">
        {block.list.map((item, i) => (
          <li key={i} className="relative pl-5">
            <span
              aria-hidden
              className="absolute top-[0.95em] left-1 size-1 rounded-full bg-muted"
            />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  const { operator, email } = block.contact;
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
      <dt className="text-muted">運営者</dt>
      <dd>{operator}</dd>
      <dt className="text-muted">メールアドレス</dt>
      <dd className="break-all">
        <a
          href={`mailto:${email}`}
          className="underline decoration-hairline decoration-1 underline-offset-[6px] transition-colors hover:decoration-foreground"
        >
          {email}
        </a>
      </dd>
    </dl>
  );
}

export default function LegalDocument({ content }: { content: LegalContent }) {
  return (
    <>
      <PageHeader />
      <article className="pb-20 text-[15px] leading-[1.95] sm:text-base">
        <h1 className="text-[1.375rem] leading-relaxed font-medium tracking-wide sm:text-2xl">
          {content.title}
        </h1>
        <p className="mt-4 text-xs tracking-wide text-muted">
          制定日：{content.enactedAt}
        </p>

        {content.intro && (
          <div className="mt-12 space-y-5">
            {content.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}

        <div className="mt-16 space-y-14">
          {content.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-base leading-relaxed font-medium tracking-wide">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-5">
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
