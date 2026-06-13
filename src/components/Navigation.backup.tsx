import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/apartment', label: t('nav.layout') },
    { to: '/preise', label: t('nav.prices') },
    { to: '/canyamel', label: t('nav.canyamel') },
    { to: '/kontakt', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  const isHero = location.pathname === '/';

  const navBg = scrolled || isOpen
    ? 'bg-white border-b border-border shadow-warm-sm'
    : isHero
      ? 'bg-transparent border-b border-white/10'
      : 'bg-white border-b border-border shadow-warm-sm';

  const textColor = scrolled || !isHero || isOpen ? 'text-foreground' : 'text-white';
  const logoColor = scrolled || !isHero || isOpen ? 'text-azure' : 'text-white';
  const activeColor = scrolled || !isHero ? 'text-terracotta' : 'text-sand';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className={`font-display text-xl lg:text-2xl font-semibold tracking-wide transition-colors duration-300 ${logoColor}`}>
            Canyamel Sea View
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link transition-colors duration-200 ${
                  isActive(item.to)
                    ? activeColor
                    : `${textColor} hover:opacity-70`
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className={`flex items-center gap-1.5 ml-2 ${textColor}`}>
              <Globe className="w-3.5 h-3.5 opacity-60" />
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
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div className={`flex items-center gap-1 ${textColor}`}>
              <Globe className="w-3.5 h-3.5 opacity-60" />
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
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded transition-colors ${textColor}`}
              aria-label="Menu öffnen"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-border">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-2 py-3 text-[15px] font-semibold tracking-[0.02em] rounded transition-colors ${
                    isActive(item.to)
                      ? 'text-terracotta'
                      : 'text-foreground hover:text-azure'
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
