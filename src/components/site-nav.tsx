import { Link } from "@tanstack/react-router";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Studio", to: "/studio" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
  { label: "Reach Us", to: "/reach-us" },
] as const;

export function SiteNav() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
      <Link to="/" className="font-display text-3xl tracking-tight text-black">
        Ascend<sup className="text-sm">®</sup>
      </Link>
      <div className="hidden items-center gap-8 md:flex">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            activeProps={{ className: "text-black" }}
            inactiveProps={{ className: "text-[#6F6F6F]" }}
            className="text-sm transition-colors hover:text-black"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link
        to="/reach-us"
        className="rounded-full bg-black px-6 py-2.5 text-sm text-white transition-transform hover:scale-[1.03]"
      >
        Begin Journey
      </Link>
    </nav>
  );
}
