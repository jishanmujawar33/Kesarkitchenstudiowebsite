import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

const OWNER_PHONE = "919549016045";
const DISPLAY_PHONE = "+91 95490 16045";
const WHATSAPP_MESSAGE = encodeURIComponent(
  `Hi Ketan sir,\n\nI'm interested in Kesar Kitchen Studio's products and would like to enquire about:\n\n☐ SS Modular Kitchen\n☐ Heavy S.S. Safety Door\n☐ Designer Wardrobe\n\nPlease share more details and arrange a free site visit.\n\nThank you!`
);

export function FloatingButtons() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id="floating-buttons"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "12px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Expanded options */}
      {expanded && (
        <>
          {/* Call Button */}
          <a
            href={`tel:${DISPLAY_PHONE.replace(/\s/g, "")}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#2C1A0E",
              color: "#F7F3ED",
              padding: "12px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 500,
              boxShadow: "0 8px 32px rgba(44, 26, 14, 0.3)",
              animation: "floatSlideUp 0.3s ease-out",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(44, 26, 14, 0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(44, 26, 14, 0.3)";
            }}
          >
            <Phone size={18} />
            <span>Call Ketan Desai</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${OWNER_PHONE}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#25D366",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 500,
              boxShadow: "0 8px 32px rgba(37, 211, 102, 0.35)",
              animation: "floatSlideUp 0.25s ease-out",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(37, 211, 102, 0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(37, 211, 102, 0.35)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </>
      )}

      {/* Main toggle FAB */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          background: expanded ? "#2C1A0E" : "#25D366",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: expanded
            ? "0 8px 32px rgba(44, 26, 14, 0.4)"
            : "0 8px 32px rgba(37, 211, 102, 0.4)",
          transition: "all 0.3s ease",
          transform: expanded ? "rotate(0deg)" : "rotate(0deg)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
      >
        {expanded ? (
          <X size={24} />
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </button>

      {/* Pulse animation on the FAB when not expanded */}
      {!expanded && (
        <style>{`
          @keyframes floatPulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
            50% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
          }
          @keyframes floatSlideUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          #floating-buttons > button:last-of-type {
            animation: floatPulse 2s infinite;
          }
        `}</style>
      )}
      {expanded && (
        <style>{`
          @keyframes floatSlideUp {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      )}
    </div>
  );
}
