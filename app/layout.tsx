import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRUPO CONECTA TELECOMUNICACIONES S.A.C.",
  description:
    "Internet por fibra óptica. Planes de alta velocidad, soporte y verificación de cobertura.",
};

const WHATSAPP_NUMBER = "51XXXXXXXXX"; // TODO: cambia por tu número real con código de país
const WHATSAPP_TEXT = encodeURIComponent(
  "Hola, vengo desde la web. Quiero verificar cobertura y conocer planes 🙌"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {/* Skip link (accesibilidad) */}
        <a href="#contenido" style={skipLinkStyle}>
          Saltar al contenido
        </a>

        <header style={headerStyle}>
          <div style={containerStyle}>
            <div style={brandStyle}>
              <span style={{ fontWeight: 800 }}>GRUPO CONECTA TELECOMUNICACIONES S.A.C.</span>
              <span style={{ opacity: 0.7, marginLeft: 8 }}>Web v2</span>
            </div>

            <nav aria-label="Navegación principal" style={navStyle}>
              <a href="#planes" style={linkStyle}>Planes</a>
              <a href="#cobertura" style={linkStyle}>Cobertura</a>
              <a href="#soporte" style={linkStyle}>Soporte</a>
              <a href="#faq" style={linkStyle}>FAQ</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={ctaStyle}>
                WhatsApp
              </a>
            </nav>
          </div>
        </header>

        <main id="contenido" style={mainStyle}>
          {children}
        </main>

        <footer style={footerStyle}>
          <div style={containerStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <small style={{ opacity: 0.75 }}>
                © {new Date().getFullYear()} Fibra Conecta. Todos los derechos reservados.
              </small>
              <small style={{ opacity: 0.75 }}>
                Hecho con Next.js — versión “sin excusas” 😄    
              </small>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

/* ===== estilos mínimos (sin depender de Tailwind) ===== */
const containerStyle: React.CSSProperties = {
  width: "min(1100px, 92%)",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 16,
};

const headerStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  background: "white",
  borderBottom: "1px solid rgba(0,0,0,0.08)",
};

const brandStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const navStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  flexWrap: "wrap",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "inherit",
  opacity: 0.85,
};

const ctaStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "white",
  background: "black",
  padding: "10px 12px",
  borderRadius: 10,
  fontWeight: 700,
};

const mainStyle: React.CSSProperties = {
  minHeight: "70vh",
};

const footerStyle: React.CSSProperties = {
  borderTop: "1px solid rgba(0,0,0,0.08)",
  padding: "22px 0",
  marginTop: 30,
};

const skipLinkStyle: React.CSSProperties = {
  position: "absolute",
  left: -9999,
  top: 8,
};
