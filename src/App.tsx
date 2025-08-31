import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import RobotronicsEvent from "./pages/RobotronicsEvent";
import FIOTSWorkshopEvent from "./pages/FIOTSWorkshopEvent";
import DroneWorkshopEvent from "./pages/DroneWorkshopEvent";
import FIOTSWorkshop from "./pages/FIOTSWorkshop";
import DroneWorkshop from "./pages/DroneWorkshop";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/robotronics-inauguration" element={<RobotronicsEvent />} />
          <Route path="/events/fiots-workshop" element={<FIOTSWorkshopEvent />} />
          <Route path="/events/drone-workshop" element={<DroneWorkshopEvent />} />
          <Route path="/workshops/fiots" element={<FIOTSWorkshop />} />
          <Route path="/workshops/drone" element={<DroneWorkshop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
