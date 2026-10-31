import React from 'react';
import HeroSection from '../components/home/HeroSection';
import DoctorIntroSection from '../components/home/DoctorIntroSection';
import FeaturedServicesSection from '../components/home/FeaturedServicesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import SuccessStoriesPreview from '../components/home/SuccessStoriesPreview';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import FinalCtaSection from '../components/home/FinalCtaSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Doctor Introduction */}
      <DoctorIntroSection />

      {/* 3. Featured Services */}
      <FeaturedServicesSection />

      {/* 4. Why Choose The Doctor */}
      <WhyChooseUsSection />

      {/* 5. Success Stories Preview */}
      <SuccessStoriesPreview />

      {/* 6. Testimonials Preview Slider */}
      <TestimonialsSlider />

      {/* 7. Final Call to Action */}
      <FinalCtaSection />
    </div>
  );
}

