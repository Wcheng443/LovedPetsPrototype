import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Adopt from "@/pages/Adopt";
import Volunteer from "@/pages/Volunteer";
import { Navbar } from "@/components/Navbar";

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
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-wood-300 selection:text-wood-900">
        <Navbar />
        <main>
          <Router />
        </main>
        <Toaster />
        <footer className="bg-wood-800 text-wood-200 py-8 mt-12 border-t-4 border-wood-600">
          <div className="container mx-auto px-4 text-center text-sm">
            <p>&copy; 2025 Loved Pets Animal Shelter. All rights reserved.</p>
            <p className="mt-2 opacity-60">Designed with love.</p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
