import { Heart, RotateCcw, Truck } from 'lucide-react';

export function BenefitsList() {
  const benefits = [
    {
      icon: Heart,
      text: 'התחייבות לאיכות- 100% כותנה',
      mobileText: '100% כותנה',
      id: 'quality'
    },
    {
      icon: RotateCcw,
      text: 'החזרים עד 30 יום - אפס סיכון',
      mobileText: 'החזרות 30 יום',
      id: 'returns'
    },
    {
      icon: Truck,
      text: 'משלוח עד הבית בחינם (לזמן מוגבל)',
      mobileText: 'משלוח חינם',
      id: 'shipping'
    }
  ];

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:gap-6 lg:gap-8" dir="rtl">
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <div
            key={benefit.id}
            className="flex items-center gap-1.5 md:gap-2"
          >
            {/* Mobile: Short Text */}
            <span className="md:hidden text-xs font-medium text-[#52423d] whitespace-nowrap">
              {benefit.mobileText}
            </span>
            {/* Desktop: Full Text */}
            <span className="hidden md:inline text-base lg:text-lg font-medium text-[#52423d] whitespace-nowrap">
              {benefit.text}
            </span>
            <Icon 
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#d5ab9a] flex-shrink-0" 
              strokeWidth={2} 
            />
          </div>
        );
      })}
    </div>
  );
}

