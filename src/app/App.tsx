import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import WhatIFeel from "./components/WhatIFeel";
import PhotoGallery from "./components/PhotoGallery";
import MomentsCarousel from "./components/MomentsCarousel";
import VideosMemories from "./components/VideosMemories";
import AboutUs from "./components/AboutUs";
import SpecialMessage from "./components/SpecialMessage";
import OurFuture from "./components/OurFuture";
import FinalSection from "./components/FinalSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <OurStory />
      <WhatIFeel />
      <PhotoGallery />
      <MomentsCarousel />
      <VideosMemories />
      <AboutUs />
      <SpecialMessage />
      <OurFuture />
      <FinalSection />
      <Footer />
      <Analytics />
    </div>
  );
}