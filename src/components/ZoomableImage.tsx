import { X } from 'lucide-react';
import { useCallback, useEffect, useState, type ImgHTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

// Full-screen view of a single image; closes on backdrop click, the X button or Escape.
function Lightbox({ src, alt, onClose }: LightboxProps) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10 bg-black/85 transition-opacity duration-300 ${
        shown ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
      >
        <X size={22} />
      </button>

      <img
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
        className={`max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-transform duration-300 ${
          shown ? 'scale-100' : 'scale-90'
        }`}
      />
    </div>,
    document.body
  );
}

type ZoomableImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

// Drop-in <img> that opens the image full-screen when clicked.
export default function ZoomableImage({
  src,
  alt,
  className = '',
  ...rest
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <img
        {...rest}
        src={src}
        alt={alt}
        onClick={e => {
          e.stopPropagation();
          setOpen(true);
        }}
        className={`cursor-zoom-in ${className}`}
      />

      {open && (
        <Lightbox src={src} alt={alt} onClose={close} />
      )}
    </>
  );
}
