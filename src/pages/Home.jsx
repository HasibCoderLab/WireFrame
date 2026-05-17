import HeroSection from "../components/home/HeroSection";
import StatsBar from "../components/home/StatsBar";
import AboutSection from "../components/home/AboutSection";
import MentorPreview from "../components/home/MentorPreview";
import CallToAction from "../components/home/CallToAction";

/**
 
  
 * Section order:
 *  1. HeroSection     — above the fold, first impression
 *  2. StatsBar        — quick trust signals
 *  3. AboutSection    — why join? feature cards
 *  4. MentorPreview   — team showcase
 *  5. CallToAction    — final push to join Discord
 */
export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <MentorPreview />
      <CallToAction />
    </main>
  );
}
