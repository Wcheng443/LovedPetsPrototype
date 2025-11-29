import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Importing generated assets
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
    badge: "Bonded Pair"
  },
  {
    name: "Cocoa",
    photo: cocoaImg,
    breed: "Chocolate Labrador (Female)",
    age: "20 weeks",
    details: "Cocoa is sweet as pie and loves to give kisses.",
    badge: "Puppy"
  },
  {
    name: "Sam",
    photo: samImg,
    breed: "Orange Mix (Male)",
    age: "3 years",
    details: "Sam is a calm kitty who is great with children and other animals, but not with dogs.",
    badge: "No Dogs"
  },
  {
    name: "Roscoe",
    photo: roscoeImg,
    breed: "Corgi/Chihuahua Mix (Male)",
    age: "8 years",
    details: "Roscoe is an older, house trained dog whose owner had to surrender him. He is ready for a home!",
    badge: "Senior"
  },
  {
    name: "Sheldon",
    photo: sheldonImg,
    breed: "Box Turtle (Male)",
    age: "1 year",
    details: "Sheldon likes to sit in the sun, and doesn’t bite!",
    badge: "Exotic"
  },
  {
    name: "Jellybean",
    photo: jellybeanImg,
    breed: "Gray Tabby (Female)",
    age: "2 years",
    details: "Jellybean was found in a storm drain, but loves people.",
    badge: "Rescue"
  },
  {
    name: "Greyson",
    photo: greysonImg,
    breed: "Gray Mix (Male)",
    age: "10 weeks",
    details: "Greyson is high energy and high cuddles!",
    badge: "High Energy"
  }
];

export default function Adopt() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-serif font-bold text-wood-800">Our Adoptable Friends</h1>
        <p className="text-wood-600 max-w-2xl mx-auto">
          These animals are currently available for adoption. 
          To inquire about any of the animals below, call <a href="tel:5554762984" className="font-bold hover:underline">(555) 476-2984</a> or email Josie at <a href="mailto:josie@welovepets.com" className="font-bold hover:underline">josie@welovepets.com</a>.
        </p>
      </div>

      <Card className="border-wood-200 shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-wood-100">
              <TableRow>
                <TableHead className="w-[150px] text-wood-800 font-bold">Photo</TableHead>
                <TableHead className="text-wood-800 font-bold">Name</TableHead>
                <TableHead className="text-wood-800 font-bold">Breed / Gender</TableHead>
                <TableHead className="text-wood-800 font-bold">Age</TableHead>
                <TableHead className="text-wood-800 font-bold">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {animals.map((animal) => (
                <TableRow key={animal.name} className="hover:bg-wood-50 transition-colors">
                  <TableCell>
                    <div className="h-24 w-24 rounded-lg overflow-hidden border-2 border-wood-200 shadow-sm">
                      <img 
                        src={animal.photo} 
                        alt={`Photo of ${animal.name}`} 
                        className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-serif font-bold text-lg text-wood-700">
                    {animal.name}
                    {animal.badge && (
                      <Badge variant="secondary" className="ml-2 bg-wood-200 text-wood-800 hover:bg-wood-300">
                        {animal.badge}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{animal.breed}</TableCell>
                  <TableCell>{animal.age}</TableCell>
                  <TableCell className="max-w-md text-wood-600 leading-relaxed">
                    {animal.details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
