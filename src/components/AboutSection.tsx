import { Wifi, Waves, Monitor, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import balcony from '@/assets/balcony.jpg';
import whz8 from '@/assets/whz8.jpg';
import pool2 from '@/assets/pool2.jpg';

const storyItems = [
  {
    icon: Monitor,
    img: whz8,
    titleKey: 'story.work.title',
    descKey: 'story.work.desc',
  },
  {
    icon: Sun,
    img: balcony,
    titleKey: 'story.live.title',
    descKey: 'story.live.desc',
  },
  {
    icon: Waves,
    img: pool2,
    titleKey: 'story.explore.title',
    descKey: 'story.explore.desc',
  },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">Das Apartment</p>
          <h2 className="section-title">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {storyItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.titleKey} className="group">
                <div className="relative overflow-hidden rounded-lg mb-5 aspect-[4/3]">
                  <img
                    src={item.img}
                    alt={t(item.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-azure/10 group-hover:bg-azure/0 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-warm-sm">
                    <Icon className="w-4 h-4 text-azure" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {t(item.titleKey)}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  {t(item.descKey)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link to="/apartment" className="btn-outline text-sm">
            {t('about.moreLink')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
