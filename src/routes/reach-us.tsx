import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/reach-us")({
  head: () => ({
    meta: [
      { title: "Reach Us — ASCEND" },
      {
        name: "description",
        content:
          "Join ASCEND, Aditya University's career development club — membership, guest appearances, and partnerships.",
      },
      { property: "og:title", content: "Reach Us — ASCEND" },
      {
        property: "og:description",
        content:
          "Begin your journey with ASCEND — membership, guest appearances, and industry partnerships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReachUsPage,
});

const CHANNELS = [
  { title: "Join the Club", desc: "Students of Aditya University — become a member and rise with us." },
  { title: "Be a Guest", desc: "Industry leaders, alumni, and faculty — share your journey on the ASCEND podcast." },
  { title: "Partner With Us", desc: "Recruiters and organizations — access Aditya's brightest emerging talent." },
];

function ReachUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell
      eyebrow="Reach Us"
      title="Begin your"
      emphasis="ascent."
      intro="Whether you're a student ready to grow, a leader ready to give back, or an organization looking for talent — the door is open."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {CHANNELS.map((c) => (
          <div key={c.title} className="rounded-3xl border border-black/10 p-8">
            <h2 className="font-display text-2xl text-black">{c.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6F6F6F]">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-12 rounded-3xl border border-black/10 p-8 sm:p-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-black" style={{ letterSpacing: "-1px" }}>
            Say <em className="text-[#6F6F6F]">hello.</em>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#6F6F6F]">
            Tell us who you are and what you're looking for. The team responds
            within a couple of days.
          </p>
          <div className="mt-8 space-y-3 text-sm text-[#6F6F6F]">
            <p>Career Development Club, Aditya University</p>
            <p>Sessions: Fridays &amp; Saturdays</p>
            <p>4–5 activities every month</p>
          </div>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center rounded-3xl bg-black/[0.03] p-10 text-center">
            <h3 className="font-display text-3xl text-black">Message received.</h3>
            <p className="mt-3 text-sm text-[#6F6F6F]">
              Thank you — the ASCEND team will reach out soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-[#6F6F6F]">
                Name
              </label>
              <input
                id="name"
                required
                className="mt-2 w-full rounded-full border border-black/15 bg-transparent px-5 py-3 text-sm text-black outline-none transition-colors focus:border-black"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-[#6F6F6F]">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 w-full rounded-full border border-black/15 bg-transparent px-5 py-3 text-sm text-black outline-none transition-colors focus:border-black"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="interest" className="text-xs uppercase tracking-[0.2em] text-[#6F6F6F]">
                I'm here to
              </label>
              <select
                id="interest"
                className="mt-2 w-full rounded-full border border-black/15 bg-transparent px-5 py-3 text-sm text-black outline-none transition-colors focus:border-black"
                defaultValue="Join the club"
              >
                <option>Join the club</option>
                <option>Be a podcast guest</option>
                <option>Partner with ASCEND</option>
                <option>Something else</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-[#6F6F6F]">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-2 w-full resize-none rounded-3xl border border-black/15 bg-transparent px-5 py-4 text-sm text-black outline-none transition-colors focus:border-black"
                placeholder="Tell us a little about yourself…"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-black px-10 py-4 text-sm text-white transition-transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </PageShell>
  );
}
