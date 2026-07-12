import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="fixed z-10 flex w-full items-center justify-between gap-6 bg-[var(--color-nav)] px-6 py-4 text-[var(--color-nav-text)] shadow-lg shadow-slate-900/10">
      <div className="text-sm font-semibold uppercase tracking-[0.25em] opacity-80">Lofts</div>
      <h1 className="text-3xl font-normal text-[var(--color-nav-text)] md:text-5xl">
        The Lofts at Schroeder Creek
      </h1>
      <div className="flex gap-3 text-lg">
        <Link href="/" className="rounded-full px-3 py-1 transition-colors duration-200 hover:bg-[var(--color-accent)]">Book</Link>
        <Link href="/location" className="rounded-full px-3 py-1 transition-colors duration-200 hover:bg-[var(--color-accent)]">Location</Link>
        <Link href="/contact" className="rounded-full px-3 py-1 transition-colors duration-200 hover:bg-[var(--color-accent)]">Explore</Link>
      </div>
    </nav>
  );
}
//[property]-[color]-[shade]