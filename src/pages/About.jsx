import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  HeartHandshake, 
  Stethoscope, 
  ShieldCheck,
  ArrowLeft 
} from 'lucide-react';
import { siteSettings } from '../data/settings';
import { doctorProfile } from '../data/aboutData';
import DoctorAvatarPlaceholder from '../components/common/DoctorAvatarPlaceholder';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { images } from '../assets/images';

export default function About() {
  return (
    <div className="flex flex-col bg-sand-100">
      
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-sand-100 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="forest" className="mb-4">
              الملف المهني
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-cairo leading-tight">
              عن {siteSettings.doctorName}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed">
              {siteSettings.doctorSubTitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile & Biography Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left/Main Column: Portrait Placeholder & Quick Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <DoctorAvatarPlaceholder size="lg" />

              {/* Editorial secondary photo showcasing clinic setting */}
              <div className="rounded-3xl overflow-hidden shadow-card border-2 border-white aspect-[4/3] bg-sand-200">
                <img
                  src={images.nutritionConsultation}
                  alt="عيادة التغذية العلاجية"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Editable placeholder disclaimer box */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>ملاحظة للمراجعة:</strong> تم إعداد هذا الملف بقوالب منظمة وقابلة للتعديل الفوري؛ لتحديث المؤهلات والشهادات الأكاديمية الرسمية للدكتورة فور تزويدنا بها.
                </p>
              </div>
            </div>

            {/* Right Column: Bio, Qualifications & Experience */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              
              {/* Bio card */}
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-sand-200/80">
                <h2 className="text-2xl font-bold font-cairo text-forest-950 mb-4 pb-2 border-b border-sand-200">
                  نبذة تعريفية ورؤية العمل
                </h2>
                <p className="text-base sm:text-lg text-charcoal-800 leading-relaxed">
                  {doctorProfile.bio}
                </p>
              </div>

              {/* Philosophy */}
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-sand-200/80">
                <h2 className="text-2xl font-bold font-cairo text-forest-950 mb-6 pb-2 border-b border-sand-200">
                  فلسفتي في التغذية والصحة
                </h2>
                <div className="space-y-4">
                  {doctorProfile.philosophy.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-sand-50 border border-sand-200">
                      <h3 className="text-base font-bold font-cairo text-forest-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-charcoal-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-sand-200/80">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-sand-200">
                  <GraduationCap className="w-6 h-6 text-forest-700" />
                  <h2 className="text-2xl font-bold font-cairo text-forest-950">
                    المؤهلات العلمية والدراسية
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {doctorProfile.qualifications.map((qual, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-sand-50 border border-sand-200/70">
                      <span className="w-2 h-2 rounded-full bg-forest-600 mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-forest-950 font-cairo">{qual.degree}</h4>
                        <p className="text-xs text-charcoal-700 mt-0.5">{qual.institution} • {qual.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Certifications */}
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-sand-200/80">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-sand-200">
                  <Award className="w-6 h-6 text-forest-700" />
                  <h2 className="text-2xl font-bold font-cairo text-forest-950">
                    الشهادات والاعتمادات المهنية
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctorProfile.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-forest-50/50 border border-forest-100 text-xs font-medium text-forest-900">
                      <CheckCircle2 className="w-4 h-4 text-forest-600 flex-shrink-0 mt-0.5" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Clinical Workflow / Steps */}
      <section className="py-16 lg:py-24 bg-white border-y border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="خطوات الرحلة العلاجية"
            title="كيف نعمل معاً خطوة بخطوة؟"
            subtitle="نتبع منهجية واضحة ومدروسة تضمن لكِ وضوح المسار والوصول للنتائج دون إرباك."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {doctorProfile.steps.map((st, idx) => (
              <div
                key={idx}
                className="relative bg-sand-50 rounded-3xl p-6 border border-sand-200 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black font-cairo text-forest-300 block mb-3">
                    {st.number}
                  </span>
                  <h3 className="text-lg font-bold font-cairo text-forest-950 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Booking CTA on About page */}
          <div className="mt-16 bg-forest-900 rounded-3xl p-8 sm:p-12 text-sand-50 text-center max-w-3xl mx-auto shadow-card">
            <h3 className="text-2xl sm:text-3xl font-bold font-cairo mb-3">
              هل أنتِ مستعدة لبدء خطتكِ الصحية مع الدكتورة؟
            </h3>
            <p className="text-sm sm:text-base text-sand-200 mb-6 max-w-xl mx-auto">
              سجلي بياناتكِ الآن وسنقوم بالتواصل معكِ لتحديد الموعد الأنسب في العيادة أو عبر استشارة أونلاين.
            </p>
            <Button
              to="/booking"
              variant="sand"
              size="lg"
              icon={Calendar}
              iconPosition="start"
              className="text-forest-950 font-bold"
            >
              احجزي موعد استشارتكِ الآن
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}

