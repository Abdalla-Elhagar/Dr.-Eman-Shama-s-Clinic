import { siteSettings } from '../data/settings';

/**
 * Generates a structured Arabic WhatsApp booking message and returns the URL.
 * 
 * @param {Object} bookingData - The form submission data
 * @param {string} bookingData.fullName - Required
 * @param {string} bookingData.phone - Required
 * @param {string} bookingData.age - Required
 * @param {string} bookingData.service - Required
 * @param {string} bookingData.goal - Required
 * @param {string} bookingData.preferredDate - Required
 * @param {string} [bookingData.gender] - Optional
 * @param {string} [bookingData.height] - Optional
 * @param {string} [bookingData.weight] - Optional
 * @param {string} [bookingData.targetWeight] - Optional
 * @param {string} [bookingData.preferredTime] - Optional
 * @param {string} [bookingData.notes] - Optional
 * @returns {string} Fully encoded WhatsApp URL
 */
export function generateWhatsAppBookingUrl(bookingData) {
  const {
    fullName,
    phone,
    age,
    service,
    goal,
    preferredDate,
    gender,
    height,
    weight,
    targetWeight,
    preferredTime,
    notes,
  } = bookingData;

  const lines = [
    `السلام عليكم ورحمة الله وبركاته، دكتورة.`,
    `أرغب في حجز موعد استشارة تغذوية عبر الموقع الإلكتروني:`,
    ``,
    `📋 *البيانات الأساسية:*`,
    `• *الاسم بالكامل:* ${fullName?.trim() || ''}`,
    `• *رقم الهاتف:* ${phone?.trim() || ''}`,
    `• *العمر:* ${age?.trim() || ''} سنة`,
  ];

  if (gender && gender.trim() !== '') {
    lines.push(`• *النوع:* ${gender.trim()}`);
  }

  lines.push(
    ``,
    `🩺 *تفاصيل الاستشارة المطلوبة:*`,
    `• *الخدمة المطلوبة:* ${service?.trim() || ''}`,
    `• *الهدف من الاستشارة:* ${goal?.trim() || ''}`,
    `• *التاريخ المفضل:* ${preferredDate?.trim() || ''}`
  );

  if (preferredTime && preferredTime.trim() !== '') {
    lines.push(`• *الوقت المفضل المقترح:* ${preferredTime.trim()}`);
  }

  // Physical measurements section (if any provided)
  const hasMeasurements = (height && height.trim() !== '') || 
                          (weight && weight.trim() !== '') || 
                          (targetWeight && targetWeight.trim() !== '');

  if (hasMeasurements) {
    lines.push(``, `⚖️ *البيانات الجسدية (اختياري):*`);
    if (height && height.trim() !== '') lines.push(`• *الطول:* ${height.trim()} سم`);
    if (weight && weight.trim() !== '') lines.push(`• *الوزن الحالي:* ${weight.trim()} كجم`);
    if (targetWeight && targetWeight.trim() !== '') lines.push(`• *الوزن المستهدف:* ${targetWeight.trim()} كجم`);
  }

  // Additional notes (if provided)
  if (notes && notes.trim() !== '') {
    lines.push(``, `📝 *ملاحظات إضافية / التاريخ الصحي:*`, `${notes.trim()}`);
  }

  lines.push(
    ``,
    `---`,
    `*تنبيه:* هذا طلب حجز أولي، وفي انتظار مراجعة وتأكيد الموعد النهائي من فريق العيادة. شكراً لكِ!`
  );

  const message = lines.join('\n');
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = siteSettings.whatsappNumber;

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Direct general inquiry WhatsApp URL
 */
export function getGeneralWhatsAppUrl(customText = "السلام عليكم، أود الاستفسار عن استشارات وخدمات التغذية العلاجية المتاحة في العيادة.") {
  const phoneNumber = siteSettings.whatsappNumber;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customText)}`;
}

