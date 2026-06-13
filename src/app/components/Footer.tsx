import { Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1C1410] py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-1">
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", color: "#F7F3ED", letterSpacing: "0.02em" }}>Kesar</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.62rem", letterSpacing: "0.18em", color: "#C8860A", textTransform: "uppercase" }}>Kitchen Studio</p>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.75rem", color: "#7A6854", marginBottom: "4px" }}>केसर किचन स्टूडियो</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "#5A4A3A", lineHeight: 1.7, marginTop: "10px" }}>
              Premium SS kitchens, safety doors &amp; wardrobes.<br />Vasai West, Maharashtra.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "#C8860A", marginTop: "8px" }}>Ketan Desai · Craft Director</p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center border transition-all duration-150 hover:border-[#C8860A] hover:text-[#C8860A]"
                  style={{ borderColor: "rgba(247,243,237,0.15)", color: "#7A6854" }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Products",
              links: ["SS Modular Kitchens", "Heavy S.S. Safety Doors", "Designer Wardrobes", "SS Solid Furniture", "Commercial Kitchens"],
            },
            {
              title: "Company",
              links: ["About Ketan Desai", "Our Process", "Photo Gallery", "Client Stories", "Contact Us"],
            },
            {
              title: "Service Areas",
              links: ["Vasai West", "Vasai East", "Virar", "Nalasopara", "Bhayandar", "Mira Road", "Palghar"],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#F7F3ED" }} className="mb-4">
                {title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.875rem", color: "#7A6854" }} className="hover:text-[#C8860A] transition-colors duration-150">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between gap-4" style={{ borderColor: "rgba(247,243,237,0.08)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.8rem", color: "#5A4A3A" }}>
            © 2026 Kesar Kitchen Studio · Vasai West, Palghar. All rights reserved.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.8rem", color: "#5A4A3A" }}>
            Crafted by Ketan Desai &amp; team.
          </p>
        </div>
      </div>
    </footer>
  );
}
