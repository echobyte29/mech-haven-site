import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Bot, Zap, Trophy, Target, ArrowRight, Eye, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Robotronics Club Inauguration: A New Era Begins",
      excerpt: "The ECE department at KLH Deemed to be University proudly announces the inauguration of Robotronics Club, marking the beginning of an exciting journey in robotics education and innovation.",
      content: `The ECE department at KLH Deemed to be University, Bowrampet campus is pleased to announce that a new Robotronics Club for all the students of the campus will be inaugurated by our beloved principal Dr. L. Koteswara Rao on 13th November 2024 at 10 am.

We will have a special guest, Mr. D. Tagore, Manager at Vidvan Electronics Pvt. Ltd. speaking at the inauguration ceremony. We cordially invite all ECE students and staff to join this event to share your insights and help us in achieving our goals for the club.

The inauguration event will be followed by a workshop on Automotive Embedded Systems from 1:00 PM to 4:00 PM in FIOTS lab under the guidance of the Robotronics Club coordinator Dr. V. Ravi Kumar. The workshops will be in an offline hands-on experience mode. The workshop is free of charge.

We encourage all interested 1st year students to register for the workshop and take advantage of this excellent opportunity to gain valuable knowledge, which will ultimately help in becoming a better researcher and enhance future career prospects.

During this inauguration, certificates will be awarded to students for their excellent performance in the "2-Day Workshop on Exploring Linear IC Design: A Practical Framework Approach," conducted by Dr. V. Venu Balaji that was held on 25th and 26th October 2024.`,
      author: "Robotronics Club Team",
      date: "November 10, 2024",
      readTime: "3 min read",
      category: "Events",
      tags: ["Inauguration", "Workshop", "Robotics", "Embedded Systems"],
      featured: true,
      image: "/images/1/0.jpg",
      views: 245,
      comments: 12
    },
    {
      id: 2,
      title: "Six-Day Workshop: FIOTS LAB Programming for Automotive Embedded Systems",
      excerpt: "A comprehensive six-day workshop on FIOTS LAB Programming for Automotive Embedded Systems conducted by Dr. V. Ravi Kumar, offering hands-on experience for ECE 2nd year students.",
      content: `This is to inform all ECE students that a Six-day workshop on "FIOTS LAB Programming for Automotive Embedded System through Robotronics Club Team" will be conducted by Dr. V. Ravi Kumar. The workshops will be held during 18th-23rd September 2024, at the KLH Bachupally campus.

## Workshop Details

### Schedule
- **Dates**: 18th - 23rd September 2024
- **Venue**: KLH Bachupally Campus
- **Daily Timings**:
  - Morning Session: 8:10 AM to 12:40 PM
  - Afternoon Session: 1:20 PM to 4:00 PM

### Key Features
- **Mode**: Offline, Hands-on Experience
- **Target Audience**: ECE 2nd Year Students
- **Registration**: No registration requirement
- **Certification**: Certificates awarded to top performers based on expert evaluation

## Why Participate?

This workshop provides an excellent opportunity for ECE 2nd year students to:
- Gain valuable knowledge in FIOTS LAB Programming
- Learn Automotive Embedded Systems concepts
- Enhance research and development skills
- Improve future career prospects
- Receive expert evaluation and certification

## Workshop Content

The six-day intensive program covers:
- FIOTS LAB Programming fundamentals
- Automotive Embedded Systems architecture
- Hands-on practical sessions
- Real-world applications
- Industry best practices

## Faculty Coordinator
**Dr. V. Ravi Kumar**
- Associate Professor, Department of ECE
- Robotics Club Coordinator
- Expert in Embedded Systems

We strongly encourage all interested ECE 2nd year students to participate in this workshop. This is a unique opportunity to gain practical knowledge and enhance your technical skills in the rapidly growing field of automotive embedded systems.

For more details, please refer to the workshop brochure or contact the Robotics Club team.`,
      author: "Dr. V. Ravi Kumar",
      date: "September 17, 2024",
      readTime: "4 min read",
      category: "Workshop",
      tags: ["FIOTS LAB", "Embedded Systems", "Automotive", "Hands-on", "ECE"],
      featured: false,
      image: "/images/2/IMG_9595.JPG",
      views: 198,
      comments: 15
    },
    {
      id: 3,
      title: "Build & Fly Your Own Drone: Advanced Workshop",
      excerpt: "An advanced workshop on drone prototyping featuring expert talk by Mr. Vadluri Varun and hands-on drone assembly and flight testing sessions.",
      content: `The Department of Electronics and Communication Engineering at KLH Bachupally Campus, in collaboration with the Robotronics Club, organized an advanced workshop titled "Build & Fly Your Own Drone" on 9th January 2025.

## Workshop Highlights

### Expert Speaker
**Mr. Vadluri Varun**
- Founder and CEO of EPIT Research Labs Pvt. Ltd.
- Industry expert in drone technologies
- Pioneer in drone prototyping and applications

### Workshop Structure

#### Morning Session: Expert Talk
- Deep insights into drone technologies
- Design principles and methodologies
- Real-world applications and use cases
- Industry trends and future developments

#### Afternoon Session: Hands-on Workshop
- Practical drone assembly
- Flight testing and calibration
- Troubleshooting and optimization
- Safety protocols and best practices

### Learning Outcomes

Participants will gain expertise in:
- Drone design and prototyping
- Electronic components integration
- Flight control systems
- Aerial robotics applications
- Safety and regulatory compliance

## Coordinator
**Dr. V. Ravi Kumar**
- Associate Professor, Department of ECE
- Robotics Club Coordinator
- Workshop Organizer

## Why Attend?

This workshop offers:
- **Experiential Learning**: Hands-on drone building experience
- **Industry Insights**: Direct interaction with drone technology experts
- **Innovation Focus**: Emphasis on creative problem-solving
- **Career Enhancement**: Valuable skills for robotics and aerospace careers
- **Networking**: Connect with industry professionals and peers

## Target Audience
- ECE students interested in robotics
- Engineering students with electronics background
- Enthusiasts in drone technology and aerial robotics
- Future researchers in unmanned aerial systems

The workshop successfully bridged the gap between theoretical knowledge and practical application, providing students with invaluable experience in the exciting field of drone technology. Participants left with not just knowledge, but also the confidence to innovate and create their own aerial solutions.

This event marked another milestone in our commitment to providing cutting-edge technical education and fostering innovation among our students.`,
      author: "Dr. V. Ravi Kumar",
      date: "January 10, 2025",
      readTime: "5 min read",
      category: "Workshop",
      tags: ["Drone", "Aerial Robotics", "Prototyping", "Hands-on", "Innovation"],
      featured: false,
      image: "/images/3/6055381508123902565.jpg",
      views: 312,
      comments: 28
    },
    {
      id: 4,
      title: "The Future of Robotics: AI Integration and Automation",
      excerpt: "Exploring how artificial intelligence is revolutionizing the field of robotics and what it means for the next generation of engineers and innovators.",
      content: `Artificial Intelligence (AI) is transforming the landscape of robotics in unprecedented ways. From autonomous vehicles to intelligent manufacturing systems, AI-powered robots are becoming increasingly sophisticated and capable.

The integration of AI in robotics brings several advantages:
- Enhanced decision-making capabilities
- Improved adaptability to dynamic environments
- Better human-robot interaction
- Increased efficiency in complex tasks

Our upcoming seminar on "AI in Robotics" will delve deep into these topics, featuring industry experts who will share their insights on the latest developments and future trends in AI-driven robotics.`,
      author: "Dr. V. Ravi Kumar",
      date: "November 8, 2024",
      readTime: "5 min read",
      category: "Technology",
      tags: ["AI", "Robotics", "Automation", "Future Tech"],
      featured: false,
      image: "/images/1/1.2.jpg",
      views: 189,
      comments: 8
    },
    {
      id: 5,
      title: "Hands-on Learning: Automotive Embedded Systems Workshop",
      excerpt: "A comprehensive guide to the upcoming workshop on Automotive Embedded Systems, covering everything from basic concepts to advanced applications.",
      content: `The Automotive Embedded Systems workshop is designed to provide students with practical knowledge and hands-on experience in one of the most rapidly growing fields in electronics engineering.

Workshop Highlights:
- Introduction to embedded systems architecture
- Automotive-specific microcontroller programming
- Sensor integration and data acquisition
- Real-time operating systems (RTOS)
- CAN bus communication protocols
- Safety-critical system design

This workshop will be conducted by Dr. V. Ravi Kumar, our experienced faculty member who has extensive knowledge in embedded systems and automotive electronics. Participants will work on real automotive components and learn industry-standard practices.`,
      author: "Workshop Coordinator",
      date: "November 5, 2024",
      readTime: "4 min read",
      category: "Education",
      tags: ["Workshop", "Embedded Systems", "Automotive", "Hands-on"],
      featured: false,
      image: "/images/1/2.1.jpg",
      views: 156,
      comments: 6
    },
    {
      id: 6,
      title: "Certificate Distribution Ceremony: Recognizing Excellence",
      excerpt: "Celebrating the achievements of students who excelled in the Linear IC Design workshop and setting the standard for academic excellence.",
      content: `During the Robotronics Club inauguration, we will be distributing certificates to outstanding students who participated in the "2-Day Workshop on Exploring Linear IC Design: A Practical Framework Approach."

This workshop, conducted by Dr. V. Venu Balaji, covered essential topics in linear integrated circuits, including:
- Operational amplifier circuits
- Active filters and oscillators
- Voltage regulators and power supplies
- Signal processing applications
- Practical circuit design and testing

The certificate distribution ceremony will recognize students who demonstrated exceptional understanding, creativity, and practical skills during the workshop. This event serves as motivation for all students to strive for excellence in their academic pursuits.`,
      author: "Academic Coordinator",
      date: "November 3, 2024",
      readTime: "2 min read",
      category: "Achievements",
      tags: ["Certificates", "Linear IC", "Excellence", "Recognition"],
      featured: false,
      image: "/images/1/3.1.jpg",
      views: 134,
      comments: 4
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-tech-dark via-background to-tech-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-tech-orange/20 backdrop-blur-sm border border-tech-orange/30 rounded-full px-6 py-3 mb-8">
              <Bot className="h-4 w-4 text-tech-orange animate-tech-pulse" />
              <span className="text-sm font-medium text-tech-orange">
                ROBOTRONICS BLOG
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Insights & <span className="text-tech-cyan">Innovations</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Stay updated with the latest in robotics, embedded systems, and technological advancements from our community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground">
                <Eye className="mr-2 h-5 w-5" />
                Read Latest Posts
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark"
              >
                <Share2 className="mr-2 h-5 w-5" />
                Share Knowledge
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="bg-tech-orange text-primary-foreground px-4 py-2 mb-4">
                <Zap className="h-4 w-4 mr-2" />
                Featured Article
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Editor's <span className="text-tech-cyan">Pick</span>
              </h2>
            </div>

            <Card className="max-w-6xl mx-auto overflow-hidden border-tech-cyan/20 hover:border-tech-cyan/40 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-tech-cyan text-primary-foreground">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {featuredPost.views}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-foreground hover:text-tech-cyan transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-tech rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium">{featuredPost.author}</span>
                    </div>

                    <div className="flex gap-2">
                      <Link to={`/blog/${featuredPost.id}`}>
                        <Button className="bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      {featuredPost.id === 2 && (
                        <Link to="/workshops/fiots">
                          <Button variant="outline" className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
                            View Workshop
                          </Button>
                        </Link>
                      )}
                      {featuredPost.id === 3 && (
                        <Link to="/workshops/drone">
                          <Button variant="outline" className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
                            View Workshop
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-tech-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Latest <span className="text-tech-cyan">Articles</span>
            </h2>
            <p className="text-xl text-tech-cyan-light max-w-2xl mx-auto">
              Discover insights, tutorials, and updates from our robotics community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group bg-background/50 backdrop-blur-sm border-tech-cyan/20 hover:border-tech-cyan/40 transition-all duration-500 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-tech-cyan/20 text-tech-cyan border-tech-cyan/30">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-tech-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-tech rounded-full flex items-center justify-center">
                        <Bot className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <span className="text-xs font-medium">{post.author}</span>
                    </div>

                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-tech-cyan/30 text-tech-cyan">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" className="flex-1 border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
                        Read Article
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                    {post.id === 2 && (
                      <Link to="/workshops/fiots">
                        <Button size="sm" className="bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground">
                          View Workshop
                        </Button>
                      </Link>
                    )}
                    {post.id === 3 && (
                      <Link to="/workshops/drone">
                        <Button size="sm" className="bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground">
                          View Workshop
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 text-center border-tech-cyan/20">
            <div className="w-16 h-16 bg-gradient-tech rounded-xl flex items-center justify-center mx-auto mb-6">
              <Bot className="h-8 w-8 text-primary-foreground" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Stay Updated with Latest Robotics News
            </h3>

            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest updates on robotics events, workshops, and technological advancements delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-tech-cyan"
              />
              <Button className="bg-tech-orange hover:bg-tech-orange/90 text-primary-foreground px-6 py-3">
                Subscribe
              </Button>
            </div>
          </Card>
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

export default Blog;
