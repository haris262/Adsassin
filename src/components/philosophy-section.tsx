export function PhilosophySection() {
  return (
    <section className="py-32 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[var(--primary)]" />
              <span className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">How We Work</h2>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              We’re direct and transparent in how we work. If something isn’t
              performing, we’ll say so. If Google Ads isn’t the right channel
              for your business, we’ll be upfront about that as well.
            </p>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              We focus on clear execution, accountability, and honest
              conversations. We keep things simple, stay focused on what
              matters, and make decisions based on what actually moves the
              business forward.
            </p>

            {/* Status Badge */}
            <div className="pt-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 border border-[var(--border)] bg-[var(--card)]">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">
                  Currently accepting new clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
