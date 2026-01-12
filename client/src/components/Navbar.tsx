import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import logo from "@assets/image_1764374030093.png";
import { PawPrint } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/adopt", label: "Adopt" },
    { href: "/volunteer", label: "Volunteer" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-wood-700/50" style={{ background: 'linear-gradient(180deg, rgba(62, 39, 35, 0.97) 0%, rgba(78, 52, 46, 0.95) 100%)' }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center gap-4 group" data-testid="link-home-logo">
            <div className="relative">
              <div className="absolute inset-0 bg-wood-400/30 rounded-full blur-xl group-hover:bg-wood-400/50 transition-all duration-500"></div>
              <img 
                src={logo} 
                alt="Loved Pets Logo" 
                className="h-14 w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] relative z-10 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-wood-100 via-wood-50 to-wood-200 drop-shadow-lg">
                Loved Pets
              </span>
              <p className="text-wood-400 text-xs tracking-widest uppercase">Animal Shelter</p>
            </div>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-2 bg-wood-900/50 backdrop-blur-sm rounded-full px-2 py-2 border border-wood-700/50">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a 
                className={cn(
                  "font-semibold text-base px-5 py-2 rounded-full transition-all duration-300",
                  location === link.href 
                    ? "bg-gradient-to-r from-wood-500 to-wood-600 text-white shadow-lg shadow-wood-900/50"
                    : "text-wood-300 hover:text-white hover:bg-wood-700/50"
                )}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/adopt">
            <a className="btn-wood flex items-center gap-2 text-sm" data-testid="button-find-pet">
              <PawPrint className="h-4 w-4" />
              <span className="hidden sm:inline">Find a Pet</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
