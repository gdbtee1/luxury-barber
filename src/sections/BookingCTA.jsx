import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Scissors,
} from "lucide-react";

function BookingCTA() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden border-b border-[#2A211C]/15 bg-[#F4EBDD]"
    >
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#9FAF95]/55" />
      <div className="absolute -right-24 bottom-[-80px] h-72 w-72 rounded-full bg-[#D7A84A]/65" />

      <div className="section-shell relative z-10 py-16 sm:py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden border border-[#2A211C]"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="bg-[#B85C3C] p-6 text-[#F4EBDD] sm:p-8 lg:p-12 xl:p-14">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#D7A84A]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D7A84A] sm:text-xs">
                  Reserve Your Chair
                </span>
              </div>

              <h2 className="mt-6 max-w-[780px] font-['DM_Serif_Display'] text-[clamp(4rem,8vw,7.5rem)] leading-[0.82] tracking-[-0.055em]">
                Your next cut
                <span className="block italic text-[#F4EBDD]">
                  should already be booked.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm font-medium leading-7 text-[#F4EBDD]/65 sm:text-base sm:leading-8">
                Pick your barber, choose your service, and lock in a time that
                works before the week fills up.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex min-h-[56px] items-center justify-center gap-3 bg-[#D7A84A] px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#2A211C] transition-transform hover:-translate-y-1"
                >
                  <CalendarDays size={17} strokeWidth={1.8} />
                  Book Appointment
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="tel:+13135550147"
                  className="inline-flex min-h-[56px] items-center justify-center gap-3 border border-[#F4EBDD]/45 px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F4EBDD] transition-all hover:-translate-y-1 hover:bg-[#F4EBDD] hover:text-[#2A211C]"
                >
                  Call The Club
                </a>
              </div>

              <div className="mt-10 grid gap-4 border-t border-[#F4EBDD]/20 pt-6 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Clock3 size={16} strokeWidth={1.8} className="mt-0.5 shrink-0" />

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#F4EBDD]/45">
                      Hours
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Tue–Sat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} strokeWidth={1.8} className="mt-0.5 shrink-0" />

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#F4EBDD]/45">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      Downtown Detroit
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Scissors size={16} strokeWidth={1.8} className="mt-0.5 shrink-0" />

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#F4EBDD]/45">
                      Visits
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[460px] overflow-hidden bg-[#5C3A4A] sm:min-h-[560px] lg:min-h-full">
              <div className="absolute left-[8%] top-[8%] h-24 w-24 rotate-12 bg-[#9FAF95] sm:h-32 sm:w-32" />

              <div className="absolute right-[8%] top-[14%] h-20 w-20 rounded-full bg-[#D7A84A]" />

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-x-[10%] bottom-0 top-[10%]"
              >
                <svg
                  viewBox="0 0 440 560"
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <ellipse
                    cx="220"
                    cy="530"
                    rx="120"
                    ry="20"
                    fill="rgba(42,33,28,0.2)"
                  />

                  <path
                    d="M112 560C119 447 149 387 220 387C291 387 321 447 328 560Z"
                    fill="#2A211C"
                  />

                  <ellipse cx="220" cy="250" rx="102" ry="128" fill="#C78B68" />

                  <path
                    d="M109 228C106 163 132 110 181 87C222 68 272 75 306 108C329 131 341 170 333 216C309 192 284 180 249 178C204 175 166 190 136 219C125 230 116 234 109 228Z"
                    fill="#2A211C"
                  />

                  <path
                    d="M164 246C176 239 189 239 199 244"
                    fill="none"
                    stroke="#2A211C"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M241 244C251 239 264 239 276 246"
                    fill="none"
                    stroke="#2A211C"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <ellipse cx="185" cy="257" rx="5" ry="7" fill="#2A211C" />
                  <ellipse cx="255" cy="257" rx="5" ry="7" fill="#2A211C" />

                  <path
                    d="M220 262C218 279 217 290 225 296"
                    fill="none"
                    stroke="#2A211C"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M183 315C203 328 237 328 257 315"
                    fill="none"
                    stroke="#2A211C"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M157 309C163 360 184 383 220 383C256 383 277 360 283 309C266 333 245 345 220 345C195 345 174 333 157 309Z"
                    fill="#2A211C"
                  />
                </svg>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [-2, 1, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-7 left-6 bg-[#F4EBDD] px-5 py-4 text-[#2A211C] shadow-[8px_8px_0_#D7A84A] sm:bottom-8 sm:left-8"
              >
                <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#B85C3C]">
                  Your Chair
                </p>

                <p className="mt-1 font-['DM_Serif_Display'] text-2xl">
                  Is waiting.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BookingCTA;
