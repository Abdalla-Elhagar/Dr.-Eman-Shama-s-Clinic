import React from "react";
import {
  Calendar,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Button from "../common/Button";
import Badge from "../common/Badge";
import { images } from "../../assets/images";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-sand-100 via-sand-200/50 to-sand-100">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-forest-200/25 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-sage-200/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Right Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-800 border border-forest-200 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <Sparkles className="w-4 h-4 text-forest-600" />
              <span>عيادة التغذية العلاجية وإدارة السمنة والنحافة</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-extrabold text-forest-950 font-cairo !leading-[1.2] sm:leading-[1.25] tracking-tight">
              رحلتكِ نحو{" "}
              <span className="text-forest-700 underline decoration-forest-300 decoration-wavy decoration-2">
                جسم صحي
              </span>{" "}
              وحياة متوازنة تبدأ من هنا
            </h1>

            {/* Sub-headline */}
            <p className="mt-8 text-base sm:text-lg md:text-xl text-charcoal-700 leading-relaxed max-w-2xl font-normal">
              نساعدك على بناء عادات غذائية صحية من خلال خطط علمية متوازنة تناسب
              احتياجاتك وأسلوب حياتك، دون حرمان قاسي أو استنزاف لطاقتك.
            </p>

            {/* Key feature pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 mt-6 sm:mt-8 w-full max-w-xl text-xs sm:text-sm text-charcoal-800">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-sand-300/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-forest-600 shrink-0" />
                <span className="font-medium">أنظمة محسوبة تناسب نمط يومك</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-sand-300/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-forest-600 shrink-0" />
                <span className="font-medium">
                  علاج جذري لمقاومة الإنسولين وتكيس المبايض
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-sand-300/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-forest-600 shrink-0" />
                <span className="font-medium">
                  متابعة شخصية مستمرة ودعم أسبوعي
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-sand-300/60 shadow-xs">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-forest-600 shrink-0" />
                <span className="font-medium">
                  استشارات حضورية وأونلاين مرنة
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                to="/booking"
                variant="primary"
                size="lg"
                icon={Calendar}
                iconPosition="start"
                className="w-full sm:w-auto shadow-card hover:shadow-float text-base font-semibold"
              >
                احجزي موعدكِ الآن
              </Button>

              <Button
                to="/services"
                variant="outline"
                size="lg"
                icon={ArrowLeft}
                iconPosition="end"
                className="w-full sm:w-auto text-base font-semibold"
              >
                اكتشفي خدماتنا
              </Button>
            </div>

            {/* Reassurance text */}
            <div className="mt-6 flex items-center gap-2 text-xs text-charcoal-400">
              <ShieldCheck className="w-4 h-4 text-forest-500" />
              <span>
                الحجز مباشر وسريع عبر الواتساب بدون تعقيدات أو دفع إلكتروني مسبق
              </span>
            </div>
          </div>

          {/* Left Column: Editorial Wellness Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-sand-50 aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]">
                <img
                  src={images.heroWellness}
                  alt="تغذية صحية وأسلوب حياة متوازن"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating badge inside image bottom */}
                <div className="absolute bottom-5 right-5 left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-card border border-sand-200 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-forest-800 text-white flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-forest-200" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-forest-900 font-cairo">
                      تغذية مستدامة وليست مجرد حمية مؤقتة
                    </h4>
                    <p className="text-xs text-charcoal-700 mt-0.5">
                      نركز على استعادة صحة الجهاز الهضمي والتمثيل الغذائي
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary floating pill */}
              <div className="absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-card border border-sand-200 hidden sm:flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-forest-500 animate-pulse" />
                <span className="text-xs font-bold text-forest-900">
                  استشارات تغذية فردية
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
