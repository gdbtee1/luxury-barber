import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    name: "The Signature Cut",
    price: "$65",
    time: "45 min",
    description:
      "A precision consultation, tailored cut, detailed finish, and styling built around your face shape and routine.",
    color: "#B85C3C",
    accent: "#D7A84A",
    imageLabel: "Precision / Shape / Finish",
  },
  {
    id: "02",
    name: "The Beard Ritual",
    price: "$45",
    time: "35 min",
    description:
      "Hot towel, beard shaping, line detailing, conditioning, and a polished finish that looks intentional from every angle.",
    color: "#5C3A4A",
    accent: "#9FAF95",
    imageLabel: "Steam / Shape / Detail",
  },
  {
    id: "03",
    name: "Cut + Beard",
    price: "$95",
    time: "70 min",
    description:
      "The full reset. Hair, beard, hot towel, finishing details, and styling in one complete private grooming session.",
    color: "#9FAF95",
    accent: "#B85C3C",
    imageLabel: "Full Service / Full Presence",
  },
  {
    id: "04",
    name: "Executive Reset",
    price: "$120",
    time: "90 min",
    description:
      "A slower, elevated grooming ritual with haircut, beard service, hot towel treatment, scalp care, and premium finishing.",
    color: "#D7A84A",
    accent: "#5C3A4A",
    imageLabel: "Slow Down / Reset / Leave Sharp",
  },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-[#2A211C]/15 bg-[#FBF6EE]"
    >
      <div className="section-shell py-16 sm:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#B85C3C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B85C3C] sm:text-xs">
                Signature Services
              </span>
            </div>

            <h2 className="mt-6 max-w-[700px] font-['DM_Serif_Display'] text-[clamp(3.7rem,8vw,7rem)] leading-[0.84] tracking-[-0.055em]">
              Grooming,
              <span className="block italic text-[#5C3A4A]">
                properly considered.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm font-medium leading-7 text-[#2A211C]/58 sm:text-base sm:leading-8 lg:ml-auto">
            Every service starts with a conversation. We look at your hair,
            your lifestyle, and how you actually want to show up before the
            clippers ever turn on.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[1fr_0.92fr] lg:gap-14">
          {/* SERVICE LIST */}
          <div className="border-t border-[#2A211C]/18">
            {services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={service.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="
                    group
                    relative
                    grid
                    w-full
                    grid-cols-[44px_1fr_auto]
                    items-center
                    gap-4
                    border-b
                    border-[#2A211C]/18
                    py-6
                    text-left
                    transition-colors
                    duration-300
                    sm:grid-cols-[60px_1fr_auto]
                    sm:py-7
                  "
                >
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.16em] transition-colors sm:text-xs ${
                      isActive
                        ? "text-[#B85C3C]"
                        : "text-[#2A211C]/35"
                    }`}
                  >
                    {service.id}
                  </span>

                  <div>
                    <h3
                      className={`font-['DM_Serif_Display'] text-[clamp(2rem,4vw,3.4rem)] leading-none tracking-[-0.035em] transition-all duration-300 ${
                        isActive
                          ? "translate-x-2 text-[#B85C3C]"
                          : "text-[#2A211C]"
                      }`}
                    >
                      {service.name}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#2A211C]/40 sm:text-[10px]">
                      <span>{service.time}</span>
                      <span>•</span>
                      <span>{service.price}</span>
                    </div>
                  </div>

                  <motion.div
                    animate={{
                      rotate: isActive ? 45 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 sm:h-12 sm:w-12 ${
                      isActive
                        ? "border-[#2A211C] bg-[#D7A84A]"
                        : "border-[#2A211C]/25"
                    }`}
                  >
                    <ArrowUpRight size={18} strokeWidth={1.8} />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-[3px] bg-[#B85C3C]"
                    animate={{
                      width: isActive ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* CHANGING VISUAL */}
          <div className="relative min-h-[470px] sm:min-h-[560px] lg:min-h-[620px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 20, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.985 }}
                transition={{
                  duration: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 overflow-hidden"
                style={{
                  backgroundColor: activeService.color,
                }}
              >
                <div className="absolute left-6 top-6 z-10 sm:left-8 sm:top-8">
                  <div
                    className="inline-flex rounded-full px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#2A211C]"
                    style={{
                      backgroundColor: activeService.accent,
                    }}
                  >
                    {activeService.imageLabel}
                  </div>
                </div>

                <div className="absolute inset-0">
                  <div className="absolute left-1/2 top-[14%] h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-[#C58E6B] sm:h-[190px] sm:w-[190px] lg:h-[210px] lg:w-[210px]" />

                  <div className="absolute left-1/2 top-[36%] h-[310px] w-[72%] -translate-x-1/2 rounded-t-[50%] bg-[#2A211C] sm:h-[360px] lg:h-[420px]" />

                  <div className="absolute left-1/2 top-[30%] h-14 w-[48%] -translate-x-1/2 border-y border-[#FBF6EE]/35" />

                  <div className="absolute left-[16%] top-[52%] h-20 w-20 rounded-full border border-[#FBF6EE]/30 sm:h-24 sm:w-24" />

                  <div className="absolute right-[14%] top-[44%] h-28 w-28 rounded-full border border-[#FBF6EE]/25 sm:h-36 sm:w-36" />
                </div>

                <div className="absolute inset-x-6 bottom-6 z-10 sm:inset-x-8 sm:bottom-8">
                  <p className="max-w-md text-sm font-medium leading-6 text-[#FBF6EE]/72 sm:text-base sm:leading-7">
                    {activeService.description}
                  </p>

                  <div className="mt-6 flex items-end justify-between gap-6 border-t border-[#FBF6EE]/25 pt-5">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#FBF6EE]/50">
                        Starting at
                      </p>

                      <p className="mt-1 font-['DM_Serif_Display'] text-4xl text-[#FBF6EE]">
                        {activeService.price}
                      </p>
                    </div>

                    <a
                      href="#booking"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#FBF6EE]"
                    >
                      Book this service
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              animate={{
                rotate: [-4, 2, -4],
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-3 z-20 hidden bg-[#F4EBDD] px-5 py-4 shadow-[8px_8px_0_#2A211C] sm:block"
            >
              <p className="font-['DM_Serif_Display'] text-xl">
                No rushed chairs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
