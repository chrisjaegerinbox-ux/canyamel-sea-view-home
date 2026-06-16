import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const isOpenRef = useRef(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Keep ref in sync so scroll handler doesn't need the isOpen dep
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const atTop = y < 60;

        setScrolled(y > 50);

        if (atTop) {
          setVisible(true);
        } else if (!isOpenRef.current) {
          if (y > lastScrollY.current + 8) {
            // scrolled down → hide
            setVisible(false);
          } else if (y < lastScrollY.current - 4) {
            // scrolled up → show
            setVisible(true);
          }
        }

        lastScrollY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show nav on page change, close mobile menu
  useEffect(() => {
    setIsOpen(false);
    setVisible(true);
  }, [location.pathname]);

  const handleMenuToggle = () => {
    setIsOpen(prev => {
      if (!prev) setVisible(true); // opening → always show nav
      return !prev;
    });
  };

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/apartment', label: t('nav.layout') },
    { to: '/preise', label: t('nav.prices') },
    { to: '/canyamel', label: t('nav.canyamel') },
    { to: '/kontakt', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHero = location.pathname === '/';
  const transparent = isHero && !scrolled && !isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        transparent
          ? 'bg-transparent border-b border-transparent'
          : isOpen
            ? 'bg-white border-b border-border shadow-[0_1px_12px_rgba(27,58,92,0.06)]'
            : 'bg-white/98 border-b border-border shadow-[0_1px_12px_rgba(27,58,92,0.06)] backdrop-blur-sm'
      }`}
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition:
          'transform 0.28s cubic-bezier(0.4,0,0.2,1), background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link
            to="/"
            className={`font-display text-xl lg:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
              transparent ? 'text-white' : 'text-azure'
            }`}
          >
            Canyamel Sea View
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative font-sans text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 ${
                  isActive(item.to)
                    ? transparent ? 'text-sand' : 'text-terracotta'
                    : transparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive(item.to) && (
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                      transparent ? 'bg-sand' : 'bg-terracotta'
                    }`}
                  />
                )}
              </Link>
            ))}

            {/* Language switcher */}
            <div
              className={`flex items-center gap-1.5 ml-1 transition-colors duration-300 ${
                transparent ? 'text-white/70' : 'text-foreground/60'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-[12px] font-medium cursor-pointer outline-none"
              >
                <option value="de">DE</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div
              className={`flex items-center gap-1 ${
                transparent ? 'text-white/70' : 'text-foreground/60'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-xs font-medium cursor-pointer outline-none"
              >
                <option value="de">DE</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>
            <button
              onClick={handleMenuToggle}
              className={`p-2 rounded transition-colors ${
                transparent
                  ? 'text-white/80 hover:text-white'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
              aria-label="Menu öffnen"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden py-2 border-t border-border/40 bg-white">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-3.5 text-[15px] font-medium tracking-[0.02em] rounded-lg transition-colors ${
                    isActive(item.to)
                      ? 'text-terracotta'
                      : 'text-foreground hover:text-azure hover:bg-azure/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
