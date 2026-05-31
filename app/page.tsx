"use client";

import Link from "next/link";
import { motion, type Transition } from "framer-motion";

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay } as Transition,
});

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen"
      style={{
        background:
          "linear-gradient(to top, #0D0B09 0%, #181008 45%, #261A0A 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{ opacity: 0.4, backgroundImage: `url("${GRAIN_SVG}")` }}
      />

      <section
        className="relative z-10 flex min-h-screen items-center justify-center"
        style={{ padding: "clamp(2rem, 6vw, 5rem) clamp(1.5rem, 8vw, 8rem)" }}
      >
        <div className="w-full max-w-[780px]">

          <motion.span
            {...fadeUp(0)}
            className="mb-[clamp(1.25rem,3vw,2rem)] block font-sans text-[0.85rem] font-medium uppercase tracking-[0.08em]"
            style={{ color: "var(--color-text-muted)" }}
          >
            Trades · Careers · Real life
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="mb-[clamp(1.25rem,3vw,2rem)] font-serif font-normal leading-[1.08] tracking-[-0.02em]"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              color: "var(--color-text-body)",
            }}
          >
            See the whole{" "}
            <em
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(to right, #0033CC 0%, #0047FF 50%, #4D80FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              terrain.
            </em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mb-[clamp(2rem,5vw,3.5rem)] max-w-[520px] font-sans font-normal leading-[1.65]"
            style={{
              fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
              color: "var(--color-text-muted)",
            }}
          >
            Before you choose a trade, understand the work, the money, the
            path, and the life it becomes.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <Link
              href="/explore"
              className={[
                "inline-block rounded-[6px] bg-accent px-5 py-[10px]",
                "font-sans font-medium tracking-[0.04em]",
                "transition-[filter,box-shadow,transform] duration-200 ease-out",
                "shadow-[0_2px_12px_rgba(0,71,255,0.22)]",
                "hover:brightness-[1.15] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(0,71,255,0.38)]",
                "active:translate-y-0 active:shadow-[0_2px_10px_rgba(0,71,255,0.22)]",
              ].join(" ")}
              style={{
                fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                color: "var(--color-text-body)",
              }}
            >
              Start exploring
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
