import { Shield, Sparkles, Heart, Grid3x3 } from 'lucide-react';

interface Feature {
  id: number;
  icon: typeof Shield;
  title: string;
  description: string;
}

export function WhyChooseUsSection() {
  const features: Feature[] = [
    {
      id: 1,
      icon: Shield,
      title: 'בטיחות לפני הכל',
      description: 'עיצוב ארגונומי המותאם למבנה התינוק ומונע החלקה.'
    },
    {
      id: 2,
      icon: Heart,
      title: 'שירות אישי',
      description: 'אבא ואמא (תיתיר משמש) לכל שאלה, משלוח מהיר ואחריות.'
    },
    {
      id: 3,
      icon: Sparkles,
      title: 'חומרים איכותיים',
      description: 'בד קטיפתי, נושם ועמיד למכונה. בניין לכביסה במכונה.'
    },
    {
      id: 4,
      icon: Grid3x3,
      title: 'התאמה אוניברסלית',
      description: 'מתאים לכל סוגי הבקבוקים והסטנדרטים בשוק.'
    }
  ];

  return (
    <section className="bg-[#fff6f2] py-12 md:py-16 lg:py-20" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top Decorative Wave */}
          <div className="flex justify-center mb-6">
            <svg
              width="80"
              height="20"
              viewBox="0 0 80 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-30"
            >
              <path
                d="M2 10C10 2 18 18 26 10C34 2 42 18 50 10C58 2 66 18 74 10"
                stroke="#e07a63"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#52423d] mb-10 md:mb-14">
            למה הורים בוחרים ב-EasyFeed בראש שקט?
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="bg-white rounded-2xl p-6 border border-[#f2e3dd] transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
                >
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#fce9de] to-[#f7ddd0] flex items-center justify-center">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#e07a63]" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-center text-[#52423d] mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-center text-[#7a6c66] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



