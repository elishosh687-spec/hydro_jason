import { AnnouncementBar } from './AnnouncementBar';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-bg-page" dir="rtl">
      <AnnouncementBar />
      <Header />
      <main>{children}</main>
    </div>
  );
}





