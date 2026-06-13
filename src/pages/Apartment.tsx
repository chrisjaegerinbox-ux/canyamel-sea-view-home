import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InteractiveFloorPlan from '@/components/InteractiveFloorPlan';
import {
  Home, Bed, Bath, Coffee, Wind, Waves,
  Monitor, Wifi, Tv2, Car, KeyRound, WashingMachine,
  UtensilsCrossed, Sofa, Check,
  PartyPopper, Volume2, ClipboardList, PawPrint
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import wohnzimmer2 from '@/assets/wohnzimmer-2.jpg';
import whz8 from '@/assets/whz8.jpg';
import kueche2 from '@/assets/kueche-2.jpg';
import hs from '@/assets/hs.jpg';
import gstschlafzimmer from '@/assets/gstschlafzimmer.jpg';
import hauptbad2 from '@/assets/hauptbad-2.jpg';
import gaestebad from '@/assets/gaestebad.jpg';
import pool2 from '@/assets/pool2.jpg';
import balcony from '@/assets/balcony-titelbild.jpg';

type Tab = 'raeume' | 'ausstattung' | 'grundriss';

const Apartment = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('raeume');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'raeume', label: t('apartment.tabs.rooms') },
    { id: 'ausstattung', label: t('apartment.tabs.equipment') },
    { id: 'grundriss', label: t('apartment.tabs.floorplan') },
  ];

  const rooms = [
    { img: wohnzimmer2, icon: Sofa, name: t('rooms.livingArea'), desc: t('rooms.livingAreaDesc'), features: [t('rooms.livingArea.feature1'), t('rooms.livingArea.feature2'), t('rooms.livingArea.feature3'), t('rooms.livingArea.feature4')] },
    { img: kueche2, icon: Coffee, name: t('rooms.kitchen'), desc: t('rooms.kitchenDesc'), features: [t('rooms.kitchen.feature1'), t('rooms.kitchen.feature2'), t('rooms.kitchen.feature3'), t('rooms.kitchen.feature4')] },
    { img: hs, icon: Bed, name: t('rooms.bedroom1'), desc: t('rooms.bedroom1Desc'), features: [t('rooms.bedroom1.feature1'), t('rooms.bedroom1.feature2'), t('rooms.bedroom1.feature3'), t('rooms.bedroom1.feature4'), t('rooms.bedroom1.feature5')] },
    { img: gstschlafzimmer, icon: Bed, name: t('rooms.bedroom2'), desc: t('rooms.bedroom2Desc'), features: [t('rooms.bedroom2.feature1'), t('rooms.bedroom2.feature2'), t('rooms.bedroom2.feature3'), t('rooms.bedroom2.feature4'), t('rooms.bedroom2.feature5')] },
    { img: hauptbad2, icon: Bath, name: t('rooms.bathroom1'), desc: t('rooms.bathroom1Desc'), features: [t('rooms.bathroom1.feature1'), t('rooms.bathroom1.feature2'), t('rooms.bathroom1.feature3')] },
    { img: gaestebad, icon: Bath, name: t('rooms.bathroom2'), desc: t('rooms.bathroom2Desc'), features: [t('rooms.bathroom2.feature1'), t('rooms.bathroom2.feature2')] },
    { img: balcony, icon: Wind, name: t('rooms.balcony'), desc: t('rooms.balconyDesc'), features: [t('rooms.balcony.feature1'), t('rooms.balcony.feature2'), t('rooms.balcony.feature3')] },
    { img: pool2, icon: Waves, name: t('rooms.pool'), desc: t('rooms.poolDesc'), features: [t('rooms.pool.feature1'), t('rooms.pool.feature2'), t('rooms.pool.feature3')] },
    { img: whz8, icon: Monitor, name: t('rooms.workspace'), desc: t('rooms.workspaceDesc'), features: [t('rooms.workspace.feature1'), t('rooms.workspace.feature2'), t('rooms.workspace.feature3')] },
  ];

  const equipmentCategories = [
    {
      icon: Monitor,
      title: t('equipment.office'),
      items: [t('apartment.equip.cat1.item1'), t('apartment.equip.cat1.item2'), t('apartment.equip.cat1.item3'), t('apartment.equip.cat1.item4'), t('apartment.equip.cat1.item5'), t('apartment.equip.cat1.item6')],
    },
    {
      icon: UtensilsCrossed,
      title: t('equipment.kitchen'),
      items: [t('apartment.equip.cat2.item1'), t('apartment.equip.cat2.item2'), t('apartment.equip.cat2.item3'), t('apartment.equip.cat2.item4'), t('apartment.equip.cat2.item5'), t('apartment.equip.cat2.item6')],
    },
    {
      icon: Wind,
      title: t('equipment.comfort'),
      items: [t('apartment.equip.cat3.item1'), t('apartment.equip.cat3.item2'), t('apartment.equip.cat3.item3'), t('apartment.equip.cat3.item4'), t('apartment.equip.cat3.item5'), t('apartment.equip.cat3.item6'), t('apartment.equip.cat3.item7')],
    },
    {
      icon: Waves,
      title: t('equipment.outdoor'),
      items: [t('apartment.equip.cat4.item1'), t('apartment.equip.cat4.item2'), t('apartment.equip.cat4.item3'), t('apartment.equip.cat4.item4'), t('apartment.equip.cat4.item5'), t('apartment.equip.cat4.item6')],
    },
  ];

  const houseRules = [
    { icon: PartyPopper,  title: t('apartment.rules.1.title'), desc: t('apartment.rules.1.desc') },
    { icon: Volume2,      title: t('apartment.rules.2.title'), desc: t('apartment.rules.2.desc') },
    { icon: ClipboardList, title: t('apartment.rules.3.title'), desc: t('apartment.rules.3.desc') },
    { icon: PawPrint,     title: t('apartment.rules.4.title'), desc: t('apartment.rules.4.desc') },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <div className="page-header border-b border-border/40">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-terracotta mb-3">Canyamel, Mallorca</p>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground">{t('apartment.header.title')}</h1>
          <p className="font-sans text-muted-foreground mt-3 max-w-lg mx-auto">{t('apartment.header.sub')}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-sans text-sm font-medium px-6 py-4 border-b-2 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-azure text-azure'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="section-padding">
        <div className="container mx-auto px-4">

          {/* Räume */}
          {activeTab === 'raeume' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {rooms.map((room) => {
                const Icon = room.icon;
                return (
                  <div key={room.name} className="card-luxury group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={room.img}
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2">
                        <Icon className="w-4 h-4 text-terracotta flex-shrink-0" />
                        <h3 className="font-display text-lg font-semibold text-foreground">{room.name}</h3>
                      </div>
                      <p className="font-sans text-sm text-muted-foreground mb-3 leading-relaxed">{room.desc}</p>
                      <ul className="space-y-1">
                        {room.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Check className="w-3 h-3 text-terracotta mt-0.5 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Ausstattung */}
          {activeTab === 'ausstattung' && (
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {equipmentCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div key={cat.title} className="card-luxury p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-full bg-azure/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-azure" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground">{cat.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-3.5 h-3.5 text-terracotta mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* House Rules */}
              <div className="border-t border-border pt-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">{t('apartment.rules.title')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {houseRules.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3.5 p-4 rounded-xl border border-border/60 bg-card shadow-warm-sm">
                      <div className="w-8 h-8 rounded-lg bg-azure/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-azure" />
                      </div>
                      <div>
                        <p className="font-sans text-sm font-semibold text-foreground mb-0.5">{title}</p>
                        <p className="font-sans text-xs text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Grundriss */}
          {activeTab === 'grundriss' && (
            <div className="max-w-4xl mx-auto">
              <p className="font-sans text-sm text-muted-foreground text-center mb-8">
                {t('apartment.floorplan.hint')}
              </p>
              <InteractiveFloorPlan />
            </div>
          )}

        </div>
      </main>

      {/* CTA */}
      <div className="section-tinted py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-3">{t('apartment.cta.title')}</h2>
          <p className="font-sans text-muted-foreground mb-6 text-sm">{t('apartment.cta.sub')}</p>
          <Link to="/kontakt" className="btn-primary inline-flex">{t('apartment.cta.btn')}</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Apartment;
