import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'מאיזה גיל זה מתאים?',
    answer: 'הערכה מתאימה לשימוש מגיל לידה (0+) ועד שהתינוק מתחיל להחזיק בקבוק באופן עצמאי ויציב.'
  },
  {
    question: 'האם זה מתאים לכל סוגי הבקבוקים?',
    answer:
      'כן, רצועת האחיזה האלסטית והאוניברסלית תוכננה להתאים ל-99% מהבקבוקים הסטנדרטיים בשוק, רחבים וצרים כאחד.'
  },
  {
    question: 'האם זה בטוח לשימוש?',
    answer:
      'בהחלט. המוצר עשוי מחומרים בטוחים ורכים. חשוב להדגיש: המוצר נועד לסייע להורה, אך אינו מחליף השגחת מבוגר. תמיד יש להישאר בסביבת התינוק בזמן ההאכלה.'
  },
  {
    question: 'איך מכבסים את זה?',
    answer:
      'פשוט מאוד! ניתן לשלוף את הכרית ולכבס במכונת כביסה בתוכנית עדינה (עד 30 מעלות). ייבוש באוויר הפתוח (לא במייבש).'
  },
  {
    question: 'תוך כמה זמן זה מגיע?',
    answer: 'זמן המשלוח הממוצע הוא בין 3 ל-5 ימי עסקים, תלוי במיקום שלך בארץ.'
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#52423d] mb-8 text-right">שאלות נפוצות</h2>

          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="border-b border-gray-200 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="w-full flex items-center justify-between py-4 text-right"
                  >
                    <span className="font-semibold text-[#52423d]">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7a6c66] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-4 text-sm md:text-base text-[#525252] leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

