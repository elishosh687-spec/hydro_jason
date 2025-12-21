/**
 * Active Media Configuration
 * 
 * קובץ זה קובע איזו גרסת מדיה פעילה כרגע באתר.
 * כדי להחליף לגרסה אחרת, פשוט שנה את השורה של ה-import.
 * 
 * דוגמה: import { media } from './media/v2-new-photos';
 */

import { media } from './media/v1-original';

/**
 * המדיה הפעילה - מייצא את כל התמונות, הסרטונים והאייקונים
 */
export const landingMedia = media;

/**
 * טייפ של המבנה - לשימוש ב-TypeScript
 */
export type LandingMedia = typeof media;

