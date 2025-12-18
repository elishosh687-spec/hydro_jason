import { Image as ImageIcon, X } from 'lucide-react';

interface ProblemSolutionSectionProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function ProblemSolutionSection({
  imageSrc,
  imageAlt = 'תינוק אוכל בנוחות עם Feed-Ease'
}: ProblemSolutionSectionProps) {
  const painPoints = [
    {
      id: 1,
      text: (
        <>
          במטפט שנדט שנע דוח המינלייכי כי כהניה טעלדלה דבא שונה של{' '}
          <span className="text-[#e07a63] font-semibold">המינדס</span>
        </>
      )
    },
    {
      id: 2,
      text: (
        <>
          היד עלי בלתדך{' '}
          <span className="text-[#e07a63] font-semibold">"וגומרה"</span>, אבל את סמטפנת לסרחד אחרה
        </>
      )
    },
    {
      id: 3,
      text: (
        <>
          בטטכסע לטסען אחרי תכאבל, תפתל סמטטפיים-דים שונע על נזיזות{' '}
          <span className="text-[#e07a63] font-semibold">עתיס</span>
        </>
      )
    },
    {
      id: 4,
      text: (
        <>
          היפטבא טעלי עבידרככהיי, זאת תיפטבע באתלהא הזרטדן היב 32{' '}
          <span className="text-[#e07a63] font-semibold">דקה</span>
        </>
      )
    },
    {
      id: 5,
      text: (
        <>
          את עשוסע ומדך דין פזרוו, זאת זאת תידיערים שהדיי -{' '}
          <span className="text-[#e07a63] font-semibold">עכשיו</span>
        </>
      )
    }
  ];

  return (
    <section className="bg-[#fff6f2] py-12 md:py-16 lg:py-20" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Top Media - Image Slot */}
          <div className="mb-10 md:mb-14">
            <div className="flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-[#f2e3dd] shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white">
                <div className="relative aspect-square">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#fff6f2] via-[#ffe7dc] to-[#f2a085]/40">
                      <div className="text-center text-[#7a6c66] px-6">
                        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/70 flex items-center justify-center shadow-sm">
                          <ImageIcon className="w-7 h-7 text-[#e07a63]" strokeWidth={2.5} />
                        </div>
                        <p className="text-lg font-semibold text-[#52423d] mb-1">הוסיפו כאן תמונה</p>
                        <p className="text-sm text-[#7a6c66]">מומלץ יחס ריבועי 1:1</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - The Problem */}
          <div className="mb-10 md:mb-12">
            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#52423d] mb-4 md:mb-6">
              למה את מחכה שהגבי ישבר?
            </h2>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-center text-[#7a6c66] mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              כל האמא פטפטת עם האלתור פיש איטמטיה טופרם שקר - את צום מספקח "יכל", את תיכית את זה לעצמך
            </p>

            {/* Pain Points List */}
            <div className="max-w-3xl mx-auto space-y-4 md:space-y-5">
              {painPoints.map((point) => (
                <div
                  key={point.id}
                  className="flex items-start gap-3 md:gap-4 text-right"
                >
                  {/* X Icon on the right (RTL) */}
                  <div className="flex-shrink-0 order-2">
                    <X className="w-5 h-5 md:w-6 md:h-6 text-[#e07a63]" strokeWidth={2.5} />
                  </div>
                  
                  {/* Text */}
                  <p className="text-base md:text-lg text-[#52423d] leading-relaxed order-1 flex-1">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section - The Solution Box */}
          <div className="bg-[#ffe7dc] border-2 border-[#e07a63] rounded-2xl p-6 md:p-8 lg:p-10">
            {/* Solution Headline */}
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#52423d] mb-4 md:mb-5">
              הפתרון: היד השלישית שתמיד חלמת עליה
            </h3>

            {/* Solution Body Text */}
            <p className="text-base md:text-lg text-center text-[#52423d] leading-relaxed mb-4 max-w-3xl mx-auto">
              בטמטפט שקר יחנות מטסען, הטמטרע כל נטלה שונשה את הבתדבא בינטבין - את מתקבלע ילרים פגושות להתווטען (לצפיה: לירר את למפנות), היתינו עקטטיה מומבלכה יציבה ובטוחה, שמונעת נזיס
            </p>

            {/* Small Italic Text */}
            <p className="text-sm md:text-base text-center text-[#7a6c66] italic">
              חייבו מעוסס להרליקו
            </p>
          </div>

          {/* Video at the End of the Page */}
          <div className="mt-10 md:mt-14">
            <div className="flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                {/* Video Option - Story/Reels Format (9:16) */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-[#f2a085] to-[#e5b7a3]">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-xl font-bold mb-2">וידאו סטורי</p>
                      <p className="text-sm opacity-75">תינוק אוכל בנוחות עם Feed-Ease</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

