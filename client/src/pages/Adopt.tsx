import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Search, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

import jackAnnieImg from "@assets/generated_images/two_puppies_playing.png";
import cocoaImg from "@assets/generated_images/chocolate_lab_puppy.png";
import samImg from "@assets/generated_images/orange_tabby_cat.png";
import roscoeImg from "@assets/generated_images/corgi_chihuahua_mix.png";
import sheldonImg from "@assets/generated_images/box_turtle.png";
import jellybeanImg from "@assets/generated_images/gray_tabby_cat.png";
import greysonImg from "@assets/generated_images/gray_puppy.png";

const animals = [
  {
    name: "Jack and Annie",
    photo: jackAnnieImg,
    breed: "Mix (Male & Female)",
    age: "6 weeks",
    details: "Jack and Annie are playful and adorable! Brother and sister bond.",
    badge: "Bonded Pair",
    badgeColor: "from-pink-500 to-rose-600"
  },
  {
    name: "Cocoa",
    photo: cocoaImg,
    breed: "Chocolate Labrador (Female)",
    age: "20 weeks",
    details: "Cocoa is sweet as pie and loves to give kisses.",
    badge: "Puppy",
    badgeColor: "from-amber-500 to-orange-600"
  },
  {
    name: "Sam",
    photo: samImg,
    breed: "Orange Mix (Male)",
    age: "3 years",
    details: "Sam is a calm kitty who is great with children and other animals, but not with dogs.",
    badge: "No Dogs",
    badgeColor: "from-red-500 to-red-700"
  },
  {
    name: "Roscoe",
    photo: roscoeImg,
    breed: "Corgi/Chihuahua Mix (Male)",
    age: "8 years",
    details: "Roscoe is an older, house trained dog whose owner had to surrender him. He is ready for a home!",
    badge: "Senior",
    badgeColor: "from-blue-500 to-indigo-600"
  },
  {
    name: "Sheldon",
    photo: sheldonImg,
    breed: "Box Turtle (Male)",
    age: "1 year",
    details: "Sheldon likes to sit in the sun, and doesn't bite!",
    badge: "Exotic",
    badgeColor: "from-emerald-500 to-teal-600"
  },
  {
    name: "Jellybean",
    photo: jellybeanImg,
    breed: "Gray Tabby (Female)",
    age: "2 years",
    details: "Jellybean was found in a storm drain, but loves people.",
    badge: "Rescue",
    badgeColor: "from-purple-500 to-violet-600"
  },
  {
    name: "Greyson",
    photo: greysonImg,
    breed: "Gray Mix (Male)",
    age: "10 weeks",
    details: "Greyson is high energy and high cuddles!",
    badge: "High Energy",
    badgeColor: "from-yellow-500 to-amber-600"
  }
];

export default function Adopt() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <div className="text-center space-y-4 opacity-0 animate-slide-up">
        <div className="inline-block mb-2">
          <span className="floating-badge">
            <Heart className="inline h-3 w-3 mr-1 fill-current" /> {animals.length} Friends Waiting
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900">Our Adoptable Friends</h1>
        <p className="text-wood-600 max-w-2xl mx-auto text-lg leading-relaxed">
          These animals are currently available for adoption. 
          Each one is looking for their forever family.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a href="tel:5554762984" className="flex items-center gap-2 text-wood-700 hover:text-wood-900 font-semibold transition-colors">
            <Phone className="h-4 w-4" /> (555) 476-2984
          </a>
          <span className="hidden sm:block text-wood-300">|</span>
          <a href="mailto:josie@welovepets.com" className="flex items-center gap-2 text-wood-700 hover:text-wood-900 font-semibold transition-colors">
            <Mail className="h-4 w-4" /> josie@welovepets.com
          </a>
        </div>
      </div>

      <div className="wood-panel overflow-hidden opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-wood-200/70 to-wood-100/50 hover:bg-wood-200/70 border-b-2 border-wood-300/50">
                  <TableHead className="w-[140px] text-wood-900 font-bold text-base font-serif py-5">Photo</TableHead>
                  <TableHead className="text-wood-900 font-bold text-base font-serif">Name</TableHead>
                  <TableHead className="text-wood-900 font-bold text-base font-serif hidden md:table-cell">Breed / Gender</TableHead>
                  <TableHead className="text-wood-900 font-bold text-base font-serif hidden sm:table-cell">Age</TableHead>
                  <TableHead className="text-wood-900 font-bold text-base font-serif">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {animals.map((animal, index) => (
                  <TableRow 
                    key={animal.name} 
                    className={cn(
                      "hover:bg-wood-100/60 transition-all duration-300 border-b border-wood-200/50 group",
                      "opacity-0 animate-slide-up"
                    )}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <TableCell className="py-5">
                      <div className="relative">
                        <div className="h-28 w-28 rounded-xl overflow-hidden border-4 border-white shadow-lg transform group-hover:scale-105 group-hover:rotate-0 transition-all duration-500 rotate-1">
                          <img 
                            src={animal.photo} 
                            alt={`Photo of ${animal.name}`} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-wood-500 to-wood-700 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110">
                          <Heart className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <span className="font-serif font-bold text-xl text-wood-800 block group-hover:text-wood-900 transition-colors">
                          {animal.name}
                        </span>
                        {animal.badge && (
                          <span className={cn(
                            "inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full text-white shadow-sm",
                            `bg-gradient-to-r ${animal.badgeColor}`
                          )}>
                            {animal.badge}
                          </span>
                        )}
                        <span className="block md:hidden text-wood-600 text-sm">{animal.breed}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-wood-700 hidden md:table-cell">{animal.breed}</TableCell>
                    <TableCell className="font-medium text-wood-700 hidden sm:table-cell">
                      <span className="bg-wood-100 px-3 py-1 rounded-full text-sm">{animal.age}</span>
                    </TableCell>
                    <TableCell className="max-w-sm text-wood-700 leading-relaxed">
                      {animal.details}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
