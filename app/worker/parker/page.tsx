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

export default function ParkerPage() {
  return (
    <div
      className="font-mono"
      style={{
        background:
          "linear-gradient(to top, #0D0B09 0%, #181008 45%, #261A0A 100%)",
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
          background: "rgba(13, 11, 9, 0.88)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--card-border)",
        }}
      >
        <Link href="/explore" className="nav-back">
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
          Terrain // 09
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
          <p style={impact}>I thought factories were dying. I walked into one running on robotics.</p>
          <p style={bodyText}>
            Parker, 21, industrial machinery mechanic apprentice, Detroit.
            I&apos;d grown up hearing about the collapse of manufacturing.
            The first plant I walked into had six-axis robotic arms
            running in coordinated cells, vision systems checking
            tolerances in real time, and a floor supervisor who spent
            half his day reading PLC data.
            The machines weren&apos;t replacing the workers —
            they were changing what the workers needed to know.
            The old job was gone. The new one paid more.
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
            Shift work. Days, afternoons, nights — rotating every three weeks.
            Your body adjusts slower than the schedule changes.
            The afternoon shift is quiet and you can focus.
            Night shift pays a differential but the factory floor
            at 3am has a weight to it that nobody warns you about.
            You get used to it.
            You also never fully get used to it.
            The people who last long in this trade usually find
            a shift that fits their life and stay there.
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
            The machine doesn&apos;t tell you what&apos;s wrong. You have to ask it the right questions.
          </p>
          <p style={bodyText}>
            A robot cell started skipping a step in its sequence.
            No fault code. No alarm.
            Just a slightly off output that quality control caught.
            The journeyman spent two hours asking the machine questions —
            checking encoder feedback, reviewing PLC logic,
            testing sensor response times.
            The answer was a proximity sensor drifting out of spec.
            Nothing on the HMI flagged it.
            If you wait for the machine to tell you,
            you&apos;re already behind.
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
          <pre className="no-scrollbar" style={receiptStyle}>{`PRECISION TOOL SET...............$280
DIGITAL MULTIMETER...............$85
SAFETY GLASSES (3 pairs)..........$45
STEEL-TOE BOOTS..................$165
EARPLUGS (yearly supply)..........$30`}</pre>
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
            >{`TOTAL BEFORE FIRST PAYCHECK......$605`}</pre>
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
          <p style={sectionLabel}>Section 05 / The Lesson at 21</p>
          <p style={impactLarge}>Learn the machine&apos;s normal before you try to fix its broken.</p>
          <p style={bodyText}>
            Every machine has a sound, a rhythm, a set of baseline
            numbers that tell you it&apos;s healthy.
            Vibration signature, cycle time, temperature range,
            current draw.
            Before you can diagnose anything,
            you need to know what normal looks like.
            Spend your first months watching and listening.
            Take notes.
            The journeymen who can diagnose a fault in ten minutes
            have ten years of baseline data in their head.
            You&apos;re building that database now.
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
            boxShadow: "0 2px 12px rgba(0, 71, 255, 0.22)",
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
          href="/explore"
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
