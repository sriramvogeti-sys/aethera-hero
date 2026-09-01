import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl tracking-tight text-black">
            Ascend<sup className="text-xs">®</sup>
          </p>
          <p className="mt-2 text-sm text-[#6F6F6F]">
            Career Development Club — Aditya University.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-[#6F6F6F]">
          <Link to="/studio" className="transition-colors hover:text-black">
            Studio
          </Link>
          <Link to="/about" className="transition-colors hover:text-black">
            About
          </Link>
          <Link to="/journal" className="transition-colors hover:text-black">
            Journal
          </Link>
          <Link to="/reach-us" className="transition-colors hover:text-black">
            Reach Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
