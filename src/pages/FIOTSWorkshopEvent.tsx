import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Bot, Zap, Trophy, Target, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FIOTSWorkshopEvent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const workshopImages = [
    "/images/2/Poster.jpg",
    "/images/2/IMG_9595.JPG",
    "/images/2/IMG_9596.JPG",
    "/images/2/IMG_9597.JPG",
    "/images/2/IMG_9598.JPG"
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
                FIOTS WORKSHOP
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Six-Day Workshop: <span className="text-tech-cyan">FIOTS LAB Programming</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A comprehensive six-day workshop on FIOTS LAB Programming for Automotive Embedded Systems conducted by Dr. V. Ravi Kumar, offering hands-on experience for ECE 2nd year students.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Calendar className="h-8 w-8 text-tech-cyan mx-auto mb-2" />
                <div className="text-lg font-semibold text-foreground">17-09-2024</div>
                <div className="text-sm text-muted-foreground">Start Date</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-tech-cyan mx-auto mb-2" />
                <div className="text-lg font-semibold text-foreground">8:10 AM - 4:00 PM</div>
                <div className="text-sm text-muted-foreground">Daily Schedule</div>
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
                      <Bot className="h-5 w-5 text-tech-orange mr-2" />
                      Workshop Details
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-tech-dark/20 rounded-lg">
                        <h4 className="font-semibold text-tech-cyan mb-2">Duration & Schedule</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Dates: 18th - 23rd September 2024</li>
                          <li>• Morning Session: 8:10 AM to 12:40 PM</li>
                          <li>• Afternoon Session: 1:20 PM to 4:00 PM</li>
                          <li>• Mode: Offline, Hands-on Experience</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-tech-dark/20 rounded-lg">
                        <h4 className="font-semibold text-tech-cyan mb-2">Target Audience</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• ECE 2nd Year Students</li>
                          <li>• No registration requirement</li>
                          <li>• Free of charge</li>
                          <li>• Certificates for top performers</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-tech-cyan/20">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Trophy className="h-5 w-5 text-tech-orange mr-2" />
                      Faculty Coordinator
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      <strong>Dr. V. Ravi Kumar</strong><br />
                      Associate Professor, Department of ECE<br />
                      Robotics Club Coordinator
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Bot className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>Expert in Embedded Systems</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Target className="h-4 w-4 mr-2 text-tech-cyan" />
                        <span>Robotics Club Coordinator</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-tech-cyan/20">
                    <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                      <Zap className="h-5 w-5 text-tech-orange mr-2" />
                      Learning Outcomes
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>FIOTS LAB Programming expertise</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>Automotive Embedded Systems knowledge</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>Hands-on practical experience</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                        <span>Research and development skills</span>
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

      {/* Workshop Content */}
      <section className="py-16 lg:py-24 bg-tech-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary-foreground text-center">Workshop Content</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">FIOTS LAB Programming</h3>
                <p className="text-muted-foreground">
                  Comprehensive training in FIOTS LAB Programming fundamentals and advanced concepts for automotive embedded systems.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Automotive Applications</h3>
                <p className="text-muted-foreground">
                  Hands-on experience with automotive embedded systems and real-world applications in the automotive industry.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Practical Sessions</h3>
                <p className="text-muted-foreground">
                  Intensive hands-on sessions with real hardware and software tools for practical learning experience.
                </p>
              </Card>

              <Card className="p-6 bg-background/50 backdrop-blur-sm border-tech-cyan/20">
                <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Certification</h3>
                <p className="text-muted-foreground">
                  Certificates awarded to top performers based on expert evaluation and practical assessment.
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
                Expert in Embedded Systems and Robotics
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground">
                  <Users className="mr-2 h-5 w-5" />
                  Join Workshop
                </Button>
                <Button variant="outline" className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
                  <Target className="mr-2 h-5 w-5" />
                  Download Brochure
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
              Ready to Enhance Your Technical Skills?
            </h3>
            <p className="text-tech-cyan-light mb-8 max-w-2xl mx-auto">
              Join our workshops and become part of a community that's advancing technology and innovation.
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

export default FIOTSWorkshopEvent;
