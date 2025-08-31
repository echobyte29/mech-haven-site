import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Bot, Zap, Trophy, Target, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const RobotronicsEvent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const eventImages = [
    "/images/1/0.jpg",
    "/images/1/0.0.jpg",
    "/images/1/1...jpg",
    "/images/1/1.2.jpg",
    "/images/1/2.1.jpg",
    "/images/1/3.1.jpg",
    "/images/1/3.2.jpg",
    "/images/1/5.1.jpg",
    "/images/1/5.2.jpg",
    "/images/1/5.3.jpg",
    "/images/1/6170025562622513315.jpg",
    "/images/1/6170025562622513316.jpg",
    "/images/1/6170025562622513322.jpg",
    "/images/1/6170143463769751059.jpg",
    "/images/1/6170143463769751060.jpg",
    "/images/1/IMG_2858.jpg"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % eventImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + eventImages.length) % eventImages.length);
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
                ROBOTRONICS CLUB INAUGURATION
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Welcome to the <span className="text-tech-cyan">Future</span> of Robotics
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join us for the grand inauguration of Robotronics Club at KLH Deemed to be University
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-tech-cyan mx-auto mb-2" />
                <div className="text-lg font-semibold text-foreground">13th November 2024</div>
                <div className="text-sm text-muted-foreground">Inauguration Day</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-tech-cyan mx-auto mb-2" />
                <div className="text-lg font-semibold text-foreground">10:00 AM</div>
                <div className="text-sm text-muted-foreground">Ceremony Time</div>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-tech-cyan mx-auto mb-2" />
                <div className="text-lg font-semibold text-foreground">KLH University</div>
                <div className="text-sm text-muted-foreground">Bowrampet Campus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Event Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Event Details</h2>

                <div className="space-y-6">
                  <Card className="p-6 border-tech-cyan/20">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Trophy className="h-5 w-5 text-tech-orange mr-2" />
                      Inauguration Ceremony
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      The ECE department proudly announces the inauguration of Robotronics Club by our beloved Principal Dr. L. Koteswara Rao.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>13th November 2024</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>10:00 AM onwards</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>KLH Deemed to be University, Bowrampet Campus</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-tech-cyan/20">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Users className="h-5 w-5 text-tech-orange mr-2" />
                      Special Guest Speaker
                    </h3>
                    <p className="text-muted-foreground">
                      <strong>Mr. D. Tagore</strong><br />
                      Manager at Vidvan Electronics Pvt. Ltd.
                    </p>
                  </Card>

                  <Card className="p-6 border-tech-cyan/20">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Target className="h-5 w-5 text-tech-orange mr-2" />
                      Workshop: Automotive Embedded Systems
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Hands-on workshop following the inauguration ceremony.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>1:00 PM - 4:00 PM</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>FIOTS Lab</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Bot className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>Coordinator: Dr. V. Ravi Kumar</span>
                      </div>
                    </div>
                    <Badge className="mt-4 bg-tech-orange text-primary-foreground">Free Workshop</Badge>
                  </Card>
                </div>
              </div>

              {/* Image Carousel */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-foreground">Event Gallery</h2>

                <Card className="p-6 border-tech-cyan/20">
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-4">
                      <img
                        src={eventImages[currentImageIndex]}
                        alt={`Event Image ${currentImageIndex + 1}`}
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
                        {currentImageIndex + 1} / {eventImages.length}
                      </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      {eventImages.map((image, index) => (
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

      {/* Additional Information */}
      <section className="py-16 lg:py-24 bg-tech-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary-foreground text-center">Why Join Robotronics Club?</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Hands-on Learning</h3>
                <p className="text-muted-foreground">
                  Gain practical experience with cutting-edge robotics technology through workshops and projects.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Industry Connections</h3>
                <p className="text-muted-foreground">
                  Network with industry professionals and learn from experts in the field of robotics.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Competitions & Awards</h3>
                <p className="text-muted-foreground">
                  Participate in robotics competitions and earn certificates for outstanding performance.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Career Development</h3>
                <p className="text-muted-foreground">
                  Enhance your research skills and improve your career prospects in robotics and embedded systems.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Certificate Distribution</h3>
              <p className="text-tech-cyan-light mb-6">
                During the inauguration, certificates will be awarded to students for their excellent performance in the "2-Day Workshop on Exploring Linear IC Design: A Practical Framework Approach" conducted by Dr. V. Venu Balaji on 25th and 26th October 2024.
              </p>
              <Button size="lg" className="bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground">
                <Users className="mr-2 h-5 w-5" />
                Register for Workshop
              </Button>
            </div>
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
                © 2024 RoboHorizon Club. Empowering the next generation of robotics innovators.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RobotronicsEvent;
