import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SeriesTabs } from "@/components/series-tabs";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASCEND — Career Development Club | Aditya University" },
      {
        name: "description",
        content:
          "ASCEND (Rise Higher) — the premier student-led career acceleration, leadership, and media platform at Aditya University.",
      },
      { property: "og:title", content: "ASCEND — Career Development Club" },
      {
        property: "og:description",
        content:
          "Bridging academic theory and real-world executive execution. Rise Higher.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    title: "Communication",
    text: "High-impact speaking, storytelling, and executive presence — trained on camera and on stage.",
  },
  {
    title: "Leadership",
    text: "Direct touchpoints with industry pioneers, C-suite leaders, and global recruiters.",
  },
  {
    title: "Media Production",
    text: "A full podcast playbook — from guest acquisition to multi-channel distribution.",
  },
  {
    title: "Interview Craft",
    text: "Technical and HR interview capability, sharpened through real placement stories.",
  },
];

function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId = 0;
    const FADE = 0.5;

    const tick = () => {
      const { currentTime, duration } = video;
      if (duration > 0) {
        if (currentTime < FADE) {
          video.style.opacity = String(currentTime / FADE);
        } else if (duration - currentTime < FADE) {
          video.style.opacity = String((duration - currentTime) / FADE);
        } else {
          video.style.opacity = "1";
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 100);
    };

    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      {/* Hero */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background video layer */}
        <video
          ref={videoRef}
          src={VIDEO_URL}
          muted
          playsInline
          preload="auto"
          className="absolute z-0 h-full w-full object-cover"
          style={{ top: "300px", inset: "auto 0 0 0", opacity: 0 }}
        />
        {/* Gradient overlay on video */}
        <div
          className="absolute z-0 bg-gradient-to-b from-white via-transparent to-white"
          style={{ top: "300px", inset: "auto 0 0 0" }}
        />

        <SiteNav />

        <section
          className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center"
          style={{ paddingTop: "calc(8rem - 75px)" }}
        >
          <h1
            className="animate-fade-rise max-w-7xl font-display text-5xl font-normal text-black sm:text-7xl md:text-8xl"
            style={{ lineHeight: 0.95, letterSpacing: "-2.46px" }}
          >
            Beyond <em className="text-[#6F6F6F]">silence,</em>
            <br />
            we build <em className="text-[#6F6F6F]">the eternal.</em>
          </h1>
          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
            ASCEND x Aditya University
          </p>
          <Link
            to="/reach-us"
            className="animate-fade-rise-delay-2 mt-12 rounded-full bg-black px-14 py-5 text-base text-white transition-transform hover:scale-[1.03]"
          >
            Begin Journey
          </Link>
        </section>
      </div>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-[#6F6F6F]">
          What we build
        </p>
        <h2
          className="mt-6 max-w-3xl font-display text-4xl font-normal text-black sm:text-5xl"
          style={{ lineHeight: 1.02, letterSpacing: "-1.5px" }}
        >
          Four capabilities, <em className="text-[#6F6F6F]">one ascent.</em>
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-black/10 p-8 transition-transform hover:scale-[1.02]"
            >
              <h3 className="font-display text-2xl text-black">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#6F6F6F]">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Activity series tab section */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-[#6F6F6F]">
          4–5 sessions every month
        </p>
        <h2
          className="mt-6 max-w-3xl font-display text-4xl font-normal text-black sm:text-5xl"
          style={{ lineHeight: 1.02, letterSpacing: "-1.5px" }}
        >
          Signature <em className="text-[#6F6F6F]">series.</em>
        </h2>
        <div className="mt-12">
          <SeriesTabs />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-8 py-32 text-center">
        <h2
          className="mx-auto max-w-3xl font-display text-4xl font-normal text-black sm:text-6xl"
          style={{ lineHeight: 0.98, letterSpacing: "-1.8px" }}
        >
          Ready to <em className="text-[#6F6F6F]">rise higher?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#6F6F6F]">
          Join ASCEND and turn passive learning into industry-ready leadership.
        </p>
        <Link
          to="/reach-us"
          className="mt-10 inline-block rounded-full bg-black px-14 py-5 text-base text-white transition-transform hover:scale-[1.03]"
        >
          Reach Us
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
