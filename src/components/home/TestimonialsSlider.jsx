import React, { useState } from 'react';
import { Star, ChevronRight, ChevronLeft, Quote, Heart } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-sand-100 via-sand-200/40 to-sand-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="آراء وتجارب المشتركين"
          title="أصوات حقيقية تروي قصص التحول والراحة"
          subtitle="تجارب حقيقية لعميلات وعملاء عاشوا الرحلة وحققوا أهدافهم الصحية والتغذوية."
        />

        {/* Testimonial Feature Card */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="relative bg-white rounded-4xl p-8 sm:p-12 shadow-card border border-sand-200">
            
            {/* Quote Icon watermark */}
            <div className="absolute top-6 left-8 text-forest-100 pointer-events-none select-none">
              <Quote className="w-20 h-20 sm:w-28 sm:h-28 rotate-180" />
            </div>

            <div className="relative z-10 flex flex-col items-start text-right">
              
              {/* Rating stars & Program Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 w-full mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Badge variant="sage" className="text-xs">
                  {current.program}
                </Badge>
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-forest-950 font-medium leading-relaxed font-tajawal mb-6">
                "{current.quote}"
              </blockquote>

              {/* Highlight callout pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-forest-50 text-forest-800 text-xs sm:text-sm font-bold mb-8 border border-forest-200">
                <Heart className="w-4 h-4 text-forest-600 fill-forest-600" />
                <span>{current.highlight}</span>
              </div>

              {/* Author & Controls Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full pt-6 border-t border-sand-200">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-forest-900 font-cairo">
                    {current.clientName}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-charcoal-700 mt-0.5">
                    <span>{current.age}</span>
                    <span>•</span>
                    <span>مدة المتابعة: {current.duration}</span>
                  </div>
                </div>

                {/* Slider Navigation Buttons */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="p-3 rounded-full border border-sand-300 text-forest-900 hover:bg-forest-800 hover:text-white hover:border-forest-800 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-700"
                    aria-label="الرأي السابق"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-1.5 px-2">
                    {testimonialsData.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          currentIndex === idx ? 'w-8 bg-forest-800' : 'w-2.5 bg-forest-200 hover:bg-forest-300'
                        }`}
                        aria-label={`الانتقال للرأي ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={nextSlide}
                    className="p-3 rounded-full border border-sand-300 text-forest-900 hover:bg-forest-800 hover:text-white hover:border-forest-800 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-700"
                    aria-label="الرأي التالي"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

