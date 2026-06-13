const steps = [
  {
    num: "01",
    title: "Free Site Visit by Ketan Desai",
    desc: "Ketan personally visits your home in Vasai West or nearby areas. He measures the space, notes structural constraints, and listens to your exact needs — no junior rep, no upselling.",
    duration: "Same week",
  },
  {
    num: "02",
    title: "Design & Steel Grade Selection",
    desc: "We present layout options and recommend the right SS grade for your kitchen's location and usage. Coastal homes near the sea often need SS 316; inland areas work beautifully with SS 304.",
    duration: "3–5 days",
  },
  {
    num: "03",
    title: "Custom Fabrication in Our Workshop",
    desc: "Every piece is hand-fabricated in our Vasai West workshop — not assembled from standard modules. Sheet metal is cut, bent, welded, and finished to your exact dimensions.",
    duration: "2–4 weeks",
  },
  {
    num: "04",
    title: "Installation by Our Own Team",
    desc: "Our in-house fitters install every kitchen, door, and wardrobe we make. No outsourced labour. We protect your floors, align every shutter, and test every mechanism before handover.",
    duration: "1–3 days",
  },
  {
    num: "05",
    title: "Handover & Long-Term Support",
    desc: "We walk you through every feature, leave care instructions, and remain available for adjustments or additions — for as long as you live in the home.",
    duration: "Ongoing",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#2C1A0E] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8860A" }} className="mb-3">
            How It Works
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#F7F3ED" }}>
            From Idea to Installation
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px" style={{ background: "rgba(200,134,10,0.2)" }} />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Card */}
                <div className={`md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="bg-[#F7F3ED]/5 border border-[#C8860A]/20 p-7">
                    <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2rem", color: "#C8860A", opacity: 0.4 }} className="mb-2">{step.num}</p>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.15rem", color: "#F7F3ED" }} className="mb-3">{step.title}</h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "#B0A090", lineHeight: 1.75 }}>{step.desc}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8860A" }} className="mt-4">
                      Timeline: {step.duration}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 rounded-full border-2 items-center justify-center" style={{ borderColor: "#C8860A", background: "#2C1A0E" }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: "#C8860A" }} />
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
