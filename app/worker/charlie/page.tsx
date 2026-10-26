"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import { motion } from "framer-motion";

const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

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

      {/* Hero photo */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          overflow: "hidden",
          marginBottom: "48px",
        }}
      >
        <Image
          src="/trades/workers/charlie-welder.webp"
          alt="Charlie, pipeline welder"
          fill
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "48px 32px 28px",
            background:
              "linear-gradient(to top, rgba(18,19,20,0.92) 0%, transparent 100%)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono), Courier, monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              color: "var(--color-text-muted)",
              marginBottom: "6px",
            }}
          >
            CHARLIE
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono), Courier, monospace",
              fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
              color: "var(--color-text-body)",
              fontWeight: 300,
            }}
          >
            Pipeline Welder · Year One
          </p>
        </div>
      </div>

      {/* Content */}
      <main
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: `0 ${SIDE}`,
        }}
      >

        <p
          style={{
            fontFamily: "var(--font-mono), Courier, monospace",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
            paddingTop: "24px",
          }}
        >
          An illustrative story, written with AI assistance. Not an account from a real person.
        </p>

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
          {/* Torn-paper receipt */}
          <div
            style={{
              position: "relative",
              width: "fit-content",
              maxWidth: "340px",
              margin: "32px auto 0",
              transform: "rotate(-1.5deg)",
              filter: "drop-shadow(2px 4px 12px rgba(0,0,0,0.18))",
            }}
          >
            {/* Torn edge — top */}
            <svg
              viewBox="0 0 340 12"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "12px" }}
            >
              <path
                d="M0,12 L0,6 Q8,0 16,5 T32,4 T48,7 T64,3 T80,6 T96,2 T112,7 T128,4 T144,8 T160,2 T176,6 T192,3 T208,7 T224,4 T240,8 T256,3 T272,6 T288,2 T304,7 T320,4 T336,8 T340,5 L340,12 Z"
                fill="#f5f0e8"
              />
            </svg>

            {/* Receipt body */}
            <div
              style={{
                backgroundColor: "#f5f0e8",
                padding: "20px 28px 16px",
                fontFamily: "var(--font-mono), Courier, monospace",
                fontSize: "0.8125rem",
                lineHeight: 1.9,
                color: "#2a2118",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Paper texture overlay */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.015) 3px, rgba(0,0,0,0.015) 4px)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />

              {/* Receipt content */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: "16px",
                    borderBottom: "1px dashed #b5a898",
                    paddingBottom: "12px",
                  }}
                >
                  CHARLIE · AGE 22
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "0 16px",
                  }}
                >
                  {[
                    ["WELDING HOOD", "$185"],
                    ["WELDING GLOVES + JACKET", "$145"],
                    ["STEEL CAP BOOTS", "$180"],
                    ["FIRST MONTH TRANSPORT", "$150"],
                    ["UNION DUES", "$85"],
                    ["GRINDER + ACCESSORIES", "$110"],
                  ].map(([label, price]) => (
                    <Fragment key={label}>
                      <span style={{ textTransform: "uppercase" }}>{label}</span>
                      <span style={{ textAlign: "right" }}>{price}</span>
                    </Fragment>
                  ))}
                </div>

                <div
                  style={{
                    borderTop: "1px dashed #b5a898",
                    marginTop: "12px",
                    paddingTop: "12px",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "0 16px",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>TOTAL BEFORE FIRST PAYCHECK</span>
                  <span style={{ fontWeight: 600, textAlign: "right" }}>$855</span>
                </div>

                <div
                  style={{
                    fontFamily: caveat.style.fontFamily,
                    fontSize: "1.2rem",
                    color: "#8a7a6a",
                    marginTop: "14px",
                    textAlign: "center",
                  }}
                >
                  paid this before i earned a cent
                </div>
              </div>
            </div>

            {/* Torn edge — bottom */}
            <svg
              viewBox="0 0 340 12"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{ display: "block", width: "100%", height: "12px", transform: "scaleY(-1)" }}
            >
              <path
                d="M0,12 L0,6 Q8,0 16,5 T32,4 T48,7 T64,3 T80,6 T96,2 T112,7 T128,4 T144,8 T160,2 T176,6 T192,3 T208,7 T224,4 T240,8 T256,3 T272,6 T288,2 T304,7 T320,4 T336,8 T340,5 L340,12 Z"
                fill="#f5f0e8"
              />
            </svg>
          </div>
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

        {/* Closing card */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ padding: "80px 0 48px" }}
        >
          <div
            style={{
              borderLeft: "2px solid var(--accent)",
              paddingLeft: "24px",
              marginBottom: "48px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif, Georgia, serif)",
                fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                lineHeight: 1.5,
                color: "var(--color-text-body)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Know what kind of life you&apos;re choosing before you chase the rate. The money doesn&apos;t come alone.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <a
              href="/path"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-mono), Courier, monospace",
                fontSize: "0.8125rem",
                letterSpacing: "0.08em",
                color: "var(--color-text-muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s ease",
              }}
            >
              Find your path →
            </a>
            <div
              style={{
                borderTop: "1px solid var(--card-border)",
                paddingTop: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono), Courier, monospace",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  color: "var(--color-text-muted)",
                  opacity: 0.5,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Other trades
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 16px",
                }}
              >
                <a
                  href="/worker/blake"
                  style={{
                    fontFamily: "var(--font-mono), Courier, monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    opacity: 0.7,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  Electrician
                </a>
                <a
                  href="/worker/robin"
                  style={{
                    fontFamily: "var(--font-mono), Courier, monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    opacity: 0.7,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  Sonographer
                </a>
                <a
                  href="/worker/alex"
                  style={{
                    fontFamily: "var(--font-mono), Courier, monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    opacity: 0.7,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  Wind
                </a>
                <a
                  href="/worker/parker"
                  style={{
                    fontFamily: "var(--font-mono), Courier, monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    opacity: 0.7,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  Mechanic
                </a>
                <a
                  href="/worker/rowan"
                  style={{
                    fontFamily: "var(--font-mono), Courier, monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    opacity: 0.7,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  HVAC
                </a>
                <a
                  href="/worker/sam"
                  style={{
                    fontFamily: "var(--font-mono), Courier, monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    opacity: 0.7,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  Plumber
                </a>
              </div>
            </div>
          </div>
        </motion.section>

      </main>

    </div>
  );
}
