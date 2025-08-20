import { Card } from "@/components/ui/card";
import { Check, Wrench, Users, GraduationCap, Factory, Bot, Trophy } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      icon: Wrench,
      title: "Arrange workshops, seminars and organize industrial visits",
      description: "Hands-on learning experiences with industry professionals and cutting-edge facilities."
    },
    {
      icon: Bot,
      title: "Allround development in various aspects of robotics engineering",
      description: "Comprehensive curriculum covering mechanical design, programming, AI, and system integration."
    },
    {
      icon: GraduationCap,
      title: "Training in basic and advanced robots",
      description: "Progressive learning path from fundamental concepts to sophisticated robotic systems."
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed", color: "tech-cyan" },
    { number: "200+", label: "Students Trained", color: "tech-orange" },
    { number: "15+", label: "Industry Partners", color: "tech-cyan" },
    { number: "25+", label: "Awards Won", color: "tech-orange" }
  ];

  return (
    <section id="highlights" className="py-20 lg:py-32 bg-tech-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Highlights of the <span className="text-tech-cyan">Club</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes RoboHorizon Club the premier destination for robotics enthusiasts 
            and future engineers.
          </p>
        </div>

        {/* Main Highlights Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Highlights List */}
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center group-hover:animate-tech-pulse transition-all duration-300">
                    <Check className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-tech-cyan transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Workshop Image */}
          <div className="relative">
            <Card className="p-8 h-full bg-background border-border hover:border-tech-cyan/30 transition-all duration-300">
              <div className="relative h-full min-h-[400px] bg-gradient-to-br from-tech-blue to-tech-dark rounded-xl flex items-center justify-center overflow-hidden">
                {/* Placeholder for workshop/seminar image */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-4 gap-1 h-full">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-tech-cyan animate-pulse" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 text-center">
                  <Factory className="h-24 w-24 text-tech-cyan mx-auto mb-4 animate-float" />
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    Workshop Environment
                  </h3>
                  <p className="text-tech-cyan-light">
                    State-of-the-art facilities for hands-on learning
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-background rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              Our <span className="text-tech-orange">Achievements</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Numbers that reflect our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className={`text-4xl lg:text-5xl font-bold mb-2 ${
                  achievement.color === 'tech-cyan' ? 'text-tech-cyan' : 'text-tech-orange'
                } group-hover:animate-tech-pulse transition-all duration-300`}>
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;