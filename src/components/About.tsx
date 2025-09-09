import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
            "Robotronics Club: A Commitment to{" "}
            <span className="text-tech-cyan">Precision</span>, A Journey into{" "}
            <span className="text-tech-orange">Robotic Excellence</span>."
          </h2>
          
          <Button 
            size="lg" 
            className="bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-tech-orange/30 group"
          >
            About Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center hover:shadow-lg hover:shadow-tech-cyan/10 transition-all duration-300 border-border hover:border-tech-cyan/30 group">
            <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-tech-pulse">
              <Target className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Precision Engineering</h3>
            <p className="text-muted-foreground">
              We strive for excellence in every project, ensuring precision and quality in all our robotic innovations.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg hover:shadow-tech-cyan/10 transition-all duration-300 border-border hover:border-tech-cyan/30 group">
            <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-tech-pulse">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Collaborative Learning</h3>
            <p className="text-muted-foreground">
              Our community thrives on shared knowledge, fostering an environment where everyone learns and grows together.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg hover:shadow-tech-cyan/10 transition-all duration-300 border-border hover:border-tech-cyan/30 group">
            <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-tech-pulse">
              <Lightbulb className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Innovation Focus</h3>
            <p className="text-muted-foreground">
              We push the boundaries of what's possible, encouraging creative solutions to complex robotic challenges.
            </p>
          </Card>
        </div>

        {/* Team Section */}
        <div className="bg-tech-gray rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
                Meet Our Passionate Team
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our diverse team of students, researchers, and robotics enthusiasts brings together 
                expertise from various disciplines to create innovative solutions. We believe in the 
                power of collaboration and the importance of nurturing the next generation of robotics 
                professionals.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                View Our Team
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-tech rounded-xl flex items-center justify-center">
                <Users className="h-24 w-24 text-primary-foreground opacity-50" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-tech-orange rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl font-bold text-primary-foreground">25+</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-tech-cyan rounded-full flex items-center justify-center animate-tech-pulse">
                <span className="text-lg font-bold text-tech-dark">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;