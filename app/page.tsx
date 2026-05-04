import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Performance from '@/components/Performance';
import EliteAccolades from '@/components/EliteAccolades';
import SocialShowcase from '@/components/SocialShowcase';
import { LogosSlider } from '@/components/LogosSlider';
import Neighborhoods from '@/components/Neighborhoods';
import Testimonials from '@/components/Testimonials';
import VideoTestimonials from '@/components/VideoTestimonials';
import YouTubeTestimonials from '@/components/YouTubeTestimonials';
import Media from '@/components/Media';
import FeaturedSpotlight from '@/components/FeaturedSpotlight';
import LeadCapture from '@/components/LeadCapture';
import Footer from '@/components/Footer';
import { AchievementBanner } from "@/components/achievement-banner";
import TikTokLive from '@/components/TikTokLive';
import InstagramLive from '@/components/InstagramLive';
import GoogleReviewsLive from '@/components/GoogleReviewsLive';

  export default function Home() {
  return (
    <main className="min-h-screen">
      <AchievementBanner />
      <Navbar />
      <About />
      <Performance />
      <EliteAccolades />
      <SocialShowcase />
      <TikTokLive />
      <InstagramLive />
      <GoogleReviewsLive />
      {/* <LogosSlider /> */}
      <Neighborhoods />
      <Testimonials />
      <YouTubeTestimonials />
      <VideoTestimonials />
      <FeaturedSpotlight />
      <LeadCapture />
      <Footer />
    </main>
  );
}
