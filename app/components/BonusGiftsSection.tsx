import { Gift, ShoppingBag, Package, Heart } from 'lucide-react';

const gifts = [
  {
    id: 'stroller-holder',
    icon: ShoppingBag,
    text: 'מחזיק בקבוק מועצב לעגלה במתנה',
    value: 79,
  },
  {
    id: 'silicone-holder',
    icon: Package,
    text: 'מחזיק סיליקון לבקבוק במתנה',
    value: 29,
  },
  {
    id: 'wooden-pacifier',
    icon: Heart,
    text: 'מחזיק מוצץ מעץ במתנה',
    value: 49,
  },
];

export function BonusGiftsSection() {
  return (
    <section className="bg-bg-page py-6 md:py-8" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto my-5">
          {/* Gifts List - Simple */}
          <div className="space-y-3">
            {gifts.map((gift) => {
              const IconComponent = gift.icon;
              return (
                <div
                  key={gift.id}
                  className="flex items-center gap-3 md:gap-4"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary-main" strokeWidth={2.5} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 flex items-center justify-between gap-2">
                    <p className="text-sm md:text-base font-medium text-text-primary">
                      {gift.text}
                    </p>
                    <span className="text-xs md:text-sm font-semibold text-primary-main whitespace-nowrap">
                      שווי {gift.value}₪
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

