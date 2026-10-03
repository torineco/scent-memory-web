import Link from "next/link";

const links = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/support", label: "サポート" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-center py-24">
      <h1 className="text-3xl font-normal tracking-[0.08em]">Scent Memory</h1>
      <p className="mt-6 text-[15px] leading-8 text-muted">
        自分の香りを探す旅の、静かな相棒。
      </p>
      <nav aria-label="ページ" className="mt-20">
        <ul className="space-y-5 text-[15px]">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="underline decoration-hairline decoration-1 underline-offset-[6px] transition-colors hover:decoration-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
