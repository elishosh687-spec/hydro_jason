export function IndependenceVideoSection() {
  const avatars = [
    'https://placehold.co/40x40/e5b7a3/ffffff?text=A',
    'https://placehold.co/40x40/f2a085/ffffff?text=B',
    'https://placehold.co/40x40/de7e63/ffffff?text=C'
  ];

  return (
    <section className="bg-[#fff6f2] py-16 px-4" dir="rtl">
      <div className="max-w-md mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#52423d] leading-tight">
          זה נראה כמו קסם, אבל זו פשוט עצמאות בפעולה
        </h2>

        <div className="w-full">
          <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <img
              src="https://placehold.co/300x530/e07a63/white?text=Video+Placeholder"
              alt="וידאו הדגמה"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <button
          type="button"
          className="w-full bg-gradient-to-r from-[#de7e63] via-[#e79a7b] to-[#e9a481] text-white font-bold text-base md:text-lg py-3.5 md:py-4 px-8 rounded-full shadow-[0_6px_16px_rgba(224,122,99,0.35)] hover:shadow-[0_8px_20px_rgba(224,122,99,0.45)] transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          כן, אני רוצה את החופש שלי בחזרה!
        </button>

        <div className="w-full flex flex-col items-center gap-4">
          <img
            src="https://placehold.co/600x60/fff6f2/52423d?text=Payment+Icons+Image"
            alt="אמצעי תשלום"
            className="w-full max-w-lg"
            loading="lazy"
          />

          <div className="flex flex-col items-center gap-2">
            <div className="flex -space-x-2 rtl:space-x-reverse">
              {avatars.map((avatar, index) => (
                <img
                  key={avatar}
                  src={avatar}
                  alt={`אמא ${index + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  loading="lazy"
                />
              ))}
            </div>
            <p className="text-xs md:text-sm text-[#7a6c66]">
              הצטרפי למאות אמהות שכבר נהנות מהחופש
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

