
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden gradient-earth flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-earth-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-sage-200 rounded-full opacity-30 animate-float delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-forest-200 rounded-full opacity-15 animate-float delay-400"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-forest-800 mb-6 leading-tight">
                R3GENIX
                <span className="block text-earth-600 text-3xl lg:text-4xl mt-2">
                  Turning Trash into Treasure
                </span>
              </h1>
            </div>
            
            <div className="animate-slide-up delay-200">
              <p className="text-xl lg:text-2xl text-forest-600 mb-8 leading-relaxed">
                Transforming waste into value and building a truly circular economy 
                through AI-powered recycling solutions.
              </p>
            </div>

            <div className="animate-slide-up delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-earth-500 hover:bg-earth-600 text-white px-8 py-4 text-lg group"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Vision
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-forest-600 text-forest-700 hover:bg-forest-50 px-8 py-4 text-lg group"
                onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Meet the Team
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-fade-in delay-500 mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-earth-600">$58B</div>
                <div className="text-sm text-forest-600">Global Market</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-earth-600">21%</div>
                <div className="text-sm text-forest-600">Current Rate</div>
              </div>
              <div className="text-center lg:text-left col-span-2 sm:col-span-1">
                <div className="text-3xl font-bold text-earth-600">AI</div>
                <div className="text-sm text-forest-600">Powered</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="animate-scale-in delay-300 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="w-96 h-96 bg-gradient-forest rounded-full flex items-center justify-center relative">
                {/* Inner content */}
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">♻️</div>
                  <div className="text-2xl font-bold">R3GENIX</div>
                  <div className="text-lg opacity-90">Innovation</div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-earth-400 rounded-full flex items-center justify-center animate-float">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center animate-float delay-300">
                  <span className="text-2xl">🌍</span>
                </div>
                <div className="absolute top-1/2 -right-12 w-12 h-12 bg-forest-300 rounded-full flex items-center justify-center animate-float delay-500">
                  <span className="text-xl">💡</span>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-earth-500 rounded-full -translate-x-2"></div>
                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-sage-500 rounded-full -translate-x-2"></div>
                <div className="absolute left-0 top-1/2 w-4 h-4 bg-forest-400 rounded-full -translate-y-2"></div>
                <div className="absolute right-0 top-1/2 w-4 h-4 bg-earth-400 rounded-full -translate-y-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-forest-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-forest-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
