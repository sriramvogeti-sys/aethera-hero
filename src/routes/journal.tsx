import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — ASCEND" },
      {
        name: "description",
        content:
          "Notes from the climb — career strategy, interview craft, and industry insight from the ASCEND community.",
      },
      { property: "og:title", content: "Journal — ASCEND" },
      {
        property: "og:description",
        content:
          "Career strategy, interview craft, and industry insight from Aditya University's ASCEND club.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JournalPage,
});

const POSTS = [
  {
    tag: "Career Strategy",
    title: "From Campus to C-Suite: What Leaders Actually Look For",
    excerpt:
      "Distilled hiring insights from our first industry conversations — the signals that matter more than your GPA.",
    date: "Coming soon",
  },
  {
    tag: "Interview Craft",
    title: "Anatomy of a Placement: A 40-LPA Preparation Timeline",
    excerpt:
      "A placement achiever's week-by-week breakdown — resources, mocks, resume iterations, and the mistakes to skip.",
    date: "Coming soon",
  },
  {
    tag: "Media",
    title: "Why We Roast Resumes Live On Camera",
    excerpt:
      "The pedagogy behind the Resume Roast: anonymous, honest, and immediately actionable feedback at scale.",
    date: "Coming soon",
  },
];

function JournalPage() {
  return (
    <PageShell
      eyebrow="The Journal"
      title="Notes from"
      emphasis="the climb."
      intro="Essays, episode recaps, and playbooks from the ASCEND community — career strategy, interview craft, and the craft of building in public."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {POSTS.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-3xl border border-black/10 p-8 transition-transform hover:scale-[1.02]"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[#6F6F6F]">{p.tag}</p>
            <h2 className="mt-4 font-display text-2xl text-black" style={{ letterSpacing: "-0.5px" }}>
              {p.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6F6F6F]">{p.excerpt}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#6F6F6F]">{p.date}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-3xl bg-black/[0.03] p-10 text-center sm:p-16">
        <h2 className="font-display text-3xl text-black sm:text-4xl" style={{ letterSpacing: "-1px" }}>
          Get the journal <em className="text-[#6F6F6F]">first.</em>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[#6F6F6F]">
          New episodes, session recaps, and career playbooks — straight to your
          inbox. Reach out and we'll add you to the list.
        </p>
        <Link
          to="/reach-us"
          className="mt-8 inline-block rounded-full bg-black px-10 py-4 text-sm text-white transition-transform hover:scale-[1.03]"
        >
          Reach Us
        </Link>
      </div>
    </PageShell>
  );
}
