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
    <nav className="bg-wood-800 text-wood-100 shadow-2xl border-b-8 border-wood-900 sticky top-0 z-50 wood-texture-bg" style={{ backgroundImage: `linear-gradient(rgba(62, 39, 35, 0.9), rgba(62, 39, 35, 0.9))` }}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-wood-950 rounded-full transform translate-y-1 blur-sm"></div>
              <img 
                src={logo} 
                alt="Loved Pets Logo" 
                className="h-14 w-14 rounded-full border-4 border-wood-300 bg-white relative z-10 shadow-inner"
              />
            </div>
            <span className="font-serif text-3xl font-bold tracking-wide text-wood-100 wood-text-emboss drop-shadow-md">Loved Pets</span>
          </a>
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={cn(
                  "font-serif font-bold text-xl transition-all duration-200 relative py-1 px-2 rounded hover:bg-wood-700/50 hover:text-wood-50",
                  location === link.href 
                    ? "text-wood-50 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-wood-300 after:rounded-full shadow-[0_0_15px_rgba(161,136,127,0.3)]"
                    : "text-wood-300"
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
            <a className="bg-wood-600 border-2 border-wood-400 shadow-[0_4px_0_#3e2723] active:shadow-none active:translate-y-[4px] hover:bg-wood-500 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all">
              Find a Pet
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
