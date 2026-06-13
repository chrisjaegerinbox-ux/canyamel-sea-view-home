import { useState } from 'react';
import floorplanNew from '@/assets/grundriss-neu.png';
import RoomImageModal from './RoomImageModal';
import { useLanguage } from '@/contexts/LanguageContext';

interface InteractiveFloorPlanProps {
  selectedRoom?: string | null;
  setSelectedRoom?: (room: string | null) => void;
}

const InteractiveFloorPlan = ({ selectedRoom: externalSelectedRoom, setSelectedRoom: externalSetSelectedRoom }: InteractiveFloorPlanProps = {}) => {
  const { t } = useLanguage();
  const [internalSelectedRoom, setInternalSelectedRoom] = useState<string | null>(null);
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

  // Use external state if provided, otherwise use internal state
  const selectedRoom = externalSelectedRoom !== undefined ? externalSelectedRoom : internalSelectedRoom;
  const setSelectedRoom = externalSetSelectedRoom || setInternalSelectedRoom;

  // Definiere die clickbaren Bereiche für jeden Raum (in Prozent des Bildes)
  const roomAreas = [
    {
      name: "Küche",
      x: 21, // x-Position in %
      y: 55, // y-Position in %
      width: 20, // Breite in %
      height: 25, // Höhe in %
    },
    {
      name: "Wohnbereich", 
      x: 42,
      y: 58,
      width: 32,
      height: 35,
    },
    {
      name: "Balkon mit Meerblick",
      x: 76,
      y: 60,
      width: 18,
      height: 30,
    },
    {
      name: "Schlafzimmer 1",
      x: 55,
      y: 23,
      width: 25,
      height: 30,
    },
    {
      name: "Schlafzimmer 2",
      x: 23.8,
      y: 7,
      width: 25,
      height: 25,
    },
    {
      name: "Badezimmer 1",
      x: 10,
      y: 28,
      width: 10,
      height: 25,
    },
    {
      name: "Badezimmer 2", 
      x: 25,
      y: 38, // Moved down from 35 to 38 (about 1cm down)
      width: 15,
      height: 15,
    },
    {
      name: "Waschraum",
      x: 9,
      y: 56,
      width: 14,
      height: 20,
    }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Hinweistext */}
      <div className="mb-6">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="bg-primary/20 rounded-full p-2">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-semibold text-foreground text-lg">
              {t('rooms.floorplanTitle')}
            </h3>
          </div>
          <p className="text-foreground font-medium">
            {t('rooms.floorplanInstruction')}
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          src={floorplanNew}
          alt={t('rooms.floorplanTitle')}
          className="w-full h-auto rounded-lg shadow-warm"
        />
        
        {/* Overlay für clickbare Bereiche */}
        <div className="absolute inset-0">
          {roomAreas.map((room, index) => (
            <button
              key={index}
              className={`absolute rounded-lg transition-all duration-300 ${
                hoveredRoom === room.name
                  ? 'bg-primary/30 border-2 border-primary shadow-lg scale-105'
                  : 'bg-transparent hover:bg-primary/20 border-2 border-transparent hover:border-primary/50'
              }`}
              style={{
                left: `${room.x}%`,
                top: `${room.y}%`,
                width: `${room.width}%`,
                height: `${room.height}%`,
              }}
              onClick={() => setSelectedRoom(room.name)}
              onMouseEnter={() => setHoveredRoom(room.name)}
              onMouseLeave={() => setHoveredRoom(null)}
              title={`${room.name} - ${t('rooms.viewImages')}`}
            >
              {hoveredRoom === room.name && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium shadow-lg">
                    {room.name}
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bestehende RoomImageModal */}
      <RoomImageModal 
        isOpen={selectedRoom !== null}
        onClose={() => setSelectedRoom(null)}
        roomName={selectedRoom || ''}
      />
    </div>
  );
};

export default InteractiveFloorPlan;