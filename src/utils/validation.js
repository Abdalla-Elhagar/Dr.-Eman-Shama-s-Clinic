/**
 * Validates the booking form fields in Arabic.
 * 
 * @param {Object} data 
 * @returns {Object} { isValid: boolean, errors: Object }
 */
export function validateBookingForm(data) {
  const errors = {};

  // 1. Full Name
  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = "يرجى كتابة الاسم الثلاثي أو الثنائي بالكامل (على الأقل 3 أحرف).";
  }

  // 2. Phone Number
  if (!data.phone || data.phone.trim() === "") {
    errors.phone = "رقم الهاتف / الواتساب مطلوب للتواصل.";
  } else {
    const cleanedPhone = data.phone.replace(/[\s\-\+\(\)]/g, "");
    if (!/^\d{8,15}$/.test(cleanedPhone)) {
      errors.phone = "يرجى إدخال رقم هاتف صحيح للتواصل (أرقام فقط، من 8 إلى 15 رقماً).";
    }
  }

  // 3. Age
  if (!data.age) {
    errors.age = "العمر مطلوب.";
  } else {
    const ageNum = Number(data.age);
    if (isNaN(ageNum) || ageNum < 10 || ageNum > 100) {
      errors.age = "يرجى إدخال عمر صحيح بين 10 و 100 سنة.";
    }
  }

  // 4. Service
  if (!data.service || data.service.trim() === "") {
    errors.service = "يرجى اختيار الخدمة أو البرنامج المطلوب.";
  }

  // 5. Goal
  if (!data.goal || data.goal.trim().length < 5) {
    errors.goal = "يرجى توضيح الهدف من الاستشارة بشكل مختصر (مثال: إنقاص 10 كجم، تنظيم سكر، تحسين الهضم).";
  }

  // 6. Preferred Date (Must not be in the past)
  if (!data.preferredDate) {
    errors.preferredDate = "يرجى تحديد التاريخ المفضل للاستشارة.";
  } else {
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    // Normalize to start of day
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      errors.preferredDate = "لا يمكن اختيار تاريخ قديم في الماضي، يرجى اختيار تاريخ اليوم أو يوم قادم.";
    }
  }

  // Optional fields format checks if filled
  if (data.height && (isNaN(Number(data.height)) || Number(data.height) < 80 || Number(data.height) > 240)) {
    errors.height = "يرجى إدخال طول تقريبي صحيح بالسنتيمتر (بين 80 و 240 سم).";
  }

  if (data.weight && (isNaN(Number(data.weight)) || Number(data.weight) < 25 || Number(data.weight) > 300)) {
    errors.weight = "يرجى إدخال وزن صحيح بالكيلوجرام (بين 25 و 300 كجم).";
  }

  if (data.targetWeight && (isNaN(Number(data.targetWeight)) || Number(data.targetWeight) < 25 || Number(data.targetWeight) > 250)) {
    errors.targetWeight = "يرجى إدخال وزن مستهدف منطقي بالكيلوجرام.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Returns today's date formatted as YYYY-MM-DD for min date attribute
 */
export function getMinDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

