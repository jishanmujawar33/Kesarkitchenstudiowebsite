import { Shield, Droplets, Thermometer, HeartHandshake, Hammer, Bug } from "lucide-react";

const reasons = [
  {
    icon: Droplets,
    title: "Built for the Coast",
    desc: "Salt air and monsoon humidity are a kitchen's worst enemy. Every Kesar product uses rust-proof SS 304/316 steel — the same grade used in marine environments. It simply doesn't corrode.",
  },
  {
    icon: Shield,
    title: "No Particle Board. Ever.",
    desc: "While most modular kitchens use MDF or particle board hidden inside, every Kesar cabinet — inside and out — is solid stainless steel. No swelling, no delamination, no surprise failures.",
  },
  {
    icon: Bug,
    title: "Termite & Rodent Proof",
    desc: "Steel gives pests nothing to grip, tunnel through, or nest in. A Kesar kitchen is the last kitchen your home will ever need.",
  },
  {
    icon: Hammer,
    title: "Custom Fabricated In-House",
    desc: "Ketan Desai and our craftsmen fabricate every piece in our Vasai West workshop. No outsourced assembly. No flat-pack modules from distant factories.",
  },
  {
    icon: Thermometer,
    title: "Hygienic by Design",
    desc: "Non-porous SS surfaces don't harbour bacteria, mould, or food odour — a key reason professional chefs worldwide insist on stainless steel. The same standard in your home.",
  },
  {
    icon: HeartHandshake,
    title: "Direct from Craft Director",
    desc: "When you work with Kesar, you work directly with Ketan Desai. He visits the site, reviews every drawing, and oversees the installation personally.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-[#F7F3ED] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-28">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8860A" }} className="mb-4">
              Why Kesar
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1C1410", lineHeight: 1.2 }} className="mb-6">
              Why Stainless Steel. Why Kesar.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#7A6854", lineHeight: 1.85 }}>
              In Vasai West and across the Palghar coast, ordinary kitchen materials fail within 5–8 years. Our customers have kitchens that are still pristine at 15. The difference is material honesty — and Ketan Desai's refusal to cut corners.
            </p>
            <div className="mt-10 w-full h-px" style={{ background: "linear-gradient(to right, #C8860A, transparent)" }} />
            <div className="mt-8 p-5 border-l-2" style={{ borderColor: "#C8860A", background: "#FBF8F4" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400, fontSize: "1rem", color: "#1C1410", lineHeight: 1.6 }}>
                "I built my first SS kitchen for my own family. When neighbours started asking where it came from, I knew this was the right path."
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.75rem", color: "#C8860A", marginTop: "8px", letterSpacing: "0.06em" }}>
                — Ketan Desai, Founder
              </p>
            </div>
          </div>

          <div className="grid gap-8">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 group">
                <div
                  className="w-11 h-11 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:bg-[#C8860A]"
                  style={{ border: "1px solid rgba(44,26,14,0.15)" }}
                >
                  <Icon size={18} style={{ color: "#C8860A" }} className="group-hover:!text-white transition-colors duration-200" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.05rem", color: "#1C1410", marginBottom: "0.35rem" }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "#7A6854", lineHeight: 1.75 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
