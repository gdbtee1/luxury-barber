import { Menu, Scissors, X } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    ["Services", "#services"],
    ["The Ritual", "#ritual"],
    ["Barbers", "#barbers"],
    ["Membership", "#membership"],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "border-b border-[#2A211C]/15 bg-[#F4EBDD]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="section-shell flex h-[78px] items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-[#2A211C] bg-[#D7A84A]">
            <Scissors size={17} strokeWidth={1.8} />
          </div>

          <span className="font-['DM_Serif_Display'] text-xl tracking-[0.03em]">
            THE CHAIR
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2A211C]/65 transition-colors hover:text-[#B85C3C]"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="editorial-button editorial-button-primary hidden lg:inline-flex"
        >
          Reserve Your Chair
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="flex h-11 w-11 items-center justify-center border-[1.5px] border-[#2A211C] bg-[#F4EBDD] lg:hidden"
        >
          {open ? (
            <X size={20} strokeWidth={2} />
          ) : (
            <Menu size={20} strokeWidth={2} />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden bg-[#F4EBDD] transition-[max-height] duration-300 lg:hidden ${
          open
            ? "max-h-[420px] border-t border-[#2A211C]/15"
            : "max-h-0"
        }`}
      >
        <div className="section-shell flex flex-col py-5">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-[#2A211C]/12 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#2A211C]/65"
            >
              {label}
            </a>
          ))}

          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="editorial-button editorial-button-primary mt-5"
          >
            Reserve Your Chair
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
