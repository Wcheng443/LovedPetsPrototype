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
        <div className="wood-card rounded-xl overflow-hidden h-full flex flex-col">
          <div className="bg-wood-100/50 border-b border-wood-200 p-6">
            <CardTitle className="flex items-center gap-3 text-2xl text-wood-900 wood-text-emboss">
              <Heart className="h-7 w-7 text-red-500 fill-current" /> Volunteer Tasks
            </CardTitle>
          </div>
          <CardContent className="p-8 flex-grow bg-[#fffbf7]">
            <p className="mb-6 text-lg text-wood-800 font-medium">Volunteers are needed to help with various daily tasks:</p>
            {/* Unordered List as requested */}
            <ul className="space-y-4">
              {[
                "Bathe and groom animals",
                "Play with pets to help them socialize and keep them happy",
                "Clean kennels and screening rooms",
                "Help with administrative tasks in the office"
              ].map((task, i) => (
                <li key={i} className="flex items-start gap-4 text-wood-800 bg-white/50 p-3 rounded-lg border border-wood-100 shadow-sm">
                  <PawPrint className="h-6 w-6 text-wood-500 shrink-0 mt-0.5" />
                  <span className="text-lg">{task}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </div>

        <div className="space-y-8">
          <div className="bg-wood-800 text-wood-50 border-4 border-wood-600 shadow-xl rounded-xl overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-wood-500/50"></div>
            <div className="p-6 border-b border-wood-700 bg-wood-900/30">
              <CardTitle className="flex items-center gap-3 text-2xl text-white wood-text-emboss">
                <ClipboardList className="h-7 w-7" /> How to Become a Volunteer
              </CardTitle>
            </div>
            <CardContent className="p-8">
              <p className="mb-6 text-wood-200 text-lg">If you’re interested in volunteering, please follow these steps:</p>
              {/* Ordered List as requested */}
              <ol className="space-y-5 list-none ml-0">
                <li className="flex gap-5 items-center group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-wood-100 text-wood-900 font-bold shrink-0 shadow-lg border-2 border-wood-300 text-xl group-hover:scale-110 transition-transform">1</span>
                  <span className="mt-1 font-medium text-lg">Complete the online application</span>
                </li>
                <li className="flex gap-5 items-center group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-wood-100 text-wood-900 font-bold shrink-0 shadow-lg border-2 border-wood-300 text-xl group-hover:scale-110 transition-transform">2</span>
                  <span className="mt-1 font-medium text-lg">Submit the application by emailing it to <a href="mailto:volunteer@welovepets.com" className="underline hover:text-white text-wood-200 decoration-wood-400 underline-offset-4">volunteer@welovepets.com</a></span>
                </li>
                <li className="flex gap-5 items-center group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-wood-100 text-wood-900 font-bold shrink-0 shadow-lg border-2 border-wood-300 text-xl group-hover:scale-110 transition-transform">3</span>
                  <span className="mt-1 font-medium text-lg">Participate in a brief phone interview</span>
                </li>
                <li className="flex gap-5 items-center group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-wood-100 text-wood-900 font-bold shrink-0 shadow-lg border-2 border-wood-300 text-xl group-hover:scale-110 transition-transform">4</span>
                  <span className="mt-1 font-medium text-lg">Attend a volunteer training session on the first Saturday of every month</span>
                </li>
              </ol>
            </CardContent>
          </div>
          
          <div className="bg-[#fffbf7] p-8 rounded-xl border-2 border-wood-300 text-center shadow-md relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-wood-200"></div>
            <p className="text-wood-800 font-serif italic text-xl leading-relaxed">
              "Volunteering is the ultimate exercise in democracy. You vote in elections once a year, but when you volunteer, you vote every day about the kind of community you want to live in."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
