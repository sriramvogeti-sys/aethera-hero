import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function PageShell({
  eyebrow,
  title,
  emphasis,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <SiteNav />
      <header className="mx-auto max-w-7xl px-8 pt-16 pb-12">
        <p className="animate-fade-rise text-xs uppercase tracking-[0.25em] text-[#6F6F6F]">
          {eyebrow}
        </p>
        <h1
          className="animate-fade-rise mt-6 max-w-4xl font-display text-5xl font-normal text-black sm:text-6xl md:text-7xl"
          style={{ lineHeight: 0.95, letterSpacing: "-1.8px" }}
        >
          {title} {emphasis ? <em className="text-[#6F6F6F]">{emphasis}</em> : null}
        </h1>
        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
          {intro}
        </p>
      </header>
      <main className="animate-fade-rise-delay-2 mx-auto max-w-7xl px-8 pb-32">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
