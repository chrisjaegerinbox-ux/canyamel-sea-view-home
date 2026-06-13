import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/balcony-titelbild.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-dvh flex items-end justify-center overflow-hidden pb-28 md:pb-32 lg:items-center lg:pb-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient layer 1 — top vignette for nav legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-transparent" style={{ height: '55%' }} />

      {/* Gradient layer 2 — bottom readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d2035]/85 via-[#1B3A5C]/30 to-transparent" />

      {/* Subtle overall tint for warmth & depth */}
      <div className="absolute inset-0 bg-azure/10" />

      {/* Content */}
      <div className="relative z-10 w-full text-center text-white max-w-3xl mx-auto px-6 lg:pt-24">

        {/* Location badge */}
        <div className="opacity-0 animate-fade-up inline-flex items-center gap-2.5 mb-7 px-4 py-1.5 rounded-full border border-white/20 bg-white/6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
          <span className="font-sans text-[10px] font-medium text-white/75 tracking-[0.25em] uppercase">
            Canyamel, Mallorca
          </span>
        </div>

        {/* Headline */}
        <h1 className="opacity-0 animate-fade-up font-display font-semibold leading-[1.04] mb-3 text-[2.75rem] md:text-6xl lg:text-7xl">
          {t('hero.title')}
          <br />
          <em className="font-light italic" style={{ color: 'rgba(232,213,176,0.92)' }}>
            {t('hero.subtitle')}
          </em>
        </h1>

        {/* Thin rule */}
        <div className="opacity-0 animate-fade-up-delay flex items-center justify-center gap-4 my-6">
          <div className="h-px w-8 bg-white/20" />
          <div className="w-1 h-1 rounded-full bg-terracotta/70" />
          <div className="h-px w-8 bg-white/20" />
        </div>

        {/* Sub-line */}
        <p className="opacity-0 animate-fade-up-delay font-sans text-[15px] md:text-base text-white/70 max-w-md mx-auto mb-10 leading-relaxed tracking-wide">
          {t('hero.description')}
        </p>

        {/* CTAs */}
        <div className="opacity-0 animate-fade-up-delay-2 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-2.5 bg-terracotta hover:bg-[#b06a42] text-white font-sans font-medium text-sm px-7 py-3.5 rounded-sm transition-all duration-200 shadow-[0_4px_20px_rgba(193,122,82,0.4)] hover:shadow-[0_6px_28px_rgba(193,122,82,0.55)] hover:-translate-y-px tracking-[0.03em]"
          >
            <MessageSquare className="w-4 h-4 flex-shrink-0" />
            {t('hero.cta.availability')}
          </Link>

          <Link
            to="/apartment"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-sans font-medium text-sm px-7 py-3.5 rounded-sm transition-all duration-200 hover:bg-white/8 tracking-[0.03em] backdrop-blur-sm"
          >
            {t('hero.cta.features')}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 group opacity-0 animate-fade-up-delay-3"
        aria-label="Nach unten scrollen"
      >
        <span className="font-sans text-[9px] text-white/35 tracking-[0.25em] uppercase group-hover:text-white/60 transition-colors duration-300">
          {t('hero.scrollText')}
        </span>
        <div className="w-px h-8 bg-white/20 group-hover:bg-white/40 transition-colors duration-300 animate-scroll-line" />
      </button>
    </section>
  );
};

export default Hero;
