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
        {/* Header - Centered */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[var(--primary)]" />
            <span className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider">
              Our Process
            </span>
            <div className="w-12 h-px bg-[var(--primary)]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            The Adsassin Approach
          </h2>
        </div>

        {/* Steps - Timeline Layout */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-[var(--border)] -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="relative bg-[var(--background)] p-8 lg:p-10 text-center">
                  {/* Large Number */}
                  <div className="relative inline-block mb-8">
                    <div className="w-20 h-20 rounded-full border-2 border-[var(--primary)] flex items-center justify-center bg-[var(--background)]">
                      <span className="text-3xl font-bold text-[var(--primary)]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 z-10">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-[var(--primary)] rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
