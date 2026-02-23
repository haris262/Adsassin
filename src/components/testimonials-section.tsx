"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Naid has been, without a doubt, the best Google Ads manager I’ve ever worked with, not just as an agency partner, but as a genuine friend throughout the entire process of growing my business.\n" +
      "\n" +
      "Before working with Naid, I was completely lost. I wasn’t generating consistent sales, and every agency I spoke to was charging $4,000+ per month with mediocre results at best. It felt like I was burning money with no clear direction.\n" +
      "\n" +
      "Then a friend recommended Naid,  and I honestly couldn’t be more grateful.\n" +
      "\n" +
      "We started working together back in August, and within just a couple of months, we scaled to $800K months. But what really sets him apart isn’t just the numbers, it’s the level of care, strategy, and dedication he brings. He goes above and beyond in every aspect, constantly optimizing, communicating, and thinking long term about the business. He would help me out with advice that I wouldn’t even realize most of the time.\n" +
      "\n" +
      "He’s one of the best people I’ve had the opportunity to work with, and I would strongly recommend him to anyone serious about scaling with Google Ads.\n" +
      "\n" +
      "If you’re looking for a real partner, not just another agency, Naid is your guy.\n",
    name: "Sarah Mitchell",
    brand: "Luxe Home Goods",
    result: "133% ROAS increase",
  },
  {
    quote:
      "Naid is one of a kind. He doesn’t just help you manage your ads. He genuinely cares about you, your business, and even helps you find opportunities, and you feel as if he is a partner in the trenches with you helping you succeed. I couldn’t ask for a better Ad agency. Adsassin is the way to go if you are looking to scale with 1:1 tailored support! ",
    name: "Marcus Chen",
    brand: "TechFit Apparel",
    result: "2x conversions",
  },
];

function TestimonialCard({ testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-8 p-8 lg:p-12 bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/20 transition-colors">
      <div>
        <blockquote
          className={`text-xl lg:text-xl font-light leading-relaxed text-[var(--foreground)] whitespace-pre-wrap ${
            !isExpanded ? "line-clamp-4" : ""
          }`}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-sm font-semibold text-[var(--primary)] hover:underline focus:outline-none"
        >
          {isExpanded ? "View Less" : "View All"}
        </button>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <p className="font-semibold text-lg">{testimonial.name}</p>
          <p className="text-[var(--muted-foreground)]">{testimonial.brand}</p>
        </div>
        <div className="mt-6 lg:mt-0">
          <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold">
            {testimonial.result}
          </span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-[var(--card)]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[var(--primary)]" />
            <span className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider">
              Results
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">What Clients Say</h2>
        </div>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
