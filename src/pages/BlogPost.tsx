import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, MessageCircle, Share2, ArrowLeft, Bot, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: "Robotronics Club Inauguration: A New Era Begins",
      excerpt: "The ECE department at KLH Deemed to be University proudly announces the inauguration of Robotronics Club, marking the beginning of an exciting journey in robotics education and innovation.",
      content: `The ECE department at KLH Deemed to be University, Bowrampet campus is pleased to announce that a new Robotronics Club for all the students of the campus will be inaugurated by our beloved principal Dr. L. Koteswara Rao on 13th November 2024 at 10 am.

We will have a special guest, Mr. D. Tagore, Manager at Vidvan Electronics Pvt. Ltd. speaking at the inauguration ceremony. We cordially invite all ECE students and staff to join this event to share your insights and help us in achieving our goals for the club.

The inauguration event will be followed by a workshop on Automotive Embedded Systems from 1:00 PM to 4:00 PM in FIOTS lab under the guidance of the Robotronics Club coordinator Dr. V. Ravi Kumar. The workshops will be in an offline hands-on experience mode. The workshop is free of charge.

We encourage all interested 1st year students to register for the workshop and take advantage of this excellent opportunity to gain valuable knowledge, which will ultimately help in becoming a better researcher and enhance future career prospects.

During this inauguration, certificates will be awarded to students for their excellent performance in the "2-Day Workshop on Exploring Linear IC Design: A Practical Framework Approach," conducted by Dr. V. Venu Balaji that was held on 25th and 26th October 2024.

## Event Details

### Inauguration Ceremony
- **Date**: 13th November 2024
- **Time**: 10:00 AM onwards
- **Venue**: KLH Deemed to be University, Bowrampet Campus
- **Chief Guest**: Dr. L. Koteswara Rao (Principal)
- **Special Guest**: Mr. D. Tagore (Manager, Vidvan Electronics Pvt. Ltd.)

### Workshop on Automotive Embedded Systems
- **Time**: 1:00 PM - 4:00 PM
- **Venue**: FIOTS Lab
- **Coordinator**: Dr. V. Ravi Kumar
- **Mode**: Offline, Hands-on Experience
- **Cost**: Free of charge

## Why Join Robotronics Club?

The Robotronics Club aims to:
- Foster innovation in robotics and embedded systems
- Provide hands-on learning opportunities
- Connect students with industry professionals
- Develop practical skills for future careers
- Promote interdisciplinary collaboration

## Certificate Distribution

Certificates will be awarded to outstanding students who participated in the Linear IC Design workshop conducted by Dr. V. Venu Balaji. This recognition celebrates academic excellence and encourages continuous learning.

We look forward to welcoming you to this exciting event that marks the beginning of a new chapter in robotics education at our university.`,
      author: "Robotronics Club Team",
      date: "November 10, 2024",
      readTime: "3 min read",
      category: "Events",
      tags: ["Inauguration", "Workshop", "Robotics", "Embedded Systems"],
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

Our upcoming seminar on "AI in Robotics" will delve deep into these topics, featuring industry experts who will share their insights on the latest developments and future trends in AI-driven robotics.

## Key Topics Covered

### AI Algorithms in Robotics
- Machine learning for robotic control
- Computer vision for object recognition
- Natural language processing for human-robot interaction
- Reinforcement learning for autonomous behavior

### Industry Applications
- Manufacturing automation
- Healthcare robotics
- Autonomous vehicles
- Service robots

### Future Trends
- Edge AI for real-time processing
- Collaborative robots (cobots)
- Soft robotics with AI
- Brain-computer interfaces

## Seminar Details
- **Date**: September 22, 2024
- **Time**: 10:00 AM - 12:00 PM
- **Venue**: Auditorium Hall
- **Speakers**: Industry experts from leading tech companies

Join us to explore the exciting intersection of AI and robotics!`,
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

This workshop will be conducted by Dr. V. Ravi Kumar, our experienced faculty member who has extensive knowledge in embedded systems and automotive electronics. Participants will work on real automotive components and learn industry-standard practices.

## Learning Objectives
- Understand automotive embedded systems fundamentals
- Learn microcontroller programming for automotive applications
- Gain experience with sensor integration
- Master CAN bus communication
- Develop safety-critical system design skills

## Target Audience
- ECE students
- Mechanical engineering students
- Computer science students interested in embedded systems
- Final year engineering students

## Workshop Schedule
- **Duration**: 2 days
- **Mode**: Hands-on practical sessions
- **Prerequisites**: Basic knowledge of C programming
- **Certification**: Certificate of completion

Join us for an intensive learning experience that will prepare you for the exciting world of automotive embedded systems!`,
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

The certificate distribution ceremony will recognize students who demonstrated exceptional understanding, creativity, and practical skills during the workshop. This event serves as motivation for all students to strive for excellence in their academic pursuits.

## Award Categories
- Best Design Project
- Outstanding Performance
- Creative Innovation
- Technical Excellence

## Ceremony Details
- **Date**: November 13, 2024
- **Time**: During inauguration ceremony
- **Venue**: KLH University Campus
- **Chief Guest**: Dr. L. Koteswara Rao

We congratulate all the award recipients and encourage all students to participate in future workshops and events organized by the Robotronics Club.`,
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

  const post = blogPosts.find(p => p.id === parseInt(id || "1"));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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

      {/* Article Header */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-tech-dark via-background to-tech-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-tech-cyan text-primary-foreground mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-muted-foreground">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-tech rounded-full flex items-center justify-center mr-3">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-medium text-foreground">{post.author}</div>
                  <div className="text-sm">Author</div>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                <span>{post.views} views</span>
              </div>

              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                <span>{post.comments} comments</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-tech-cyan/20">
              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-foreground mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-muted-foreground mb-2 ml-6">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  } else if (paragraph.trim() === '') {
                    return <br key={index} />;
                  } else {
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-tech-cyan/30 text-tech-cyan">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-muted-foreground">Share this article:</span>
                    <Button variant="outline" size="sm" className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span>{post.views} views</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Author Bio */}
            <Card className="mt-8 p-6 border-tech-cyan/20">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-tech rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{post.author}</h3>
                  <p className="text-muted-foreground mb-4">
                    Robotics enthusiast and educator passionate about sharing knowledge and inspiring the next generation of engineers.
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
                      Follow
                    </Button>
                    <Button variant="outline" size="sm" className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 lg:py-24 bg-tech-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-8 text-center">
              Related <span className="text-tech-cyan">Articles</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Card key={relatedPost.id} className="group bg-background/50 backdrop-blur-sm border-tech-cyan/20 hover:border-tech-cyan/40 transition-all duration-300 overflow-hidden">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-tech-cyan transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>

                      <Link to={`/blog/${relatedPost.id}`}>
                        <Button variant="outline" size="sm" className="w-full border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-tech-dark">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
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
                © 2024 Robotronics Club. Empowering the next generation of robotics innovators.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
