import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MessageCircle, 
  AlertCircle, 
  CheckCircle, 
  Sparkles, 
  ShieldAlert, 
  ArrowLeft,
  X,
  FileText,
  Activity
} from 'lucide-react';
import { siteSettings } from '../data/settings';
import { servicesData } from '../data/services';
import { validateBookingForm, getMinDateString } from '../utils/validation';
import { generateWhatsAppBookingUrl } from '../utils/whatsapp';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    age: '',
    service: preselectedService || servicesData[0].title,
    goal: '',
    preferredDate: '',
    gender: 'أنثى',
    height: '',
    weight: '',
    targetWeight: '',
    preferredTime: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for field once edited if touched
    if (errors[name]) {
      setErrors((prev) => {
        const newErr = { ...prev };
        delete newErr[name];
        return newErr;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleReview = (e) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      // Mark all error fields as touched so they display
      const allTouched = {};
      Object.keys(validation.errors).forEach((key) => {
        allTouched[key] = true;
      });
      setTouched((prev) => ({ ...prev, ...allTouched }));
      // Scroll to first error
      const firstErrorKey = Object.keys(validation.errors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }

    setErrors({});
    setIsSummaryOpen(true);
  };

  const handleConfirmAndSendWhatsApp = () => {
    const url = generateWhatsAppBookingUrl(formData);
    setHasSubmitted(true);
    setIsSummaryOpen(false);
    
    // Open WhatsApp in a new tab per requirement
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col bg-sand-100 min-h-screen">
      
      {/* Page Header */}
      <section className="py-10 lg:py-14 bg-gradient-to-b from-white to-sand-100 border-b border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="forest" className="mb-3">
            حجز استشارة تغذوية
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-cairo">
            طلب حجز موعد استشارة
          </h1>
          <p className="mt-3 text-base sm:text-lg text-charcoal-700 max-w-xl mx-auto leading-relaxed">
            املئي النموذج أدناه وسيقوم النظام بتجهيز رسالة واتساب مفصلة لإرسالها مباشرة للدكتورة لتأكيد الموعد المناسب.
          </p>

          {/* Important Notice Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-50/90 border border-amber-300/80 text-amber-950 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 max-w-2xl mx-auto text-right">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span>{siteSettings.bookingNotice}</span>
          </div>
        </div>
      </section>

      {/* Main Booking Form Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <form
            onSubmit={handleReview}
            noValidate
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-sand-200/90 space-y-10"
          >
            {/* Group 1: Basic Information (Required) */}
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-sand-200 mb-6">
                <div className="w-8 h-8 rounded-lg bg-forest-100 text-forest-800 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold font-cairo text-forest-950">
                  البيانات الأساسية <span className="text-xs font-normal text-forest-600">(إلزامية)</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="fullName" className="block text-xs font-bold text-forest-950 mb-1.5">
                    الاسم بالكامل <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="مثال: سارة أحمد محمود"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      touched.fullName && errors.fullName
                        ? 'border-red-400 bg-red-50/30 focus:ring-red-400'
                        : 'border-sand-300 bg-sand-50/50 focus:border-forest-600 focus:ring-forest-200'
                    }`}
                  />
                  {touched.fullName && errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-forest-950 mb-1.5">
                    رقم الهاتف / الواتساب <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    dir="ltr"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="01xxxxxxxxx"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-left transition-all focus:outline-none focus:ring-2 ${
                      touched.phone && errors.phone
                        ? 'border-red-400 bg-red-50/30 focus:ring-red-400'
                        : 'border-sand-300 bg-sand-50/50 focus:border-forest-600 focus:ring-forest-200'
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Age */}
                <div>
                  <label htmlFor="age" className="block text-xs font-bold text-forest-950 mb-1.5">
                    العمر بالسنوات <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="10"
                    max="100"
                    value={formData.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="مثال: 29"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      touched.age && errors.age
                        ? 'border-red-400 bg-red-50/30 focus:ring-red-400'
                        : 'border-sand-300 bg-sand-50/50 focus:border-forest-600 focus:ring-forest-200'
                    }`}
                  />
                  {touched.age && errors.age && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.age}</span>
                    </p>
                  )}
                </div>

                {/* Gender (Optional / Selector) */}
                <div>
                  <label htmlFor="gender" className="block text-xs font-bold text-forest-950 mb-1.5">
                    النوع (اختياري)
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50/50 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-200"
                  >
                    <option value="أنثى">أنثى</option>
                    <option value="ذكر">ذكر</option>
                    <option value="">تخطي</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Group 2: Consultation Details (Required) */}
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-sand-200 mb-6">
                <div className="w-8 h-8 rounded-lg bg-forest-100 text-forest-800 flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold font-cairo text-forest-950">
                  تفاصيل الاستشارة والتاريخ المطلوب <span className="text-xs font-normal text-forest-600">(إلزامية)</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Service Selection */}
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-xs font-bold text-forest-950 mb-1.5">
                    الخدمة أو البرنامج المطلوب <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      touched.service && errors.service
                        ? 'border-red-400 bg-red-50/30 focus:ring-red-400'
                        : 'border-sand-300 bg-sand-50/50 focus:border-forest-600 focus:ring-forest-200'
                    }`}
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.consultationType})
                      </option>
                    ))}
                  </select>
                  {touched.service && errors.service && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Consultation Goal */}
                <div className="sm:col-span-2">
                  <label htmlFor="goal" className="block text-xs font-bold text-forest-950 mb-1.5">
                    الهدف الأساسي من الاستشارة <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    rows="3"
                    value={formData.goal}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="مثال: أرغب في خسارة 15 كجم مع علاج مقاومة الإنسولين، وضبط أوقات الوجبات المناسبة لعملي."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      touched.goal && errors.goal
                        ? 'border-red-400 bg-red-50/30 focus:ring-red-400'
                        : 'border-sand-300 bg-sand-50/50 focus:border-forest-600 focus:ring-forest-200'
                    }`}
                  />
                  {touched.goal && errors.goal && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.goal}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Date (Past dates prevented) */}
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-bold text-forest-950 mb-1.5">
                    التاريخ المفضل للاستشارة <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={getMinDateString()}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      touched.preferredDate && errors.preferredDate
                        ? 'border-red-400 bg-red-50/30 focus:ring-red-400'
                        : 'border-sand-300 bg-sand-50/50 focus:border-forest-600 focus:ring-forest-200'
                    }`}
                  />
                  {touched.preferredDate && errors.preferredDate && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Time (Manual entry per instructions) */}
                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-bold text-forest-950 mb-1.5">
                    الوقت أو الفترة المفضلة (اختياري)
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    placeholder="مثال: مساءً بين 6 و 9 مساءً"
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50/50 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-200"
                  />
                  <span className="text-[11px] text-charcoal-700 block mt-1">
                    المواعيد تخضع للتأكيد والتنسيق المباشر مع الدكتورة.
                  </span>
                </div>
              </div>
            </div>

            {/* Group 3: Optional Physical Data */}
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-sand-200 mb-6">
                <div className="w-8 h-8 rounded-lg bg-forest-100 text-forest-800 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-cairo text-forest-950">
                    البيانات الجسدية والتاريخ الصحي
                  </h3>
                  <span className="text-xs text-charcoal-700">
                    بيانات اختيارية تساعد الدكتورة على دراسة حالتكِ مسبقاً
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Height */}
                <div>
                  <label htmlFor="height" className="block text-xs font-bold text-forest-950 mb-1.5">
                    الطول (سم)
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="مثال: 165"
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50/50 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-200"
                  />
                  {errors.height && (
                    <p className="mt-1 text-xs text-red-600">{errors.height}</p>
                  )}
                </div>

                {/* Current Weight */}
                <div>
                  <label htmlFor="weight" className="block text-xs font-bold text-forest-950 mb-1.5">
                    الوزن الحالي (كجم)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="مثال: 78"
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50/50 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-200"
                  />
                  {errors.weight && (
                    <p className="mt-1 text-xs text-red-600">{errors.weight}</p>
                  )}
                </div>

                {/* Target Weight */}
                <div>
                  <label htmlFor="targetWeight" className="block text-xs font-bold text-forest-950 mb-1.5">
                    الوزن المستهدف (كجم)
                  </label>
                  <input
                    type="number"
                    id="targetWeight"
                    name="targetWeight"
                    value={formData.targetWeight}
                    onChange={handleChange}
                    placeholder="مثال: 62"
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50/50 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-200"
                  />
                  {errors.targetWeight && (
                    <p className="mt-1 text-xs text-red-600">{errors.targetWeight}</p>
                  )}
                </div>

                {/* Additional Notes */}
                <div className="sm:col-span-3">
                  <label htmlFor="notes" className="block text-xs font-bold text-forest-950 mb-1.5">
                    ملاحظات إضافية، أدوية، أو أي تحاليل سابقة تودين ذكرها:
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="اكتبي أي معلومات إضافية عن حالتك الصحية، أدوية تتناولينها، أو تجارب حميات سابقة."
                    className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50/50 text-sm focus:border-forest-600 focus:ring-2 focus:ring-forest-200"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-6 border-t border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-charcoal-700 leading-relaxed text-right">
                <span>عند الضغط على مراجعة الطلب، ستظهر لكِ مراجعة شاملة لبياناتكِ قبل الانتقال إلى الواتساب.</span>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={Calendar}
                iconPosition="start"
                className="w-full sm:w-auto shadow-card font-bold"
              >
                مراجعة الطلب والمتابعة عبر الواتساب
              </Button>
            </div>

          </form>

        </div>
      </section>

      {/* Confirmation & Summary Modal */}
      {isSummaryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-sand-300"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-sand-200">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-forest-800 text-sand-50 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-forest-300" />
                </div>
                <h3 className="text-lg font-bold font-cairo text-forest-950">
                  ملخص طلب الحجز
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsSummaryOpen(false)}
                className="p-1.5 text-charcoal-700 hover:text-charcoal-800 hover:bg-sand-200 rounded-lg"
                aria-label="إغلاق النافذة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Summary Details */}
            <div className="mt-5 space-y-4 text-sm text-charcoal-800">
              <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 space-y-2.5">
                <div className="flex justify-between">
                  <span className="text-xs text-charcoal-700">الاسم:</span>
                  <span className="font-bold text-forest-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-charcoal-700">رقم الهاتف:</span>
                  <span className="font-semibold text-forest-900" dir="ltr">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-charcoal-700">العمر / النوع:</span>
                  <span>{formData.age} سنة {formData.gender ? `• ${formData.gender}` : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-charcoal-700">الخدمة المطلوبة:</span>
                  <span className="font-bold text-forest-800">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-charcoal-700">التاريخ المفضل:</span>
                  <span className="font-semibold text-forest-900">{formData.preferredDate}</span>
                </div>
                {formData.preferredTime && (
                  <div className="flex justify-between">
                    <span className="text-xs text-charcoal-700">الوقت المفضل:</span>
                    <span>{formData.preferredTime}</span>
                  </div>
                )}
                {(formData.weight || formData.height) && (
                  <div className="flex justify-between border-t border-sand-200/80 pt-2 text-xs">
                    <span className="text-charcoal-700">القياسات:</span>
                    <span>
                      {formData.height ? `طول: ${formData.height} سم ` : ''}
                      {formData.weight ? `• وزن: ${formData.weight} كجم ` : ''}
                      {formData.targetWeight ? `• مستهدف: ${formData.targetWeight} كجم` : ''}
                    </span>
                  </div>
                )}
              </div>

              {/* Goal preview */}
              <div className="p-3.5 rounded-xl bg-forest-50/60 border border-forest-100 text-xs text-forest-950">
                <span className="font-bold block mb-1">الهدف من الاستشارة:</span>
                <p className="leading-relaxed">{formData.goal}</p>
              </div>

              {/* Important Reminder */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>تنبيه هام:</strong> {siteSettings.bookingNotice}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-sand-200 flex flex-col sm:flex-row items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={MessageCircle}
                iconPosition="start"
                onClick={handleConfirmAndSendWhatsApp}
                className="bg-forest-800 hover:bg-forest-900"
              >
                تأكيد والانتقال لتطبيق واتساب
              </Button>
              <Button
                variant="ghost"
                size="md"
                onClick={() => setIsSummaryOpen(false)}
                className="w-full sm:w-auto text-xs"
              >
                تعديل البيانات
              </Button>
            </div>

          </div>
        </div>
      )}

      {/* Success banner if returned after clicking */}
      {hasSubmitted && (
        <div className="fixed bottom-6 right-6 left-6 max-w-lg mx-auto z-40 bg-forest-900 text-white p-5 rounded-2xl shadow-float border border-forest-700 flex items-start justify-between gap-3 animate-fade-in">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-forest-300 flex-shrink-0 mt-0.5" />
            <div className="text-xs">
              <strong className="block text-sm font-cairo mb-0.5 text-sand-50">تم تجهيز طلبكِ بنجاح!</strong>
              <span>إذا لم يفتح الواتساب تلقائياً، يمكنكِ الضغط على زر المتابعة مرة أخرى. فريق العيادة بانتظار رسالتكِ.</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setHasSubmitted(false)}
            className="text-sand-300 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}

