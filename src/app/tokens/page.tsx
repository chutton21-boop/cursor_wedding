import Link from "next/link";

export default function TokensPage() {
  return (
    <main className="min-h-screen bg-bg font-body text-text">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link
          href="/"
          className="text-body-s text-mutedText hover:text-text mb-8 inline-block"
        >
          ← Back
        </Link>

        <h1 className="font-heading text-heading-l mb-12">Token preview</h1>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="font-heading text-heading-s mb-6">Colors</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-24 rounded border border-border bg-bg" />
              <span className="text-body-s text-mutedText">bg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-24 rounded border border-border bg-surface" />
              <span className="text-body-s text-mutedText">surface</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-24 rounded bg-text" />
              <span className="text-body-s text-mutedText">text</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-24 rounded bg-muted" />
              <span className="text-body-s text-mutedText">muted</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-24 rounded border-2 border-border" />
              <span className="text-body-s text-mutedText">border</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-24 rounded bg-accent" />
              <span className="text-body-s text-mutedText">accent</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-24 rounded bg-accentHover" />
              <span className="text-body-s text-mutedText">accentHover</span>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="font-heading text-heading-s mb-6">Typography</h2>
          <div className="space-y-6 border border-border rounded p-6 bg-surface">
            <div>
              <p className="font-heading text-heading-xl text-text">
                Heading XL
              </p>
              <p className="text-body-s text-mutedText mt-1">64px · Cormorant Upright</p>
            </div>
            <div>
              <p className="font-heading text-heading-l text-text">Heading L</p>
              <p className="text-body-s text-mutedText mt-1">64px · Cormorant Upright</p>
            </div>
            <div>
              <p className="font-heading text-heading-s text-text">Heading S</p>
              <p className="text-body-s text-mutedText mt-1">32px · Cormorant Upright</p>
            </div>
            <div>
              <p className="font-heading text-heading-xs text-text">Heading XS</p>
              <p className="text-body-s text-mutedText mt-1">16px · Cormorant Upright</p>
            </div>
            <div>
              <p className="text-body-m text-text">
                Body M — The quick brown fox jumps over the lazy dog.
              </p>
              <p className="text-body-s text-mutedText mt-1">16px · DM Sans</p>
            </div>
            <div>
              <p className="text-body-s text-mutedText">
                Body S — The quick brown fox jumps over the lazy dog.
              </p>
              <p className="text-body-s text-mutedText mt-1">12px · DM Sans</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="font-heading text-heading-s mb-6">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded border border-border bg-bg px-6 py-3 text-body-m text-text hover:bg-muted"
            >
              Secondary
            </button>
            <button
              type="button"
              className="rounded bg-accent px-6 py-3 text-body-m text-bg hover:bg-accentHover"
            >
              Primary
            </button>
            <Link
              href="#"
              className="inline-block rounded border border-text px-6 py-3 text-body-m text-text hover:bg-accent hover:text-bg"
            >
              Outline
            </Link>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="font-heading text-heading-s mb-6">Cards</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded border border-border bg-surface p-6">
              <h3 className="font-heading text-heading-xs text-text mb-2">
                Card title
              </h3>
              <p className="text-body-s text-mutedText">
                Surface background, border token. No shadow in design system.
              </p>
            </div>
            <div className="rounded border border-border bg-bg p-6">
              <h3 className="font-heading text-heading-xs text-text mb-2">
                Card on bg
              </h3>
              <p className="text-body-s text-mutedText">
                Same border, bg background for contrast.
              </p>
            </div>
          </div>
        </section>

        {/* Borders */}
        <section className="mb-16">
          <h2 className="font-heading text-heading-s mb-6">Borders</h2>
          <div className="space-y-4">
            <div className="border border-border rounded p-4 text-body-s text-mutedText">
              border (1px)
            </div>
            <div className="border-2 border-border rounded p-4 text-body-s text-mutedText">
              border-2
            </div>
            <div className="border-t border-border pt-4 text-body-s text-mutedText">
              border-t (divider)
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section>
          <h2 className="font-heading text-heading-s mb-6">Shadows</h2>
          <p className="text-body-m text-mutedText">
            No shadow token in Figma variables. Cards above use border only.
          </p>
        </section>
      </div>
    </main>
  );
}
