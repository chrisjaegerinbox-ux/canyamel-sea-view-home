import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExpandingGallery, type GalleryImage } from '@/components/ui/image-gallery';

import balconyTitelbild from '@/assets/balcony-titelbild.jpg';
import wohnbereichGesamt from '@/assets/wohnbereich-gesamt.jpg';
import kueche2 from '@/assets/kueche-2.jpg';
import hs from '@/assets/hs.jpg';
import pool2 from '@/assets/pool2.jpg';
import hauptbad2 from '@/assets/hauptbad-2.jpg';

const ImageGallery = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const images: GalleryImage[] = [
    { src: balconyTitelbild,   alt: t('gallery.img.balcony'),  label: t('gallery.img.balcony') },
    { src: wohnbereichGesamt,  alt: t('gallery.img.living'),   label: t('gallery.img.living') },
    { src: kueche2,            alt: t('gallery.img.kitchen'),  label: t('gallery.img.kitchen') },
    { src: hs,                 alt: t('gallery.img.bedroom'),  label: t('gallery.img.bedroom') },
    { src: pool2,              alt: t('gallery.img.pool'),     label: t('gallery.img.pool') },
    { src: hauptbad2,          alt: t('gallery.img.bathroom'), label: t('gallery.img.bathroom') },
  ];

  const prev = () => selected !== null && setSelected(selected === 0 ? images.length - 1 : selected - 1);
  const next = () => selected !== null && setSelected((selected + 1) % images.length);

  return (
    <>
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">

          <div className="text-center mb-7">
            <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">{t('gallery.eyebrow')}</p>
            <h2 className="section-title">{t('gallery.title')}</h2>
          </div>

          {/* Expanding gallery — desktop */}
          <div className="hidden md:block max-w-5xl mx-auto">
            <ExpandingGallery
              images={images}
              height="h-[420px]"
              onImageClick={setSelected}
            />
          </div>

          {/* Fallback grid — mobile */}
          <div className="grid grid-cols-2 gap-2 md:hidden">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-azure/0 group-hover:bg-azure/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <p className="font-sans text-xs text-muted-foreground text-center mt-5">
            {t('gallery.description')}
          </p>

          <div className="text-center mt-6">
            <Link to="/apartment" className="btn-outline inline-flex items-center gap-2 text-sm">
              {t('gallery.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={({ target, currentTarget }) => target === currentTarget && setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            aria-label={t('gallery.close')}
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            aria-label={t('gallery.prev')}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
            aria-label={t('gallery.next')}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[90vh] object-contain rounded"
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-sans">
            {selected + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
