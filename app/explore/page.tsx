"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CARDS = [
  {
    id: 1,
    name: "Outdoor and Infrastructure",
    subtitle: "Grid, energy, construction",
    bg: "linear-gradient(158deg, #0A2E38 0%, #103828 55%, #1C5040 100%)",
  },
  {
    id: 2,
    name: "Building Systems",
    subtitle: "HVAC, plumbing, climate control",
    bg: "linear-gradient(158deg, #2E1308 0%, #5C2A10 55%, #7A3A18 100%)",
  },
  {
    id: 3,
    name: "Industrial and Technical",
    subtitle: "Machinery, robotics, maintenance",
    bg: "linear-gradient(158deg, #0C1E2E 0%, #182838 55%, #223050 100%)",
  },
  {
    id: 4,
    name: "Healthcare Trades",
    subtitle: "Sonography, radiology, medical equipment",
    bg: "linear-gradient(158deg, #162818 0%, #204030 55%, #2C4E32 100%)",
  },
  {
    id: 5,
    name: "High Specialisation",
    subtitle: "Pipeline, aerospace, underwater",
    bg: "linear-gradient(158deg, #050A1E 0%, #08102E 55%, #0A1648 100%)",
  },
  {
    id: 6,
    name: "Own Your Future",
    subtitle: "Trades as the path to ownership",
    bg: "linear-gradient(158deg, #2A1208 0%, #7A3A18 50%, #C07840 100%)",
  },
];

const PEEK = 40;
const GAP = 12;

export default function ExplorePage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timer: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const first = track.firstElementChild as HTMLElement | null;
        if (!first) return;
        const idx = Math.round(track.scrollLeft / (first.offsetWidth + GAP));
        setActiveIndex(Math.max(0, Math.min(idx, CARDS.length - 1)));
      }, 60);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return;
    track.scrollTo({ left: index * (first.offsetWidth + GAP), behavior: "smooth" });
  };

  return (
    <main
      className="flex h-dvh flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(to top, #0D0B09 0%, #181008 45%, #261A0A 100%)",
        color: "var(--color-text-body)",
      }}
    >
      <header className="flex flex-shrink-0 items-center justify-center px-6 pb-2 pt-6">
        <span
          className="font-serif font-normal tracking-[0.12em]"
          style={{ fontSize: "0.9rem" }}
        >
          Terrain
        </span>
      </header>

      <div className="flex-shrink-0 px-7 pb-5 pt-2">
        <p
          className="mb-2 font-sans text-[0.85rem] font-medium uppercase tracking-[0.08em]"
          style={{ color: "var(--color-text-muted)" }}
        >
          Explore by Life Pattern
        </p>
        <h2
          className="font-serif font-normal leading-[1.08] tracking-[-0.02em]"
          style={{ fontSize: "clamp(1.8rem, 6.5vw, 2.6rem)" }}
        >
          Horizon Reveal
        </h2>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex min-h-0 flex-1 overflow-x-scroll"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          padding: `0 ${PEEK}px`,
          gap: `${GAP}px`,
          scrollPaddingLeft: `${PEEK}px`,
        }}
      >
        {CARDS.map((card) => (
          <Link
            key={card.id}
            href="/worker/blake"
            className="group relative flex flex-col justify-end overflow-hidden rounded-2xl"
            style={{
              flex: `0 0 calc(100vw - ${PEEK * 2}px)`,
              scrollSnapAlign: "start",
              background: card.bg,
              textDecoration: "none",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[2]"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 42%, rgba(0,0,0,0) 65%)",
              }}
            />
            <div className="relative z-[3]" style={{ padding: "18px 22px 52px" }}>
              <p
                className="mb-2 font-serif font-normal leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 8.5vw, 3.2rem)" }}
              >
                {card.name}
              </p>
              <p
                className="font-sans font-normal tracking-[0.01em]"
                style={{
                  fontSize: "clamp(0.95rem, 3vw, 1.1rem)",
                  color: "var(--color-text-muted)",
                }}
              >
                {card.subtitle}
              </p>
              <p
                className="mt-3 font-sans opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  color: "rgba(245, 240, 235, 0.75)",
                }}
              >
                Read a real story →
              </p>
            </div>
          </Link>
        ))}
        <div aria-hidden="true" style={{ flex: "0 0 1px" }} />
      </div>

      <div className="flex flex-shrink-0 items-center justify-center gap-[7px] px-6 pb-[30px] pt-4">
        {CARDS.map((card, i) => (
          <button
            key={card.id}
            onClick={() => scrollToCard(i)}
            aria-label={`Card ${i + 1}`}
            style={{
              height: "6px",
              width: activeIndex === i ? "22px" : "6px",
              borderRadius: "3px",
              border: "none",
              padding: 0,
              cursor: "pointer",
              background:
                activeIndex === i
                  ? "rgba(245, 240, 235, 0.85)"
                  : "rgba(245, 240, 235, 0.2)",
              transition: "background 0.3s ease, width 0.3s ease",
            }}
          />
        ))}
      </div>
    </main>
  );
}
