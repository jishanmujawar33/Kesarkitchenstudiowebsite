import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const OWNER_PHONE = "919549016045";

const PRODUCT_LABELS: Record<string, string> = {
  kitchen:   "Modular Kitchen",
  door:      "Heavy S.S. Safety Door",
  wardrobe:  "Designer Wardrobe",
  furniture: "SS Solid Furniture",
  multiple:  "Multiple Products",
};

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", area: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const product = PRODUCT_LABELS[form.type] || form.type;
    const extra   = form.message.trim() ? `\n\n📝 Additional Info:\n${form.message.trim()}` : "";

    const text =
      `🙏 Hello Ketan sir,\n\n` +
      `I would like to request a *Free Site Visit & Estimate* from Kesar Kitchen Studio.\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📞 *Phone / WhatsApp:* ${form.phone}\n` +
      `📍 *Area / Society:* ${form.area}\n` +
      `🪵 *Interested In:* ${product}` +
      extra +
      `\n\nPlease let me know your available time for the site visit. Thank you!`;

    const url = `https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-[#EDE5D8] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* ── Left: Info ── */}
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C8860A" }} className="mb-4">
            Get in Touch
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#1C1410", lineHeight: 1.2 }} className="mb-6">
            Start Your Project with Ketan
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.975rem", color: "#7A6854", lineHeight: 1.85 }} className="mb-10">
            Tell us about your space and we'll arrange a free site visit. Ketan Desai personally oversees every enquiry — you'll speak to the craft director, not a sales agent.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { icon: MapPin, label: "Studio & Workshop", value: "Shop No.7, Pushkar Apt Near Babola Chowki, Opp. D-Mart, Vasai West Palghar 401202" },
              { icon: Phone, label: "Call Ketan Desai",  value: "+91 95490 16045", href: "tel:+919549016045" },
              { icon: Mail,  label: "Email Us",           value: "khetaramdesai6@gmail.com", href: "mailto:khetaramdesai6@gmail.com" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#C8860A" }}>
                  <Icon size={16} color="#FBF8F4" />
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A6854" }}>{label}</p>
                  {href ? (
                    <a href={href} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.9rem", color: "#1C1410", marginTop: "2px", display: "block", textDecoration: "none" }}>{value}</a>
                  ) : (
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.9rem", color: "#1C1410", marginTop: "2px" }}>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent("Hi Ketan sir, I'm interested in Kesar Kitchen Studio's products. Please share more details.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 transition-all duration-200 hover:bg-[#1a8a3c]"
            style={{ background: "#25D366", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.82rem", letterSpacing: "0.06em" }}
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>

          <div className="mt-10">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#7A6854" }} className="mb-2">
              Service Areas
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#1C1410" }}>
              Dadar · Andheri · Malad · Kandivali · Borivali · Bhayandar · Mira Road · Vasai West · Vasai East · Virar · Nalasopara · Palghar
            </p>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="bg-[#FBF8F4] p-8 lg:p-10 border border-[#2C1A0E]/10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.35rem", color: "#1C1410" }}>
                Free Site Visit &amp; Estimate
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "#7A6854", marginTop: "4px" }}>
                Fill in your details — clicking Send will open WhatsApp with your enquiry pre-filled.
              </p>
            </div>

            {[
              { id: "name",  label: "Full Name",            placeholder: "Priya Shah",              type: "text" },
              { id: "phone", label: "Phone / WhatsApp",     placeholder: "+91 98765 43210",          type: "tel"  },
              { id: "area",  label: "Area / Society Name",  placeholder: "Vasai West, Acme Colony",  type: "text" },
            ].map(({ id, label, placeholder, type }) => (
              <div key={id}>
                <label style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A6854", display: "block", marginBottom: "6px" }}>
                  {label}
                </label>
                <input
                  type={type}
                  required
                  placeholder={placeholder}
                  value={form[id as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                  className="w-full px-4 py-3 border outline-none focus:border-[#C8860A] transition-colors duration-200"
                  style={{ borderColor: "rgba(44,26,14,0.15)", background: "#F7F3ED", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#1C1410" }}
                />
              </div>
            ))}

            <div>
              <label style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A6854", display: "block", marginBottom: "6px" }}>
                What Are You Looking For?
              </label>
              <select
                required
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-4 py-3 border outline-none focus:border-[#C8860A] transition-colors duration-200 appearance-none"
                style={{ borderColor: "rgba(44,26,14,0.15)", background: "#F7F3ED", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: form.type ? "#1C1410" : "#7A6854" }}
              >
                <option value="" disabled>Select a product</option>
                <option value="kitchen">Modular Kitchen</option>
                <option value="door">Heavy S.S. Safety Door</option>
                <option value="wardrobe">Designer Wardrobe</option>
                <option value="furniture">SS Solid Furniture</option>
                <option value="multiple">Multiple Products</option>
              </select>
            </div>

            <div>
              <label style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A6854", display: "block", marginBottom: "6px" }}>
                Tell Us More (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Kitchen size, flat type (1/2/3 BHK), budget range, or any specific requirements..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border outline-none focus:border-[#C8860A] transition-colors duration-200 resize-none"
                style={{ borderColor: "rgba(44,26,14,0.15)", background: "#F7F3ED", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#1C1410" }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 transition-all duration-200 hover:bg-[#25D366] mt-2 inline-flex items-center justify-center gap-2"
              style={{ background: "#2C1A0E", color: "#F7F3ED", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              <MessageCircle size={16} />
              Send via WhatsApp
            </button>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.72rem", color: "#7A6854", textAlign: "center" }}>
              Clicking Send opens WhatsApp with your details pre-filled — just tap Send there too.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
