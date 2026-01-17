const plans = [
  { speed: "500 Mbps", price: "S/ 49.90", note: "Ideal para uso diario" },
  { speed: "600 Mbps", price: "S/ 64.90", note: "Streaming y trabajo remoto" },
  { speed: "750 Mbps", price: "S/ 79.90", note: "Familia + varios equipos" },
  { speed: "1000 Mbps", price: "S/ 99.90", note: "Gaming + 4K + todo a la vez" },
];

const faqs = [
  {
    q: "¿Cómo verifico si hay cobertura en mi zona?",
    a: "En la sección Cobertura podrás buscar tu zona. Si no aparece, podrás dejar tus datos para avisarte cuando llegue.",
  },
  {
    q: "¿Cuánto demora la instalación?",
    a: "Depende de la zona y disponibilidad, normalmente se coordina en el menor tiempo posible. (Luego lo afinamos con un SLA real).",
  },
  {
    q: "¿Qué incluye el servicio?",
    a: "Internet por fibra óptica y soporte. Si hay router, instalación o promo, lo ponemos claro en Planes.",
  },
  {
    q: "¿Cómo contacto soporte?",
    a: "Puedes contactarnos vía WhatsApp (botón arriba) o por teléfono en el horario indicado en Soporte.",
  },
  {
    q: "¿Puedo cambiar de plan luego?",
    a: "Sí, puedes cambiar de plan en cualquier momento contactando a soporte.",
  }
];

export default function Page() {
  return (
    <div style={pageWrap}>
      {/* HERO */}
      <section style={hero}>
        <div>
          <h1 style={h1}>Internet por Fibra Óptica</h1>
          <p style={subtitle}>
            Fibra Conecta — velocidad real, estabilidad y soporte. Esta es la Web v2 (la que sí vamos a pulir).
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <a href="#planes" style={primaryBtn}>Ver planes</a>
            <a href="#cobertura" style={secondaryBtn}>Verificar cobertura</a>
          </div>
        </div>

        <div style={heroCard}>
          <strong>Promesa de valor</strong>
          <ul style={ul}>
            <li>✅ Alta velocidad y estabilidad</li>
            <li>✅ Ideal para streaming / trabajo / gaming</li>
            <li>✅ Atención y soporte</li>
          </ul>
          <small style={{ opacity: 0.7 }}>
            Nuestra misión es darte un servicio de calidad.
          </small>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" style={section}>
        <h2 style={h2}>Planes</h2>
        <p style={p}>
          Planes de alta velocidad. Elige el que mejor se adapte a ti.
        </p>

        <div style={grid}>
          {plans.map((plan) => (
            <article key={plan.speed} style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <h3 style={h3}>{plan.speed}</h3>
                <span style={badge}>{plan.price}</span>
              </div>
              <p style={p}>{plan.note}</p>
              <a href="#cobertura" style={cardBtn}>Ver cobertura</a>
            </article>
          ))}
        </div>
      </section>

      {/* COBERTURA */}
      <section id="cobertura" style={section}>
        <h2 style={h2}>Cobertura</h2>
        <p style={p}>
          ¡Tenemos cobertura por todo Pachacutec!
        </p>

        <div style={card}>
          <label htmlFor="zona" style={{ fontWeight: 700 }}>
            Busca tu zona (ej.: Ventanilla, Puente Piedra, AAHH...)
          </label>
          <input
            id="zona"
            name="zona"
            placeholder="Escribe tu zona…"
            style={input}
          />
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
            <button style={primaryBtn} type="button" disabled>
              Verificar
            </button>
            <a href="#soporte" style={secondaryBtn}>
              Necesito ayuda
            </a>
          </div>
          <small style={{ opacity: 0.7 }}>
            Si no encuentras tu zona, déjanos tus datos para avisarte cuando lleguemos.
          </small>
        </div>
      </section>

      {/* SOPORTE */}
      <section id="soporte" style={section}>
        <h2 style={h2}>Soporte</h2>
        <p style={p}>
          Accesos rápidos.
        </p>

        <div style={grid2}>
          <div style={card}>
            <h3 style={h3}>Guías rápidas</h3>
            <ul style={ul}>
              <li>Reiniciar router correctamente</li>
              <li>Mejorar WiFi (2.4 vs 5 GHz)</li>
              <li>Verificar cableado / ONT</li>
            </ul>
          </div>

          <div style={card}>
            <h3 style={h3}>Canales de Atención al cliente</h3>
            <ul style={ul}>
              <li>WhatsApp: botón arriba</li>
              <li>Teléfono: (+51XXXXXXXXX)</li>
              <li>Horario: (07:00AM - 12:00AM)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={section}>
        <h2 style={h2}>Preguntas frecuentes</h2>
        <div style={{ display: "grid", gap: 10 }}>
          {faqs.map((item) => (
            <details key={item.q} style={faqItem}>
              <summary style={faqSummary}>{item.q}</summary>
              <p style={{ ...p, marginTop: 10 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ===== estilos mínimos ===== */
const pageWrap: React.CSSProperties = {
  width: "min(1100px, 92%)",
  margin: "0 auto",
  padding: "26px 0 40px",
};

const hero: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.3fr 0.7fr",
  gap: 18,
  alignItems: "stretch",
};

const heroCard: React.CSSProperties = {
  border: "1px solid rgba(0,0,0,0.10)",
  borderRadius: 14,
  padding: 16,
};

const section: React.CSSProperties = {
  marginTop: 34,
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 14,
  marginTop: 14,
};

const grid2: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 14,
  marginTop: 14,
};

const card: React.CSSProperties = {
  border: "1px solid rgba(0,0,0,0.10)",
  borderRadius: 14,
  padding: 16,
};

const h1: React.CSSProperties = {
  fontSize: "clamp(28px, 4vw, 44px)",
  lineHeight: 1.05,
  margin: 0,
};

const subtitle: React.CSSProperties = {
  fontSize: 16,
  opacity: 0.85,
  marginTop: 10,
  marginBottom: 0,
};

const h2: React.CSSProperties = {
  fontSize: 24,
  margin: "0 0 8px 0",
};

const h3: React.CSSProperties = {
  fontSize: 18,
  margin: 0,
};

const p: React.CSSProperties = {
  margin: "10px 0 0 0",
  opacity: 0.85,
};

const ul: React.CSSProperties = {
  margin: "10px 0 0 18px",
  padding: 0,
  opacity: 0.85,
};

const primaryBtn: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 12,
  background: "black",
  color: "white",
  textDecoration: "none",
  fontWeight: 800,
  border: "1px solid black",
};

const secondaryBtn: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 12,
  background: "transparent",
  color: "black",
  textDecoration: "none",
  fontWeight: 800,
  border: "1px solid rgba(0,0,0,0.2)",
};

const badge: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "6px 10px",
  borderRadius: 999,
  border: "1px solid rgba(0,0,0,0.15)",
  fontWeight: 800,
  whiteSpace: "nowrap",
};

const cardBtn: React.CSSProperties = {
  display: "inline-block",
  marginTop: 14,
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid rgba(0,0,0,0.2)",
  textDecoration: "none",
  fontWeight: 800,
  color: "black",
};

const input: React.CSSProperties = {
  marginTop: 10,
  width: "100%",
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.2)",
};

const faqItem: React.CSSProperties = {
  border: "1px solid rgba(0,0,0,0.10)",
  borderRadius: 14,
  padding: 14,
};

const faqSummary: React.CSSProperties = {
  cursor: "pointer",
  fontWeight: 800,
};
