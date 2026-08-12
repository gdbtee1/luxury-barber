import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="top"
      className="grain relative min-h-[100svh] overflow-hidden bg-[#F4EBDD]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-14%] top-[8%] h-[480px] w-[480px] rounded-full bg-[#9FAF95] sm:h-[620px] sm:w-[620px] lg:right-[-3%] lg:h-[760px] lg:w-[760px]" />

        <div className="absolute -left-24 bottom-[-100px] h-64 w-64 rounded-full bg-[#D7A84A]/85 sm:h-80 sm:w-80" />

        <div className="absolute left-[46%] top-[18%] hidden h-28 w-28 rotate-12 bg-[#5C3A4A] lg:block" />
      </div>

      <div className="section-shell relative z-10 flex min-h-[100svh] items-end pb-12 pt-[120px] sm:pb-16 lg:items-center lg:pb-0 lg:pt-[90px]">
        <div className="grid w-full gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#B85C3C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B85C3C] sm:text-xs">
                Detroit • Modern Barber Club
              </span>
            </div>

            <h1 className="mt-7 max-w-[880px] font-['DM_Serif_Display'] text-[clamp(4.4rem,11vw,9.8rem)] leading-[0.78] tracking-[-0.06em]">
              Look sharp.
              <span className="block italic text-[#B85C3C]">
                Move different.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-sm font-medium leading-7 text-[#2A211C]/62 sm:text-base sm:leading-8 lg:text-lg">
              Precision cuts, hot-towel shaves, and private grooming rituals
              designed for men who treat presentation like part of the uniform.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="editorial-button editorial-button-primary"
              >
                Reserve Your Chair
                <ArrowUpRight size={16} />
              </a>

              <a href="#services" className="editorial-button">
                Explore The Club
                <ArrowDownRight size={16} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#2A211C]/15 pt-6 text-[10px] font-bold uppercase tracking-[0.13em] text-[#2A211C]/48 sm:text-xs">
              <span className="flex items-center gap-2">
                <Clock3 size={14} />
                Tue–Sat
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={14} />
                Downtown Detroit
              </span>

              <span>By Appointment</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[430px] sm:min-h-[520px] lg:min-h-[680px]"
          >
            <div className="absolute inset-x-[4%] bottom-[2%] top-[2%] overflow-hidden bg-[#5C3A4A] sm:inset-x-[10%] lg:inset-x-[8%]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),transparent_30%,rgba(42,33,28,0.18))]" />

              <div className="absolute left-[10%] top-[10%]">
                <div className="flex items-center gap-2 rounded-full bg-[#D7A84A] px-4 py-2">
                  <Sparkles size={14} strokeWidth={2.2} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                    Signature Service
                  </span>
                </div>
              </div>

              <div className="absolute left-1/2 top-[18%] h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-[#C58E6B] sm:h-[190px] sm:w-[190px] lg:h-[220px] lg:w-[220px]" />

              <div className="absolute left-1/2 top-[40%] h-[300px] w-[72%] -translate-x-1/2 rounded-t-[50%] bg-[#2A211C] sm:h-[360px] lg:h-[430px]" />

              <div className="absolute left-1/2 top-[33%] h-12 w-[48%] -translate-x-1/2 border-y border-[#F4EBDD]/40" />

              <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p className="font-['DM_Serif_Display'] text-3xl text-[#F4EBDD] sm:text-4xl">
                    The Signature
                  </p>

                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#D7A84A] sm:text-[10px]">
                    Cut • Beard • Finish
                  </p>
                </div>

                <div className="hidden border-l border-[#F4EBDD]/30 pl-5 text-right sm:block">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#F4EBDD]/50">
                    From
                  </p>

                  <p className="font-['DM_Serif_Display'] text-2xl text-[#F4EBDD]">
                    $65
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [2, 0, 2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[0%] top-[14%] bg-[#F4EBDD] px-5 py-4 shadow-[8px_8px_0_#2A211C] sm:right-[2%]"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#2A211C]/45">
                Experience
              </p>

              <p className="mt-1 font-['DM_Serif_Display'] text-2xl text-[#B85C3C]">
                45 min
              </p>
            </motion.div>

            <motion.div
              animate={{
                rotate: [-5, 3, -5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[8%] left-[0%] hidden bg-[#9FAF95] px-5 py-4 shadow-[7px_7px_0_#2A211C] sm:block"
            >
              <p className="font-['DM_Serif_Display'] text-xl">
                Built around you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-[#2A211C]/15 bg-[#D7A84A] py-3">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0">
              {Array.from({ length: 8 }).map((_, index) => (
                <span
                  key={index}
                  className="flex items-center whitespace-nowrap px-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2A211C]"
                >
                  Precision Grooming
                  <span className="ml-7 text-[#5C3A4A]">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
