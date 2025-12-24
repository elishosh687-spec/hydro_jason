import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from '@remix-run/react';
import { activeContent } from '~/configs/content-active';
import { landingMedia } from '~/configs/media-active';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = activeContent.header.navigation;
  const { global } = activeContent;
  const { header: headerMedia } = landingMedia;

  return (
    <header className="bg-white shadow-sm" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Cart Icon - Left Side (in RTL) */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/cart" className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <ShoppingCart className="h-6 w-6 text-text-primary" strokeWidth={2} />
              <span className="absolute -top-1 -right-1 bg-primary-main text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {global.cartCount}
              </span>
            </Link>
          </div>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <Link to="/" className="flex items-center">
              <img 
                src={headerMedia.logo.src} 
                alt={headerMedia.logo.alt}
                className="h-12 md:h-16 w-auto max-h-[60px] md:max-h-[80px]"
              />
            </Link>
          </div>

          {/* Right Side - Menu Button (All Screens) */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-text-primary" strokeWidth={2} />
              ) : (
                <Menu className="h-6 w-6 text-text-primary" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Navigation Menu (All Screens) */}
        {mobileMenuOpen && (
          <div className="border-t border-border-divider py-4">
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-primary hover:text-primary-main font-medium text-base py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}





