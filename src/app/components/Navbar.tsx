import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop logo */}
            <Image
              src="/printforge-logo 1.svg"
              alt="PrintForge Logo"
              width={200}
              height={50}
              className="w-50 h-auto hidden md:block"
            />

            {/* Mobile logo */}
            <Image
              src="/printforge-logo 1.svg"
              alt="PrintForge Logo"
              width={40}
              height={50}
              className="w-10 h-auto block md:hidden"
            />
          </div>
        </Link>

        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/3d-models">3D Models</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
