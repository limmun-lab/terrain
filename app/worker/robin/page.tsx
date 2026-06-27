"use client";

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

export default function RobinPage() {
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
          <p style={impact}>I thought healthcare meant nursing. There are twelve other paths in.</p>
          <p style={bodyText}>
            Robin, 20, diagnostic medical sonographer student, Seattle.
            I wanted to work in healthcare but couldn&apos;t picture
            myself in nursing.
            I didn&apos;t know sonography existed as a career path
            until a hospital job fair showed me the imaging department.
            Associate degree, clinical hours, credential exam,
            then employment. No four-year requirement.
            Median salary: $89,000.
            I had no idea this path was available.
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
            The clinical hours. Academic coursework runs parallel
            to hospital placements from the beginning.
            By month six I was scanning real patients under supervision.
            That shift — from classroom to clinical — happens faster
            than you expect.
            You&apos;re reading images and thinking through possibilities
            on actual scans before you feel ready.
            That discomfort is the learning.
            The supervisors know when you&apos;re not ready.
            Your job is to stay present anyway.
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
            Your shoulder is doing the same motion ten thousand times a year.
          </p>
          <p style={bodyText}>
            The transducer is held against the patient with consistent
            pressure while you rotate, angle, and reposition.
            For an abdominal scan you&apos;re working across a wide range.
            For a vascular study you&apos;re holding sustained pressure
            for extended periods.
            There are sonographers who&apos;ve done this for 20 years
            without surgery. Some needed it at 35.
            The difference is usually technique — how you hold the probe,
            how you position the patient,
            whether you take a beat between scans.
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
          <pre className="no-scrollbar" style={receiptStyle}>{`SCRUBS (5 sets)...................$150
CLINICAL SHOES (non-slip).........$90
STETHOSCOPE......................$45
LICENSING EXAM FEE...............$300
BACKGROUND CHECK + HEALTH SCREEN..$120`}</pre>
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
            >{`TOTAL BEFORE FIRST PAYCHECK......$705`}</pre>
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
          <p style={impactLarge}>Learn to set the transducer down between patients. Your shoulder will thank you at 40.</p>
          <p style={bodyText}>
            The training doesn&apos;t teach you to protect yourself.
            It teaches you to protect the patient image quality.
            Those are related but not identical.
            Find a sonographer who&apos;s been in the field for fifteen years
            and ask them what they do between scans.
            Ask about their shoulder.
            Ask about their workstation setup.
            The technical skill gets you licensed.
            How you take care of your body determines how long you work.
          </p>
        </motion.section>

      </main>

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
