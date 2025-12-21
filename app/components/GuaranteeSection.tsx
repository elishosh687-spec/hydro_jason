import { ShieldCheck } from 'lucide-react';
import { activeContent } from '~/configs/content-active';

export function GuaranteeSection() {
  const { heading, subheading, bodyText } = activeContent.guarantee;

  return (
    <section className="bg-bg-page py-12 md:py-16 lg:py-20" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-border-default shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-8 md:p-12 flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary-main flex items-center justify-center text-white shadow-sm">
            <ShieldCheck className="w-7 h-7" strokeWidth={2.5} />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
            {heading}
          </h2>

          <p className="text-base md:text-lg font-medium text-text-secondary">
            {subheading}
          </p>

          <div className="w-12 h-0.5 bg-primary-light rounded-full" />

          <p className="text-sm md:text-base leading-relaxed text-text-primary max-w-2xl">
            {bodyText}
          </p>
        </div>
      </div>
    </section>
  );
}
