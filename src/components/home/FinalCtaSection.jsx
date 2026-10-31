import React from 'react';
import { Calendar, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { siteSettings } from '../../data/settings';
import Button from '../common/Button';

export default function FinalCtaSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-forest-900 text-sand-50">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-forest-700/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-forest-500/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800 text-forest-200 border border-forest-700 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-forest-300" />
          <span>بداية جديدة لجسدكِ وصحتكِ</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cairo text-sand-50 leading-tight">
          جاهزة لتبدئي رحلة تغيير صحية ومستدامة؟
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-sand-200 max-w-2xl mx-auto leading-relaxed">
          خطوتك الأولى تبدأ باستشارة دقيقة تحدد احتياجات جسمك الحقيقية. دعينا نضع خطة متوازنة تناسبكِ وترافقكِ نحو الهدف بثقة.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/booking"
            variant="sand"
            size="lg"
            icon={Calendar}
            iconPosition="start"
            className="w-full sm:w-auto shadow-float text-forest-950 font-bold hover:bg-white"
          >
            احجزي استشارتكِ الآن
          </Button>

          <a
            href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent("السلام عليكم دكتورة، أود معرفة تفاصيل مواعيد الكشف والاستشارة المتاحة.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-forest-600 bg-forest-800/80 hover:bg-forest-800 text-sand-100 text-base font-semibold transition-all shadow-sm"
          >
            <MessageCircle className="w-5 h-5 text-forest-300" />
            <span>تواصل مباشر عبر الواتساب</span>
          </a>
        </div>

        {/* Reassurance note */}
        <p className="mt-6 text-xs text-forest-300">
          * يتم ترتيب وتأكيد الموعد النهائي معكِ مباشرة عبر محادثة الواتساب
        </p>

      </div>
    </section>
  );
}

