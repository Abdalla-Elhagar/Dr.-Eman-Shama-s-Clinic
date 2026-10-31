import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Flame, 
  HeartPulse, 
  Leaf, 
  TrendingUp, 
  ShieldCheck, 
  Video, 
  Calendar, 
  CheckCircle2, 
  Users, 
  Clock, 
  MapPin, 
  HelpCircle 
} from 'lucide-react';
import { servicesData } from '../data/services';
import { faqData } from '../data/faq';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { images } from '../assets/images';

const iconMap = {
  Flame,
  HeartPulse,
  Leaf,
  TrendingUp,
  ShieldCheck,
  Video
};

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="flex flex-col bg-sand-100">
      
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-sand-100 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="forest" className="mb-4">
              برامج الرعاية والتغذية
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-cairo leading-tight">
              خدماتنا وبرامجنا التغذوية المتخصصة
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed">
              اختر البرنامج الأنسب لحالتك الصحية وأهدافك البدنية. جميع الخطط تصمم بشكل فردي تماماً وبإشراف مباشر.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Detailed List */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Leaf;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-sand-200/80 transition-all hover:border-forest-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Service Header & Details */}
                  <div className="lg:col-span-7 flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center p-2.5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        {service.badge && (
                          <Badge variant="sage" className="mb-1 text-[11px]">
                            {service.badge}
                          </Badge>
                        )}
                        <h2 className="text-2xl sm:text-3xl font-bold font-cairo text-forest-950">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed mt-2 mb-6">
                      {service.fullDescription}
                    </p>

                    {/* Target Audience: لمن هذا البرنامج؟ */}
                    <div className="w-full bg-sand-50 rounded-2xl p-5 border border-sand-200 mb-6">
                      <div className="flex items-center gap-2 text-forest-900 font-bold font-cairo text-sm mb-3">
                        <Users className="w-4 h-4 text-forest-600" />
                        <span>لمن يناسب هذا البرنامج؟</span>
                      </div>
                      <ul className="space-y-2">
                        {service.suitableFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What's Included: مميزات البرنامج */}
                    <div className="w-full mb-6">
                      <h4 className="text-sm font-bold font-cairo text-forest-900 mb-3">
                        ماذا يشمل البرنامج؟
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-700 bg-forest-50/40 p-2.5 rounded-xl border border-forest-100">
                            <CheckCircle2 className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metadata & Direct CTA */}
                    <div className="pt-4 border-t border-sand-200 flex flex-wrap items-center justify-between gap-4 w-full">
                      <div className="flex items-center gap-4 text-xs text-charcoal-700">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-forest-600" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-forest-600" />
                          <span>{service.consultationType}</span>
                        </div>
                      </div>

                      <Button
                        to={`/booking?service=${encodeURIComponent(service.title)}`}
                        variant="primary"
                        size="md"
                        icon={Calendar}
                        iconPosition="start"
                        className="shadow-soft"
                      >
                        حجز استشارة في هذا البرنامج
                      </Button>
                    </div>

                  </div>

                  {/* Right Column: Visual illustration related to the service */}
                  <div className="lg:col-span-5 hidden lg:block">
                    <div className="rounded-3xl overflow-hidden shadow-card border-2 border-white aspect-[4/3.5] bg-sand-100">
                      <img
                        src={
                          index === 0 ? images.healthyBowl :
                          index === 1 ? images.nutritionConsultation :
                          index === 2 ? images.lifestyleHabit :
                          index === 3 ? images.heroWellness :
                          images.activeWellness
                        }
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white border-t border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="الأسئلة الشائعة"
            title="إجابات عن أهم الاستفسارات"
            subtitle="كل ما تحتاجين معرفته حول طبيعة الكشف، حجز الواتساب، والتحاليل المطلوبة."
          />

          <div className="mt-8 space-y-4">
            {faqData.map((faq, idx) => (
              <details
                key={idx}
                className="group p-5 rounded-2xl bg-sand-50 border border-sand-200/80 transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none text-base font-bold text-forest-950 font-cairo">
                  <span>{faq.question}</span>
                  <span className="w-6 h-6 rounded-full bg-forest-100 text-forest-800 flex items-center justify-center text-xs font-bold transition-transform group-open:rotate-180">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-sm text-charcoal-700 leading-relaxed border-t border-sand-200/60 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-charcoal-700 mb-4">
              لديكِ سؤال آخر لم تجدي إجابته هنا؟
            </p>
            <Button
              to="/contact"
              variant="outline"
              size="md"
            >
              تواصلي معنا وسنجيبكِ بكل سرور
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

