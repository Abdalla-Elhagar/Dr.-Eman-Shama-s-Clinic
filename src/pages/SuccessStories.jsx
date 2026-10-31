import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Calendar, 
  UserCheck, 
  Lock, 
  ArrowLeft,
  CheckCircle2,
  TrendingDown,
  Activity
} from 'lucide-react';
import { successStoriesData, testimonialsData } from '../data/testimonials';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function SuccessStories() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="flex flex-col bg-sand-100">
      
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-sand-100 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="forest" className="mb-4">
              إنجازات ونتائج واقعية
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-cairo leading-tight">
              قصص نجاح وتجارب المشتركين
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed">
              كل قصة هنا تمثل التزاماً حقيقياً وتغييراً مستداماً في العادات والصحة العامة دون إلحاق الضرر بالجسم.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Guarantee Banner */}
      <section className="py-6 bg-forest-900 text-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center flex-shrink-0 text-forest-200">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-cairo text-sand-50">
                  ميثاق الخصوصية والسرية التامة لصور وبيانات المراجعين
                </h4>
                <p className="text-xs text-sand-300">
                  لا يتم نشر أي صور أو تفاصيل شخصية إلا بموافقة كتابية صريحة من صاحب الحالة، احتراماً تاماً لخصوصيتكم.
                </p>
              </div>
            </div>

            <Badge variant="white" className="text-xs">
              سياسة خصوصية معتمدة 100%
            </Badge>
          </div>
        </div>
      </section>

      {/* In-depth Stories Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12">
            {successStoriesData.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-sand-200/90"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Story Details */}
                  <div className="lg:col-span-7 flex flex-col items-start">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="forest">{story.client}</Badge>
                      <Badge variant="sand">المدة: {story.timeline}</Badge>
                    </div>

                    <h2 className="text-2xl font-bold font-cairo text-forest-950 mb-3">
                      {story.title}
                    </h2>

                    {/* Verified Result Banner */}
                    <div className="w-full bg-forest-50/70 border border-forest-200/80 rounded-2xl p-4 mb-4">
                      <div className="flex items-center gap-2 text-forest-800 font-bold text-xs mb-1">
                        <TrendingDown className="w-4 h-4 text-forest-600" />
                        <span>النتيجة الصحية المحققة:</span>
                      </div>
                      <p className="text-sm sm:text-base font-extrabold text-forest-950">
                        {story.resultSummary}
                      </p>
                    </div>

                    <p className="text-sm text-charcoal-700 leading-relaxed mb-6">
                      {story.story}
                    </p>

                    <blockquote className="border-r-4 border-forest-500 pr-4 py-2 italic text-sm font-medium text-forest-900 bg-sand-50/60 rounded-l-xl w-full">
                      "{story.quote}"
                    </blockquote>
                  </div>

                  {/* Right Column: Designed Elegant Placeholder for Before/After */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-3xl p-6 bg-sand-50 border border-sand-200 text-center flex flex-col items-center justify-center min-h-[260px]">
                      <div className="w-16 h-16 rounded-2xl bg-forest-100 flex items-center justify-center text-forest-800 mb-4 shadow-xs">
                        <Activity className="w-8 h-8 text-forest-700" />
                      </div>
                      
                      <h4 className="text-sm font-bold font-cairo text-forest-950 mb-1">
                        مقارنة القياسات ونسب الدهون
                      </h4>
                      <p className="text-xs text-charcoal-700 max-w-xs mb-4">
                        تم توثيق النتائج المخبرية ومحيطات الجسم في السجل الطبي للحالة بنجاح.
                      </p>

                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sand-300 text-[11px] font-semibold text-charcoal-600 shadow-xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-forest-600" />
                        <span>محمية بالخصوصية الطبية</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="mt-20">
            <SectionHeading
              badge="انطباعات سريعة"
              title="ماذا يقول المشتركون عن تجربة المتابعة؟"
              subtitle="مقتطفات من رسائل الشكر والتقييمات التي تصلنا أسبوعياً."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {testimonialsData.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-6 shadow-soft border border-sand-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-forest-600 block mb-2 font-cairo">
                      {t.program}
                    </span>
                    <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-4">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-sand-100 flex items-center justify-between text-xs text-charcoal-700">
                    <span className="font-bold text-forest-900">{t.clientName}</span>
                    <span>{t.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-bold font-cairo text-forest-950 mb-3">
              هل ترغبين في أن تكوني قصة النجاح القادمة؟
            </h3>
            <p className="text-sm text-charcoal-700 mb-6 max-w-md mx-auto">
              ابدئي اليوم واستعيدي صحتك وخفتك بخطوات بسيطة وداعمة.
            </p>
            <Button
              to="/booking"
              variant="primary"
              size="lg"
              icon={Calendar}
              iconPosition="start"
            >
              احجزي موعدكِ الآن
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}

