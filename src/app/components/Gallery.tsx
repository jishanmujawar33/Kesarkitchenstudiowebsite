const photos = [
  { src: "https://images.unsplash.com/photo-1725257928373-dc6d2ac7b145?w=700&h=500&fit=crop&auto=format", alt: "Open kitchen with dining area", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?w=500&h=500&fit=crop&auto=format", alt: "Marble and stainless steel kitchen", span: "" },
  { src: "https://images.unsplash.com/photo-1663811396777-05505d999151?w=500&h=500&fit=crop&auto=format", alt: "Modern kitchen with sink", span: "" },
  { src: "https://images.unsplash.com/photo-1722605090433-41d1183a792d?w=500&h=500&fit=crop&auto=format", alt: "White cabinetry with marble countertops", span: "" },
  { src: "https://images.unsplash.com/photo-1682662045815-9016c6225dd3?w=700&h=400&fit=crop&auto=format", alt: "Black and white kitchen with fan", span: "col-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-[#EDE5D8] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8860A" }} className="mb-3">
            Our Work
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1C1410" }}>
            A Taste of Kesar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {photos.map(({ src, alt, span }, i) => (
            <div
              key={i}
              className={`overflow-hidden group ${i === 0 ? "lg:col-span-2" : ""} ${i === 4 ? "lg:col-span-2" : ""}`}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

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
  );
}
