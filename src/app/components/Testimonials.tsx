import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Suresh & Meena Patil",
    city: "Vasai West",
    kitchen: "SS Modular Kitchen · 2 BHK",
    quote: "Our previous wooden kitchen was ruined within 6 years by the sea breeze. Ketan bhai recommended SS 304 and it's been 4 years now — not a single spot of rust, the shutters still close perfectly. Kesar is the only name I give to anyone in Vasai.",
    avatar: "SP",
  },
  {
    name: "Radhika Joshi",
    city: "Nalasopara",
    kitchen: "SS Kitchen + Safety Door",
    quote: "We got both the kitchen and the main SS safety door from Kesar. Ketan sir visited twice to make sure everything was perfect before installation. The door is incredibly solid — our neighbours were so impressed they called him too.",
    avatar: "RJ",
  },
  {
    name: "Vinod & Sunita Rane",
    city: "Virar West",
    kitchen: "Designer Wardrobe · 3 BHK",
    quote: "We'd had termite problems with our old wooden wardrobes every few years. Ketan suggested full SS wardrobes and we haven't had a single issue in three years. The glass shutter finish looks stunning in our bedroom. Worth every paisa.",
    avatar: "VR",
  },
  {
    name: "Deepak Sawant",
    city: "Bhayandar West",
    kitchen: "SS Kitchen · Sea-facing flat",
    quote: "I live on the 8th floor, directly facing the sea. Ketan specifically recommended SS 316 marine grade for my kitchen given the location. It's been two monsoons and the kitchen looks brand new. This man knows his craft.",
    avatar: "DS",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="bg-[#F7F3ED] py-24 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8860A" }} className="mb-3">
            Client Stories
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1C1410" }}>
            Kitchens, and the People Who Love Them
          </h2>
        </div>

        <div className="bg-[#FBF8F4] border border-[#2C1A0E]/10 p-10 lg:p-14 relative">
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C8860A" color="#C8860A" />)}
          </div>

          {/* Quote */}
          <blockquote
            className="mb-8"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)", color: "#1C1410", lineHeight: 1.7 }}
          >
            "{t.quote}"
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#C8860A" }}
            >
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.75rem", color: "#FBF8F4" }}>{t.avatar}</span>
            </div>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "#1C1410" }}>{t.name}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.78rem", color: "#7A6854" }}>{t.city} · {t.kitchen}</p>
            </div>
          </div>

          {/* Nav */}
          <div className="absolute bottom-10 right-10 flex gap-2">
            <button
              onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 flex items-center justify-center border transition-all duration-150 hover:bg-[#2C1A0E] hover:border-[#2C1A0E] group"
              style={{ borderColor: "#2C1A0E" }}
            >
              <ChevronLeft size={15} color="#2C1A0E" className="group-hover:!text-white" style={{ color: "#2C1A0E" }} />
            </button>
            <button
              onClick={() => setIdx((idx + 1) % testimonials.length)}
              className="w-9 h-9 flex items-center justify-center border transition-all duration-150 hover:bg-[#2C1A0E] hover:border-[#2C1A0E] group"
              style={{ borderColor: "#2C1A0E" }}
            >
              <ChevronRight size={15} color="#2C1A0E" className="group-hover:!text-white" style={{ color: "#2C1A0E" }} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="transition-all duration-200"
              style={{ width: i === idx ? "24px" : "8px", height: "8px", borderRadius: "4px", background: i === idx ? "#C8860A" : "#C4B49A" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
