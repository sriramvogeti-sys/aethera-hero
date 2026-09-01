import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

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

const NAV_ITEMS = ["Home", "Studio", "About", "Journal", "Reach Us"];

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
    <div className="relative min-h-screen w-full overflow-hidden bg-white font-sans">
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

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <a href="/" className="font-display text-3xl tracking-tight text-black">
          Ascend<sup className="text-sm">®</sup>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm transition-colors hover:text-black ${
                item === "Home" ? "text-black" : "text-[#6F6F6F]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="rounded-full bg-black px-6 py-2.5 text-sm text-white transition-transform hover:scale-[1.03]"
        >
          Begin Journey
        </a>
      </nav>

      {/* Hero */}
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
          ASCEND is Aditya University's career acceleration, leadership, and
          media platform — building platforms for brilliant minds, fearless
          makers, and thoughtful souls. Through the noise, we craft havens for
          deep work and pure flows.
        </p>
        <a
          href="#"
          className="animate-fade-rise-delay-2 mt-12 rounded-full bg-black px-14 py-5 text-base text-white transition-transform hover:scale-[1.03]"
        >
          Begin Journey
        </a>
      </section>
    </div>
  );
}
