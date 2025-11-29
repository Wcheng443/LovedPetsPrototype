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
        <footer className="bg-wood-900 text-wood-200 py-8 mt-12 border-t-8 border-wood-700 shadow-[inset_0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="container mx-auto px-4 text-center text-sm font-serif">
            <p className="wood-text-emboss text-lg font-bold text-wood-400">&copy; 2025 Loved Pets Animal Shelter</p>
            <p className="mt-2 opacity-60 text-wood-300">Designed with love &amp; treats.</p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
