import React from 'react';
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Sparkles, 
  Share2, 
  ShieldCheck, 
  Info 
} from 'lucide-react';
import { siteSettings } from '../data/settings';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function Contact() {
  return (
    <div className="flex flex-col bg-sand-100 min-h-screen">
      
      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-sand-100 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="forest" className="mb-4">
              قنوات التواصل
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-cairo leading-tight">
              تواصلِ مع العيادة
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal-700 leading-relaxed">
              نسعد باستقبال كافة استفساراتكم المتعلقة بالبرامج التغذوية والمواعيد المتاحة عبر الواتساب وقنوات التواصل الرسمية.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Direct Contact Cards (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* WhatsApp Card (Primary) */}
              <div className="bg-white rounded-3xl p-8 shadow-card border-2 border-forest-500/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-forest-800 text-sand-50 text-xs font-bold px-4 py-1.5 rounded-br-2xl">
                  القناة الأسرع للرد
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <MessageCircle className="w-7 h-7 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-cairo text-forest-950">
                      محادثة الواتساب المباشرة
                    </h3>
                    <p className="text-sm text-charcoal-700 mt-1">
                      الرقم الرسمي المعتمد لتلقي طلبات الحجز والاستفسارات ومتابعات المشتركين.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-charcoal-700 block">رقم الواتساب:</span>
                    <span className="text-lg font-bold text-forest-900 font-mono" dir="ltr">
                      {siteSettings.displayPhone}
                    </span>
                  </div>
                  <a
                    href={`https://wa.me/${siteSettings.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-white text-sm font-semibold transition-all shadow-soft"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>بدء محادثة واتساب الآن</span>
                  </a>
                </div>

                <div className="text-xs text-forest-800 bg-forest-50 p-3 rounded-xl border border-forest-200/60 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-forest-600 flex-shrink-0" />
                  <span>تتم مراجعة الرسائل والتنسيق مع المراجعين بشكل شخصي ودقيق.</span>
                </div>
              </div>

              {/* Consultation Booking Quick Card */}
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-sand-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sand-200 text-forest-800 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-cairo text-forest-950">
                      هل ترغبين في حجز موعد محدد؟
                    </h3>
                    <p className="text-sm text-charcoal-700 mt-1">
                      يمكنكِ ملء استمارة الحجز لتحديد البرنامج المناسب والتاريخ المفضل تمهيداً للتأكيد.
                    </p>
                  </div>
                </div>

                <Button
                  to="/booking"
                  variant="outline"
                  size="md"
                  icon={Calendar}
                  iconPosition="start"
                  className="w-full sm:w-auto"
                >
                  الانتقال لنموذج حجز الموعد
                </Button>
              </div>

              {/* Social Channels */}
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-sand-200">
                <h3 className="text-lg font-bold font-cairo text-forest-950 mb-4 pb-2 border-b border-sand-200">
                  منصات التواصل الاجتماعي
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={siteSettings.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-sand-50 border border-sand-200 hover:border-forest-300 hover:bg-forest-50/40 transition-all text-charcoal-800"
                  >
                    <div className="w-9 h-9 rounded-xl bg-forest-100 flex items-center justify-center font-bold text-forest-800 text-xs">
                      IG
                    </div>
                    <div>
                      <span className="block text-xs font-bold font-cairo text-forest-950">إنستغرام العيادة</span>
                      <span className="text-[11px] text-charcoal-700">نصائح ومعلومات تغذوية يومية</span>
                    </div>
                  </a>

                  <a
                    href={siteSettings.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-sand-50 border border-sand-200 hover:border-forest-300 hover:bg-forest-50/40 transition-all text-charcoal-800"
                  >
                    <div className="w-9 h-9 rounded-xl bg-forest-100 flex items-center justify-center font-bold text-forest-800 text-xs">
                      FB
                    </div>
                    <div>
                      <span className="block text-xs font-bold font-cairo text-forest-950">صفحة فيسبوك</span>
                      <span className="text-[11px] text-charcoal-700">مقالات وتحديثات العيادة</span>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* Clinic Address & Hours Placeholder (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Address card */}
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-sand-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-cairo text-forest-950">
                      مقر العيادة الفعلي
                    </h3>
                    <span className="text-xs text-charcoal-700">{siteSettings.clinicCity}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-sand-50 border border-dashed border-sand-300 text-xs text-charcoal-700 mb-4 leading-relaxed">
                  <p className="font-semibold text-forest-900 mb-1">
                    {siteSettings.clinicAddress}
                  </p>
                  <p>
                    سيتم إرسال العنوان التفصيلي الدقيق ولوكيشن الخريطة عبر الواتساب فور تأكيد حجز موعد الكشف الحضوري.
                  </p>
                </div>

                {/* Location Map Placeholder frame */}
                <div className="relative rounded-2xl bg-sand-200/80 border border-sand-300 p-8 flex flex-col items-center justify-center text-center aspect-[16/9]">
                  <MapPin className="w-8 h-8 text-forest-600 mb-2" />
                  <span className="text-xs font-bold text-forest-900 font-cairo">
                    خريطة الموقع الجغرافي للعيادة
                  </span>
                  <span className="text-[11px] text-charcoal-700 mt-1">
                    [سيتم تفعيل خريطة Google Maps فور تزويدنا بالعنوان الرسمي]
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-sand-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-100 text-forest-800 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-cairo text-forest-950">
                      أيام ومواعيد الاستشارات
                    </h3>
                    <span className="text-xs text-charcoal-700">نظام المواعيد المسبقة</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-charcoal-700">
                  <div className="p-3.5 rounded-xl bg-sand-50 border border-sand-200">
                    <span className="font-bold text-forest-950 block mb-1">الاستشارات الحضورية بالعيادة:</span>
                    <span>{siteSettings.clinicHours}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-forest-50/50 border border-forest-100">
                    <span className="font-bold text-forest-950 block mb-1">الاستشارات والمتابعات أونلاين:</span>
                    <span>متاحة على مدار الأسبوع حسب الجدول المنسق مسبقاً مع الدكتورة.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

