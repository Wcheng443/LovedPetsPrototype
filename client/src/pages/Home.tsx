import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative bg-wood-600 text-wood-50 py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450779309013-c9802072b12e?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-serif drop-shadow-md">
            Find Your Forever Friend
          </h1>
          <p className="text-xl md:text-2xl font-light text-wood-100">
            Every animal deserves a loving home. Start your journey today.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <Card className="border-wood-200 shadow-md overflow-hidden">
            <CardHeader className="bg-wood-100 border-b border-wood-200">
              <CardTitle className="text-2xl text-wood-800">Our Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="p-6 prose prose-stone max-w-none text-wood-900 leading-relaxed">
              <p>
                At <strong>Loved Pets Animal Rescue</strong>, we believe all animals deserve a chance to find a loving forever home.
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
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1553322396-0c980a5c1a20?auto=format&fit=crop&w=800&q=80" 
              alt="Happy dog running" 
              className="rounded-lg shadow-md border-4 border-white aspect-video object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-300"
            />
            <img 
              src="https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80" 
              alt="Kitten playing" 
              className="rounded-lg shadow-md border-4 border-white aspect-video object-cover transform rotate-2 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <Card className="bg-wood-50 border-wood-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-wood-700">
                <Clock className="h-5 w-5" /> Hours of Operation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-wood-800 text-sm">
                <li className="flex justify-between border-b border-wood-200 pb-1"><span>Monday:</span> <span>8am - 5pm</span></li>
                <li className="flex justify-between border-b border-wood-200 pb-1"><span>Tuesday:</span> <span>8am - 5pm</span></li>
                <li className="flex justify-between border-b border-wood-200 pb-1"><span>Wednesday:</span> <span>8am - 8pm</span></li>
                <li className="flex justify-between border-b border-wood-200 pb-1"><span>Thursday:</span> <span>8am - 5pm</span></li>
                <li className="flex justify-between border-b border-wood-200 pb-1"><span>Friday:</span> <span>8am - 12pm</span></li>
                <li className="flex justify-between border-b border-wood-200 pb-1"><span>Saturday:</span> <span>8am - 12pm</span></li>
                <li className="flex justify-between text-wood-500"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-wood-700 text-wood-50 border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-white">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-wood-300" />
                <div>
                  <p className="font-bold">Loved Pets Animal Shelter</p>
                  <p className="text-wood-200 text-sm">6645 Watergrass Cir.<br/>Springfield, Arizona 11645</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-wood-300" />
                <a href="tel:5554762984" className="hover:text-wood-200 transition-colors">(555) 476-2984</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-wood-300" />
                <a href="mailto:josie@welovepets.com" className="hover:text-wood-200 transition-colors">josie@welovepets.com</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
