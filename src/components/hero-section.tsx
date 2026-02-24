"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight, CheckCircle2 } from "lucide-react";
import logo from "../../public/Adsassin - Logo - Horizontal - Negative - White 1.png";

export function HeroSection() {
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    spend: "",
    frustration: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="lead-form" className="min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center px-8 lg:px-16 xl:px-24 py-16 lg:py-0 order-2 lg:order-1">
        <div className="mb-12">
          <img
            src={logo.src ?? logo}
            alt="Adsassin Logo"
            className="h-12 w-auto"
          />
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-[var(--primary)]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--primary)] uppercase">
              Google Ads for E-commerce
            </span>
            <div className="w-8 h-px bg-[var(--primary)]" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
          Google Ads That
          <br />
          <span className="text-[var(--primary)]">Stop Feeling</span>
          <br />
          Like a Gamble
        </h1>

        <p className="text-lg xl:text-xl text-[var(--muted-foreground)] leading-relaxed mb-10 max-w-lg">
          For e-commerce brands tired of inconsistent performance, unclear
          results, and wasted spend.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <button
            onClick={() => {
              document
                .getElementById("hero-form")
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="group inline-flex items-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 lg:hidden"
          >
            Get Free Audit
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>
          <span className="text-sm text-[var(--muted-foreground)] lg:hidden">
            No commitment required
          </span>
        </div>

        <div className="flex items-center justify-center gap-8 pt-8 border-t border-[var(--border)] w-full max-w-md">
          <div>
            <p className="text-2xl font-bold">$40M+</p>
            <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">
              Ad Spend Managed
            </p>
          </div>
          <div className="w-px h-10 bg-[var(--border)]" />
          <div>
            <p className="text-2xl font-bold">100+</p>
            <p className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">
              Brands Helped
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen relative order-1 lg:order-2 bg-[var(--card)] flex items-center justify-center px-6 py-16 lg:px-12 xl:px-16">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--primary)] via-[var(--primary)]/50 to-transparent hidden lg:block" />

        <div id="hero-form" className="w-full max-w-lg">
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-10 h-px bg-[var(--primary)]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[var(--primary)] uppercase">
                Get Started
              </span>
              <div className="w-10 h-px bg-[var(--primary)]" />
            </div>
            <h2 className="text-2xl xl:text-3xl font-bold mb-2">
              Get Free Audit
            </h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              No pressure. No pitch. Just honest feedback.
            </p>
          </div>

          <div className="relative bg-[var(--background)] border border-[var(--border)] p-6 lg:p-8">
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[var(--primary)]" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-[var(--primary)]" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-[var(--primary)]" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[var(--primary)]" />

            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full bg-transparent border-b-2 border-[var(--border)] py-3 px-0 text-[var(--foreground)] placeholder-transparent focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                    formData.name || focused === "name"
                      ? "-top-2 text-xs text-[var(--primary)]"
                      : "top-3 text-[var(--muted-foreground)]"
                  }`}
                >
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full bg-transparent border-b-2 border-[var(--border)] py-3 px-0 text-[var(--foreground)] placeholder-transparent focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                    formData.email || focused === "email"
                      ? "-top-2 text-xs text-[var(--primary)]"
                      : "top-3 text-[var(--muted-foreground)]"
                  }`}
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="url"
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  onFocus={() => setFocused("website")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full bg-transparent border-b-2 border-[var(--border)] py-3 px-0 text-[var(--foreground)] placeholder-transparent focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Website"
                />
                <label
                  htmlFor="website"
                  className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                    formData.website || focused === "website"
                      ? "-top-2 text-xs text-[var(--primary)]"
                      : "top-3 text-[var(--muted-foreground)]"
                  }`}
                >
                  Website URL
                </label>
              </div>

              <div className="relative">
                <select
                  id="spend"
                  value={formData.spend}
                  onChange={(e) => handleChange("spend", e.target.value)}
                  onFocus={() => setFocused("spend")}
                  onBlur={() => setFocused(null)}
                  className={`w-full bg-transparent border-b-2 border-[var(--border)] py-3 px-0 focus:border-[var(--primary)] focus:outline-none transition-colors appearance-none cursor-pointer ${
                    formData.spend
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted-foreground)]"
                  }`}
                >
                  <option value="" className="bg-[var(--card)]">
                    Monthly Ad Spend
                  </option>
                  <option value="under-5k" className="bg-[var(--card)]">
                    Under $5,000
                  </option>
                  <option value="5k-15k" className="bg-[var(--card)]">
                    $5,000 - $15,000
                  </option>
                  <option value="15k-50k" className="bg-[var(--card)]">
                    $15,000 - $50,000
                  </option>
                  <option value="50k-plus" className="bg-[var(--card)]">
                    $50,000+
                  </option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-[var(--muted-foreground)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="frustration"
                  value={formData.frustration}
                  onChange={(e) => handleChange("frustration", e.target.value)}
                  onFocus={() => setFocused("frustration")}
                  onBlur={() => setFocused(null)}
                  rows={3}
                  className="peer w-full bg-[var(--card)] border border-[var(--border)] py-3 px-4 text-[var(--foreground)] placeholder-transparent focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                  placeholder="Frustration"
                />
                <label
                  htmlFor="frustration"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none bg-[var(--card)] px-1 ${
                    formData.frustration || focused === "frustration"
                      ? "-top-2 text-xs text-[var(--primary)]"
                      : "top-3 text-[var(--muted-foreground)] text-sm"
                  }`}
                >
                  Biggest frustration with Google Ads?
                </label>
              </div>

              <div className="flex flex-col items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-semibold py-4 px-10 transition-all duration-300 hover:gap-4"
                >
                  Request My Free Audit
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
