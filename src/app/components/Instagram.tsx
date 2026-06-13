import { Instagram as InstagramIcon, Heart, MessageCircle } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/kesar_kitchen_studio1?igsh=MWhvdWx6c2puZ2c4NA==";

const posts = [
  {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop&auto=format",
    alt: "Premium SS Modular Kitchen Design",
    likes: "142",
    comments: "18",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop&auto=format",
    alt: "Contemporary Kitchen Layout with Gold Accents",
    likes: "98",
    comments: "12",
  },
  {
    src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop&auto=format",
    alt: "Custom Designer Wardrobe Setup",
    likes: "215",
    comments: "34",
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=600&fit=crop&auto=format",
    alt: "Modern Safety Door and Entrance Design",
    likes: "167",
    comments: "22",
  },
];

export function Instagram() {
  return (
    <section id="instagram" className="bg-[#FBF8F4] py-24 px-6 lg:px-10 border-t border-[#2C1A0E]/10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif', sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8860A" }} className="mb-3">
              Social Gallery
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1C1410", lineHeight: 1.2 }}>
              Follow Our Craft
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "#7A6854", marginTop: "8px" }}>
              See our latest installations, behind-the-scenes workshop updates, and client designs.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 transition-all duration-200"
              style={{
                background: "#2C1A0E",
                color: "#F7F3ED",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C8860A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2C1A0E";
              }}
            >
              <InstagramIcon size={16} />
              Follow @kesar_kitchen_studio1
            </a>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <a
              key={index}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden aspect-square bg-[#EDE5D8]"
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-[#2C1A0E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-[#F7F3ED]">
                <div className="flex items-center gap-2">
                  <Heart size={18} fill="#F7F3ED" />
                  <span className="font-semibold text-sm">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={18} fill="#F7F3ED" />
                  <span className="font-semibold text-sm">{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
