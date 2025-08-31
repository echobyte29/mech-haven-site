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
      title: "The Future of Robotics: AI Integration and Automation",
      content: `Artificial Intelligence (AI) is transforming the landscape of robotics in unprecedented ways. From autonomous vehicles to intelligent manufacturing systems, AI-powered robots are becoming increasingly sophisticated and capable.

## The AI-Robotics Revolution

The integration of AI in robotics brings several advantages:

### Enhanced Decision-Making
AI algorithms enable robots to make intelligent decisions based on real-time data, environmental conditions, and learned patterns. This capability is crucial for applications in dynamic environments.

### Improved Adaptability
Machine learning allows robots to adapt to new situations and learn from experience, making them more versatile and efficient in performing complex tasks.

### Better Human-Robot Interaction
Natural language processing and computer vision enable more intuitive and safe interactions between humans and robots in shared workspaces.

### Increased Efficiency
AI optimization algorithms can significantly improve the efficiency of robotic systems, reducing energy consumption and operational costs.

## Industry Applications

### Manufacturing
AI-powered robots are revolutionizing manufacturing processes:
- Predictive maintenance
- Quality control automation
- Adaptive production lines
- Collaborative robotics (cobots)

### Healthcare
In medical applications:
- Surgical assistance robots
- Rehabilitation devices
- Drug discovery automation
- Patient care robotics

### Autonomous Vehicles
Self-driving cars and drones rely heavily on AI for:
- Real-time navigation
- Obstacle detection and avoidance
- Traffic prediction
- Safety systems

## Future Trends

The future of AI in robotics looks promising with emerging technologies:

- **Edge AI**: Processing AI algorithms directly on robotic hardware
- **Swarm Robotics**: Coordinated behavior of multiple robots
- **Soft Robotics**: Flexible, adaptable robotic systems
- **Brain-Computer Interfaces**: Direct neural control of robots

## Educational Implications

For students pursuing robotics engineering, understanding AI integration is crucial. Our upcoming seminar on "AI in Robotics" will cover these topics in detail, providing hands-on experience with AI-powered robotic systems.

The seminar will feature:
- Industry expert speakers
- Live demonstrations
- Interactive workshops
- Networking opportunities

Join us to explore the exciting intersection of AI and robotics!`,
      author: "Dr. V. Ravi Kumar",
      date: "November 8, 2024",
      readTime: "5 min read",
      category: "Technology",
      tags: ["AI", "Robotics", "Automation", "Future Tech"],
      image: "/images/1/1.2.jpg",
      views: 189,
      comments: 8
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
                © 2024 RoboHorizon Club. Empowering the next generation of robotics innovators.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
