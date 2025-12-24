import { ShieldCheck } from 'lucide-react';
import { activeContent } from '~/configs/content-active';

export function GuaranteeSection() {
  const { heading, subheading, bodyText } = activeContent.guarantee;

  return (
    <section className="bg-bg-page py-12 md:py-16 lg:py-20" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div 
          className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 flex flex-col items-center text-center gap-4 relative"
          style={{
            animation: 'guaranteeBorderGlow 4s ease-in-out infinite',
            boxShadow: '0 10px 30px rgba(224, 122, 99, 0.15), 0 0 0 2px rgba(229, 183, 163, 0.4), 0 0 0 4px rgba(224, 122, 99, 0.1)',
            border: '2px solid transparent',
            background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(224, 122, 99, 0.4), rgba(242, 160, 133, 0.3), rgba(229, 183, 163, 0.4)) border-box',
          }}
        >
          {/* Glow effect overlay */}
          <div 
            className="absolute inset-0 rounded-3xl pointer-events-none opacity-30"
            style={{
              background: 'radial-gradient(circle at center, rgba(224, 122, 99, 0.2) 0%, transparent 70%)',
            }}
          />
          
          <div 
            className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-main to-primary-light flex items-center justify-center text-white relative z-10"
            style={{
              animation: 'guaranteeIconPulse 3s ease-in-out infinite',
            }}
          >
            <ShieldCheck className="w-7 h-7" strokeWidth={2.5} />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-text-primary relative z-10">
            {heading}
          </h2>

          <p className="text-base md:text-lg font-medium text-text-secondary relative z-10">
            {subheading}
          </p>

          <div className="w-12 h-0.5 bg-primary-light rounded-full relative z-10" />

          <p className="text-sm md:text-base leading-relaxed text-text-primary max-w-2xl relative z-10">
            {bodyText}
          </p>
        </div>
      </div>
    </section>
  );
}
