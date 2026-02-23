import { Globe, Tag, Star, Package, ArrowUpRight } from "lucide-react";

const responsibilities = [
  {
    icon: Globe,
    title: "Website Quality",
    points: [
      "Mobile-optimized experience",
      "Fast load times",
      "Clear value proposition",
    ],
    note: "A broken funnel breaks everything else.",
  },
  {
    icon: Tag,
    title: "Pricing Strategy",
    points: [
      "Competitive positioning",
      "Healthy margins for paid traffic",
      "Clear pricing display",
    ],
    note: "We can't fix a pricing problem with ad spend.",
  },
  {
    icon: Star,
    title: "Social Proof",
    points: ["Customer reviews", "Testimonials", "Trust signals"],
    note: "People buy from brands they trust.",
  },
  {
    icon: Package,
    title: "Product Content",
    points: ["Quality imagery", "Compelling descriptions", "Complete product data"],
    note: "Ads can drive traffic, not desire.",
  },
];

export function ResponsibilitySection() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-[var(--card)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[var(--primary)]" />
            <span className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider">
              Shared Responsibility
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What We{"'"}ll Need From You
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            Great Google Ads results require more than just great ads. Here{"'"}s
            what needs to be in place on your end for us to succeed together.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {responsibilities.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[var(--background)] border border-[var(--border)] p-8 hover:border-[var(--primary)]/30 transition-all duration-300"
            >
              {/* Icon & Title Row */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <item.icon className="w-5 h-5 text-[var(--primary)]" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Points */}
              <ul className="space-y-3 mb-6">
                {item.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-center gap-3 text-[var(--muted-foreground)]"
                  >
                    <div className="w-1 h-1 rounded-full bg-[var(--primary)]" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p className="text-sm text-[var(--muted-foreground)]/70 italic pt-4 border-t border-[var(--border)]">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 border border-[var(--border)] bg-[var(--background)]">
          <p className="text-[var(--muted-foreground)]">
            <span className="text-[var(--foreground)] font-medium">Note:</span>{" "}
            We{"'"}ll help identify gaps during the audit. No judgment, just
            honest feedback on what needs attention.
          </p>
        </div>
      </div>
    </section>
  );
}
