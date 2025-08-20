import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Highlights />
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
                © 2024 RoboHorizon Club. Empowering the next generation of robotics innovators.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;