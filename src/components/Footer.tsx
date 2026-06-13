import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { to: '/apartment', label: t('footer.apartment') },
    { to: '/preise', label: t('footer.prices') },
    { to: '/canyamel', label: t('footer.aboutCanyamel') },
    { to: '/faq', label: 'FAQ' },
    { to: '/kontakt', label: t('footer.contact') },
  ];

  const legalLinks = [
    { to: '/legal#datenschutz', label: t('footer.privacy') },
    { to: '/legal#impressum', label: t('footer.imprint') },
    { to: '/legal#rechtliches', label: t('footer.legalBasis') },
  ];

  return (
    <footer style={{ background: 'linear-gradient(to bottom, #142d47, #0c1c2c)' }}>
      {/* Subtle separator from CTA section */}
      <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)' }} />

      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14 mb-10">

          {/* Brand */}
          <div className="md:pr-4">
            <h3 className="font-display text-[1.35rem] text-white font-semibold mb-3 tracking-wide">
              Canyamel Sea View
            </h3>
            <p className="font-sans text-[13px] leading-relaxed max-w-[260px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {t('footer.description')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: 'rgba(232,213,176,0.40)' }}
            >
              {t('footer.quickLinks')}
            </h4>
            <div className="space-y-2.5">
              {quickLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block font-sans text-[13px] transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.50)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(232,213,176,0.90)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.50)')}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: 'rgba(232,213,176,0.40)' }}
            >
              {t('footer.legal')}
            </h4>
            <div className="space-y-2.5">
              {legalLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block font-sans text-[13px] transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.50)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(232,213,176,0.90)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.50)')}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-5 flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="font-sans text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
            {t('footer.copyright')}
          </p>
          <p className="font-sans text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
            {t('footer.location')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
