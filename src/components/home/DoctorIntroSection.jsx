import React from 'react';
import { ArrowLeft, Award, HeartHandshake, CheckCircle } from 'lucide-react';
import { siteSettings } from '../../data/settings';
import { doctorProfile } from '../../data/aboutData';
import Button from '../common/Button';
import DoctorAvatarPlaceholder from '../common/DoctorAvatarPlaceholder';
import Badge from '../common/Badge';

export default function DoctorIntroSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-y border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar / Portrait Placeholder Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <DoctorAvatarPlaceholder size="lg" />
            </div>
          </div>

          {/* Bio & Philosophy Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            <Badge variant="forest" className="mb-4">
              عن طبيبة العيادة
            </Badge>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-forest-950 font-cairo leading-tight">
              أهلاً بكِ.. معكِ {siteSettings.doctorName}
            </h2>

            <p className="mt-2 text-base font-semibold text-forest-700">
              {siteSettings.doctorTitle}
            </p>

            <p className="mt-5 text-base sm:text-lg text-charcoal-700 leading-relaxed">
              {doctorProfile.bio}
            </p>

            {/* Core Values list */}
            <div className="mt-8 space-y-4 w-full">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-sand-100/80 border border-sand-200">
                <div className="w-8 h-8 rounded-lg bg-forest-100 flex items-center justify-center text-forest-800 flex-shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-forest-900 font-cairo">
                    متابعة إنسانية وداعمة بدون لوم أو إصدار أحكام
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 mt-1">
                    نتعامل مع كل متدرب كحالة فريدة، ونتفهم التحديات الاجتماعية وضغوطات الحياة اليومية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-sand-100/80 border border-sand-200">
                <div className="w-8 h-8 rounded-lg bg-forest-100 flex items-center justify-center text-forest-800 flex-shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-forest-900 font-cairo">
                    أسلوب علمي مبني على التحاليل الطبية والطب المبني على الدليل
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 mt-1">
                    لا نعتمد على الترندات الغذائية المؤذية أو المنتجات التجارية مجهولة المصدر.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA to About Page */}
            <div className="mt-8 flex items-center gap-4">
              <Button
                to="/about"
                variant="outline"
                size="md"
                icon={ArrowLeft}
                iconPosition="end"
              >
                تعرفي أكثر على الدكتورة ومسيرتها
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

