import { Facebook, Instagram, Mail, MessageCircle, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#fffcf9] py-16 px-8" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-right">
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="text-lg font-bold text-[#52423d]">אודות Feed-Ease</h3>
            <p className="text-sm md:text-base text-[#7a6c66] leading-relaxed max-w-md">
              המוצר המושלם לאמהות שמעוניינות בהנקה נוחה, קלה ונעימה. אנחנו כאן כדי להקל עליך את תהליך ההנקה.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="text-lg font-bold text-[#52423d]">קישורים מהירים</h3>
            <ul className="space-y-2 text-[#7a6c66] text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-[#e07a63] transition-colors">
                  מדיניות פרטיות
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e07a63] transition-colors">
                  תנאי שימוש
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e07a63] transition-colors">
                  תקנון האתר
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <h3 className="text-lg font-bold text-[#52423d]">צרי קשר</h3>
            <div className="flex flex-col gap-2 text-[#7a6c66] text-sm md:text-base">
              <a href="tel:055-9397716" className="inline-flex items-center gap-2 hover:text-[#e07a63] transition-colors">
                <Phone className="w-4 h-4" />
                <span>055-9397716</span>
              </a>
              <a
                href="mailto:feedeasebrand@gmail.com"
                className="inline-flex items-center gap-2 hover:text-[#e07a63] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>feedeasebrand@gmail.com</span>
              </a>
              <a
                href="https://wa.me/972559397716"
                className="inline-flex items-center gap-2 hover:text-[#e07a63] transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>055-9397716</span>
              </a>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-[#7a6c66] text-sm md:text-base">
              <span className="font-semibold text-[#52423d]">עקבי אחרינו</span>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <a href="#" className="text-[#7a6c66] hover:text-[#e07a63] transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-[#7a6c66] hover:text-[#e07a63] transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/972559397716"
        className="fixed z-60 bottom-24 right-4 w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        target="_blank"
        rel="noreferrer"
        aria-label="צ'אט וואטסאפ"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
}

