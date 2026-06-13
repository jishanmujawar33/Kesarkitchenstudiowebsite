export function About() {
  return (
    <section id="about" className="bg-[#2C1A0E] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?w=800&h=900&fit=crop&auto=format"
            alt="Stainless steel kitchen craftsmanship by Ketan Desai"
            className="w-full h-[500px] object-cover"
          />
          <div
            className="absolute -bottom-6 -right-6 w-44 h-44 flex flex-col items-center justify-center text-center p-3"
            style={{ background: "#C8860A" }}
          >
            <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "#FBF8F4", lineHeight: 1.2 }}>Ketan Desai</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FBF8F4", marginTop: "4px" }}>Owner &amp; Craft Director</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8860A" }} className="mb-4">
            About the Studio
          </p>
          <h2
            className="mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#F7F3ED", lineHeight: 1.2 }}
          >
            Forged for the Coast. Built for Generations.
          </h2>
          <p
            className="mb-5"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#B0A090", lineHeight: 1.85 }}
          >
            Kesar Kitchen Studio was founded by <strong style={{ color: "#E8C97A", fontWeight: 500 }}>Ketan Desai</strong> in Vasai West with one clear conviction: coastal homes deserve better. Salt air, monsoon humidity, and coastal hard water destroy ordinary kitchen materials within years. Stainless steel doesn't.
          </p>
          <p
            className="mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#B0A090", lineHeight: 1.85 }}
          >
            Every piece that leaves our workshop — kitchen, wardrobe, or safety door — is fabricated from premium-grade stainless steel. No particle board. No MDF. No compromises on durability for families in the Palghar coastal belt.
          </p>
          <div className="flex flex-col gap-4">
            {[
              "100% rust-proof SS modular kitchens",
              "Heavy S.S. safety doors — impact & weather resistant",
              "Solid stainless steel furniture & wardrobes",
              "Designed for Vasai West's coastal climate",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div style={{ background: "#C8860A", flexShrink: 0, width: "6px", height: "6px", borderRadius: "50%" }} />
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#D9CFC4" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
