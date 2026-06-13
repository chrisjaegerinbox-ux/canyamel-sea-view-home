import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InteractiveFloorPlan from '@/components/InteractiveFloorPlan';
import RoomImageModal from '@/components/RoomImageModal';
import { Home, Bed, Bath, Coffee, Wind, Waves } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import balconyVideo from '@/assets/balcony-video.mp4';

const Raumaufteilung = () => {
  const { t } = useLanguage();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  
  const rooms = [
    {
      name: t('rooms.livingArea'),
      description: t('rooms.livingAreaDesc'),
      icon: <Home className="w-6 h-6" />,
      features: [
        t('rooms.livingArea.feature1'),
        t('rooms.livingArea.feature2'),
        t('rooms.livingArea.feature3'),
        t('rooms.livingArea.feature4'),
        t('rooms.livingArea.feature5'),
        t('rooms.livingArea.feature6')
      ]
    },
    {
      name: t('rooms.kitchen'),
      description: t('rooms.kitchenDesc'),
      icon: <Coffee className="w-6 h-6" />,
      features: [
        t('rooms.kitchen.feature1'),
        t('rooms.kitchen.feature2'),
        t('rooms.kitchen.feature3'),
        t('rooms.kitchen.feature4'),
        t('rooms.kitchen.feature5'),
        t('rooms.kitchen.feature6'),
        t('rooms.kitchen.feature7'),
        t('rooms.kitchen.feature8'),
        t('rooms.kitchen.feature9'),
        t('rooms.kitchen.feature10'),
        t('rooms.kitchen.feature11')
      ]
    },
    {
      name: t('rooms.bedroom1'), 
      description: t('rooms.bedroom1Desc'),
      icon: <Bed className="w-6 h-6" />,
      features: [
        t('rooms.bedroom1.feature1'),
        t('rooms.bedroom1.feature2'),
        t('rooms.bedroom1.feature3'),
        t('rooms.bedroom1.feature4'),
        t('rooms.bedroom1.feature5'),
        t('rooms.bedroom1.feature6')
      ]
    },
    {
      name: t('rooms.bedroom2'),
      description: t('rooms.bedroom2Desc'),
      icon: <Bed className="w-6 h-6" />,
      features: [
        t('rooms.bedroom2.feature1'),
        t('rooms.bedroom2.feature2'),
        t('rooms.bedroom2.feature3'),
        t('rooms.bedroom2.feature4'),
        t('rooms.bedroom2.feature5'),
        t('rooms.bedroom2.feature6')
      ]
    },
    {
      name: t('rooms.bathroom1'),
      description: t('rooms.bathroom1Desc'),
      icon: <Bath className="w-6 h-6" />,
      features: [
        t('rooms.bathroom1.feature1'),
        t('rooms.bathroom1.feature2'),
        t('rooms.bathroom1.feature3')
      ]
    },
    {
      name: t('rooms.bathroom2'), 
      description: t('rooms.bathroom2Desc'),
      icon: <Bath className="w-6 h-6" />,
      features: [
        t('rooms.bathroom2.feature1'),
        t('rooms.bathroom2.feature2')
      ]
    },
    {
      name: t('rooms.balconyArea'),
      description: t('rooms.balconyAreaDesc'),
      icon: <Waves className="w-6 h-6" />,
      features: [
        t('rooms.balconyArea.feature1'),
        t('rooms.balconyArea.feature2'),
        t('rooms.balconyArea.feature3'),
        t('rooms.balconyArea.feature4'),
        t('rooms.balconyArea.feature5')
      ]
    },
    {
      name: t('rooms.laundryRoom'),
      description: t('rooms.laundryRoomDesc'),
      icon: <Home className="w-6 h-6" />,
      features: [
        t('rooms.laundryRoom.feature1'),
        t('rooms.laundryRoom.feature2'),
        t('rooms.laundryRoom.feature3'),
        t('rooms.laundryRoom.feature4'),
        t('rooms.laundryRoom.feature5')
      ]
    },
    {
      name: t('rooms.poolArea'),
      description: t('rooms.poolAreaDesc'),
      icon: <Waves className="w-6 h-6" />,
      features: [
        t('rooms.poolArea.feature1'),
        t('rooms.poolArea.feature2'),
        t('rooms.poolArea.feature3'),
        t('rooms.poolArea.feature4'),
        t('rooms.poolArea.feature5'),
        t('rooms.poolArea.feature6')
      ]
    },
    {
      name: t('rooms.miscItems'),
      description: t('rooms.miscItemsDesc'),
      icon: <Home className="w-6 h-6" />,
      features: [
        t('rooms.miscItems.feature1'),
        t('rooms.miscItems.feature2'),
        t('rooms.miscItems.feature3'),
        t('rooms.miscItems.feature4')
      ]
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
              {t('rooms.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('rooms.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Floor Plan */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="card-luxury">
              <InteractiveFloorPlan 
                selectedRoom={selectedRoom}
                setSelectedRoom={setSelectedRoom}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {t('rooms.detailsTitle')}
              </h2>
              <p className="text-muted-foreground">
                {t('rooms.detailsSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rooms.map((room, index) => (
                <div 
                  key={index}
                  className="card-luxury hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedRoom(room.name)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 text-primary rounded-lg p-3">
                      {room.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
                        {room.name}
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                          {t('rooms.viewImages')}
                        </span>
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {room.description}
                  </p>
                  
                  <div className="space-y-2">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <RoomImageModal 
        isOpen={selectedRoom !== null}
        onClose={() => setSelectedRoom(null)}
        roomName={selectedRoom || ''}
      />

      <Footer />
    </div>
  );
};

export default Raumaufteilung;