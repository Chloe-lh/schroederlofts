import Link from "next/link"



export default function Footer () {
    return (
        <footer className="mt-auto w-full bg-[var(--color-footer)] px-6 py-8 text-[var(--color-nav-text)] md:px-12">
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
            <h2 className="text-3xl text-[var(--color-nav-text)]">Contact Us</h2>
            <section className="text-lg">
            <Link href="mailto:TheLoftsatSchroederCreek@gmail.com" className="text-inherit transition-opacity hover:opacity-80">
                Email: Theloftsatschroedercreek@gmail.com
            </Link>
            <p>Phone: +1 250-353-1651</p>
            </section>
            </div>
        </footer>
    );


}

