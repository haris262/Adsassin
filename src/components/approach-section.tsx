const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We audit your current account, identify what's broken, and map out exactly what needs to change.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We build a structured, scalable campaign system based on your business goals and margins.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "Ongoing management focused on profitable growth, not just clicks and impressions.",
  },
];

export function ApproachSection() {
  return (
    <section className="py-32 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[var(--primary)]" />
            <span className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            The Adsassin Approach
          </h2>
        </div>

        {/* Steps - Timeline Style */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-[var(--border)] hidden lg:block" />

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative grid lg:grid-cols-[56px_1fr] gap-8 pb-16 last:pb-0"
              >
                {/* Number Circle */}
                <div className="hidden lg:flex w-14 h-14 rounded-full border-2 border-[var(--border)] bg-[var(--background)] items-center justify-center relative z-10">
                  <span className="text-sm font-bold text-[var(--primary)]">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:pt-2">
                  <div className="flex items-center gap-3 mb-4 lg:hidden">
                    <div className="w-10 h-10 rounded-full border-2 border-[var(--border)] flex items-center justify-center">
                      <span className="text-xs font-bold text-[var(--primary)]">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 hidden lg:block">
                    {step.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed max-w-xl text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
