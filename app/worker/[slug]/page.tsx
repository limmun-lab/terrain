import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STORIES, getStory, type ReceiptLine } from "../stories";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = getStory((await params).slug);
  if (!story) return {};
  return {
    title: `${story.name}, ${story.trade} · Terrain`,
    description: story.thought.lead,
  };
}

const SIDE = "clamp(20px, 6vw, 48px)";

const lead: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(1.45rem, 5vw, 2.1rem)",
  fontWeight: 400,
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  color: "var(--color-text-body)",
  marginBottom: "24px",
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(0.95rem, 2.4vw, 1.05rem)",
  lineHeight: 1.75,
  color: "var(--color-text-body)",
  marginBottom: "16px",
};

const section: React.CSSProperties = {
  padding: "48px 0",
  borderBottom: "1px solid var(--card-border)",
};

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((p) => (
        <p key={p.slice(0, 32)} style={body}>
          {p}
        </p>
      ))}
    </>
  );
}

function Lines({ lines }: { lines: ReceiptLine[] }) {
  return (
    <dl style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "10px 16px", margin: 0 }}>
      {lines.map((l) => (
        <div key={l.item} style={{ display: "contents" }}>
          <dt>
            {l.item}
            {l.detail && (
              <span style={{ display: "block", color: "var(--color-text-muted)", fontSize: "0.8125rem", lineHeight: 1.5 }}>
                {l.detail}
              </span>
            )}
          </dt>
          <dd style={{ margin: 0, textAlign: "right", whiteSpace: "nowrap", fontWeight: 500 }}>{l.cost}</dd>
        </div>
      ))}
    </dl>
  );
}

export default async function WorkerStoryPage({ params }: Props) {
  const story = getStory((await params).slug);
  if (!story) notFound();

  const others = STORIES.filter((s) => s.slug !== story.slug);

  return (
    <div style={{ background: "var(--canvas-bg)", minHeight: "100vh", color: "var(--color-text-body)" }}>
      <header style={{ position: "relative", width: "100%", height: "56vh", overflow: "hidden" }}>
        <Image
          src={story.image}
          alt={story.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", filter: "var(--image-filter)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--image-scrim)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: `0 ${SIDE} 28px`,
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 7vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--on-image)",
              marginBottom: "6px",
            }}
          >
            {story.name}
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(1rem, 3vw, 1.2rem)", color: "var(--on-image-muted)" }}>
            {story.trade} · {story.state}
          </p>
        </div>
      </header>

      <main style={{ maxWidth: "640px", margin: "0 auto", padding: `0 ${SIDE} 64px` }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-text-muted)", paddingTop: "24px" }}>
          An illustrative story written with AI assistance. Not an account from a real person.
        </p>

        <section style={section}>
          <p style={lead}>{story.thought.lead}</p>
          <Paragraphs items={story.thought.body} />
        </section>

        <section style={section}>
          <Paragraphs items={story.surprised.body} />
        </section>

        <section style={section}>
          <p style={lead}>{story.failure.lead}</p>
          <Paragraphs items={story.failure.body} />
        </section>

        <section style={section}>
          <div
            style={{
              background: "var(--paper)",
              color: "var(--paper-ink)",
              border: "1px solid var(--card-border)",
              borderRadius: "12px",
              padding: "24px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.875rem",
              lineHeight: 1.6,
            }}
          >
            <h2
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
                paddingBottom: "12px",
                marginBottom: "16px",
                borderBottom: "1px dashed var(--paper-rule)",
              }}
            >
              {story.receipt.title}
            </h2>
            <Lines lines={story.receipt.lines} />
            {story.receipt.later && (
              <>
                <h3
                  style={{
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    margin: "20px 0 12px",
                    paddingTop: "16px",
                    borderTop: "1px dashed var(--paper-rule)",
                  }}
                >
                  {story.receipt.later.heading}
                </h3>
                <Lines lines={story.receipt.later.lines} />
              </>
            )}
            <p style={{ marginTop: "20px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>
              {story.receipt.note}
            </p>
          </div>
        </section>

        <section style={{ padding: "56px 0 40px" }}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 7vw, 3rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              marginBottom: "36px",
            }}
          >
            {story.lesson}
          </p>
          <Link href={`/path?from=${story.slug}`} className="btn-primary">
            See your next steps
          </Link>
        </section>

        <nav aria-label="Other trades" style={{ borderTop: "1px solid var(--card-border)", paddingTop: "24px" }}>
          <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "12px", fontWeight: 400 }}>
            Other trades
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: "10px 20px" }}>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/worker/${o.slug}`} style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--color-text-body)" }}>
                  {o.trade}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
