import { Baby, Sparkles, RefreshCw, Luggage } from 'lucide-react';

const benefits = [
  {
    id: 'universal-fit',
    icon: Baby,
    text: 'מתאים לכל הבקבוקים',
  },
  {
    id: 'washable',
    icon: Sparkles,
    text: 'עמיד בכביסה',
  },
  {
    id: 'return-policy',
    icon: RefreshCw,
    text: 'החזר כספי תוך 30 יום',
  },
  {
    id: 'portable',
    icon: Luggage,
    text: 'קלה וניידת לכל מקום',
  },
];

export function ProductBenefits() {
  return (
    <section className="bg-bg-page py-0" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  className="flex flex-col items-center justify-center gap-4 md:gap-5"
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary-main to-primary-light flex items-center justify-center shadow-[0_4px_12px_rgba(224,122,99,0.25)] transition-all hover:scale-105 hover:shadow-[0_6px_16px_rgba(224,122,99,0.35)] flex-shrink-0">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" strokeWidth={2} />
                  </div>
                  {/* Text */}
                  <p className="text-sm md:text-base lg:text-lg font-semibold text-text-primary text-center leading-[1.5] break-words px-2 tracking-tight">
                    {benefit.text}
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

