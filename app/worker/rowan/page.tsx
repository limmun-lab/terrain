"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const GRAIN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23n)'/%3E%3C/svg%3E";

const SIDE = "clamp(24px, 6vw, 48px)";

const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono), Courier, monospace",
  fontSize: "0.85rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-text-muted)",
  marginBottom: "28px",
};

const impact: React.CSSProperties = {
  fontFamily: "Georgia, Times New Roman, serif",
  fontSize: "clamp(1.55rem, 5vw, 2.2rem)",
  fontWeight: 400,
  lineHeight: 1.18,
  letterSpacing: "-0.02em",
  color: "var(--color-text-body)",
  marginBottom: "28px",
};

const impactLarge: React.CSSProperties = {
  fontFamily: "Georgia, Times New Roman, serif",
  fontSize: "clamp(2.2rem, 8vw, 3.8rem)",
  fontWeight: 400,
  lineHeight: 1.08,
  letterSpacing: "-0.03em",
  color: "var(--color-text-body)",
  marginBottom: "32px",
};

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-mono), Courier, monospace",
  fontSize: "clamp(0.85rem, 2.4vw, 0.95rem)",
  lineHeight: 1.85,
  color: "var(--color-text-body)",
};

const receiptStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono), Courier, monospace",
  fontSize: "clamp(0.8125rem, 2.2vw, 0.875rem)",
  lineHeight: 2,
  color: "var(--color-text-body)",
  whiteSpace: "pre",
  overflowX: "auto",
  scrollbarWidth: "none",
};

const rule: React.CSSProperties = {
  height: "1px",
  background: "var(--card-border)",
  margin: 0,
};

export default function RowanPage() {
  return (
    <div
      className="font-mono"
      style={{
        background:
          "var(--bg-gradient)",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "var(--color-text-body)",
        position: "relative",
      }}
    >
      {/* Grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0.18,
          backgroundImage: `url("${GRAIN}")`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: `16px ${SIDE}`,
          background: "var(--nav-bg)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--card-border)",
        }}
      >
        <Link href="/explore?card=1" className="nav-back">
          ← Back to Exploration
        </Link>
        <span
          style={{
            fontFamily: "var(--font-mono), Courier, monospace",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
          }}
        >
          Terrain // 04
        </span>
      </motion.nav>

      {/* Content */}
      <main
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: `0 ${SIDE}`,
        }}
      >

        {/* 01 */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ padding: "56px 0 52px" }}
        >
          <p style={sectionLabel}>Section 01 / What I Thought It Was</p>
          <p style={impact}>I thought HVAC was about temperature. It&apos;s about pressure.</p>
          <p style={bodyText}>
            Rowan, 20, HVAC-R apprentice, Phoenix.
            First week was carrying copper pipe and watching.
            Nobody handed me a gauge. The journeyman explained
            refrigerant pressure before he explained anything else.
            That&apos;s when I understood — this trade is about pressure
            differentials, load calculations, airflow.
            Temperature is the result, not the work.
          </p>
        </motion.section>

        <div style={rule} />

        {/* 02 */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ padding: "56px 0 52px" }}
        >
          <p style={sectionLabel}>Section 02 / What Surprised Me</p>
          <p style={bodyText}>
            The buildings. Commercial HVAC isn&apos;t split systems
            in houses — it&apos;s rooftop units the size of sedans,
            chillers, BAS controllers tied into the building&apos;s
            nervous system. I didn&apos;t know building automation
            systems existed. I thought it was thermostats and
            ductwork. It&apos;s programming sensors and troubleshooting
            building networks at the same time.
          </p>
        </motion.section>

        <div style={rule} />

        {/* 03 */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ padding: "56px 0 52px" }}
        >
          <p style={sectionLabel}>Section 03 / The Cost of Failure</p>
          <p style={impact}>
            Nobody tells you the attic is 130 degrees in July.
          </p>
          <p style={bodyText}>
            Phoenix in July. I ran a new refrigerant line in an attic.
            Two hours in, I had heat exhaustion symptoms — dizzy,
            confused, sweat stopped. The journeyman pulled me out.
            That&apos;s when the rule became real: drink a litre
            before you go up, set a timer for 45 minutes, no exceptions.
            The attic doesn&apos;t care how tough you are.
          </p>
        </motion.section>

        <div style={rule} />

        {/* 04 — receipt */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ padding: "56px 0 52px" }}
        >
          <p style={sectionLabel}>Section 04 / What I Spent</p>
          <pre className="no-scrollbar" style={receiptStyle}>{`HVAC HAND TOOLS.................$320
REFRIGERANT GAUGES..............$180
EPA 608 EXAM FEE.................$50
WORK BOOTS (composite toe).......$160
FIRST MONTH TRANSPORT............$140`}</pre>
          <span
            style={{
              display: "block",
              borderTop: "1px solid var(--card-border)",
              paddingTop: "12px",
              marginTop: "4px",
            }}
          >
            <pre
              className="no-scrollbar"
              style={{ ...receiptStyle, margin: 0 }}
            >{`TOTAL BEFORE FIRST PAYCHECK......$850`}</pre>
          </span>
        </motion.section>

        <div style={rule} />

        {/* 05 */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ padding: "56px 0 52px" }}
        >
          <p style={sectionLabel}>Section 05 / The Lesson at 20</p>
          <p style={impactLarge}>Your back is not a tool. Learn that before your back does.</p>
          <p style={bodyText}>
            Industrial compressors don&apos;t come with handles.
            Refrigerant tanks weigh 125 pounds.
            The first year, you&apos;re going to want to muscle
            everything because you don&apos;t know how to ask
            for the right equipment yet.
            Learn the right way to move weight before the wrong
            way becomes a habit.
            Your back will tell you — but by then, it&apos;s too late.
          </p>
        </motion.section>

      </main>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: `0 ${SIDE} 56px`,
        }}
      >
        <Link
          href="/path"
          style={{
            display: "inline-block",
            fontSize: "0.85rem",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "var(--color-text-body)",
            background: "var(--accent)",
            borderRadius: "6px",
            padding: "10px 20px",
            textDecoration: "none",
            boxShadow: "0 2px 12px var(--shadow-accent)",
          }}
        >
          Find your path
        </Link>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          textAlign: "center",
          padding: `60px ${SIDE} 40px`,
          borderTop: "1px solid var(--card-border)",
        }}
      >
        <p
          style={{
            fontFamily: "Georgia, Times New Roman, serif",
            fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
            fontWeight: 400,
            color: "var(--color-text-muted)",
            letterSpacing: "0.04em",
            marginBottom: "10px",
          }}
        >
          One voice. One trade. One reality.
        </p>
        <Link
          href="/explore?card=1"
          style={{
            fontFamily: "var(--font-mono), Courier, monospace",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
            textDecoration: "none",
          }}
        >
          ← Back to Exploration
        </Link>
      </motion.footer>

      {/* Dot nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          padding: "28px 24px 40px",
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              height: "6px",
              width: i === 2 ? "22px" : "6px",
              borderRadius: "3px",
              background:
                i === 2
                  ? "rgba(245, 240, 235, 0.82)"
                  : "rgba(245, 240, 235, 0.18)",
            }}
          />
        ))}
      </div>

    </div>
  );
}
