import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Sandesh Paudel
        </Link>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
