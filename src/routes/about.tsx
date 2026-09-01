import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { SeriesTabs } from "@/components/series-tabs";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ASCEND Career Development Club" },
      {
        name: "description",
        content:
          "ASCEND (Rise Higher) bridges academic theory and real-world executive execution at Aditya University.",
      },
      { property: "og:title", content: "About — ASCEND Career Development Club" },
      {
        property: "og:description",
        content:
          "Transforming passive learners into industry-ready leaders through career awareness, skills, and alumni connection.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const OBJECTIVES = [
  "Promote career awareness and prepare students for future opportunities through continuous interaction with professionals and experts.",
  "Help students understand industry expectations and improve technical and communication skills.",
  "Explore emerging technologies and learn from alumni and placement achievers.",
  "Strengthen collaboration between the university, industry, and alumni community.",
  "Create an environment that motivates students toward lifelong learning and professional excellence.",
];

function AboutPage() {
  return (
    <PageShell
      eyebrow="Strategic Vision"
      title="Rise"
      emphasis="higher."
      intro="ASCEND is the premier student-led career acceleration, leadership, and media platform at Aditya University — designed to bridge the gap between academic theory and real-world executive execution."
    >
      {/* Objectives */}
      <section className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="font-display text-3xl text-black sm:text-4xl" style={{ letterSpacing: "-1px" }}>
            Our <em className="text-[#6F6F6F]">Objectives</em>
          </h2>
          <p className="mt-4 text-base text-[#6F6F6F]">
            Everything ASCEND does maps back to five commitments.
          </p>
        </div>
        <ol className="space-y-6">
          {OBJECTIVES.map((o, i) => (
            <li key={o} className="flex gap-6 border-b border-black/10 pb-6">
              <span className="font-display text-2xl text-[#6F6F6F]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-black">{o}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Activities */}
      <section className="mt-24">
        <h2 className="font-display text-3xl text-black sm:text-4xl" style={{ letterSpacing: "-1px" }}>
          Major <em className="text-[#6F6F6F]">Activities</em>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[#6F6F6F]">
          Four to five career-oriented activities every month, preferably on
          Fridays or Saturdays — regular engagement throughout the academic
          year.
        </p>
        <div className="mt-12">
          <SeriesTabs />
        </div>
      </section>
    </PageShell>
  );
}
