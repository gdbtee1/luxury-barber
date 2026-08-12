import { motion } from "framer-motion";
import {
  Armchair,
  MessageCircle,
  Scissors,
  Sparkles,
  Wind,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Arrive",
    copy:
      "Step out of the noise and into a slower, considered space built around your appointment.",
    icon: Armchair,
    color: "#D7A84A",
  },
  {
    number: "02",
    title: "Consult",
    copy:
      "We talk shape, growth pattern, maintenance, and how you actually want the cut to live day to day.",
    icon: MessageCircle,
    color: "#9FAF95",
  },
  {
    number: "03",
    title: "Cut",
    copy:
      "Precision work, deliberate pacing, and attention to the details that separate a good cut from a great one.",
    icon: Scissors,
    color: "#B85C3C",
  },
  {
    number: "04",
    title: "Reset",
    copy:
      "Hot towel, clean edges, finishing touches, and a moment to slow the whole experience down.",
    icon: Wind,
    color: "#5C3A4A",
  },
  {
    number: "05",
    title: "Leave Sharp",
    copy:
      "You leave knowing how to style it, how to maintain it, and when to come back before the shape gets away from you.",
    icon: Sparkles,
    color: "#D7A84A",
  },
];

function Ritual() {
  return (
    <section
      id="ritual"
      className="relative overflow-hidden border-b border-[#2A211C]/15 bg-[#2A211C] text-[#F4EBDD]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#B85C3C]/25" />
        <div className="absolute -right-24 bottom-[-80px] h-80 w-80 rounded-full bg-[#9FAF95]/20" />
      </div>

      <div className="section-shell relative z-10 py-16 sm:py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#D7A84A]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D7A84A] sm:text-xs">
                The Ritual
              </span>
            </div>

            <h2 className="mt-6 max-w-[760px] font-['DM_Serif_Display'] text-[clamp(3.8rem,8vw,7.4rem)] leading-[0.83] tracking-[-0.055em]">
              More than
              <span className="block italic text-[#B85C3C]">
                just a haircut.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm font-medium leading-7 text-[#F4EBDD]/55 sm:text-base sm:leading-8 lg:ml-auto">
            The experience is designed as a sequence. Every step has a purpose,
            from the first conversation to the final look in the mirror.
          </p>
        </div>

        <div className="mt-14 lg:mt-20">
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 border-y border-[#F4EBDD]/15">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`relative min-h-[430px] p-6 xl:p-8 ${
                      index !== steps.length - 1
                        ? "border-r border-[#F4EBDD]/15"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.18em] text-[#F4EBDD]/35">
                        {step.number}
                      </span>

                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-full"
                        style={{ backgroundColor: step.color }}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.8}
                          className={
                            step.color === "#5C3A4A"
                              ? "text-[#F4EBDD]"
                              : "text-[#2A211C]"
                          }
                        />
                      </div>
                    </div>

                    <div className="mt-24">
                      <h3 className="font-['DM_Serif_Display'] text-4xl leading-none">
                        {step.title}
                      </h3>

                      <p className="mt-5 text-sm font-medium leading-7 text-[#F4EBDD]/50">
                        {step.copy}
                      </p>
                    </div>

                    <motion.div
                      className="absolute bottom-8 left-8 right-8 h-px bg-[#F4EBDD]/15"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.15 + index * 0.08,
                      }}
                      style={{ transformOrigin: "left" }}
                    />

                    <motion.div
                      className="absolute bottom-[29px] h-[7px] w-[7px] rounded-full"
                      style={{ backgroundColor: step.color }}
                      initial={{ left: "32px" }}
                      whileInView={{ left: "calc(100% - 40px)" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5 lg:hidden">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border border-[#F4EBDD]/15 bg-[#F4EBDD]/[0.03] p-5 sm:p-6"
                >
                  <div className="grid grid-cols-[52px_1fr] gap-4 sm:grid-cols-[60px_1fr]">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        className={
                          step.color === "#5C3A4A"
                            ? "text-[#F4EBDD]"
                            : "text-[#2A211C]"
                        }
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#F4EBDD]/30">
                          Step {step.number}
                        </span>

                        <span className="h-px flex-1 bg-[#F4EBDD]/10" />
                      </div>

                      <h3 className="mt-3 font-['DM_Serif_Display'] text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm font-medium leading-6 text-[#F4EBDD]/50">
                        {step.copy}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 grid gap-6 border border-[#F4EBDD]/15 bg-[#F4EBDD] p-6 text-[#2A211C] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#B85C3C]">
              The Point
            </p>

            <h3 className="mt-3 max-w-3xl font-['DM_Serif_Display'] text-3xl leading-[0.95] sm:text-4xl lg:text-5xl">
              You’re not getting squeezed between two other appointments.
            </h3>
          </div>

          <a
            href="#booking"
            className="editorial-button editorial-button-primary"
          >
            Reserve Your Time
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Ritual;
