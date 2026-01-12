import { CardContent, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Phone, Mail, Heart, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

import dogRunningImg from "@assets/generated_images/golden_retriever_running.png";
import kittenPlayingImg from "@assets/generated_images/kitten_playing_with_toy.png";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wood-800 via-wood-700 to-wood-600"></div>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-wood-400/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-wood-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-wood-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-6 opacity-0 animate-slide-up">
            <span className="floating-badge">
              <Heart className="inline h-3 w-3 mr-1 fill-current" /> Rescue • Rehabilitate • Rehome
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 opacity-0 animate-slide-up stagger-1 leading-tight">
            Find Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-wood-200 via-wood-100 to-wood-300">
              Forever Friend
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-wood-200 mb-10 max-w-2xl mx-auto opacity-0 animate-slide-up stagger-2 leading-relaxed">
            Every animal deserves a loving home. Start your journey to unconditional love today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up stagger-3">
            <Link href="/adopt">
              <a className="btn-wood text-lg flex items-center justify-center gap-2 group" data-testid="button-hero-adopt">
                Meet Our Pets
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
            <Link href="/volunteer">
              <a className="px-6 py-3 font-bold rounded-xl border-2 border-wood-400 text-wood-200 hover:bg-wood-700/50 hover:text-white transition-all duration-300" data-testid="button-hero-volunteer">
                Become a Volunteer
              </a>
            </Link>
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-wood-100 to-transparent"></div>
      </section>

      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          <div className="wood-panel overflow-hidden hover-lift opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-r from-wood-200/60 to-wood-100/40 border-b-2 border-wood-300/50 p-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-wood-500 to-wood-700 flex items-center justify-center shadow-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl text-wood-900">Our Philosophy</CardTitle>
            </div>
            <div className="p-8 text-wood-800 leading-relaxed text-lg space-y-4">
              <p>
                At <strong className="text-wood-900">Loved Pets Animal Rescue</strong>, we believe all animals deserve a chance to find a loving forever home.
              </p>
              <p>
                We provide initial veterinary care to rescued animals, then work to match each animal with a human
                family to love them and keep them safe forever. All animals are screened for diseases upon arrival,
                washed and groomed, and then added to our website for adoptive families to see. 
              </p>
              <p>
                All potential adoptive families are also screened for adoption history, household lifestyle, and commitment to
                providing a safe and loving home.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="photo-frame transform -rotate-2 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <img 
                src={dogRunningImg} 
                alt="Happy dog running" 
                className="rounded-lg aspect-video object-cover w-full"
              />
              <p className="text-center text-wood-600 mt-2 text-sm font-medium">Finding joy in every moment</p>
            </div>
            <div className="photo-frame transform rotate-2 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <img 
                src={kittenPlayingImg} 
                alt="Kitten playing" 
                className="rounded-lg aspect-video object-cover w-full"
              />
              <p className="text-center text-wood-600 mt-2 text-sm font-medium">Playful spirits waiting for you</p>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="glass-card rounded-2xl overflow-hidden hover-lift opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-gradient-to-r from-wood-100/80 to-wood-50/60 p-5 border-b border-wood-200/50 flex items-center gap-3">
              <Clock className="h-6 w-6 text-wood-600" />
              <CardTitle className="text-xl text-wood-800">Hours of Operation</CardTitle>
            </div>
            <CardContent className="p-5">
              <ul className="space-y-3 text-wood-800">
                {[
                  { day: 'Monday', hours: '8am - 5pm' },
                  { day: 'Tuesday', hours: '8am - 5pm' },
                  { day: 'Wednesday', hours: '8am - 8pm', highlight: true },
                  { day: 'Thursday', hours: '8am - 5pm' },
                  { day: 'Friday', hours: '8am - 12pm' },
                  { day: 'Saturday', hours: '8am - 12pm' },
                  { day: 'Sunday', hours: 'Closed', closed: true },
                ].map((item, i) => (
                  <li key={i} className={cn(
                    "flex justify-between py-2 px-3 rounded-lg transition-colors",
                    item.highlight && "bg-wood-100/80",
                    item.closed && "text-wood-400"
                  )}>
                    <span className="font-medium">{item.day}</span>
                    <span className={cn(item.highlight && "font-bold text-wood-700")}>
                      {item.hours}
                      {item.highlight && <span className="ml-2 text-xs bg-wood-500 text-white px-2 py-0.5 rounded-full">Late</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </div>

          <div className="relative overflow-hidden rounded-2xl hover-lift opacity-0 animate-slide-up animate-pulse-glow" style={{ animationDelay: '0.6s', background: 'linear-gradient(145deg, #5d4037, #4e342e)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-wood-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="p-6 border-b border-wood-700/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-wood-400 to-wood-600 flex items-center justify-center shadow-inner">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Contact Us</CardTitle>
            </div>
            <CardContent className="space-y-5 p-6 text-wood-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-wood-700/50 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-wood-300" />
                </div>
                <div>
                  <p className="font-bold text-lg text-white">Loved Pets Animal Shelter</p>
                  <p className="text-wood-300 leading-relaxed">6645 Watergrass Cir.<br/>Springfield, Arizona 11645</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-wood-700/50 flex items-center justify-center shrink-0 group-hover:bg-wood-600/50 transition-colors">
                  <Phone className="h-5 w-5 text-wood-300" />
                </div>
                <a href="tel:5554762984" className="font-semibold text-lg group-hover:text-white transition-colors">(555) 476-2984</a>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-wood-700/50 flex items-center justify-center shrink-0 group-hover:bg-wood-600/50 transition-colors">
                  <Mail className="h-5 w-5 text-wood-300" />
                </div>
                <a href="mailto:josie@welovepets.com" className="group-hover:text-white transition-colors underline decoration-wood-500 underline-offset-4">josie@welovepets.com</a>
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}
