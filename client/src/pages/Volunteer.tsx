import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Heart, PawPrint, ClipboardList } from "lucide-react";

export default function Volunteer() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-serif font-bold text-wood-800">Join Our Team</h1>
        <p className="text-xl text-wood-600">
          We can always use volunteers to help keep our shelter open!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white border-wood-200 shadow-md h-full">
          <CardHeader className="bg-wood-50 border-b border-wood-100">
            <CardTitle className="flex items-center gap-2 text-wood-800">
              <Heart className="h-6 w-6 text-red-400" /> Volunteer Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-4 text-wood-600">Volunteers are needed to help with various daily tasks:</p>
            {/* Unordered List as requested */}
            <ul className="space-y-3">
              {[
                "Bathe and groom animals",
                "Play with pets to help them socialize and keep them happy",
                "Clean kennels and screening rooms",
                "Help with administrative tasks in the office"
              ].map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-wood-700">
                  <PawPrint className="h-5 w-5 text-wood-400 shrink-0 mt-0.5" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-wood-700 text-wood-50 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <ClipboardList className="h-6 w-6" /> How to Become a Volunteer
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4 text-wood-200">If you’re interested in volunteering, please follow these steps:</p>
              {/* Ordered List as requested */}
              <ol className="space-y-4 list-none ml-0">
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-wood-50 text-wood-800 font-bold shrink-0">1</span>
                  <span className="mt-1">Complete the online application</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-wood-50 text-wood-800 font-bold shrink-0">2</span>
                  <span className="mt-1">Submit the application by emailing it to <a href="mailto:volunteer@welovepets.com" className="underline hover:text-wood-200">volunteer@welovepets.com</a></span>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-wood-50 text-wood-800 font-bold shrink-0">3</span>
                  <span className="mt-1">Participate in a brief phone interview</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-wood-50 text-wood-800 font-bold shrink-0">4</span>
                  <span className="mt-1">Attend a volunteer training session on the first Saturday of every month</span>
                </li>
              </ol>
            </CardContent>
          </Card>
          
          <div className="bg-wood-100 p-6 rounded-lg border border-wood-200 text-center">
            <p className="text-wood-800 font-serif italic">
              "Volunteering is the ultimate exercise in democracy. You vote in elections once a year, but when you volunteer, you vote every day about the kind of community you want to live in."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
