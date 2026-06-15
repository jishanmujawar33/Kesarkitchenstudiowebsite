import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/our-work/kitchen4.jpg",  alt: "Dark modular kitchen with black glass backsplash",           category: "Kitchen"  },
  { src: "/our-work/kitchen1.jpg",  alt: "Dark ribbed-panel wall cabinets with glass shutters",         category: "Kitchen"  },
  { src: "/our-work/kitchen2.jpg",  alt: "White gloss parallel kitchen with overhead glass units",      category: "Kitchen"  },
  { src: "/our-work/kitchen3.jpg",  alt: "Cream gloss cabinets with illuminated glass display units",   category: "Kitchen"  },
  { src: "/our-work/door1.jpg",     alt: "Heavy SS safety door with wood-grain finish and grille",      category: "Doors"    },
  { src: "/our-work/tvunit1.jpg",   alt: "Designer TV unit with mint-green console and display shelf",  category: "Furniture"},
  { src: "/our-work/kitchen5.jpg",  alt: "Baby-blue L-shape modular kitchen with white countertop",     category: "Kitchen"  },
  { src: "/our-work/kitchen6.jpg",  alt: "White overhead cabinets with granite countertop kitchen",     category: "Kitchen"  },
  { src: "/our-work/wardrobe1.jpg", alt: "Teak-finish wardrobe with white gloss shutters and mirror",   category: "Wardrobe" },
  { src: "/our-work/kitchen7.jpg",  alt: "Sleek dark gloss kitchen with under-cabinet LED lighting",    category: "Kitchen"  },
  { src: "/our-work/kitchen8.jpg",  alt: "Blue-grey modular kitchen with black glass upper cabinets",   category: "Kitchen"  },
  { src: "/our-work/kitchen9.jpg",  alt: "Two-tone grey gloss wall cabinet unit",                       category: "Kitchen"  },
  { src: "/our-work/kitchen10.jpg", alt: "Teal L-shape base cabinets with marble flooring",             category: "Kitchen"  },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);

  const prev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + photos.length) % photos.length);
  }, [lightbox]);

  const next = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % photos.length);
  }, [lightbox]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      <section id="gallery" className="bg-[#EDE5D8] py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8860A" }}
              className="mb-3"
            >
              Our Work
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1C1410" }}>
              A Taste of Kesar
            </h2>
          </div>

          {/* Masonry grid — natural aspect ratio, no cropping */}
          <div style={{ columns: "3 260px", columnGap: "12px" }}>
            {photos.map(({ src, alt, category }, i) => (
              <div
                key={i}
                className="group mb-3 cursor-pointer"
                style={{ breakInside: "avoid", display: "inline-block", width: "100%" }}
                onClick={() => openLightbox(i)}
                role="button"
                aria-label={`View: ${alt}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={alt}
                    style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.45s ease" }}
                    className="group-hover:scale-[1.03]"
                  />
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(28,20,16,0.65) 0%, transparent 60%)" }}
                  >
                    <span
                      className="m-3 px-2 py-0.5"
                      style={{ background: "rgba(200,134,10,0.92)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FBF8F4" }}
                    >
                      {category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border transition-all duration-200 hover:bg-[#2C1A0E] hover:text-[#F7F3ED]"
              style={{ borderColor: "#2C1A0E", color: "#2C1A0E", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(10,6,4,0.93)", backdropFilter: "blur(6px)" }}
          onClick={closeLightbox}
        >
          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 z-10 flex items-center justify-center w-11 h-11 rounded-full transition-all hover:scale-110"
            style={{ background: "rgba(200,134,10,0.85)", color: "#fff" }}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div
            className="relative flex items-center justify-center px-16 md:px-24 max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightbox}
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              style={{
                maxHeight: "88vh",
                maxWidth: "90vw",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
              }}
            />
            {/* Counter + caption */}
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-3 text-center"
              style={{ background: "rgba(10,6,4,0.6)" }}
            >
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#E8C97A", letterSpacing: "0.08em" }}>
                {lightbox + 1} / {photos.length} &nbsp;·&nbsp; {photos[lightbox].alt}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 z-10 flex items-center justify-center w-11 h-11 rounded-full transition-all hover:scale-110"
            style={{ background: "rgba(200,134,10,0.85)", color: "#fff" }}
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </>
  );
}
