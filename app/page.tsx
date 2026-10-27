"use client";

import Link from "next/link";
import { motion, type Transition } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay } as Transition,
});

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen"
      style={{ background: "var(--canvas-bg)" }}
    >
      <section
        className="relative z-10 flex min-h-screen items-center justify-center"
        style={{ padding: "clamp(2rem, 6vw, 5rem) clamp(1.5rem, 8vw, 8rem)" }}
      >
        <div className="w-full max-w-[780px]">
          <motion.h1
            {...fadeUp(0.1)}
            className="mb-[clamp(1.25rem,3vw,2rem)] font-serif font-normal leading-[1.08] tracking-[-0.02em]"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              color: "var(--color-text-body)",
            }}
          >
            See the whole <em style={{ fontStyle: "italic" }}>terrain.</em>
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
              className="btn-primary"
              style={{ fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)" }}
            >
              Start exploring
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
