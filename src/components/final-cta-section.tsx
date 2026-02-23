"use client";

import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("lead-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* CTA Box */}
        <div className="relative border border-[var(--border)] p-12 lg:p-20 text-center">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--primary)]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--primary)]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--primary)]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--primary)]" />

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Stop Guessing?
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] mb-10 max-w-xl mx-auto">
            Apply for a free audit. We’ll tell you exactly what’s going on and
            whether we can help.
          </p>

          <button
            onClick={scrollToForm}
            className="group inline-flex items-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-semibold py-4 px-10 transition-all duration-300"
          >
            Get Your Free Audit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-semibold">Adsassin</span>
            </div>

            <p className="text-sm text-[var(--muted-foreground)] text-center">
              Google Ads management for e-commerce brands that want results, not
              excuses.
            </p>

            <div className="text-sm text-[var(--muted-foreground)]">
              &copy; 2025 Adsassin
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
