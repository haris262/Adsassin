export function PositioningSection() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-[var(--card)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Large Statement */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
              We don{"'"}t just
              <br />
              <span className="text-[var(--primary)]">&ldquo;run ads&rdquo;</span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="space-y-6">
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              We build Google Ads systems designed to scale with your business,
              not against it. That means clarity, structure, and strategy, not
              guesswork.
            </p>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              We{"'"}re not a set-it-and-forget-it agency. We{"'"}re in your corner,
              actively managing, testing, and optimizing to hit real business goals.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-3 text-sm">
                <div className="w-8 h-px bg-[var(--primary)]" />
                <span className="text-[var(--muted-foreground)] uppercase tracking-wider">
                  Built different
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
