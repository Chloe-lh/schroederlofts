import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="fixed z-10 flex justify-between items-center gap-6 w-full px-6 py-4 bg-[#28587B]">
      <div>Logo</div>
      <h1 className="text-5xl text-bold">
        The Lofts at Schroeder Creek
      </h1>
      <div className="flex gap-6 text-white text-xl">
        <Link href="/" className="transition-colors duration-200 hover:bg-[#F6FEE7] rounded px-2 py-1 ">Book</Link>
        <Link href="/location"className="transition-colors duration-200 hover:bg-[#F6FEE7] rounded px-2 py-1 ">Location</Link>
        <Link href="/contact" className="transition-colors duration-200 hover:bg-[#F6FEE7] rounded px-2 py-1 ">Explore</Link>
      </div>
    </nav>
  );
}
//[property]-[color]-[shade]