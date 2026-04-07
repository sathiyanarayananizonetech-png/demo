import { AboutPreviewSection } from "../components/home/AboutPreviewSection";
import { CommunityStatsSection } from "../components/home/CommunityStatsSection";
import { HeroSection } from "../components/home/HeroSection";
import { ParlourMobileView } from "../components/home/ParlourMobileView";
import { ParallaxServicesSection } from "../components/home/ParallaxServicesSection";
import { PromoQuoteSection } from "../components/home/PromoQuoteSection";
import { ServicesSection } from "../components/home/ServicesSection";

function Home() {
  return (
    <div className="overflow-x-hidden bg-background text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container">
      {/* Mobile View */}
      <div className="block lg:hidden">
        <ParlourMobileView />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <HeroSection />
        <ServicesSection />
        <AboutPreviewSection />
        <CommunityStatsSection />
        <ParallaxServicesSection />
        <PromoQuoteSection />
      </div>
    </div>
  );
}

export default Home;
