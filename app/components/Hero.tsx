import { Heart, RefreshCw, Truck, Star } from 'lucide-react';
import { activeContent } from '~/configs/content-active';

const iconMap = {
  quality: Heart,
  returns: RefreshCw,
  shipping: Truck,
};

export function Hero() {
  const { headline, subtitle, socialProofBadge, rating, benefits } = activeContent.hero;

  return (
    <section className="bg-bg-page pt-px pb-px" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 leading-tight">
            <span className="text-text-primary">{headline.part1}</span>
            <span className="text-primary-main">{headline.part2Highlight}</span>
            <span className="text-text-primary">{headline.part3}</span>
          </h1>

        </div>
      </div>
    </section>
  );
}

