import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#2C1A0E]">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?w=1800&h=1200&fit=crop&auto=format"
        alt="Luxury modular kitchen by Kesar Kitchen Studio"
        className="absolute inset-0 w-full h-full object-cover opacity-55"
      />

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1410]/80 via-[#1C1410]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <p
            className="mb-5"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.75rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8860A" }}
          >
            Vasai West, Palghar · केसर किचन स्टूडियो
          </p>
          <h1
            className="mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#F7F3ED", lineHeight: 1.1 }}
          >
            Built to Last.
            <br />
            <em style={{ fontStyle: "italic", color: "#E8C97A" }}>Built in Steel.</em>
          </h1>
          <p
            className="mb-10 max-w-lg"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1.05rem", color: "#D9CFC4", lineHeight: 1.75 }}
          >
            100% rust-proof stainless steel modular kitchens, solid SS furniture, heavy-duty safety doors, and designer wardrobes — engineered for the coastal climate of Vasai West.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#collections"
              className="inline-flex items-center gap-2 px-7 py-3.5 transition-all duration-200 hover:bg-[#E8A012]"
              style={{ background: "#C8860A", color: "#FBF8F4", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Explore Collections
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: "rgba(247,243,237,0.4)", color: "#F7F3ED", fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="absolute bottom-12 left-6 lg:left-10 right-6 lg:right-10 flex gap-10 flex-wrap">
          {[
            { n: "100%", label: "Rust-proof stainless steel" },
            { n: "500+", label: "Kitchens delivered" },
            { n: "Vasai West", label: "Coastal expertise" },
            { n: "SS Doors", label: "Heavy-duty safety doors" },
          ].map(({ n, label }) => (
            <div key={label}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.6rem", color: "#E8C97A" }}>{n}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.08em", color: "#B0A090", textTransform: "uppercase" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
      >
        <ArrowDown size={16} color="#F7F3ED" />
      </a>
    </section>
  );
}
