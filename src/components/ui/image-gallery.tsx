import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
}

interface ExpandingGalleryProps {
  images: GalleryImage[];
  height?: string;
  onImageClick?: (index: number) => void;
  className?: string;
}

export function ExpandingGallery({
  images,
  height = "h-[420px]",
  onImageClick,
  className,
}: ExpandingGalleryProps) {
  return (
    <div className={cn("flex items-stretch gap-1.5 w-full", height, className)}>
      {images.map((img, idx) => (
        <div
          key={idx}
          className={cn(
            "relative group flex-shrink-0 flex-grow",
            "w-16 rounded-lg overflow-hidden",
            "transition-all duration-500 ease-in-out",
            "hover:flex-grow-[4]",
            onImageClick && "cursor-pointer"
          )}
          onClick={() => onImageClick?.(idx)}
          style={{ minWidth: "3rem" }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
          {/* Hover overlay with label */}
          <div className="absolute inset-0 bg-gradient-to-t from-azure/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {img.label && (
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-sans text-xs font-medium text-white/90 tracking-wide">{img.label}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
