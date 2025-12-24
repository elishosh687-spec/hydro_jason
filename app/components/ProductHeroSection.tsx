import { Star, Baby, Sparkles, RefreshCw, Hand, Gift, Package, Grip } from 'lucide-react';
import { activeContent } from '~/configs/content-active';

const features = [
  {
    id: 'age-range',
    icon: Baby,
    text: 'מתאים לכל סוגי הבקבוקים',
  },
  {
    id: 'no-pain',
    icon: Sparkles,
    text: 'עמיד בכביסה',
  },
  {
    id: 'quick-setup',
    icon: RefreshCw,
    text: 'החזר תוך 30 יום',
  },
  {
    id: 'free-hands',
    icon: Hand,
    text: 'משחרר את הידיים',
  },
];

export function ProductHeroSection() {
  const { rating, socialProofBadge } = activeContent.hero;
  const { productName } = activeContent.global;

  return (
    <section className="bg-bg-page py-8 md:py-12" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Rating and Social Proof */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 md:w-6 md:h-6 fill-ui-star text-ui-star"
                  />
                ))}
              </div>
              <span className="text-xl md:text-2xl font-bold text-text-primary">
                {rating}/5
              </span>
            </div>
            <div className="h-6 w-px bg-border-divider hidden md:block"></div>
            <span className="text-base md:text-lg font-semibold text-text-primary">
              {socialProofBadge}
            </span>
          </div>

          {/* Product Name */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-text-primary mb-6 md:mb-8">
            {productName} - תומך הנקה
          </h1>

          {/* Customer Testimonial */}
          <div className="max-w-xl mx-auto">
            <div className="bg-gradient-to-br from-primary-lighter to-white rounded-xl p-4 md:p-5 mb-6 md:mb-8 shadow-[0_4px_12px_rgba(224,122,99,0.15)] border border-primary-lighter relative overflow-hidden">
              {/* Decorative Quote Icon */}
              <div className="absolute top-2 right-2 text-primary-main opacity-20">
                <svg className="w-12 h-12 md:w-14 md:h-14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <p className="text-sm md:text-base text-text-primary text-center leading-relaxed mb-3 font-medium italic">
                  "אפילו בעלי התלונן כל פעם שהיה צריך להרים אותו. עכשיו הוא זה שמבקש לשים את המנשא. אין לי מושג איך הסתדרנו בלעדיו"
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-8 bg-primary-main"></div>
                  <p className="text-xs md:text-sm text-primary-main text-center font-bold">
                    הילה
                  </p>
                  <div className="h-px w-8 bg-primary-main"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 md:mb-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-primary-main" strokeWidth={2} />
                  <p className="text-xs md:text-sm font-medium text-text-primary leading-tight">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Special Bundle Offer */}
          <div className="relative mb-6 md:mb-8">
            {/* Background with subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f6] via-[#fff6f2] to-white rounded-2xl border border-[#e8ddd4] shadow-[0_4px_16px_rgba(0,0,0,0.06)]"></div>
            
            {/* Content */}
            <div className="relative z-10 p-6 md:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 mb-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary-main to-primary-light rounded-full"></div>
                  <p className="text-lg md:text-xl font-bold text-[#52423d]">
                    בקניית הכרית תקבלי
                  </p>
                  <div className="w-1 h-8 bg-gradient-to-b from-primary-main to-primary-light rounded-full"></div>
                </div>
                <p className="text-sm md:text-base font-normal text-[#7a6c66]">
                  (עד גמר המלאי)
                </p>
              </div>

              {/* Gifts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#f2e3dd] shadow-sm hover:shadow-md transition-all hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-lighter to-primary-light flex items-center justify-center flex-shrink-0">
                      <Package className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-semibold text-[#52423d] leading-tight">
                        מחזיק בקבוק לעגלה
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#f2e3dd] shadow-sm hover:shadow-md transition-all hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-lighter to-primary-light flex items-center justify-center flex-shrink-0">
                      <Baby className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-semibold text-[#52423d] leading-tight">
                        מחזיק מוצץ
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#f2e3dd] shadow-sm hover:shadow-md transition-all hover:scale-[1.02]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-lighter to-primary-light flex items-center justify-center flex-shrink-0">
                      <Grip className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-semibold text-[#52423d] leading-tight">
                        ידיות אוניברסליות לבקבוק
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Badge */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e07a63] via-[#e79a7b] to-[#e9a481] text-white px-6 py-3 rounded-full text-sm md:text-base font-bold shadow-[0_4px_12px_rgba(224,122,99,0.3)]">
                  <Gift className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
                  <span>במתנה!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Limited Time Promotion */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-main to-primary-light text-white px-4 py-2 rounded-full text-sm md:text-base font-bold">
              <span>24 שעות אחרונות למבצע!</span>
              <span>|</span>
              <span>עד 50% הנחה</span>
            </div>
          </div>

          {/* Free Guide */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-border-default text-center">
            <p className="text-base md:text-lg text-text-primary">
              כל הזמנה מגיעה עם הספר שלנו - המדריך להורות קלה: מתינוק ועד פעוט. במתנה! (שווי 119.90 ₪)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

