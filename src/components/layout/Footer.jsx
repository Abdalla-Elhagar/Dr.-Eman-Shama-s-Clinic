import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Phone, MapPin, Clock, ArrowUpLeft, ShieldAlert } from 'lucide-react';
import { siteSettings } from '../../data/settings';
import { servicesData } from '../../data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-sand-100 pt-16 pb-8 border-t border-forest-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-forest-900">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center text-sand-50">
                <Heart className="w-5 h-5 text-forest-300" />
              </div>
              <div>
                <span className="text-xl font-bold font-cairo text-sand-50 block">
                  {siteSettings.doctorName}
                </span>
                <span className="text-xs text-forest-300">
                  {siteSettings.doctorTitle}
                </span>
              </div>
            </div>

            <p className="text-sm text-sand-300/80 leading-relaxed mt-1">
              عيادة متخصصة في التغذية العلاجية وإدارة السمنة والنحافة. نؤمن بأن الغذاء الصحي نمط حياة مستدام يُصمم خصيصاً لكل فرد دون حرمان أو تعقيد.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${siteSettings.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-forest-900 hover:bg-forest-800 flex items-center justify-center text-sand-100 hover:text-white transition-colors"
                title="واتساب"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteSettings.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-forest-900 hover:bg-forest-800 flex items-center justify-center text-sand-100 hover:text-white transition-colors text-xs font-bold"
                title="إنستغرام"
              >
                IG
              </a>
              <a
                href={siteSettings.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-forest-900 hover:bg-forest-800 flex items-center justify-center text-sand-100 hover:text-white transition-colors text-xs font-bold"
                title="فيسبوك"
              >
                FB
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-sand-50 mb-4 pb-1 border-b border-forest-800/80 inline-block font-cairo">
              روابط الموقع
            </h3>
            <ul className="space-y-2.5 text-sm text-sand-300/80">
              {siteSettings.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-forest-200 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowUpLeft className="w-3.5 h-3.5 text-forest-400 rotate-45" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/booking"
                  className="text-forest-300 font-semibold hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowUpLeft className="w-3.5 h-3.5 rotate-45" />
                  <span>طلب حجز استشارة</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-base font-bold text-sand-50 mb-4 pb-1 border-b border-forest-800/80 inline-block font-cairo">
              البرامج والخدمات
            </h3>
            <ul className="space-y-2.5 text-sm text-sand-300/80">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-forest-200 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-400" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Clinic Info */}
          <div>
            <h3 className="text-base font-bold text-sand-50 mb-4 pb-1 border-b border-forest-800/80 inline-block font-cairo">
              معلومات التواصل
            </h3>
            <div className="space-y-3 text-sm text-sand-300/80">
              <a
                href={`https://wa.me/${siteSettings.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-forest-300 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-xs text-forest-400 font-medium">الواتساب الرسمي:</span>
                  <span className="font-semibold text-sand-100" dir="ltr">{siteSettings.displayPhone}</span>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-forest-300 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-forest-400 font-medium">مقر العيادة:</span>
                  <span>{siteSettings.clinicAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-forest-300 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-forest-400 font-medium">مواعيد الاستشارات:</span>
                  <span className="text-xs">{siteSettings.clinicHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical disclaimer note */}
        <div className="mt-8 p-4 rounded-xl bg-forest-900/60 border border-forest-800 text-xs text-sand-300/75 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-forest-300 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-sand-100">إخلاء مسؤولية طبية:</strong> {siteSettings.medicalDisclaimer}
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-400/80 gap-3">
          <p>
            جميع الحقوق محفوظة &copy; {currentYear} {siteSettings.doctorName} - استشارات التغذية العلاجية.
          </p>
          <p className="text-sand-500">
            تصميم وبرمجة واجهة أمامية احترافية
          </p>
        </div>
      </div>
    </footer>
  );
}

