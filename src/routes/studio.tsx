import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — ASCEND Media" },
      {
        name: "description",
        content:
          "The ASCEND podcast and media blueprint — 15 core on-camera segments, from Resume Roasts to LeetCode Duels.",
      },
      { property: "og:title", content: "Studio — ASCEND Media" },
      {
        property: "og:description",
        content:
          "Authentic conversations with industry pioneers, repurposed across Shorts, Reels, and LinkedIn.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioPage,
});

const SEGMENTS = [
  { name: "Wall of Fame", desc: "The invitee leaves a lesson, skill, or signature — a lasting guest legacy." },
  { name: "1-Minute Challenge", desc: "A complex tech topic explained in 60 seconds. Simple, educational, short-form." },
  { name: "Mystery Box", desc: "The guest connects a random object to their career journey. Creativity and personality." },
  { name: "Resume Roast", desc: "Live, anonymous critique of a student resume. Practical career guidance." },
  { name: "Rapid Fire", desc: "Fast either/or and industry questions. Fun, spontaneous, highly engaging." },
  { name: "LeetCode Duel", desc: "Guest versus student, live problem-solving under pressure." },
];

const PLAYBOOK = [
  { step: "01", title: "Guest Acquisition", desc: "Value-first outreach focused on campus impact, brand visibility, and student talent access." },
  { step: "02", title: "Guest Experience", desc: "Professional hospitality, pre-show briefings, and personalized coordination." },
  { step: "03", title: "Authentic Conversations", desc: "Real struggles, failures, career journeys, and hiring insights — not PR scripts." },
  { step: "04", title: "Multi-Channel Distribution", desc: "Episodes repurposed into Shorts, Reels, LinkedIn content, and social formats." },
  { step: "05", title: "Long-Term Networking", desc: "Relationships maintained after episodes — mentors, advisors, industry partners." },
];

function StudioPage() {
  return (
    <PageShell
      eyebrow="ASCEND Studio"
      title="Authentic conversations,"
      emphasis="engineered."
      intro="The Studio is ASCEND's media arm — a strategic podcast playbook that brings industry pioneers, C-suite leaders, and distinguished alumni into direct conversation with students."
    >
      {/* Playbook */}
      <section>
        <h2 className="font-display text-3xl text-black sm:text-4xl" style={{ letterSpacing: "-1px" }}>
          The Podcast <em className="text-[#6F6F6F]">Playbook</em>
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLAYBOOK.map((p) => (
            <div key={p.step} className="rounded-3xl border border-black/10 p-8 transition-transform hover:scale-[1.02]">
              <p className="font-display text-lg text-[#6F6F6F]">{p.step}</p>
              <h3 className="mt-3 font-display text-2xl text-black">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6F6F6F]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Segments */}
      <section className="mt-24">
        <h2 className="font-display text-3xl text-black sm:text-4xl" style={{ letterSpacing: "-1px" }}>
          On-Camera <em className="text-[#6F6F6F]">Segments</em>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[#6F6F6F]">
          Core interactive formats from the ASCEND media blueprint — built for
          insight, personality, and replay value.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SEGMENTS.map((s) => (
            <div key={s.name} className="rounded-3xl bg-black/[0.03] p-8 transition-transform hover:scale-[1.02]">
              <h3 className="font-display text-2xl text-black">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6F6F6F]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
