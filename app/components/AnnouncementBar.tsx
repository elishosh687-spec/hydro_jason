import { Truck, RefreshCw, Star } from 'lucide-react';

export function AnnouncementBar() {
  const items = [
    {
      icon: Star,
      text: '5000+ לקוחות',
      mobileText: '5000+ לקוחות',
      id: 'customers'
    },
    {
      icon: RefreshCw,
      text: 'מוצר משלים במתנה',
      mobileText: 'מוצר משלים במתנה',
      id: 'gift'
    },
    {
      icon: Truck,
      text: 'משלוח חינם עד הבית',
      mobileText: 'משלוח חינם עד הבית',
      id: 'shipping'
    }
  ];

  return (
    <div className="bg-[#ddb3a5] py-2.5" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-nowrap items-center justify-between gap-2 md:gap-6 lg:gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-1 md:gap-2 text-white flex-shrink-0"
              >
                <Icon className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" strokeWidth={2} />
                {/* Mobile: Same Text but smaller */}
                <span className="md:hidden text-[11px] font-medium whitespace-nowrap">
                  {item.mobileText}
                </span>
                {/* Desktop: Full Text */}
                <span className="hidden md:inline text-sm font-medium whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

