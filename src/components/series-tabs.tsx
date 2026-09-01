import { useState } from "react";

export type Series = {
  id: string;
  label: string;
  title: string;
  description: string;
  benefits: string[];
};

export const SERIES: Series[] = [
  {
    id: "alumni",
    label: "Alumni Interaction",
    title: "Alumni Interaction Series",
    description:
      "Successful alumni from various organizations share their professional journey, industry experiences, career challenges, and achievements — with practical guidance on higher education, career planning, workplace culture, and growth.",
    benefits: [
      "Strengthen alumni-student interaction",
      "Provide real-world career guidance",
      "Inspire students through success stories",
    ],
  },
  {
    id: "placement",
    label: "Placement Achievers",
    title: "Placement Achievers Interview Series",
    description:
      "Students placed at reputed organizations walk through preparation strategies, interview experiences, learning resources, resume-building techniques, and the practical tips that made the difference.",
    benefits: [
      "Improve placement preparation",
      "Build confidence among students",
      "Share proven preparation strategies",
    ],
  },
  {
    id: "industry",
    label: "Industry Experts",
    title: "Industry Expert Talk Series",
    description:
      "Professionals and technical experts from leading organizations deliver sessions on emerging technologies, current trends, required skill sets, certifications, and future career opportunities — with live demos and Q&A.",
    benefits: [
      "Increase awareness of industry expectations",
      "Introduce students to emerging technologies",
      "Encourage industry-academia collaboration",
    ],
  },
  {
    id: "faculty",
    label: "Faculty Expertise",
    title: "Faculty Expertise Series",
    description:
      "Experienced faculty share specialized domain knowledge, research contributions, project experiences, and career guidance — opening doors to academic excellence and innovation inside the university.",
    benefits: [
      "Promote academic excellence",
      "Encourage research and innovation",
      "Strengthen faculty-student interaction",
    ],
  },
];

export function SeriesTabs() {
  const [active, setActive] = useState(SERIES[0].id);
  const current = SERIES.find((s) => s.id === active) ?? SERIES[0];

  return (
    <div>
      <div role="tablist" aria-label="Club series" className="flex flex-wrap gap-3">
        {SERIES.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={s.id === active}
            onClick={() => setActive(s.id)}
            className={`rounded-full border px-5 py-2.5 text-sm transition-all hover:scale-[1.03] ${
              s.id === active
                ? "border-black bg-black text-white"
                : "border-black/15 text-[#6F6F6F] hover:text-black"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        key={current.id}
        className="animate-fade-rise mt-10 grid gap-10 rounded-3xl border border-black/10 p-8 sm:p-12 md:grid-cols-[1.4fr_1fr]"
      >
        <div>
          <h3
            className="font-display text-3xl text-black sm:text-4xl"
            style={{ letterSpacing: "-1px" }}
          >
            {current.title}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-[#6F6F6F]">
            {current.description}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#6F6F6F]">
            Expected benefits
          </p>
          <ul className="mt-5 space-y-4">
            {current.benefits.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-black">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
