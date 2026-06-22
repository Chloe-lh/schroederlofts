import Link from "next/link"



export default function Footer () {
    return (
        <footer className="text-lg mt-auto min-h-24 w-full flex-wrap items-center justify-center gap-4 bg-[#759665] px-12 py-8 text-[#F6FEE7]">
            <h2 className="text-4xl py-4 text-[#F6FEE7]">Contact Us</h2>
            <section>
            <Link href="mailto:TheLoftsatSchroederCreek@gmail.com" className="text-inherit">
                Email : Theloftsatschroedercreek@gmail.com
            </Link>
            <p>Phone: +1 250-353-1651</p>
            </section>
        </footer>
    );


}

