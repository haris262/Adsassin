"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
const SERVICE_ID = "service_wz3a3pa";
const TEMPLATE_ID = "template_ciyrovl";
const PUBLIC_KEY = "QyQqp4V-AQ3wrKD-n";

export function LeadFormSection() {
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Sending data as a plain object corresponds to variables in your EmailJS template
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        website: "",
        spend: "",
        frustration: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-32 px-8 lg:px-16 bg-[var(--card)]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[var(--primary)]" />
            <span className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider">
              Get Started
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Apply for a Free Audit
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-xl">
            We identify high-level issues and present a clear strategy for
            moving forward.
          </p>
        </div>

        {/* Modern Form */}
        <div className="relative bg-[var(--background)] border border-[var(--border)] p-8 lg:p-12">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[var(--primary)]" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[var(--primary)]" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[var(--primary)]" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[var(--primary)]" />

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1: Name & Email */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  required
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full bg-transparent border-b-2 border-[var(--border)] py-4 px-0 text-[var(--foreground)] placeholder-transparent focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                    formData.name || focused === "name"
                      ? "-top-2 text-xs text-[var(--primary)]"
                      : "top-4 text-[var(--muted-foreground)]"
                  }`}
                >
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  required
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full bg-transparent border-b-2 border-[var(--border)] py-4 px-0 text-[var(--foreground)] placeholder-transparent focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                    formData.email || focused === "email"
                      ? "-top-2 text-xs text-[var(--primary)]"
                      : "top-4 text-[var(--muted-foreground)]"
                  }`}
                >
                  Email Address
                </label>
              </div>
            </div>

            {/* Row 2: Website & Spend */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  required
                  type="url"
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  onFocus={() => setFocused("website")}
                  onBlur={() => setFocused(null)}
                  className="peer w-full bg-transparent border-b-2 border-[var(--border)] py-4 px-0 text-[var(--foreground)] placeholder-transparent focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Website"
                />
                <label
                  htmlFor="website"
                  className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                    formData.website || focused === "website"
                      ? "-top-2 text-xs text-[var(--primary)]"
                      : "top-4 text-[var(--muted-foreground)]"
                  }`}
                >
                  Website URL
                </label>
              </div>

              <div className="relative">
                <select
                  required
                  id="spend"
                  value={formData.spend}
                  onChange={(e) => handleChange("spend", e.target.value)}
                  onFocus={() => setFocused("spend")}
                  onBlur={() => setFocused(null)}
                  className={`w-full bg-transparent border-b-2 border-[var(--border)] py-4 px-0 focus:border-[var(--primary)] focus:outline-none transition-colors appearance-none cursor-pointer ${
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
                    className="w-5 h-5 text-[var(--muted-foreground)]"
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
            </div>

            {/* Frustration Textarea */}
            <div className="relative">
              <textarea
                required
                id="frustration"
                value={formData.frustration}
                onChange={(e) => handleChange("frustration", e.target.value)}
                onFocus={() => setFocused("frustration")}
                onBlur={() => setFocused(null)}
                rows={4}
                className="peer w-full bg-[var(--card)] border border-[var(--border)] py-4 px-4 text-[var(--foreground)] placeholder-transparent focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                placeholder="Frustration"
              />
              <label
                htmlFor="frustration"
                className={`absolute left-4 transition-all duration-200 pointer-events-none bg-[var(--card)] px-1 ${
                  formData.frustration || focused === "frustration"
                    ? "-top-2 text-xs text-[var(--primary)]"
                    : "top-4 text-[var(--muted-foreground)]"
                }`}
              >
                What{"'"}s your biggest frustration with Google Ads right now?
              </label>
            </div>

            {/* Submit Button & Status Messages */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-semibold py-4 px-10 transition-all duration-300 hover:gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Request My Free Audit
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </div>

              {/* Success/Error Feedback */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-4 rounded border border-green-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                  <p className="font-medium">
                    Application received. We'll be in touch shortly.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded border border-red-500/20">
                  <AlertCircle className="w-5 h-5" />
                  <p className="font-medium">
                    Something went wrong. Please try again later.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
