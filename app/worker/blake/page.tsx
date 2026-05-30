import Link from "next/link";

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

export default function BlakePage() {
  return (
    <div
      className="font-mono"
      style={{
        background:
          "linear-gradient(to top, #0D0B09 0%, #181008 45%, #261A0A 100%)",
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
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: `16px ${SIDE}`,
          background: "rgba(13, 11, 9, 0.88)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--card-border)",
        }}
      >
        <Link href="/explore" className="nav-back">
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
          Terrain // 03
        </span>
      </nav>

      {/* Content */}
      <main
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: `0 ${SIDE}`,
        }}
      >

        {/* 01 */}
        <section style={{ padding: "56px 0 52px" }}>
          <p style={sectionLabel}>Section 01 / What I Thought It Was</p>
          <p style={impact}>I thought electricity was the job. It wasn't.</p>
          <p style={bodyText}>
            Blake, 19, commercial electrician apprentice, Atlanta.
            First two weeks I moved conduit. Hundreds of feet of it.
            Up stairs, across floors, into gangboxes. Nobody handed
            me a wire. I thought I'd be learning the trade.
            I was learning whether I'd show up.
          </p>
        </section>

        <div style={rule} />

        {/* 02 */}
        <section style={{ padding: "56px 0 52px" }}>
          <p style={sectionLabel}>Section 02 / What Surprised Me</p>
          <p style={bodyText}>
            The journeyman didn't teach me. He tested me. Every
            task was a filter. Could I take direction without asking
            why? Could I find the gangbox without being shown twice?
            The teaching came later — when I proved I'd stay.
          </p>
        </section>

        <div style={rule} />

        {/* 03 */}
        <section style={{ padding: "56px 0 52px" }}>
          <p style={sectionLabel}>Section 03 / The Cost of Failure</p>
          <p style={impact}>
            A mistake here isn't a bug report. It's a crushed hand, a ruined shift, or worse.
          </p>
          <p style={bodyText}>
            I cross-threaded a coupling on my third week.
            Small mistake. The journeyman didn't yell.
            He made me take it apart and redo it. Twice.
            In front of the crew.
            That's how you learn what careful means.
          </p>
        </section>

        <div style={rule} />

        {/* 04 — receipt */}
        <section style={{ padding: "56px 0 52px" }}>
          <p style={sectionLabel}>Section 04 / What I Spent</p>
          <pre className="no-scrollbar" style={receiptStyle}>{`TOOL BELT + POUCH.............$85
KLEIN LINEMAN PLIERS...........$42
VOLTAGE TESTER + MULTIMETER....$65
RED WING BOOTS.................$180
FIRST MONTH GAS................$160
UNION DUES.....................$85`}</pre>
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
            >{`TOTAL BEFORE FIRST PAYCHECK....$617`}</pre>
          </span>
        </section>

        <div style={rule} />

        {/* 05 */}
        <section style={{ padding: "56px 0 52px" }}>
          <p style={sectionLabel}>Section 05 / The Lesson at 18</p>
          <p style={impactLarge}>Your body is the real tool.</p>
          <p style={bodyText}>
            If you lift with your back because you want to look
            tough in front of the crew, you'll be sitting in a
            truck by 28 while someone else does the real work.
            Learn to use the hoist.
            Protect your knees before they ask for it.
          </p>
        </section>

      </main>

      {/* CTA */}
      <div
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
            boxShadow: "0 2px 12px rgba(0, 71, 255, 0.22)",
          }}
        >
          Find your path
        </Link>
      </div>

      {/* Footer */}
      <footer
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
          href="/explore"
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
      </footer>

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
