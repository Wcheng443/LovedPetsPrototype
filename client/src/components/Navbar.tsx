import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import logo from "@assets/image_1764374030093.png";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/adopt", label: "Adopt" },
    { href: "/volunteer", label: "Volunteer" },
  ];

  return (
    <nav className="bg-wood-700 text-wood-50 shadow-lg border-b-4 border-wood-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src={logo} 
              alt="Loved Pets Logo" 
              className="h-12 w-12 rounded-full border-2 border-wood-200 bg-white"
            />
            <span className="font-serif text-2xl font-bold tracking-wide">Loved Pets</span>
          </a>
        </Link>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={cn(
                  "font-semibold text-lg transition-colors hover:text-wood-200 relative py-1",
                  location === link.href && "text-wood-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-wood-200"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Simple implementation) */}
        <div className="md:hidden">
          <Link href="/adopt">
            <a className="bg-wood-500 hover:bg-wood-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors">
              Find a Pet
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
