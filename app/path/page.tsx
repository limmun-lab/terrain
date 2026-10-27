import type { Metadata } from "next";
import Link from "next/link";
import { STORIES, getStory } from "../worker/stories";

export const metadata: Metadata = { title: "Your next steps · Terrain" };

type Props = { searchParams: Promise<{ [key: string]: string | string[] | undefined }> };

const SIDE = "clamp(20px, 6vw, 48px)";

export default async function YourPathPage({ searchParams }: Props) {
  const from = (await searchParams).from;
  const story = getStory(typeof from === "string" ? from : undefined);

  return (
    <div style={{ background: "var(--canvas-bg)", minHeight: "100vh", color: "var(--color-text-body)" }}>
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: `56px ${SIDE} 64px` }}>
        {story && (
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "12px" }}>
            {story.trade} · {story.state}
          </p>
        )}

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "32px",
          }}
        >
          Find one person already doing this work and ask them one honest question.
        </h1>

        {story ? (
          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "12px" }}>
            {story.actions.map((action, i) => (
              <li
                key={action}
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "16px",
                  alignItems: "baseline",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.65 }}>{action}</span>
              </li>
            ))}
          </ol>
        ) : (
          <>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.65, marginBottom: "20px" }}>
              Pick a trade to see the next steps for it.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
              {STORIES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/path?from=${s.slug}`} style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-text-body)" }}>
                    {s.trade} · {s.state}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "40px" }}>
          {story && (
            <Link href={`/worker/${story.slug}`} className="nav-back">
              ← Back to {story.name}&apos;s story
            </Link>
          )}
          <Link href="/explore" className="nav-back">
            Explore other trades
          </Link>
        </div>
      </main>
    </div>
  );
}
