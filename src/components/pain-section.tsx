import { X } from "lucide-react";

const painPoints = [
  {
    title: "Inconsistent Results",
    description: "Great one month, disaster the next. No clear reason why.",
  },
  {
    title: "Zero Visibility",
    description: "You're paying but have no idea what's actually happening.",
  },
  {
    title: "Wasted Budget",
    description: "Money disappearing into campaigns that don't convert.",
  },
  {
    title: "No Real Strategy",
    description: "Just tactics without a coherent plan for growth.",
  },
];

export function PainSection() {
  return (
    <section className="py-32 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header - Centered */}
        <div className="mb-20 text-center">
          {/* Centered Eyebrow with red lines */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[var(--primary)]" />
            <span className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider">
              The Problem
            </span>
            <div className="w-12 h-px bg-[var(--primary)]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Why Google Ads Feel Hard to Scale
          </h2>
        </div>

        {/* Pain Points - Bigger Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-[var(--card)] border border-[var(--border)] p-12 lg:p-16 hover:border-[var(--primary)]/40 transition-all duration-300 min-h-[280px] flex flex-col justify-center"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[var(--primary)]/20 group-hover:border-[var(--primary)]/40 transition-colors" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[var(--primary)]/20 group-hover:border-[var(--primary)]/40 transition-colors" />

              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-20 h-20 rounded-full border-2 border-[var(--primary)]/30 flex items-center justify-center shrink-0 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]/10 transition-all duration-300">
                  <X className="w-8 h-8 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                    {point.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed text-lg lg:text-xl">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
