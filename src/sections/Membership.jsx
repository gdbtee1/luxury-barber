import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Crown,
  Check,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const benefits = [
  "Priority booking access",
  "1 signature cut every month",
  "Beard detailing included",
  "Complimentary neck cleanups",
  "Preferred member pricing",
  "Private event invites",
];

function Membership() {
  return (
    <section
      id="membership"
      className="relative overflow-hidden border-b border-[#2A211C]/15 bg-[#9FAF95]"
    >
      <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#D7A84A]/55" />
      <div className="absolute -right-24 bottom-[-80px] h-72 w-72 rounded-full bg-[#5C3A4A]/25" />

      <div className="section-shell relative z-10 py-16 sm:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#5C3A4A]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#5C3A4A] sm:text-xs">
                The Membership
              </span>
            </div>

            <h2 className="mt-6 max-w-[760px] font-['DM_Serif_Display'] text-[clamp(3.8rem,8vw,7.3rem)] leading-[0.83] tracking-[-0.055em]">
              Stay sharp
              <span className="block italic text-[#F4EBDD]">
                without thinking about it.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm font-medium leading-7 text-[#2A211C]/62 sm:text-base sm:leading-8 lg:ml-auto">
            Built for clients who want consistency, priority access, and a
            standing place in the chair every month.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden bg-[#2A211C] p-6 text-[#F4EBDD] sm:p-8 lg:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-[#D7A84A]">
                  <Crown size={18} strokeWidth={1.8} />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                    Founding Membership
                  </span>
                </div>

                <h3 className="mt-5 font-['DM_Serif_Display'] text-4xl leading-none sm:text-5xl">
                  The Regular.
                </h3>
              </div>

              <div className="bg-[#D7A84A] px-4 py-3 text-[#2A211C]">
                <p className="text-[8px] font-bold uppercase tracking-[0.17em]">
                  Monthly
                </p>

                <p className="mt-1 font-['DM_Serif_Display'] text-2xl">
                  $119
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-xl text-sm font-medium leading-7 text-[#F4EBDD]/58 sm:text-base">
              One predictable payment. Your recurring chair time, grooming
              upkeep, and priority access handled.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 border-t border-[#F4EBDD]/15 pt-4"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9FAF95] text-[#2A211C]">
                    <Check size={12} strokeWidth={2.5} />
                  </div>

                  <span className="text-sm font-medium text-[#F4EBDD]/72">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="mt-9 inline-flex min-h-[54px] items-center justify-center gap-2 bg-[#B85C3C] px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F4EBDD] transition-transform hover:-translate-y-1"
            >
              Join The Club
              <ArrowUpRight size={16} />
            </a>

            <div className="absolute -right-12 bottom-[-30px] h-44 w-44 rounded-full border border-[#F4EBDD]/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-5"
          >
            <div className="bg-[#F4EBDD] p-6 sm:p-8">
              <Sparkles size={22} strokeWidth={1.8} className="text-[#B85C3C]" />

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.17em] text-[#B85C3C]">
                Why Membership?
              </p>

              <h3 className="mt-3 font-['DM_Serif_Display'] text-3xl leading-[0.95] sm:text-4xl">
                Because maintenance is easier than starting over.
              </h3>

              <p className="mt-4 text-sm font-medium leading-7 text-[#2A211C]/58">
                Keep your shape clean, your beard dialed in, and your next
                appointment already handled.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="bg-[#D7A84A] p-5 sm:p-6">
                <CalendarDays size={21} strokeWidth={1.8} />

                <p className="mt-5 font-['DM_Serif_Display'] text-2xl">
                  Your spot is protected.
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-[#2A211C]/60">
                  Members get first access to preferred appointment times.
                </p>
              </div>

              <div className="bg-[#5C3A4A] p-5 text-[#F4EBDD] sm:p-6">
                <Crown size={21} strokeWidth={1.8} />

                <p className="mt-5 font-['DM_Serif_Display'] text-2xl">
                  Built for regulars.
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-[#F4EBDD]/60">
                  Better consistency, better value, and less scheduling friction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Membership;
