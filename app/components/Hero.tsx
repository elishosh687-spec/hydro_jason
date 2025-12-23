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

          {/* Subtitle Paragraph */}
          <p className="text-base md:text-lg text-text-secondary text-center mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
            {subtitle}
          </p>

          {/* Social Proof Badge */}
          <div className="flex justify-center mb-4">
            <div className="bg-primary-light text-white px-6 py-2.5 rounded-full font-medium text-sm md:text-base shadow-sm">
              {socialProofBadge}
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex items-center justify-center gap-1 mb-12 md:mb-16">
            <span className="text-text-primary font-semibold ml-2 text-lg">
              ({rating})
            </span>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 md:w-6 md:h-6 fill-ui-star text-ui-star"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

