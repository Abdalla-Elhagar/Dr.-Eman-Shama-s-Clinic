import React from 'react';
import { ArrowLeft, Sparkles, Shield, User, Clock, CheckCircle } from 'lucide-react';
import { successStoriesData } from '../../data/testimonials';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Badge from '../common/Badge';

export default function SuccessStoriesPreview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="قصص واقعية وتجارب ملهمة"
          title="تحولات حقيقية بدأت بقرار صحي وخطوة واعية"
          subtitle="نحترم خصوصية عميلاتنا وعملائنا تماماً؛ نعرض فقط التجارب المصرح بها مع الحفاظ على سرية الصور والبيانات الشخصية."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {successStoriesData.map((item) => (
            <div
              key={item.id}
              className="bg-sand-50 rounded-3xl p-7 border border-sand-200/80 hover:border-forest-300 transition-all flex flex-col justify-between shadow-soft hover:shadow-card"
            >
              <div>
                {/* Privacy Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-charcoal-700 bg-white px-3 py-1 rounded-full border border-sand-200">
                    <User className="w-3.5 h-3.5 text-forest-700" />
                    <span>{item.client}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-forest-700 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.timeline}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-cairo text-forest-950 mb-3">
                  {item.title}
                </h3>

                <div className="p-3.5 rounded-2xl bg-white border border-sand-200/60 mb-4">
                  <span className="text-xs text-forest-700 font-bold block mb-1">
                    النتيجة المحققة:
                  </span>
                  <p className="text-sm font-semibold text-forest-900">
                    {item.resultSummary}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed mb-4">
                  {item.story}
                </p>
              </div>

              {/* Bottom Quote & Link */}
              <div className="pt-4 border-t border-sand-200/80 mt-auto">
                <blockquote className="text-xs italic text-charcoal-800 font-medium bg-forest-50/60 p-3 rounded-xl border border-forest-100">
                  "{item.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Full Page */}
        <div className="mt-12 text-center">
          <Button
            to="/success-stories"
            variant="outline"
            size="lg"
            icon={ArrowLeft}
            iconPosition="end"
          >
            استكشفي المزيد من تجارب المشتركين
          </Button>
        </div>

      </div>
    </section>
  );
}

