import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Wifi, Monitor, Coffee, Wind, Tv, Car, Shield, Home, Users, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Ausstattung = () => {
  const { t } = useLanguage();
  
  const equipmentCategories = [
    {
      category: t('equipment.office'),
      icon: <Monitor className="w-8 h-8" />,
      color: "primary",
      items: [
        "WLAN 300 Mbit/s - perfekt für Video-Calls",
        "2 komplette Arbeitsplätze eingerichtet", 
        "1x höhenverstellbarer Schreibtisch",
        "2x externe Monitore (24\" Full HD)",
        "75\" Smart TV mit Streaming-Apps",
        "Smart-Home Ausstattung",
        "Smart-Türschloss für keyless entry"
      ]
    },
    {
      category: t('equipment.kitchen'),
      icon: <Coffee className="w-8 h-8" />,
      color: "accent",
      items: [
        "Küche vollständig ausgestattet",
        "Induktionsherd mit 4 Kochfeldern",
        "Backofen & Mikrowelle",
        "Spülmaschine (Vollgröße)",
        "Kühl-Gefrierkombination",
        "Kaffeemaschine & Wasserkocher", 
        "Komplettes Kochgeschirr & Besteck",
        "Toaster & alle Küchenhelfer"
      ]
    },
    {
      category: t('equipment.comfort'),
      icon: <Wind className="w-8 h-8" />,
      color: "primary",
      items: [
        "Klimaanlage in allen Räumen",
        "Deckenventilatoren für zusätzliche Kühlung",
        "Elektrische Markise am Balkon",
        "Verdunklungsvorhänge in Schlafzimmern",
        "Hochwertige Matratzen & Bettwäsche",
        "Handtücher & Badausstattung komplett"
      ]
    },
    {
      category: t('equipment.outdoor'), 
      icon: <Home className="w-8 h-8" />,
      color: "accent",
      items: [
        "Balkon mit direktem Meerblick",
        "Outdoor-Lounge-Möbel",
        "Gemeinschaftspool der Anlage",
        "Direkter privater Meerzugang",
        "Poolhandtücher vorhanden",
        "Sonnenschirm & Liegestühle"
      ]
    }
  ];

  const restrictions = [
    {
      icon: <X className="w-5 h-5 text-destructive" />,
      title: t('equipment.noPets'),
      description: t('equipment.noPetsDesc')
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      title: t('equipment.quietGuests'),
      description: t('equipment.quietGuestsDesc')
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      title: t('equipment.longTerm'), 
      description: t('equipment.longTermDesc')
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {t('equipment.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('equipment.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {t('equipment.completeTitle')}
              </h2>
              <p className="text-muted-foreground">
                {t('equipment.completeSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {equipmentCategories.map((category, index) => (
                <div 
                  key={index}
                  className="card-luxury hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${category.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'} rounded-lg p-3`}>
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-xl text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${category.color === 'primary' ? 'bg-primary' : 'bg-accent'} rounded-full mt-2 shrink-0`}></div>
                        <span className="text-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {t('equipment.highlightsTitle')}
              </h2>
              <p className="text-muted-foreground">
                {t('equipment.highlightsSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-luxury text-center bg-primary/5 border-primary/20">
                <Wifi className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {t('equipment.internet')}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('equipment.internetDesc')}
                </p>
              </div>

              <div className="card-luxury text-center bg-accent/5 border-accent/20">
                <Tv className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {t('equipment.tvHighlight')}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('equipment.tvHighlightDesc')}
                </p>
              </div>

              <div className="card-luxury text-center bg-primary/5 border-primary/20">
                <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {t('equipment.workspace')}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t('equipment.workspaceDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {t('equipment.rulesTitle')}
              </h2>
              <p className="text-muted-foreground">
                {t('equipment.rulesSubtitle')}
              </p>
            </div>

            <div className="card-luxury">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {restrictions.map((restriction, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      {restriction.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {restriction.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {restriction.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                {t('equipment.servicesTitle')}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t('equipment.servicesSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-luxury">
                <h4 className="font-semibold text-lg mb-3 text-foreground">
                  {t('equipment.optionalServices')}
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Wöchentlicher Reinigungsservice</p>
                  <p>• Handtuch- & Bettwäschewechsel</p>
                  <p>• Concierge-Service für lokale Empfehlungen</p>
                  <p>• Organisation von Transfers</p>
                </div>
              </div>

              <div className="card-luxury">
                <h4 className="font-semibold text-lg mb-3 text-foreground">
                  {t('equipment.includedServices')}
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Begrüßungspaket bei Ankunft</p>
                  <p>• 24/7 Notfall-Hotline</p>
                  <p>• Technischer Support vor Ort</p>
                  <p>• Detaillierter Willkommensleitfaden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {t('equipment.requestTitle')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t('equipment.requestSubtitle')}
            </p>
            <Link 
              to="/kontakt"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-warm-lg hover:shadow-warm-xl hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <Monitor className="w-5 h-5" />
              {t('equipment.requestButton')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ausstattung;