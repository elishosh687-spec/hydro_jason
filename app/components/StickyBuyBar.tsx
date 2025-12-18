import { useEffect, useState } from 'react';

export function StickyBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setVisible(y > 300);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    const target = document.getElementById('pricing');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4" dir="rtl">
          <div className="flex items-center gap-3">
            <img
              src="https://placehold.co/100x100/fff6f2/52423d?text=FE"
              alt="FeedEase"
              className="w-12 h-12 rounded-full border border-[#f2e3dd] object-cover"
              loading="lazy"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[#52423d]">FeedEase</span>
              <span className="text-xs text-[#e07a63]">המלאי מוגבל</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClick}
            className="bg-gradient-to-r from-[#de7e63] via-[#e79a7b] to-[#e9a481] text-white font-bold text-sm md:text-base px-6 py-2 rounded-full shadow-[0_6px_16px_rgba(224,122,99,0.35)] hover:shadow-[0_8px_20px_rgba(224,122,99,0.45)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            לרכישה | 199 ₪
          </button>
        </div>
      </div>
    </div>
  );
}

