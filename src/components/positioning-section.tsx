export function PositioningSection() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-[var(--card)]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Centered Eyebrow with red lines */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-[var(--primary)]" />
          <span className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider">
            Built Different
          </span>
          <div className="w-12 h-px bg-[var(--primary)]" />
        </div>

        {/* Main Statement */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
          We don{"'"}t just{" "}
          <span className="text-[var(--primary)]">&ldquo;run ads&rdquo;</span>
        </h2>

        {/* Description */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg lg:text-xl text-[var(--muted-foreground)] leading-relaxed">
            We build Google Ads systems designed to scale with your business,
            not against it. That means clarity, structure, and strategy, not
            guesswork.
          </p>
          <p className="text-lg lg:text-xl text-[var(--muted-foreground)] leading-relaxed">
            We{"'"}re not a set-it-and-forget-it agency. We{"'"}re in your
            corner, actively managing, testing, and optimizing to hit real
            business goals.
          </p>
        </div>
      </div>
    </section>
  );
}
