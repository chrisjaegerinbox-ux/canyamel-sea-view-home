import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useLanguage } from '@/contexts/LanguageContext';

// Mallorca bounding box: SW [2.25, 39.25] → NE [3.55, 39.98]
const MALLORCA_BOUNDS: maplibregl.LngLatBoundsLike = [[2.25, 39.25], [3.55, 39.98]];
const CANYAMEL: maplibregl.LngLatLike = [3.443, 39.658];

const MallorcaLocationMap = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const popupTextRef = useRef(t('canyamel.map.popup'));

  // Keep popup text in sync with language changes
  popupTextRef.current = t('canyamel.map.popup');

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: 'https://tiles.openfreemap.org/styles/positron',
      center: [2.9, 39.62],
      zoom: 8,
      scrollZoom: false,
      attributionControl: false,
    });

    mapRef.current = map;

    map.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      'bottom-right'
    );

    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      'top-right'
    );

    map.on('load', () => {
      // Fit to full Mallorca bounds; extra right padding for zoom controls
      map.fitBounds(MALLORCA_BOUNDS, {
        padding: { top: 48, bottom: 48, left: 48, right: 72 },
        duration: 0,
      });
    });

    // Custom marker
    const el = document.createElement('div');
    Object.assign(el.style, {
      width: '22px',
      height: '22px',
      background: '#C17A52',
      border: '3px solid #ffffff',
      borderRadius: '50%',
      boxShadow: '0 0 0 3px rgba(193,122,82,0.35), 0 4px 14px rgba(27,58,92,0.5)',
      cursor: 'default',
    });

    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 14,
      className: 'canyamel-popup',
    });

    const marker = new maplibregl.Marker({ element: el })
      .setLngLat(CANYAMEL)
      .addTo(map);

    el.addEventListener('mouseenter', () => {
      popup.setHTML(
        `<span style="font-family:'DM Sans',sans-serif;font-size:12px;color:#1B3A5C;font-weight:500;white-space:nowrap;">${popupTextRef.current}</span>`
      ).addTo(map).setLngLat(CANYAMEL);
    });
    el.addEventListener('mouseleave', () => popup.remove());

    return () => {
      popup.remove();
      marker.remove();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div>
      <p className="font-sans text-sm text-muted-foreground mb-4 leading-relaxed">
        {t('canyamel.map.desc')}
      </p>
      <div className="rounded-xl border border-border shadow-warm-md overflow-hidden">
        <div
          ref={containerRef}
          style={{ width: '100%', height: 'clamp(340px, 45vw, 580px)' }}
        />
      </div>
      <style>{`
        .canyamel-popup .maplibregl-popup-content {
          background: #ffffff;
          border: 1px solid #E5DDD0;
          border-radius: 6px;
          padding: 6px 10px;
          box-shadow: 0 4px 12px rgba(27,58,92,0.10);
        }
        .canyamel-popup .maplibregl-popup-tip {
          border-top-color: #E5DDD0;
        }
        .maplibregl-ctrl-zoom-in,
        .maplibregl-ctrl-zoom-out {
          border-color: #E5DDD0 !important;
        }
      `}</style>
    </div>
  );
};

export default MallorcaLocationMap;
