/**
 * Version 1: Media Assets (Images, Videos, Icons)
 * 
 * כל התמונות, הסרטונים והאייקונים של הדף
 * קובץ זה מכיל רק קישורים למדיה - ללא טקסט
 * 
 * Created: Dec 2025
 * Status: Original baseline version
 */

export const media = {
  // ==================== HEADER ====================
  header: {
    // לוגו המותג בכותרת
    logo: {
      src: 'https://cdn.shopify.com/s/files/1/0661/6416/2608/files/Gemini_Generated_Image_64vnf364vnf364vn_1.png?v=1766319466',
      alt: 'FeedEase Logo',
    },
  },

  // ==================== HERO VIDEO CAROUSEL ====================
  heroVideoCarousel: {
    slides: [
      {
        id: 1,
        type: 'video' as const,
        // וידאו ראשי - תינוק אוכל עם המוצר
        src: 'https://example.com/video1.mp4',
        thumbnail: 'https://placehold.co/800x600/fff6f2/52423d?text=VIDEO',
      },
      {
        id: 2,
        type: 'image' as const,
        // תמונה שנייה בקרוסלה
        src: 'https://cdn.shopify.com/s/files/1/0661/6416/2608/files/Gemini_Generated_Image_qpr44wqpr44wqpr4.png?v=1766316875',
      },
    ],
  },

  // ==================== HERO SECTION ====================
  hero: {
    // תמונת רקע או תמונה ראשית של הסקשן העליון
    backgroundImage: 'https://placehold.co/1200x800/fff6f2/52423d?text=Hero+BG',
    // תמונת המוצר הראשית
    productImage: {
      src: 'https://placehold.co/600x600/fff6f2/52423d?text=Product',
      alt: 'Feed-Ease כרית הנקה',
    },
  },

  // ==================== PRICING SECTION ====================
  pricing: {
    // תמונות/אייקונים של אמצעי תשלום
    paymentMethods: {
      src: 'https://cdn.shopify.com/s/files/1/0661/6416/2608/files/Gemini_Generated_Image_5l3r7p5l3r7p5l3r.png?v=1766316758',
      alt: 'אמצעי תשלום - Visa, Mastercard, Bit, Apple Pay, Google Pay',
    },
  },

  // ==================== WHY CHOOSE US ====================
  whyChooseUs: {
    features: [
      {
        id: 1,
        // אייקון בטיחות
        icon: 'Shield',
        iconColor: '#e07a63',
      },
      {
        id: 2,
        // אייקון שירות אישי
        icon: 'Sparkles',
        iconColor: '#e07a63',
      },
      {
        id: 3,
        // אייקון חומרים איכותיים
        icon: 'Heart',
        iconColor: '#e07a63',
      },
      {
        id: 4,
        // אייקון התאמה אוניברסלית
        icon: 'Grid3x3',
        iconColor: '#e07a63',
      },
    ],
  },

  // ==================== PAYMENT & TESTIMONIAL ====================
  paymentTestimonial: {
    // תמונת הלקוח/ה שנתן/ה את המלצה
    avatar: {
      src: 'https://cdn.shopify.com/s/files/1/0661/6416/2608/files/unnamed_5.jpg?v=1766316631',
      alt: 'זהבה ג.',
    },
    // כוכבי דירוג
    stars: {
      rating: 5,
      icon: 'Star',
      color: '#fbbf24',
    },
  },

  // ==================== PROBLEM SOLUTION ====================
  problemSolution: {
    // תמונה של בעיה - אמא עם כאבי גב
    problemImage: {
      src: 'https://placehold.co/600x400/fff6f2/52423d?text=Problem+Image',
      alt: 'תמונת בעיה - אמא עם כאבי גב',
    },
    // וידאו הסבר על הפתרון
    solutionVideo: {
      src: 'https://example.com/solution-video.mp4',
      thumbnail: 'https://placehold.co/600x400/fff6f2/52423d?text=Solution+Video',
      alt: 'וידאו הדגמה של הפתרון',
    },
  },

  // ==================== ANTI-COLIC BENEFITS ====================
  antiColicBenefits: {
    // תמונה המראה זווית נכונה להאכלה
    demonstrationImage: {
      src: 'https://placehold.co/600x400/fff6f2/52423d?text=Anti+Colic+Demo',
      alt: 'הדגמה של זווית האכלה נכונה',
    },
  },

  // ==================== BENEFITS GRID ====================
  benefitsGrid: {
    items: [
      {
        id: 1,
        // תמונה - ידיים חופשיות
        image: {
          src: 'https://cdn.shopify.com/s/files/1/0661/6416/2608/files/unnamed_10.jpg?v=1766316637',
          alt: 'ביי ביי לכאבי ידיים',
        },
      },
      {
        id: 2,
        // תמונה - תאומים
        image: {
          src: 'https://placehold.co/600x400/fff6f2/52423d?text=Twins',
          alt: 'הצלה להורי תאומים',
        },
      },
      {
        id: 3,
        // תמונה - תינוק רגוע ללא גזים
        image: {
          src: 'https://placehold.co/600x400/fff6f2/52423d?text=Less+Gas',
          alt: 'פחות גזים יותר שלווה',
        },
      },
      {
        id: 4,
        // תמונה - כרית ניידת
        image: {
          src: 'https://placehold.co/600x400/fff6f2/52423d?text=Portable',
          alt: 'קלה וניידת לכל מקום',
        },
      },
      {
        id: 5,
        // תמונה - לא עוד אלתורים
        image: {
          src: 'https://placehold.co/600x400/fff6f2/52423d?text=No+DIY',
          alt: 'די לאלתורים',
        },
      },
      {
        id: 6,
        // תמונה - עצמאות לתינוק
        image: {
          src: 'https://placehold.co/600x400/fff6f2/52423d?text=Independence',
          alt: 'צעד ראשון לעצמאות',
        },
      },
    ],
  },

  // ==================== HOW IT WORKS ====================
  howItWorks: {
    // תמונות הדגמה לכל שלב
    steps: [
      {
        id: 1,
        // שלב 1 - הנחת הכרית
        image: {
          src: 'https://placehold.co/400x300/fff6f2/52423d?text=Step+1',
          alt: 'שלב 1 - הניחי את הכרית',
        },
      },
      {
        id: 2,
        // שלב 2 - הצמדת הבקבוק
        image: {
          src: 'https://placehold.co/400x300/fff6f2/52423d?text=Step+2',
          alt: 'שלב 2 - הצמידי את הבקבוק',
        },
      },
      {
        id: 3,
        // שלב 3 - ידיים חופשיות
        image: {
          src: 'https://placehold.co/400x300/fff6f2/52423d?text=Step+3',
          alt: 'שלב 3 - שחררי את הידיים',
        },
      },
    ],
  },

  // ==================== SOCIAL PROOF / REVIEWS ====================
  socialProof: {
    // אווטרים של לקוחות
    reviews: [
      {
        id: 1,
        name: 'יעל לוי',
        // תמונת פרופיל
        avatar: {
          src: 'https://placehold.co/80x80/e5b7a3/ffffff?text=YL',
          alt: 'יעל לוי',
          initials: 'יל',
        },
      },
      {
        id: 2,
        name: 'דנה ישראלי',
        // תמונת פרופיל
        avatar: {
          src: 'https://placehold.co/80x80/f2a085/ffffff?text=DI',
          alt: 'דנה ישראלי',
          initials: 'די',
        },
      },
      {
        id: 3,
        name: 'מיכל כהן',
        // תמונת פרופיל
        avatar: {
          src: 'https://placehold.co/80x80/de7e63/ffffff?text=MK',
          alt: 'מיכל כהן',
          initials: 'מק',
        },
      },
      {
        id: 4,
        name: 'שני דוידי',
        // תמונת פרופיל
        avatar: {
          src: 'https://placehold.co/80x80/e5b7a3/ffffff?text=SD',
          alt: 'שני דוידי',
          initials: 'שד',
        },
      },
    ],
  },

  // ==================== FOUNDER STORY ====================
  founderStory: {
    // תמונת המייסדת
    founderImage: {
      src: 'https://placehold.co/400x400/fff6f2/52423d?text=Founder',
      alt: 'תמונת המייסדת',
    },
  },

  // ==================== BONUS PRODUCTS ====================
  bonusProducts: {
    products: [
      {
        id: 1,
        // תמונת ידיות אוניברסליות
        image: {
          src: 'https://placehold.co/400x400/fff6f2/52423d?text=Universal+Handles',
          alt: 'ידיות אוניברסליות',
        },
      },
      {
        id: 2,
        // תמונת מחזיק בקבוק לעגלה
        image: {
          src: 'https://placehold.co/400x400/fff6f2/52423d?text=Stroller+Holder',
          alt: 'מחזיק בקבוק לעגלה',
        },
      },
      {
        id: 3,
        // תמונת הכרית החכמה
        image: {
          src: 'https://placehold.co/400x400/fff6f2/52423d?text=Smart+Pillow',
          alt: 'הכרית החכמה',
        },
      },
    ],
  },

  // ==================== INDEPENDENCE VIDEO ====================
  independenceVideo: {
    // וידאו הדגמה של עצמאות התינוק
    video: {
      src: 'https://example.com/independence-video.mp4',
      thumbnail: 'https://placehold.co/800x600/fff6f2/52423d?text=Video+Placeholder',
      alt: 'וידאו הדגמה - עצמאות בפעולה',
    },
    // אמצעי תשלום
    paymentIcons: {
      src: 'https://placehold.co/400x80/fff6f2/52423d?text=Payment+Icons+Image',
      alt: 'אמצעי תשלום',
    },
    // אווטרים של לקוחות מרוצים
    customerAvatars: [
      {
        src: 'https://placehold.co/40x40/e5b7a3/ffffff?text=A',
        alt: 'לקוח מרוצה 1',
      },
      {
        src: 'https://placehold.co/40x40/f2a085/ffffff?text=B',
        alt: 'לקוח מרוצה 2',
      },
      {
        src: 'https://placehold.co/40x40/de7e63/ffffff?text=C',
        alt: 'לקוח מרוצה 3',
      },
    ],
  },

  // ==================== GUARANTEE ====================
  guarantee: {
    // אייקון מגן/ערבות
    icon: {
      name: 'ShieldCheck',
      color: '#34d399',
      size: 64,
    },
  },

  // ==================== FINAL CTA ====================
  finalCta: {
    // אייקונים של אמצעי תשלום
    paymentMethods: {
      src: 'https://placehold.co/400x80/fff6f2/52423d?text=Payment+Methods',
      alt: 'אמצעי תשלום',
    },
    // כוכבי דירוג
    stars: {
      rating: 5,
      icon: 'Star',
      color: '#fbbf24',
    },
  },

  // ==================== STICKY BUY BAR ====================
  stickyBuyBar: {
    // תמונה קטנה של המוצר בפס התחתון
    productImage: {
      src: 'https://placehold.co/100x100/fff6f2/52423d?text=FE',
      alt: 'FeedEase',
    },
  },

  // ==================== FOOTER ====================
  footer: {
    // אייקון WhatsApp הצף
    whatsapp: {
      icon: 'whatsapp-svg',
      color: '#25D366',
      // SVG מותאם אישית של WhatsApp
      customSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
      </svg>`,
    },
    // אייקוני רשתות חברתיות
    socialIcons: [
      {
        name: 'Facebook',
        icon: 'Facebook',
        href: '#',
        ariaLabel: 'עקבו אחרינו בפייסבוק',
      },
      {
        name: 'Instagram',
        icon: 'Instagram',
        href: '#',
        ariaLabel: 'עקבו אחרינו באינסטגרם',
      },
    ],
  },
};

export type LandingMedia = typeof media;

