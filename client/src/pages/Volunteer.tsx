import { CardContent, CardTitle } from "@/components/ui/card";
import { Heart, PawPrint, ClipboardList, Sparkles, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Volunteer() {
  const tasks = [
    { icon: "🛁", text: "Bathe and groom animals" },
    { icon: "🎾", text: "Play with pets to help them socialize and keep them happy" },
    { icon: "🧹", text: "Clean kennels and screening rooms" },
    { icon: "📋", text: "Help with administrative tasks in the office" }
  ];

  const steps = [
    { step: 1, text: "Complete the online application" },
    { step: 2, text: "Submit the application by emailing it to", link: "volunteer@welovepets.com" },
    { step: 3, text: "Participate in a brief phone interview" },
    { step: 4, text: "Attend a volunteer training session on the first Saturday of every month" }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl space-y-12">
      <div className="text-center space-y-4 opacity-0 animate-slide-up">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="floating-badge">
            <Users className="inline h-3 w-3 mr-1" /> Join Our Family
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-wood-900">
          Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-wood-600 to-wood-800">Volunteer</span>
        </h1>
        <p className="text-xl text-wood-600 max-w-2xl mx-auto leading-relaxed">
          We can always use volunteers to help keep our shelter open! 
          Your time makes a real difference in these animals' lives.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="wood-card rounded-2xl overflow-hidden hover-lift opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-r from-wood-100/80 to-wood-50/60 p-6 border-b border-wood-200/50 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-rose-600 flex items-center justify-center shadow-lg">
              <Heart className="h-6 w-6 text-white fill-current" />
            </div>
            <CardTitle className="text-2xl text-wood-900">Volunteer Tasks</CardTitle>
          </div>
          <CardContent className="p-6 space-y-4">
            <p className="text-lg text-wood-700">Volunteers are needed to help with various daily tasks:</p>
            <ul className="space-y-3">
              {tasks.map((task, i) => (
                <li 
                  key={i} 
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:translate-x-2",
                    "bg-gradient-to-r from-white/80 to-wood-50/50 border border-wood-100 shadow-sm hover:shadow-md",
                    "opacity-0 animate-slide-up"
                  )}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <span className="text-2xl">{task.icon}</span>
                  <span className="text-lg text-wood-800 font-medium">{task.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </div>

        <div className="space-y-8">
          <div className="relative overflow-hidden rounded-2xl hover-lift opacity-0 animate-slide-up" style={{ animationDelay: '0.3s', background: 'linear-gradient(145deg, #5d4037, #4e342e)' }}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-wood-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-wood-300/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="p-6 border-b border-wood-700/50 flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-wood-400 to-wood-600 flex items-center justify-center shadow-lg">
                <ClipboardList className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">How to Apply</CardTitle>
            </div>
            <CardContent className="p-6 relative z-10">
              <p className="mb-6 text-wood-200 text-lg">If you're interested in volunteering, please follow these steps:</p>
              <ol className="space-y-4">
                {steps.map((item, i) => (
                  <li 
                    key={i} 
                    className={cn(
                      "flex gap-4 items-start group p-3 rounded-xl transition-all duration-300 hover:bg-wood-700/30",
                      "opacity-0 animate-slide-up"
                    )}
                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-wood-100 to-wood-200 text-wood-900 font-bold shrink-0 shadow-lg text-lg group-hover:scale-110 transition-transform">
                      {item.step}
                    </span>
                    <span className="mt-2 text-wood-100 text-lg leading-relaxed">
                      {item.text}
                      {item.link && (
                        <a href={`mailto:${item.link}`} className="block text-wood-300 hover:text-white underline decoration-wood-500 underline-offset-4 transition-colors mt-1">
                          {item.link}
                        </a>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </div>
          
          <div className="glass-card p-8 rounded-2xl text-center relative overflow-hidden opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Sparkles className="absolute top-4 right-4 h-6 w-6 text-wood-400 animate-pulse" />
            <blockquote className="text-wood-800 font-serif italic text-xl leading-relaxed">
              "Volunteering is the ultimate exercise in democracy. You vote in elections once a year, but when you volunteer, you vote every day about the kind of community you want to live in."
            </blockquote>
            <p className="mt-4 text-wood-500 font-medium">— Author Unknown</p>
          </div>
        </div>
      </div>
    </div>
  );
}
