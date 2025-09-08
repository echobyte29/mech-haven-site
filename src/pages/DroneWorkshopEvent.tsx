import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Bot, Zap, Trophy, Target, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const DroneWorkshopEvent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const workshopImages = [
    "/images/3/Poster.jpg",
    "/images/3/6055381508123902565.jpg",
    "/images/3/6055381508123902567 (1).jpg",
    "/images/3/6055381508123902571.jpg",
    "/images/3/6055381508123902575.jpg"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % workshopImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + workshopImages.length) % workshopImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Back to Events Button */}
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/events">
            <Button variant="outline" className="mb-6 border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-tech-dark via-background to-tech-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-tech-orange/20 backdrop-blur-sm border border-tech-orange/30 rounded-full px-6 py-3 mb-8">
              <Bot className="h-4 w-4 text-tech-orange animate-tech-pulse" />
              <span className="text-sm font-medium text-tech-orange">
                DRONE WORKSHOP
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Build & Fly Your Own <span className="text-tech-cyan">Drone</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced workshop on drone prototyping featuring expert talk by Mr. Vadluri Varun and hands-on drone assembly and flight testing sessions.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-tech-cyan mx-auto mb-2" />
                <div className="text-lg font-semibold text-foreground">9th January 2025</div>
                <div className="text-sm text-muted-foreground">Workshop Date</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-tech-cyan mx-auto mb-2" />
                <div className="text-lg font-semibold text-foreground">Mr. Vadluri Varun</div>
                <div className="text-sm text-muted-foreground">Industry Expert</div>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-tech-cyan mx-auto mb-2" />
                <div className="text-lg font-semibold text-foreground">KLH Bachupally</div>
                <div className="text-sm text-muted-foreground">Campus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Workshop Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Workshop Overview</h2>

                <div className="space-y-6">
                  <Card className="p-6 border-tech-cyan/20">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Trophy className="h-5 w-5 text-tech-orange mr-2" />
                      Expert Speaker
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      <strong>Mr. Vadluri Varun</strong><br />
                      Founder and CEO of EPIT Research Labs Pvt. Ltd.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Bot className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>Industry Expert in Drone Technologies</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Target className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>Pioneer in Drone Prototyping</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-tech-cyan/20">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Clock className="h-5 w-5 text-tech-orange mr-2" />
                      Workshop Structure
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-tech-dark/20 rounded-lg">
                        <h4 className="font-semibold text-tech-cyan mb-2">Morning Session: Expert Talk</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Deep insights into drone technologies</li>
                          <li>• Design principles and methodologies</li>
                          <li>• Real-world applications and use cases</li>
                          <li>• Industry trends and future developments</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-tech-dark/20 rounded-lg">
                        <h4 className="font-semibold text-tech-cyan mb-2">Afternoon Session: Hands-on Workshop</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Practical drone assembly</li>
                          <li>• Flight testing and calibration</li>
                          <li>• Troubleshooting and optimization</li>
                          <li>• Safety protocols and best practices</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-tech-cyan/20">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Bot className="h-5 w-5 text-tech-orange mr-2" />
                      Learning Outcomes
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>Drone design and prototyping expertise</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>Electronic components integration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>Flight control systems knowledge</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>Aerial robotics applications</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Image Carousel */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Workshop Gallery</h2>

                <Card className="p-6 border-tech-cyan/20">
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-4">
                      <img
                        src={workshopImages[currentImageIndex]}
                        alt={`Workshop Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />

                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {workshopImages.length}
                      </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      {workshopImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                            index === currentImageIndex
                              ? "border-tech-cyan"
                              : "border-transparent hover:border-tech-cyan/50"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/placeholder.svg";
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 lg:py-24 bg-tech-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary-foreground text-center">Why Attend This Workshop?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Experiential Learning</h3>
                <p className="text-muted-foreground">
                  Hands-on drone building experience that bridges theoretical knowledge with practical application.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Industry Insights</h3>
                <p className="text-muted-foreground">
                  Direct interaction with industry professionals and learn from real-world drone technology experts.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Innovation Focus</h3>
                <p className="text-muted-foreground">
                  Emphasis on creative problem-solving and innovative approaches to drone design and applications.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Career Enhancement</h3>
                <p className="text-muted-foreground">
                  Valuable skills for careers in robotics, aerospace, and unmanned aerial systems development.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinator Information */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-center border-tech-cyan/20">
              <div className="w-20 h-20 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="h-10 w-10 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground">Workshop Coordinator</h3>
              <h4 className="text-xl font-semibold mb-2 text-tech-cyan">Dr. V. Ravi Kumar</h4>
              <p className="text-muted-foreground mb-6">
                Associate Professor, Department of ECE<br />
                Robotics Club Coordinator<br />
                Expert in Robotics and Embedded Systems
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground">
                  <Users className="mr-2 h-5 w-5" />
                  Register for Workshop
                </Button>
                <Button variant="outline" className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
                  <Target className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-tech-dark py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Join the Future of Robotics?
            </h3>
            <p className="text-tech-cyan-light mb-8 max-w-2xl mx-auto">
              Connect with us and become part of a community that's shaping tomorrow's technology today.
            </p>
            <div className="border-t border-tech-cyan/20 pt-8 mt-8">
              <p className="text-tech-cyan-light text-sm">
                © 2024 Robotronics Club. Empowering the next generation of robotics innovators.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DroneWorkshopEvent;
