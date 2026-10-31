import React from 'react';
import { Home, ArrowLeft, HeartHandshake } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-sand-100 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-sand-200 text-center">
        <span className="text-6xl font-black font-cairo text-forest-300 block mb-2">
          404
        </span>
        <h1 className="text-2xl font-bold font-cairo text-forest-950 mb-3">
          الصفحة غير موجودة
        </h1>
        <p className="text-sm text-charcoal-700 leading-relaxed mb-8">
          عذراً، الصفحة التي تحاولين الوصول إليها غير متوفرة أو تم نقلها. يمكنكِ العودة للصفحة الرئيسية أو حجز استشارة.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={Home}
            iconPosition="start"
            className="w-full sm:w-auto"
          >
            الرئيسية
          </Button>

          <Button
            to="/booking"
            variant="outline"
            size="md"
            icon={ArrowLeft}
            iconPosition="end"
            className="w-full sm:w-auto"
          >
            حجز موعد
          </Button>
        </div>
      </div>
    </div>
  );
}

