import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-[#f7fff7]" dir="rtl">
      {/* Navbar */}
      <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-white/80 shadow-sm">
        <span className="text-2xl md:text-3xl font-bold text-primary tracking-tight font-tajawal">microVest</span>
        <a href="#leadform" className="bg-primary text-white px-6 py-2 rounded-xl font-semibold text-lg shadow-md hover:bg-dark-green transition-all font-tajawal">سجّل اهتمامك</a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-6 pt-8 pb-16 md:pb-0 md:pt-20 md:px-16 grow bg-gradient-to-br from-[#f7fff7] to-[#eafeec]">
        {/* Left - Text */}
        <div className="flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-right">
          <h1 className="text-3xl md:text-5xl font-black text-primary font-tajawal leading-relaxed">استثمر الباقي من مشترياتك تلقائيًا</h1>
          <p className="text-lg md:text-xl text-dark-green font-tajawal">microVest يقرب عملياتك لأقرب مبلغ ويستثمر الفرق عنك، عشان تبدأ تستثمر حتى لو المبلغ صغير.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
            <a href="#leadform" className="bg-primary text-white flex-1 text-center py-3 rounded-xl font-bold text-lg shadow-md hover:bg-dark-green transition-all font-tajawal">سجّل اهتمامك</a>
            <a href="#how" className="flex-1 text-center border-2 border-accent text-accent py-3 rounded-xl font-bold text-lg hover:bg-accent-light/30 transition-all font-tajawal">كيف نشتغل؟</a>
          </div>
        </div>
        {/* Right - Example Card */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="rounded-xl border-2 border-accent bg-white/70 shadow-lg p-6 w-[320px] max-w-full space-y-3">
            <div className="flex items-center justify-between font-tajawal text-lg"><span>عملية شراء:</span><span className="font-bold text-primary">37 ريال</span></div>
            <div className="flex items-center justify-between font-tajawal text-lg"><span>تم التقريب إلى:</span><span className="font-bold text-dark-green">40 ريال</span></div>
            <div className="flex items-center justify-between font-tajawal text-lg"><span>تم استثمار:</span><span className="font-bold text-accent">3 ريال</span></div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how" className="max-w-5xl w-full mx-auto px-6 py-10 md:py-20">
        <h2 className="text-2xl text-primary font-bold mb-8 text-center font-tajawal">كيف نشتغل؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-4 border-t-4 border-accent-light">
            <div className="w-14 h-14 bg-accent-light rounded-full flex items-center justify-center mb-2">
              <span className="text-3xl">🔗</span>
            </div>
            <div className="font-bold text-lg font-tajawal">اربط بطاقتك</div>
            <div className="text-gray-500 font-tajawal text-center">فعّل الربط عشان نقدر نلاحظ العمليات البنكية.</div>
          </div>
          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-4 border-t-4 border-accent">
            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-2">
              <span className="text-3xl">🔄</span>
            </div>
            <div className="font-bold text-lg font-tajawal">نقرّب كل عملية</div>
            <div className="text-gray-500 font-tajawal text-center">نقرب كل مشترياتك لأقرب مبلغ صحيح.</div>
          </div>
          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center gap-4 border-t-4 border-primary">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-2">
              <span className="text-3xl text-white">💸</span>
            </div>
            <div className="font-bold text-lg font-tajawal">نستثمر الفرق لك</div>
            <div className="text-gray-500 font-tajawal text-center">نستثمر الفرق تلقائيًا وبكل سهولة.</div>
          </div>
        </div>
      </section>

      {/* Why microVest Section */}
      <section className="max-w-3xl w-full mx-auto px-6 pb-10">
        <h2 className="text-2xl text-primary font-bold mb-6 text-center font-tajawal">ليش microVest؟</h2>
        <ul className="space-y-2 text-lg font-tajawal text-right">
          <li className="flex items-start gap-2"><span className="text-accent-light text-xl">•</span> تبدأ الاستثمار حتى لو معك مبلغ بسيط جداً.</li>
          <li className="flex items-start gap-2"><span className="text-accent-light text-xl">•</span> كل شيء تلقائي—بدون تعب ولا متابعة.</li>
          <li className="flex items-start gap-2"><span className="text-accent-light text-xl">•</span> تقدر تحفظ وتحسّن عاداتك المالية بسهولة.</li>
          <li className="flex items-start gap-2"><span className="text-accent-light text-xl">•</span> خدمة آمنة، والأمان أولوية قصوى.</li>
        </ul>
      </section>

      {/* Lead Capture Form Section */}
      <section id="leadform" className="w-full bg-white/90 py-8 px-4 flex justify-center">
        <div className="rounded-xl shadow-lg border px-6 py-10 md:p-12 bg-white w-full max-w-lg flex flex-col items-center">
          <h3 className="font-bold text-2xl mb-6 font-tajawal text-primary text-center">سجّل إيميلك عشان تكون من أول المستخدمين</h3>
          <form className="w-full space-y-4 font-tajawal">
            <div>
              <label htmlFor="name" className="block text-sm mb-1 font-semibold">الاسم</label>
              <input type="text" id="name" name="name" autoComplete="name" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-light bg-gray-50" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1 font-semibold">الإيميل <span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" autoComplete="email" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-light bg-gray-50" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm mb-1 font-semibold">الجوال <span className="text-gray-400">(اختياري)</span></label>
              <input type="tel" id="phone" name="phone" autoComplete="tel" className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-light bg-gray-50" />
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-dark-green text-white text-lg font-bold rounded-xl py-3 transition-all shadow-md">سجّل اهتمامك</button>
          </form>
          <div className="text-xs text-gray-500 mt-3 text-center font-tajawal">الخدمة تحت التطوير – بنراسلك أول ما نفتح التجربة.</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3 text-xs text-gray-400 font-tajawal bg-transparent">
        microVest – مشروع سعودي قيد التطوير
      </footer>
    </div>
  );
}

export default App;
