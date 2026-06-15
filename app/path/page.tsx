"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const GRAIN =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23n)'/%3E%3C/svg%3E";

const SIDE = "clamp(28px, 7vw, 56px)";

const QUESTIONS = [
  {
    label: "Where are you right now",
    text: "What does your life look like today — are you still in school, just finished, working something temporary, or figuring it out?",
    hint: "Press Enter to continue",
    isLast: false,
  },
  {
    label: "What pulled you in",
    text: "What was the moment in Blake's story that felt most true to you?",
    hint: "Press Enter to continue",
    isLast: false,
  },
  {
    label: "What's in the way",
    text: "What's the one thing that would stop you from taking a first step this week?",
    hint: "Press Enter to see your path",
    isLast: true,
  },
];

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

type Phase = "questions" | "questions-fading" | "card-mounting" | "card";

export default function YourPathPage() {
  const [phase, setPhase] = useState<Phase>("questions");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState(["", "", ""]);
  const textareaRefs = useRef<(HTMLTextAreaElement | null)[]>([null, null, null]);

  useEffect(() => {
    textareaRefs.current[0]?.focus();
  }, []);

  useLayoutEffect(() => {
    if (phase === "card-mounting") {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setPhase("card"))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [phase]);

  const handleChange = (idx: number, e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.currentTarget;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
    setAnswers((prev) => {
      const next = [...prev];
      next[idx] = el.value;
      return next;
    });
  };

  const advance = (from: number) => {
    if (!answers[from].trim()) return;
    setCurrentQ(from + 1);
    setTimeout(() => textareaRefs.current[from + 1]?.focus(), 200);
  };

  const revealCard = () => {
    if (!answers[2].trim()) return;
    setPhase("questions-fading");
    setTimeout(() => setPhase("card-mounting"), 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, idx: number) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!answers[idx].trim()) return;
      if (idx < 2) advance(idx);
      else revealCard();
    }
  };

  const dotBg = (i: number) =>
    i === currentQ
      ? "rgba(245,240,235,0.82)"
      : i < currentQ
      ? "rgba(245,240,235,0.35)"
      : "rgba(245,240,235,0.16)";

  const showQuestions = phase === "questions" || phase === "questions-fading";
  const showCard = phase === "card-mounting" || phase === "card";

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

      {/* ── Screen 1: Questions ── */}
      {showQuestions && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
        <div
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            opacity: phase === "questions-fading" ? 0 : 1,
            transition: "opacity 0.6s ease",
          }}
        >
          {/* Progress dots */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              padding: "32px 24px 0",
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  height: "5px",
                  width: i === currentQ ? "18px" : "5px",
                  borderRadius: "3px",
                  background: dotBg(i),
                  transition: "background 0.4s ease, width 0.4s ease",
                }}
              />
            ))}
          </div>

          {/* Questions wrapper — fills remaining height, questions layered inside */}
          <div style={{ flex: 1, position: "relative" }}>
            {QUESTIONS.map((q, idx) => {
              const isActive = currentQ === idx;
              const hasText = answers[idx].trim().length > 0;

              return (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: `0 ${SIDE} 40px`,
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.6s ease",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      marginBottom: "20px",
                    }}
                  >
                    {q.label}
                  </p>

                  <p
                    style={{
                      fontFamily: "Georgia, Times New Roman, serif",
                      fontSize: "clamp(1.55rem, 5.5vw, 2.4rem)",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      letterSpacing: "-0.02em",
                      color: "var(--color-text-body)",
                      marginBottom: "36px",
                      maxWidth: "560px",
                    }}
                  >
                    {q.text}
                  </p>

                  <textarea
                    ref={(el) => {
                      textareaRefs.current[idx] = el;
                    }}
                    aria-label={q.text}
                    rows={1}
                    spellCheck={false}
                    value={answers[idx]}
                    onChange={(e) => handleChange(idx, e)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className="q-input"
                    style={{
                      fontSize: "clamp(1rem, 3vw, 1.1rem)",
                      lineHeight: 1.7,
                      color: "var(--color-text-body)",
                      width: "100%",
                      maxWidth: "520px",
                      padding: "12px 0 14px",
                      display: "block",
                    }}
                  />

                  <p
                    style={{
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      color: "var(--color-text-muted)",
                      opacity: 0.55,
                      marginTop: "10px",
                    }}
                  >
                    {q.hint}
                  </p>

                  {q.isLast ? (
                    <button
                      onClick={revealCard}
                      className="q-reveal-btn"
                      style={{
                        alignSelf: "flex-start",
                        marginTop: "28px",
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        letterSpacing: "0.06em",
                        color: "var(--color-text-body)",
                        background: "var(--accent)",
                        border: "none",
                        borderRadius: "6px",
                        padding: "10px 20px",
                        cursor: "pointer",
                        opacity: hasText ? 1 : 0,
                        transform: hasText ? "translateY(0)" : "translateY(6px)",
                        pointerEvents: hasText ? "auto" : "none",
                      }}
                    >
                      See your path
                    </button>
                  ) : (
                    <button
                      onClick={() => advance(idx)}
                      className="q-continue-btn"
                      style={{
                        alignSelf: "flex-start",
                        marginTop: "24px",
                        fontSize: "0.85rem",
                        letterSpacing: "0.08em",
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        opacity: hasText ? 1 : 0,
                        transform: hasText ? "translateY(0)" : "translateY(4px)",
                        pointerEvents: hasText ? "auto" : "none",
                        textAlign: "left",
                      }}
                    >
                      Continue →
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        </motion.div>
      )}

      {/* ── Screen 2: Card ── */}
      {showCard && (
        <>
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
            opacity: phase === "card" ? 1 : 0,
            transition: "opacity 0.6s ease",
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
            <p
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                marginBottom: "12px",
              }}
            >
              Your Next Step
            </p>

            <p
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
            </p>

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

            <a
              href="https://www.reddit.com/r/electricians/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-cta-btn"
              style={{
                display: "inline-block",
                marginTop: "16px",
                marginBottom: "16px",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "var(--color-text-body)",
                background: "var(--accent)",
                borderRadius: "6px",
                padding: "10px 20px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Open r/electricians on Reddit
            </a>

            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.85,
                color: "var(--color-text-muted)",
                marginBottom: "20px",
              }}
            >
              The union hall, a job site fence line,
              <br />
              a Reddit thread at midnight —
              <br />
              the terrain opens when you ask someone
              <br />
              who's already on it.
            </p>

            <span
              style={{
                display: "block",
                textAlign: "center",
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: "0.82rem",
                fontWeight: 400,
                letterSpacing: "0.14em",
                color: "var(--color-text-muted)",
                paddingTop: "24px",
                borderTop: "1px solid var(--card-border)",
              }}
            >
              Terrain
            </span>
          </div>

          <p
            style={{
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              textAlign: "center",
              marginTop: "28px",
            }}
          >
            One conversation changes the terrain.
          </p>

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
              opacity: 0.75,
            }}
          >
            ← Start over
          </Link>
        </div>
        </>
      )}
    </div>
  );
}
