import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState, useEffect, useCallback } from 'react';
import { Loader2, Maximize2, Minimize2, X } from 'lucide-react';

// Import room images
import livingRoom from '@/assets/living-room.jpg';
import kitchen from '@/assets/kitchen.jpg';
import kitchen1 from '@/assets/kitchen1.jpg';
import kitchen2 from '@/assets/kitchen2.jpg';
import kitchen3 from '@/assets/kitchen3.jpg';
import bedroom1 from '@/assets/bedroom1.jpg';  
import balcony from '@/assets/balcony.jpg';
import wohnbereichTisch from '@/assets/wohnbereich-tisch.jpg';
import wohnbereichArbeitsplatz from '@/assets/wohnbereich-arbeitsplatz.jpg';
import wohnbereichKlimaanlage from '@/assets/wohnbereich-klimaanlage.jpg';
import wohnbereichSchreibtisch from '@/assets/wohnbereich-schreibtisch.jpg';
import wohnbereichGesamt from '@/assets/wohnbereich-gesamt.jpg';
import balconyVideo from '@/assets/balcony-video.mp4';
import balconySportmatte from '@/assets/balcony-sportmatte.jpg';
import balconyTitelbild from '@/assets/balcony-titelbild.jpg';
import kueche3 from '@/assets/kueche-3.jpg';
import kuecheSpuelensicht from '@/assets/kueche-spuelensicht.jpg';
import kueche22 from '@/assets/kueche2-2.jpg';
import kueche32 from '@/assets/kueche3-2.jpg';
import kuecheGs from '@/assets/kueche-gs.jpg';
import gstschlafzimmer2 from '@/assets/gstschlafzimmer-2.jpg';
import gstsF2 from '@/assets/gsts-f-2.jpg';
import hs3 from '@/assets/hs3.jpg';
import hsF from '@/assets/hs-f.jpg';
import hs2Alt from '@/assets/hs-2.jpg';
import hs2 from '@/assets/hs2.jpg';
import iron from '@/assets/iron.jpg';
import gaestebad2 from '@/assets/gaestebad-2.jpg';
import dusche2 from '@/assets/dusche2.jpg';
import hauptbad22 from '@/assets/hauptbad-2-2.jpg';
import hauptbad1 from '@/assets/hauptbad-1.jpg';
import kuehlschrank from '@/assets/kuehlschrank.jpg';
import waschraumGeraete from '@/assets/waschraum-geraete.jpg';
import waschraumAusstattung from '@/assets/waschraum-ausstattung.jpg';
import waschmaschine from '@/assets/waschmaschine.jpg';
import wohnbereichFlur from '@/assets/wohnbereich-flur.jpg';
import wohnbereichEingang from '@/assets/wohnbereich-eingang.jpg';
import whz6 from '@/assets/whz6.jpg';
import whz82 from '@/assets/whz8-2.jpg';
import wohnzimmer22 from '@/assets/wohnzimmer2-2.jpg';
import tischGedeckt from '@/assets/tisch-gedeckt.jpg';
import pool22 from '@/assets/pool2-2.jpg';
import pool2 from '@/assets/pool-2.jpg';
import duscheNeu2 from '@/assets/dusche-neu-2.jpg';

interface RoomImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
}

const roomImages: Record<string, string[]> = {
  "Wohnbereich": [wohnbereichGesamt, wohnbereichTisch, wohnbereichArbeitsplatz, wohnbereichSchreibtisch, wohnbereichKlimaanlage, wohnbereichFlur, wohnbereichEingang, whz6, whz82, wohnzimmer22, tischGedeckt],
  "Küche": [kueche3, kuecheSpuelensicht, kueche22, kueche32, kuecheGs],
  "Schlafzimmer 1": [gstschlafzimmer2, gstsF2, hs3],
  "Schlafzimmer 2": [hsF, hs2Alt, hs2, iron],
  "Badezimmer 1": [hauptbad22, hauptbad1], // No bathroom images available yet
  "Badezimmer 2": [gaestebad2, dusche2], // No bathroom images available yet
  "Balkon mit Meerblick": [balconySportmatte, balconyTitelbild],
  "Waschraum": [kuehlschrank, waschraumGeraete, waschraumAusstattung, waschmaschine], // No laundry room images available
  "Poolbereich": [pool22, pool2, duscheNeu2]
};

const RoomImageModal = ({ isOpen, onClose, roomName }: RoomImageModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [currentImageLoaded, setCurrentImageLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const images = roomImages[roomName] || [];
  const isBalcony = roomName === "Balkon mit Meerblick";
  const totalItems = isBalcony ? images.length + 1 : images.length; // +1 for video

  // Reset states when modal opens or room changes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setLoadedImages(new Set());
      setCurrentImageLoaded(false);
      setIsFullscreen(false);
    }
  }, [isOpen, roomName]);

  // Toggle fullscreen mode
  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  // Handle close modal (also exit fullscreen)
  const handleClose = useCallback(() => {
    setIsFullscreen(false);
    onClose();
  }, [onClose]);

  // Navigate to image function
  const navigateToImage = useCallback((newIndex: number) => {
    setCurrentImageLoaded(false);
    setCurrentImageIndex(newIndex);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          navigateToImage(currentImageIndex > 0 ? currentImageIndex - 1 : totalItems - 1);
          break;
        case 'ArrowRight':
          event.preventDefault();
          navigateToImage(currentImageIndex < totalItems - 1 ? currentImageIndex + 1 : 0);
          break;
        case 'Escape':
          event.preventDefault();
          if (isFullscreen) {
            setIsFullscreen(false);
          } else {
            handleClose();
          }
          break;
        case 'f':
        case 'F':
          event.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex, totalItems, navigateToImage, isFullscreen, handleClose, toggleFullscreen]);

  // Preload current, next, and previous images
  const preloadImage = useCallback((index: number) => {
    if (isBalcony && index === 0) return; // Skip video
    
    const imageIndex = isBalcony ? index - 1 : index;
    if (imageIndex >= 0 && imageIndex < images.length && !loadedImages.has(index)) {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
        if (index === currentImageIndex) {
          setCurrentImageLoaded(true);
        }
      };
      img.src = images[imageIndex];
    }
  }, [images, loadedImages, isBalcony, currentImageIndex]);

  // Preload images around current index
  useEffect(() => {
    if (totalItems > 0) {
      // Load current image
      preloadImage(currentImageIndex);
      // Load next and previous images
      const nextIndex = (currentImageIndex + 1) % totalItems;
      const prevIndex = currentImageIndex === 0 ? totalItems - 1 : currentImageIndex - 1;
      preloadImage(nextIndex);
      preloadImage(prevIndex);
    }
  }, [currentImageIndex, totalItems, preloadImage]);

  // Handle image load for current image
  useEffect(() => {
    if (isBalcony && currentImageIndex === 0) {
      setCurrentImageLoaded(true); // Video doesn't need loading
    } else {
      setCurrentImageLoaded(loadedImages.has(currentImageIndex));
    }
  }, [currentImageIndex, loadedImages, isBalcony]);

  if (totalItems === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
        <DialogContent className="max-w-md" aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>
              {roomName}
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              Für diesen Bereich sind aktuell keine Bilder verfügbar.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // Fullscreen overlay
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
        {/* Close and exit fullscreen buttons */}
        <button 
          onClick={() => setIsFullscreen(false)}
          className="absolute top-4 right-16 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-all duration-200 hover:scale-110 backdrop-blur-sm z-10"
          aria-label="Vollbild verlassen"
        >
          <Minimize2 className="w-5 h-5" />
        </button>
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-all duration-200 hover:scale-110 backdrop-blur-sm z-10"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Loading indicator */}
        {!currentImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-10">
            <Loader2 className="h-12 w-12 animate-spin text-white" />
          </div>
        )}
        
        {/* Image/Video content */}
        {isBalcony && currentImageIndex === 0 ? (
          <video 
            src={balconyVideo}
            autoPlay
            loop
            muted
            className={`max-w-[95vw] max-h-[95vh] object-contain transition-opacity duration-300 ${
              currentImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            controls
          />
        ) : (
          <img 
            src={images[isBalcony ? currentImageIndex - 1 : currentImageIndex]} 
            alt={`${roomName} - Bild ${isBalcony ? currentImageIndex : currentImageIndex + 1}`}
            className={`max-w-[95vw] max-h-[95vh] object-contain transition-opacity duration-300 ${
              currentImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setCurrentImageLoaded(true)}
          />
        )}
        
        {totalItems > 1 && (
          <>
            <button 
              onClick={() => navigateToImage(currentImageIndex > 0 ? currentImageIndex - 1 : totalItems - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-4 hover:bg-black/90 transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20 shadow-lg z-20"
              aria-label="Vorheriges Bild"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => navigateToImage(currentImageIndex < totalItems - 1 ? currentImageIndex + 1 : 0)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-4 hover:bg-black/90 transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20 shadow-lg z-20"
              aria-label="Nächstes Bild"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-lg font-medium backdrop-blur-sm border border-white/20 shadow-lg">
              {currentImageIndex + 1} / {totalItems}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
      <DialogContent className="max-w-4xl max-h-[80vh]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>
            {roomName}
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative bg-muted rounded-lg overflow-hidden">
          {/* Fullscreen button */}
          <button 
            onClick={toggleFullscreen}
            className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-all duration-200 hover:scale-110 backdrop-blur-sm z-10"
            aria-label="Vollbild"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Loading indicator */}
          {!currentImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          
          {/* Show video for balcony when index is 0 */}
          {isBalcony && currentImageIndex === 0 ? (
            <video 
              src={balconyVideo}
              autoPlay
              loop
              muted
              className={`w-full h-auto max-h-[60vh] object-contain rounded-lg transition-opacity duration-300 ${
                currentImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              controls
            />
          ) : (
            <img 
              src={images[isBalcony ? currentImageIndex - 1 : currentImageIndex]} 
              alt={`${roomName} - Bild ${isBalcony ? currentImageIndex : currentImageIndex + 1}`}
              className={`w-full h-auto max-h-[60vh] object-contain rounded-lg transition-opacity duration-300 ${
                currentImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setCurrentImageLoaded(true)}
            />
          )}
          
          {totalItems > 1 && (
            <>
              <button 
                onClick={() => navigateToImage(currentImageIndex > 0 ? currentImageIndex - 1 : totalItems - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Vorheriges Bild"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => navigateToImage(currentImageIndex < totalItems - 1 ? currentImageIndex + 1 : 0)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Nächstes Bild"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                {currentImageIndex + 1} / {totalItems}
              </div>
            </>
          )}
        </div>
        
        {/* Hint for more images - remove as it's now in ImageGallery */}
      </DialogContent>
    </Dialog>
  );
};

export default RoomImageModal;