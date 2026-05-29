import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center gap-6 w-full px-6 py-4 bg-[#C2E2BD]">
      <div>Logo</div>
      <h1 className="text-5xl">
        Schroeder Lofts
      </h1>
      <div className="flex gap-6 text-[#2A3D45] text-xl">
        <Link href="/" className="transition-colors duration-200 hover:bg-[#F6FEE7] rounded px-2 py-1 ">Book</Link>
        <Link href="/location"className="transition-colors duration-200 hover:bg-[#F6FEE7] rounded px-2 py-1 ">Where are we located?</Link>
        <Link href="/contact" className="transition-colors duration-200 hover:bg-[#F6FEE7] rounded px-2 py-1 ">Places to explore</Link>
      </div>
    </nav>
  );
}
//[property]-[color]-[shade]