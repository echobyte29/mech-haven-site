import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Bot, Zap, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-robotics.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Robotronics Club Inauguration",
      date: "November 13, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "KLH University, Bowrampet Campus",
      description: "Grand inauguration of Robotronics Club by Principal Dr. L. Koteswara Rao with special guest Mr. D. Tagore from Vidvan Electronics Pvt. Ltd. Followed by Automotive Embedded Systems workshop.",
      attendees: 200,
      type: "Inauguration",
      featured: true,
      link: "/events/robotronics-inauguration"
    },
    {
      id: 2,
      title: "Six-Day Workshop: FIOTS LAB Programming for Automotive Embedded Systems",
      date: "17-09-2024",
      time: "8:10 AM - 4:00 PM",
      location: "KLH Bachupally Campus",
      description: "A comprehensive six-day workshop on FIOTS LAB Programming for Automotive Embedded Systems conducted by Dr. V. Ravi Kumar, offering hands-on experience for ECE 2nd year students.",
      attendees: 150,
      type: "Workshop",
      link: "/events/fiots-workshop"
    },
    {
      id: 3,
      title: "Build & Fly Your Own Drone Workshop",
      date: "9th January 2025",
      time: "10:00 AM - 4:00 PM",
      location: "KLH Bachupally Campus",
      description: "Advanced workshop on drone prototyping featuring expert talk by Mr. Vadluri Varun and hands-on drone assembly and flight testing sessions.",
      attendees: 120,
      type: "Workshop",
      link: "/events/drone-workshop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-tech-dark/80"></div>
          </div>

          {/* Circuit Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-cyan/10 via-transparent to-tech-cyan/10"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--tech-cyan)) 1px, transparent 1px),
                               radial-gradient(circle at 80% 20%, hsl(var(--tech-cyan)) 1px, transparent 1px),
                               radial-gradient(circle at 40% 80%, hsl(var(--tech-cyan)) 1px, transparent 1px)`,
              backgroundSize: '100px 100px, 80px 80px, 120px 120px'
            }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              {/* Robot Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-tech rounded-full mb-8 animate-tech-pulse">
                <Bot className="h-10 w-10 text-primary-foreground" />
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-tech-orange animate-float">Innovation</span>
                <br />
                <span className="text-primary-foreground">Through</span>
                <br />
                <span className="bg-gradient-to-r from-tech-cyan via-tech-cyan-light to-tech-cyan bg-clip-text text-transparent">
                  Robotics Events
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-tech-cyan-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Join our journey of technological excellence where cutting-edge robotics meets collaborative innovation
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-orange mb-2">50+</div>
                  <div className="text-sm text-tech-cyan-light">Events Hosted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-orange mb-2">1000+</div>
                  <div className="text-sm text-tech-cyan-light">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-orange mb-2">25+</div>
                  <div className="text-sm text-tech-cyan-light">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-orange mb-2">15+</div>
                  <div className="text-sm text-tech-cyan-light">Awards Won</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-tech-orange/30 group">
                  <Zap className="mr-2 h-5 w-5" />
                  View Upcoming Events
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-tech-cyan/30"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Past Achievements
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute bottom-20 left-10 animate-float">
            <div className="w-4 h-4 bg-tech-cyan rounded-full opacity-60"></div>
          </div>
          <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-6 h-6 bg-tech-orange rounded-full opacity-60"></div>
          </div>
          <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-3 h-3 bg-tech-cyan rounded-full opacity-60"></div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-tech-blue/30 backdrop-blur-sm border border-tech-cyan/30 rounded-full px-6 py-3 mb-8">
                <Zap className="h-4 w-4 text-tech-cyan animate-tech-pulse" />
                <span className="text-sm font-medium text-tech-cyan-light">
                  UPCOMING EVENTS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Join the <span className="text-tech-orange">Innovation</span> Wave
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Be part of groundbreaking robotics initiatives that push the boundaries of technology and creativity.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className={`group relative overflow-hidden bg-gradient-to-br from-background to-background/50 border-border hover:border-tech-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-tech-cyan/10 ${event.featured ? 'ring-2 ring-tech-orange/50' : ''}`}>
                  {/* Featured Badge */}
                  {event.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <Badge className="bg-tech-orange text-primary-foreground px-4 py-1">
                        <Trophy className="h-3 w-3 mr-1" />
                        Featured Event
                      </Badge>
                    </div>
                  )}

                  {/* Event Type Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="bg-tech-cyan/20 text-tech-cyan border-tech-cyan/30">
                      {event.type}
                    </Badge>
                  </div>

                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center mb-4 group-hover:animate-tech-pulse">
                      <Bot className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-tech-cyan transition-colors truncate">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="px-6 pb-4 space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-3 text-tech-cyan flex-shrink-0" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-3 text-tech-cyan flex-shrink-0" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-3 text-tech-cyan flex-shrink-0" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-3 text-tech-cyan flex-shrink-0" />
                      <span className="text-sm">{event.attendees} registered</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="p-6 pt-4">
                    {event.link ? (
                      <Link to={event.link}>
                        <Button className="w-full bg-gradient-to-r from-tech-orange to-tech-orange/90 hover:from-tech-orange/90 hover:to-tech-orange text-primary-foreground font-semibold group-hover:shadow-lg group-hover:shadow-tech-orange/30 transition-all duration-300">
                          View Details
                          <Target className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    ) : (
                      <Button className="w-full bg-gradient-to-r from-tech-orange to-tech-orange/90 hover:from-tech-orange/90 hover:to-tech-orange text-primary-foreground font-semibold group-hover:shadow-lg group-hover:shadow-tech-orange/30 transition-all duration-300">
                        View Details
                        <Target className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-tech-cyan/5 to-tech-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 lg:py-32 bg-tech-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-tech-orange/20 backdrop-blur-sm border border-tech-orange/30 rounded-full px-6 py-3 mb-8">
                <Trophy className="h-4 w-4 text-tech-orange animate-tech-pulse" />
                <span className="text-sm font-medium text-tech-orange">
                  PAST ACHIEVEMENTS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
                Our <span className="text-tech-cyan">Legacy</span> of Excellence
              </h2>
              <p className="text-xl text-tech-cyan-light max-w-3xl mx-auto">
                Celebrating the milestones that have defined our journey in robotics innovation and community building.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group relative overflow-hidden bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border-tech-cyan/20 hover:border-tech-cyan/40 transition-all duration-500">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-tech rounded-xl flex items-center justify-center mb-6 group-hover:animate-tech-pulse">
                    <Trophy className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Robotics Competition 2024</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our flagship annual competition brought together 200+ participants from across the region. Teams showcased innovative robotic designs and competed in challenging technical categories, resulting in groundbreaking projects that pushed the boundaries of robotics technology.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-tech-cyan">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">March 2024</span>
                    </div>
                    <Badge variant="outline" className="border-tech-orange text-tech-orange">
                      200+ Participants
                    </Badge>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-tech-cyan/5 to-tech-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>

              <Card className="group relative overflow-hidden bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border-tech-cyan/20 hover:border-tech-cyan/40 transition-all duration-500">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-tech rounded-xl flex items-center justify-center mb-6 group-hover:animate-tech-pulse">
                    <Bot className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">AI in Robotics Summit</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Distinguished speakers from leading tech companies and research institutions shared insights on the future of artificial intelligence integration with robotics. The summit featured hands-on workshops and networking opportunities that connected students with industry professionals.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-tech-cyan">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">February 2024</span>
                    </div>
                    <Badge variant="outline" className="border-tech-orange text-tech-orange">
                      150+ Attendees
                    </Badge>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-tech-cyan/5 to-tech-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            </div>

            {/* Achievement Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-tech-orange mb-2">15+</div>
                <div className="text-sm text-tech-cyan-light">Competitions Won</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-tech-orange mb-2">2000+</div>
                <div className="text-sm text-tech-cyan-light">Community Members</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-tech-orange mb-2">50+</div>
                <div className="text-sm text-tech-cyan-light">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-tech-orange mb-2">100+</div>
                <div className="text-sm text-tech-cyan-light">Workshops Hosted</div>
              </div>
            </div>
          </div>
        </section>
      </main>

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

export default Events;
