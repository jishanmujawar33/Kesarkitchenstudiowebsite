import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const STORE_ADDRESS = "Shop No.7, Pushkar Apt Near Babola Chowki, Opp. D-Mart, Vasai West Palghar 401202";
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123!2d72.8293!3d19.3907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aee90f61ee0d%3A0x4b3e3d1d0e6f1c2a!2sD-Mart%2C%20Vasai%20West!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/Shop+No.7+Pushkar+Apt+Near+Babola+Chowki+Opp+D-Mart+Vasai+West+Palghar+401202";

export function LocationMap() {
  return (
    <section id="location" className="bg-[#2C1A0E] py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C8860A",
            }}
            className="mb-3"
          >
            Find Us
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              color: "#F7F3ED",
              lineHeight: 1.2,
            }}
          >
            Visit Our Studio
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "#B0A090",
              lineHeight: 1.75,
              marginTop: "12px",
              maxWidth: "520px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Walk in to see our stainless steel craftsmanship up close. Ketan Desai is available at the studio for consultations.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-0 border border-[#C8860A]/20 overflow-hidden">
          {/* Map */}
          <div className="md:col-span-3 relative" style={{ minHeight: "400px" }}>
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%", filter: "saturate(0.85) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kesar Kitchen Studio Location - Vasai West"
            />
            {/* Overlay touch target for mobile redirect */}
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden absolute inset-0 z-10"
              aria-label="Open in Google Maps"
            />
          </div>

          {/* Info Panel */}
          <div className="md:col-span-2 bg-[#F7F3ED]/5 p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Address */}
              <div className="flex gap-4 items-start mb-8">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "#C8860A" }}
                >
                  <MapPin size={16} color="#FBF8F4" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#C8860A",
                    }}
                  >
                    Studio Address
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.9rem",
                      color: "#F7F3ED",
                      marginTop: "4px",
                      lineHeight: 1.6,
                    }}
                  >
                    {STORE_ADDRESS}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start mb-8">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "#C8860A" }}
                >
                  <Phone size={16} color="#FBF8F4" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#C8860A",
                    }}
                  >
                    Call Us
                  </p>
                  <a
                    href="tel:+919549016045"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.9rem",
                      color: "#F7F3ED",
                      marginTop: "4px",
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    +91 95490 16045
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start mb-8">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "#C8860A" }}
                >
                  <Clock size={16} color="#FBF8F4" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#C8860A",
                    }}
                  >
                    Working Hours
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.9rem",
                      color: "#F7F3ED",
                      marginTop: "4px",
                      lineHeight: 1.6,
                    }}
                  >
                    Mon – Sat: 10:00 AM – 8:00 PM
                    <br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions CTA */}
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full py-3.5 transition-all duration-200 hover:bg-[#E8A012]"
              style={{
                background: "#C8860A",
                color: "#FBF8F4",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "0.82rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
