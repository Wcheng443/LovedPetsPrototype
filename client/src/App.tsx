import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Adopt from "@/pages/Adopt";
import Volunteer from "@/pages/Volunteer";
import { Navbar } from "@/components/Navbar";
import woodTexture from "@assets/generated_images/seamless_light_wood_texture.png";
import { Heart, PawPrint } from "lucide-react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/adopt" component={Adopt} />
      <Route path="/volunteer" component={Volunteer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div 
        className="min-h-screen bg-background text-foreground font-sans selection:bg-wood-300 selection:text-wood-900 wood-texture-bg"
        style={{ backgroundImage: `url(${woodTexture})` }}
      >
        <Navbar />
        <main>
          <Router />
        </main>
        <Toaster />
        <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #4e342e 0%, #3e2723 100%)' }}>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
          <div className="container mx-auto px-4 py-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <PawPrint className="h-8 w-8 text-wood-400" />
                <div>
                  <p className="font-serif text-xl font-bold text-wood-100">Loved Pets Animal Shelter</p>
                  <p className="text-wood-400 text-sm">Rescue • Rehabilitate • Rehome</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-wood-300">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
                <span>for animals everywhere</span>
              </div>
              <p className="text-wood-500 text-sm">&copy; 2025 Loved Pets. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
