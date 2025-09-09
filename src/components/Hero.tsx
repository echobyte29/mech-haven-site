import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-robotics.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-tech-dark/70"></div>
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-tech-cyan/20 via-transparent to-tech-cyan/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--tech-cyan)) 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, hsl(var(--tech-cyan)) 1px, transparent 1px),
                           radial-gradient(circle at 40% 80%, hsl(var(--tech-cyan)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 80px 80px, 120px 120px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Badge */}
          <div className="inline-flex items-center space-x-2 bg-tech-blue/30 backdrop-blur-sm border border-tech-cyan/30 rounded-full px-6 py-3 mb-8">
            <Zap className="h-4 w-4 text-tech-cyan animate-tech-pulse" />
            <span className="text-sm font-medium text-tech-cyan-light">
              WELCOME TO OFFICIAL PAGE OF ROBOTRONICS CLUB
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
            <span className="text-tech-orange animate-float">Empower Tomorrow,</span>
            <br />
            <span className="text-primary-foreground">Innovate Today:</span>
            <br />
            <span className="bg-gradient-to-r from-tech-cyan via-tech-cyan-light to-tech-cyan bg-clip-text text-transparent">
              Welcome to the Robotronics Club,
            </span>
            <br />
            <span className="text-primary-foreground text-3xl md:text-4xl lg:text-5xl">
              Where Dreams Take Flight in the Realm of Robotics.
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link to="/events">
              <Button size="lg" className="group bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-tech-orange/30">
                Explore Our Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-tech-cyan/30"
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-tech-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-cyan rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;