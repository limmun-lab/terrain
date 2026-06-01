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

export default function CharliePage() {
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
        <Link href="/explore?card=4" className="nav-back">
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
          Terrain // 07
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
          <p style={impact}>I thought welding was the same everywhere. Shop and field are different jobs.</p>
          <p style={bodyText}>
            Charlie, 22, welding apprentice, Houston.
            Shop work: stable hours, consistent materials,
            inspectors who come to you.
            Field work: weather, scaffolding, variable materials,
            grinding your own welds in a ditch at six in the morning.
            Both jobs are called welding.
            They require different people.
            I started in the shop because you learn the fundamentals first.
            The field comes later — if you want it.
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
            How long it takes to develop an eye for a good weld.
            You can read about fusion and penetration.
            You can watch a journeyman run a bead.
            The actual skill — knowing by sound and light and feel
            whether the arc is right — takes thousands of hours.
            My first six months of welds all looked passable to me.
            They weren&apos;t.
            It wasn&apos;t until I could see the difference myself
            that I understood what I&apos;d been doing wrong.
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
            Arc eye feels like sand in both eyes at 3am. Wear your hood. Every time.
          </p>
          <p style={bodyText}>
            I flipped my hood up for 90 seconds to see a mark on the metal.
            I thought I was far enough from the arc.
            I wasn&apos;t.
            Arc eye — photokeratitis — doesn&apos;t hit immediately.
            It hits six to twelve hours later.
            I woke up at 3am feeling like my eyes were full of grit
            and couldn&apos;t open them in light.
            Took two days to fully clear.
            Every experienced welder has a story like this.
            Most only have one.
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
          <pre className="no-scrollbar" style={receiptStyle}>{`WELDING HOOD (auto-darkening)....$185
WELDING GLOVES (3 pairs)..........$60
FIRE-RESISTANT JACKET............$110
STEEL-TOE BOOTS..................$165
GRINDER + WIRE BRUSH..............$85`}</pre>
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
          <p style={sectionLabel}>Section 05 / The Lesson at 22</p>
          <p style={impactLarge}>The pipeline pays twice what the shop does. It also takes twice as much of your life.</p>
          <p style={bodyText}>
            Pipeline welding is real money —
            certified pipeline welders can clear $100k and more
            in a strong year.
            What that number doesn&apos;t show:
            12-hour shifts, remote locations, months away from home,
            camps with 200 other workers.
            Some people are built for that life.
            Some discover they aren&apos;t after they&apos;ve already committed.
            Know what kind of life you&apos;re choosing
            before you chase the rate.
            The money doesn&apos;t come alone.
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
          href="/explore?card=4"
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
