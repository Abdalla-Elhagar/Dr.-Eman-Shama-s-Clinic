import React from 'react';
import { UserCheck, Sparkles, Stethoscope } from 'lucide-react';
import { siteSettings } from '../../data/settings';

export default function DoctorAvatarPlaceholder({ size = 'lg', className = '' }) {
  if (size === 'sm') {
    return (
      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br from-forest-700 to-forest-900 flex items-center justify-center text-forest-200 border border-forest-600 shadow-soft ${className}`}>
        <UserCheck className="w-8 h-8 text-forest-200" />
      </div>
    );
  }

  return (
    <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 p-8 text-sand-50 shadow-card border border-forest-700/40 flex flex-col items-center justify-center text-center ${className}`}>
      {/* Decorative organic shapes */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-forest-600/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-forest-400/10 blur-2xl pointer-events-none" />
      
      {/* Icon Frame */}
      <div className="relative mb-6">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-forest-800/80 border-4 border-forest-400/40 flex items-center justify-center shadow-inner">
          <Stethoscope className="w-14 h-14 sm:w-18 sm:h-18 text-forest-200" />
        </div>
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 bg-forest-500 text-white text-[11px] font-semibold px-3 py-0.5 rounded-full border border-forest-300 shadow-sm flex items-center gap-1 whitespace-nowrap">
          <Sparkles className="w-3 h-3 text-forest-200" />
          <span>طبيبة معتمدة</span>
        </div>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold font-cairo text-sand-50 mb-1">
        {siteSettings.doctorName}
      </h3>
      <p className="text-xs sm:text-sm text-forest-200 font-medium max-w-xs mb-4">
        {siteSettings.doctorTitle}
      </p>

      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-forest-700/60 text-xs text-sand-300">
        <span className="w-2 h-2 rounded-full bg-forest-400 animate-ping" />
        <span>سيتم إضافة الصورة الشخصية والاعتمادات الرسمية لاحقاً</span>
      </div>
    </div>
  );
}

