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
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[var(--primary)]" />
            <span className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider">
              The Problem
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold max-w-2xl">
            Why Google Ads Feel Hard to Scale
          </h2>
        </div>

        {/* Pain Points - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-[var(--background)] p-8 lg:p-12 group hover:bg-[var(--card)] transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full border border-[var(--primary)]/30 flex items-center justify-center shrink-0 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]/10 transition-colors">
                  <X className="w-4 h-4 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">
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
