import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Collections", "Process", "Gallery", "Why Us", "Instagram", "Contact", "Location"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#F7F3ED]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.45rem", color: "#2C1A0E", letterSpacing: "0.02em" }}
          >
            Kesar
          </span>
          <span
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "0.65rem", color: "#C8860A", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "-1px" }}
          >
            Kitchen Studio · Vasai West
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "0.875rem", letterSpacing: "0.04em", color: "#2C1A0E" }}
              className="hover:text-[#C8860A] transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-none transition-all duration-200 hover:bg-[#C8860A]"
          style={{ background: "#2C1A0E", color: "#F7F3ED", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          Get a Quote
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          style={{ color: "#2C1A0E" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F7F3ED] border-t border-[#2C1A0E]/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "1rem", color: "#2C1A0E" }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center py-3 px-6"
            style={{ background: "#2C1A0E", color: "#F7F3ED", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
