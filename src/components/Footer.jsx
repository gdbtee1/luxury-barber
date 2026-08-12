import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  Scissors,
} from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2A211C] text-[#F4EBDD]">
      <div className="section-shell py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 border-b border-[#F4EBDD]/12 pb-10 lg:grid-cols-[1.25fr_0.7fr_0.7fr]">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D7A84A] text-[#2A211C]">
                <Scissors size={18} strokeWidth={1.8} />
              </div>

              <span className="font-['DM_Serif_Display'] text-2xl tracking-[0.03em]">
                THE CHAIR
              </span>
            </a>

            <h2 className="mt-8 max-w-xl font-['DM_Serif_Display'] text-[clamp(3.5rem,7vw,6.4rem)] leading-[0.83] tracking-[-0.055em]">
              Stay sharp.
              <span className="block italic text-[#B85C3C]">
                Stay ready.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm font-medium leading-7 text-[#F4EBDD]/50 sm:text-base">
              Modern grooming, considered properly. Built for men who care
              about consistency, detail, and how they show up.
            </p>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#D7A84A]">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-4">
              {[
                ["Services", "#services"],
                ["Choose Your Cut", "#style-selector"],
                ["The Ritual", "#ritual"],
                ["Barbers", "#barbers"],
                ["Membership", "#membership"],
                ["Book", "#booking"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="w-fit text-sm font-medium text-[#F4EBDD]/58 transition-colors hover:text-[#D7A84A]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#D7A84A]">
              Visit
            </p>

            <div className="mt-5 space-y-4 text-sm font-medium text-[#F4EBDD]/58">
              <a
                href="tel:+13135550147"
                className="flex items-start gap-3 transition-colors hover:text-[#D7A84A]"
              >
                <Phone size={17} strokeWidth={1.8} className="mt-0.5 shrink-0" />
                <span>(313) 555-0147</span>
              </a>

              <a
                href="mailto:hello@thechair.com"
                className="flex items-start gap-3 transition-colors hover:text-[#D7A84A]"
              >
                <Mail size={17} strokeWidth={1.8} className="mt-0.5 shrink-0" />
                <span>hello@thechair.com</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={17} strokeWidth={1.8} className="mt-0.5 shrink-0" />

                <span>
                  1218 Woodward Ave
                  <br />
                  Detroit, MI
                </span>
              </div>

              <p className="pt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F4EBDD]/35">
                Tue–Sat · By Appointment
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium text-[#F4EBDD]/35">
            © {new Date().getFullYear()} The Chair Grooming Club.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-[#F4EBDD]/35">
            <a href="#" className="transition-colors hover:text-[#F4EBDD]">
              Privacy
            </a>

            <a href="#" className="transition-colors hover:text-[#F4EBDD]">
              Accessibility
            </a>

            <a
              href="#top"
              className="inline-flex items-center gap-2 border border-[#F4EBDD]/25 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] transition-all hover:bg-[#F4EBDD] hover:text-[#2A211C]"
            >
              Back to top
              <ArrowUp size={14} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-[#F4EBDD]/15 bg-[#D7A84A] py-3 text-[#2A211C]">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0">
              {Array.from({ length: 8 }).map((_, index) => (
                <span
                  key={index}
                  className="flex items-center whitespace-nowrap px-7 text-[10px] font-bold uppercase tracking-[0.18em]"
                >
                  The Chair
                  <span className="ml-7 text-[#5C3A4A]">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
