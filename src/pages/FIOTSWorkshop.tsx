import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Bot, Zap, Trophy, Target, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FIOTSWorkshop = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const workshopImages = [
    "/images/2/Poster.jpg",
    "/images/2/IMG_9595.JPG",
    "/images/2/IMG_9603.JPG",
    "/images/2/IMG_9604.JPG",
    "/images/2/IMG_9607.JPG"
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

      {/* Back to Blog Button */}
      <div className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <Button variant="outline" className="mb-6 border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
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
                FIOTS LAB WORKSHOP
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              FIOTS LAB Programming for <span className="text-tech-cyan">Automotive Embedded Systems</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A comprehensive six-day workshop designed to provide ECE 2nd year students with hands-on experience in automotive embedded systems programming.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-tech-cyan mx-auto mb-2" />
                <div className="text-lg font-semibold text-foreground">18-23 Sept 2024</div>
                <div className="text-sm text-muted-foreground">Six-Day Workshop</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-tech-cyan mx-auto mb-2" />
                <div className="text-lg font-semibold text-foreground">8:10 AM - 4:00 PM</div>
                <div className="text-sm text-muted-foreground">Daily Sessions</div>
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
                <h2 className="text-3xl font-bold mb-8 text-foreground">Workshop Details</h2>

                <div className="space-y-6">
                  <Card className="p-6 border-tech-cyan/20">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Trophy className="h-5 w-5 text-tech-orange mr-2" />
                      Workshop Overview
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      A Six-day workshop on "FIOTS LAB Programming for Automotive Embedded System through Robotronics Club Team" conducted by Dr. V. Ravi Kumar.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>18th - 23rd September 2024</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>KLH Bachupally Campus</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>ECE 2nd Year Students</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-tech-cyan/20">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Clock className="h-5 w-5 text-tech-orange mr-2" />
                      Daily Schedule
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-tech-dark/20 rounded-lg">
                        <span className="font-medium">Morning Session</span>
                        <span className="text-tech-cyan">8:10 AM - 12:40 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-tech-dark/20 rounded-lg">
                        <span className="font-medium">Afternoon Session</span>
                        <span className="text-tech-cyan">1:20 PM - 4:00 PM</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-tech-cyan/20">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Bot className="h-5 w-5 text-tech-orange mr-2" />
                      Key Features
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>Offline, Hands-on Experience Mode</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>No Registration Required</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>Certificates for Top Performers</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>Expert Evaluation by Faculty</span>
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

      {/* Learning Outcomes */}
      <section className="py-16 lg:py-24 bg-tech-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary-foreground text-center">Learning Outcomes</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Technical Skills</h3>
                <p className="text-muted-foreground">
                  Master FIOTS LAB programming techniques and automotive embedded systems development.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Practical Experience</h3>
                <p className="text-muted-foreground">
                  Gain hands-on experience with real automotive embedded systems and programming.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Certification</h3>
                <p className="text-muted-foreground">
                  Earn certificates for top performers based on expert faculty evaluation.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Career Development</h3>
                <p className="text-muted-foreground">
                  Enhance your research capabilities and future career prospects in embedded systems.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Information */}
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
                Expert in Embedded Systems and Automotive Electronics
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground">
                  <Users className="mr-2 h-5 w-5" />
                  Join Workshop
                </Button>
                <Button variant="outline" className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
                  <Target className="mr-2 h-5 w-5" />
                  View Brochure
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
                © 2024 RoboHorizon Club. Empowering the next generation of robotics innovators.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FIOTSWorkshop;
