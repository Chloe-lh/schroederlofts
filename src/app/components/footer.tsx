import Link from "next/link"



export default function Footer () {
    return (
        <footer className="mt-auto flex min-h-24 w-full flex-wrap items-center justify-center gap-4 bg-[#759665] px-6 py-8 text-[#F6FEE7]">
            <h1 className="text-3xl">Contact Us</h1>
            <Link href="mailto:TheLoftsatSchroederCreek@gmail.com" className="text-inherit">
                Email : TheLoftsatSchroederCreek@gmail.com
            </Link>
            <p>Phone: +1 250-353-1651</p>
        </footer>
    );


}

