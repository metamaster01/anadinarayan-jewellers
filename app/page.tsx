import AppDownloadSection from "@/components/AppDownloadSection";
import CuratedHeritage from "@/components/CuratedHeritage";
import ExquisiteCategories from "@/components/EquisiticsCategories";
import HeroSection from "@/components/HeroSection";
import LegacyStory from "@/components/LegacyStory";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrival";
import SignatureShowcase from "@/components/SignatureShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return(
<div>
  <Navbar />
  <HeroSection />;
  <CuratedHeritage />
  <ExquisiteCategories />
  <NewArrivals />
  <SignatureShowcase />
  <LegacyStory />
  <AppDownloadSection />
  <Footer />
  
</div>

  ) 
    
}