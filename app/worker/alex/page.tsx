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

export default function AlexPage() {
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
          <p style={impact}>I thought wind energy was clean work. The turbines are not clean.</p>
          <p style={bodyText}>
            Alex, 21, wind turbine technician trainee, Texas.
            First site orientation was six hours of safety protocols
            before I saw the inside of a turbine.
            When I finally climbed one, I found 150 gallons of
            gearbox oil, grease on every moving surface,
            and a maintenance log full of component replacements.
            Wind energy is clean for the grid.
            The machines themselves are industrial equipment
            that needs constant upkeep.
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
            The movement. I knew the job involved travel —
            I didn&apos;t understand what that meant.
            By month four I had been to three wind farms in two states.
            My mailing address was still my parents&apos;.
            Some technicians spend years moving between sites.
            If you have deep roots somewhere, this trade will test that.
            The ones who thrive here either love the road or eventually
            narrow down to a local site and stay.
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
            At 280 feet, there is no quick way down.
          </p>
          <p style={bodyText}>
            Everything at height requires a plan made before you go up.
            The tools, the replacement parts, the water, the comms check.
            If you&apos;re 280 feet up and you forgot a component,
            you climb down and climb back up.
            If weather moves in fast, you wait it out in the nacelle.
            You cannot improvise at altitude.
            I watched a technician get caught in a wind shift on descent.
            He was fine. But the 20 minutes he spent waiting
            attached to the tower changed how I think about planning.
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
          <pre className="no-scrollbar" style={receiptStyle}>{`SAFETY HARNESS (rated)...........$220
CLIMBING GLOVES (3 pairs).........$75
STEEL-TOE BOOTS..................$165
WEATHERPROOF GEAR................$130
FIRST MONTH ACCOMMODATION........$400`}</pre>
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
            >{`TOTAL BEFORE FIRST PAYCHECK......$990`}</pre>
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
          <p style={impactLarge}>The view is real. So is the wind. Respect both equally.</p>
          <p style={bodyText}>
            The view from the top of a turbine on a clear day
            is something most people will never see.
            It&apos;s also where you&apos;re most exposed.
            Wind at height is different from wind on the ground —
            colder, less predictable, physically tiring
            when you&apos;re working against it.
            The people who last in this trade learn to read the weather
            before they read the schedule.
            A site manager who pushes through a weather hold
            is one you watch carefully.
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
