import { useState } from "react";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: "kitchen",
    label: "SS Modular Kitchens",
    tab: "Kitchens",
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&h=600&fit=crop&auto=format",
    desc: "Fully custom modular kitchens fabricated in 100% rust-proof stainless steel. Every cabinet, shutter, and frame is engineered to survive the coastal salt air of Vasai West — and look beautiful doing it.",
    features: [
      "Food-grade SS 304 & 316 grade steel throughout",
      "L-Shape, U-Shape, Parallel, Island & Straight layouts",
      "Anti-fingerprint satin and mirror finishes",
      "Soft-close German channel drawers & lift-ups",
      "Fully waterproof — no swelling, no warping, ever",
    ],
  },
  {
    id: "doors",
    label: "Heavy S.S. Safety Doors",
    tab: "Safety Doors",
    tag: "Signature Product",
    image: "https://images.unsplash.com/photo-1663811396777-05505d999151?w=800&h=600&fit=crop&auto=format",
    desc: "Our heavy-duty stainless steel safety doors combine serious impact resistance with refined aesthetics. Designed for homes in coastal and flood-prone zones where security and weather-proofing cannot be compromised.",
    features: [
      "16-gauge minimum SS sheet — significantly heavier than market standard",
      "Multi-point locking mechanism with anti-pry reinforcements",
      "Full rust-proof treatment — no paint that peels or fades",
      "Custom grille patterns — traditional, modern, and mesh",
      "Available in single & double-shutter configurations",
    ],
  },
  {
    id: "wardrobes",
    label: "Designer Wardrobes",
    tab: "Wardrobes",
    tag: "New Collection",
    image: "https://images.unsplash.com/photo-1684928365167-e91916573122?w=800&h=600&fit=crop&auto=format",
    desc: "From walk-in wardrobe systems to compact bedroom units — all fabricated in stainless steel. No termites, no moisture damage, no odour retention. Storage that lasts as long as your home.",
    features: [
      "SS frame with premium finish shutters — glass, acrylic, or metal",
      "Internal SS shelving, hanging bars, and drawer units",
      "Termite-proof and moisture-proof by design",
      "Sliding and hinged door configurations",
      "Custom sizing for any room or alcove",
    ],
  },
];

export function Collections() {
  const [active, setActive] = useState("kitchen");
  const col = collections.find((c) => c.id === active)!;

  return (
    <section id="collections" className="bg-[#F7F3ED] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8860A" }} className="mb-3">
              What We Build
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1C1410", lineHeight: 1.2 }}>
              Our Product Lines
            </h2>
          </div>
          {/* Tabs */}
          <div className="flex gap-1 border border-[#2C1A0E]/12 p-1 flex-wrap">
            {collections.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className="px-4 py-2 transition-all duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: active === c.id ? 500 : 300,
                  fontSize: "0.8rem",
                  letterSpacing: "0.04em",
                  background: active === c.id ? "#2C1A0E" : "transparent",
                  color: active === c.id ? "#F7F3ED" : "#7A6854",
                }}
              >
                {c.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <div className="grid md:grid-cols-2 gap-0 border border-[#2C1A0E]/10">
          <div className="relative overflow-hidden">
            <img
              key={col.id}
              src={col.image}
              alt={col.label}
              className="w-full h-[420px] md:h-full object-cover transition-all duration-500"
            />
            <span
              className="absolute top-5 left-5 px-3 py-1"
              style={{ background: "#C8860A", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#FBF8F4" }}
            >
              {col.tag}
            </span>
          </div>
          <div className="bg-[#FBF8F4] p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <h3
                className="mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.8rem", color: "#1C1410", lineHeight: 1.2 }}
              >
                {col.label}
              </h3>
              <p
                className="mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "#7A6854", lineHeight: 1.85 }}
              >
                {col.desc}
              </p>
              <ul className="flex flex-col gap-3 mb-10">
                {col.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-2" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C8860A", flexShrink: 0 }} />
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#1C1410" }}>{f}</p>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 w-fit hover:gap-4 transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C8860A" }}
            >
              Request a Free Site Visit <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
