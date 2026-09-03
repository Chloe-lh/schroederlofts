import Link from "next/link"



export default function Footer () {
    return (
        <footer className="mt-auto w-full bg-(--color-footer) px-6 py-8 text-(--color-nav-text) md:px-12">
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
            <h2 className="text-3xl text-(--color-nav-text)">Contact Us</h2>
            <section className="text-lg">
            <Link href="mailto:TheLoftsatSchroederCreek@gmail.com" className="text-inherit transition-opacity hover:opacity-80">
                Email: Theloftsatschroedercreek@gmail.com
            </Link>
            <p>Phone: +1 250-353-1651</p>
            </section>
            {/* <section className="Chloe-rep text-lg">
            <h2 className="text-3xl text-(--color-nav-text)">we LOVE local</h2>
            <p> Even this site is local! This site was made by our daughter <strong>Chloe Haynes</strong>. Shes a computer science new grad - check out her other work!</p>    
            </section> */}

            </div>
            
        </footer>
    );


}

