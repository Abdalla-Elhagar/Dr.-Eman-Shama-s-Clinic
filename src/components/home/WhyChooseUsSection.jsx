import React from 'react';
import { 
  Sparkles, 
  CalendarCheck, 
  HeartHandshake, 
  Target, 
  Smile, 
  Apple, 
  CheckCircle2 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { images } from '../../assets/images';

export default function WhyChooseUsSection() {
  const points = [
    {
      icon: Target,
      title: "خطط غذائية مخصصة للاحتياجات الفردية",
      desc: "لا نستخدم أنظمة جاهزة أو مطبوعة مسبقاً، بل نبني كل خطة من الصفر وفق قياساتك، معدل الحرق، وتفضيلاتك اليومية."
    },
    {
      icon: CalendarCheck,
      title: "متابعة دقيقة حسب طبيعة البرنامج",
      desc: "جلسات تقييم دورية لمراجعة النتائج، قياس التغير في محيطات الجسم، ومعالجة أي ثبات في الوزن بشكل استباقي."
    },
    {
      icon: Apple,
      title: "الاهتمام بالعادات الصحية المستدامة",
      desc: "نركز على تعليمك كيف تأكلين بوعي وتستمتعين بحياتك الاجتماعية ومناسباتك دون خوف أو شعور بالذنب."
    },
    {
      icon: Smile,
      title: "مراعاة نمط حياتك وظروفك الواقعية",
      desc: "سواء كنتِ طالبة، موظفة، أو أماً مشغولة، نصمم وجباتك لتكون سريعة التحضير ومن المطبخ المنزلي المعتاد."
    },
    {
      icon: HeartHandshake,
      title: "دعم إنساني ونفسي مستمر خلال الرحلة",
      desc: "رحلة خسارة الوزن تتطلب تشجيعاً وتفهماً للمشاعر. نحن معك خطوة بخطوة حتى تصلين إلى بر الأمان بثقة."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Text Column */}
          <div className="lg:col-span-7">
            <Badge variant="forest" className="mb-4">
              لماذا تختارين العيادة؟
            </Badge>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-forest-950 font-cairo leading-tight">
              نهج متكامل يجمع بين الدقة الطبية والمرونة الإنسانية
            </h2>

            <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed">
              ندرك جيداً أن كثيراً من الحميات التقليدية تفشل بسبب الصرامة الزائدة والحرمان غير المبرر. لذلك صممنا تجربة علاجية ترتكز على الشراكة والتمكين.
            </p>

            {/* Feature Points */}
            <div className="mt-8 space-y-4">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-sand-50 border border-sand-200/80 hover:border-forest-300 hover:bg-forest-50/30 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-forest-800 text-forest-100 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Icon className="w-5 h-5 text-forest-200" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-forest-950 font-cairo">
                        {pt.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal-700 mt-1 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Left Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Main Image Frame */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-sand-100">
                <img
                  src={images.nutritionConsultation}
                  alt="مكتب استشارات التغذية العلاجية"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Overlaid stat badge */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 bg-forest-900 text-sand-50 p-5 sm:p-6 rounded-3xl shadow-float border border-forest-700 max-w-xs mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-forest-800 flex items-center justify-center text-forest-200">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-2xl font-black font-cairo text-sand-50 block leading-tight">
                      100%
                    </span>
                    <span className="text-xs text-forest-200 font-medium">
                      خطط مفصلة طبياً حسب كل حالة
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
