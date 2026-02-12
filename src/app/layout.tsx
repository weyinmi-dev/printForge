import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <div className="relative">
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
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <p>About</p>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
