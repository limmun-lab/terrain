"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const GRAIN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23n)'/%3E%3C/svg%3E";

const SIDE = "clamp(28px, 7vw, 56px)";

const ACTIONS = [
  {
    num: "01",
    label: "This Week —",
    text: "Go to r/electricians on Reddit. Read the last 10 posts tagged 'apprentice'. You're not posting yet — just listening.",
  },
  {
    num: "02",
    label: "This Week —",
    text: "Search 'IBEW Local + [your city]' and find when their next open application window is. Write the date down somewhere physical.",
  },
  {
    num: "03",
    label: "This Week —",
    text: "Text or email one person you know who works with their hands for a living. Ask them one question about their first year.",
  },
];

export default function YourPathPage() {
  return (
    <div
      style={{
        background: "var(--bg-gradient)",
        backgroundAttachment: "fixed",
        color: "var(--color-text-body)",
        fontFamily: "var(--font-mono), Courier, monospace",
        WebkitFontSmoothing: "antialiased",
      }}
    >
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

      {/* ── Your path ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
          <style>{`
            .actions-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
              margin-bottom: 20px;
            }
            @media (max-width: 640px) {
              .actions-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: `48px ${SIDE} 48px`,
          }}
        >
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "12px",
              padding: "clamp(20px, 4vw, 32px)",
              maxWidth: "760px",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: "clamp(1.4rem, 4vw, 2rem)",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                background:
                  "var(--gradient-cobalt)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "16px",
              }}
            >
              Find one person already doing this work and ask them one honest question.
            </h1>

            <div className="actions-grid">
              {ACTIONS.map((action, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    background: "rgba(245,240,235,0.034)",
                    border: "1px solid var(--card-border)",
                    borderRadius: "8px",
                    padding: "16px 14px 16px 20px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "3px",
                      background:
                        "var(--gradient-cobalt-vertical)",
                    }}
                  />

                  <p
                    style={{
                      fontFamily: "var(--font-mono), Courier, monospace",
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      color: "var(--accent)",
                      marginBottom: "8px",
                    }}
                  >
                    {action.num}
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(0.82rem, 2.2vw, 0.92rem)",
                      lineHeight: 1.72,
                      color: "var(--color-text-body)",
                    }}
                  >
                    {action.text}
                  </p>
                </div>
              ))}
            </div>

          </div>


          <Link
            href="/"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "16px",
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              color: "var(--color-text-muted)",
              textDecoration: "none",
            }}
          >
            ← Start over
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
