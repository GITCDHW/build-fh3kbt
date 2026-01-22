import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Thread Polish AI - Transform Your Social Media Threads',
  description: 'Effortlessly transform raw text into engaging, polished social media threads using AI. Save time and enhance your content.',
};

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900">
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
