import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteSettings } from '../../data/settings';

export default function WhatsAppFloatingBtn() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
      {/* Optional dismissible tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-forest-900 shadow-float border border-sand-200 px-3 py-2 rounded-2xl text-xs font-semibold animate-bounce">
          <span>محتارة في اختيار البرنامج؟ تواصلِ معي واتساب</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-charcoal-400 hover:text-charcoal-800 p-0.5"
            aria-label="إغلاق التنبيه"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent("السلام عليكم دكتورة، أود الاستفسار عن برامج التغذية المتاحة.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-forest-800 hover:bg-forest-900 text-white shadow-float hover:scale-105 transition-all duration-300 border-2 border-forest-300/40"
        aria-label="تواصل عبر الواتساب"
      >
        <span className="absolute inset-0 rounded-full bg-forest-400 opacity-20 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 text-forest-100 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}

