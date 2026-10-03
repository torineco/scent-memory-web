import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="pt-10 pb-16 sm:pt-14">
      <Link
        href="/"
        className="text-sm tracking-[0.12em] text-muted transition-colors hover:text-foreground"
      >
        Scent Memory
      </Link>
    </header>
  );
}
