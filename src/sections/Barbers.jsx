import { motion } from "framer-motion";
import { ArrowUpRight, Scissors, UserRound } from "lucide-react";

const barbers = [
  {
    name: "Marcus Vale",
    role: "Founder / Master Barber",
    specialty: "Fades · Tapers · Beard Architecture",
    years: "12 Years",
    color: "#B85C3C",
    accent: "#D7A84A",
    bio:
      "Known for clean transitions, sharp beard work, and cuts that still look intentional two weeks later.",
  },
  {
    name: "Andre Cole",
    role: "Senior Barber",
    specialty: "Texture · Crops · Modern Shape",
    years: "8 Years",
    color: "#9FAF95",
    accent: "#5C3A4A",
    bio:
      "Focused on texture, movement, and low-maintenance cuts that work with how your hair actually behaves.",
  },
  {
    name: "Julian Reed",
    role: "Barber / Grooming Specialist",
    specialty: "Classic Cuts · Hot Towel · Styling",
    years: "7 Years",
    color: "#D7A84A",
    accent: "#B85C3C",
    bio:
      "A classicist with a modern eye, specializing in refined shapes, ritual shaves, and polished finishing.",
  },
];

function Portrait({ barber, index }) {
  return (
    <div
      className="relative min-h-[480px] overflow-hidden sm:min-h-[560px]"
      style={{ backgroundColor: barber.color }}
    >
      <div
        className="absolute left-[8%] top-[7%] h-24 w-24 rotate-12 sm:h-32 sm:w-32"
        style={{ backgroundColor: barber.accent }}
      />

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-x-[8%] bottom-0 top-[10%]"
      >
        <svg
          viewBox="0 0 420 560"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse
            cx="210"
            cy="532"
            rx="120"
            ry="20"
            fill="rgba(42,33,28,0.16)"
          />

          <path
            d="M112 560C119 447 149 387 210 387C271 387 302 447 308 560Z"
            fill="#2A211C"
          />

          <ellipse
            cx="210"
            cy="250"
            rx="102"
            ry="128"
            fill="#C78B68"
          />

          {index === 0 && (
            <path
              d="M109 227C106 159 133 107 181 86C221 68 270 75 304 105C329 128 341 169 333 216C306 187 281 176 247 174C199 170 160 189 132 219C123 229 116 233 109 227Z"
              fill="#2A211C"
            />
          )}

          {index === 1 && (
            <path
              d="M107 226C106 171 126 127 167 102C187 90 210 84 232 87C252 69 286 75 299 96C327 105 341 142 334 188C321 169 303 160 282 161C256 161 242 174 220 171C190 168 174 149 149 160C127 169 116 194 107 226Z"
              fill="#2A211C"
            />
          )}

          {index === 2 && (
            <path
              d="M108 228C108 170 128 124 174 98C211 77 256 80 291 103C322 124 338 159 334 205C311 188 289 181 263 181C221 180 189 191 158 209C137 222 121 235 108 228Z"
              fill="#2A211C"
            />
          )}

          <path
            d="M164 245C176 238 189 238 199 243"
            fill="none"
            stroke="#2A211C"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M223 243C233 238 246 238 258 245"
            fill="none"
            stroke="#2A211C"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <ellipse cx="185" cy="256" rx="5" ry="7" fill="#2A211C" />
          <ellipse cx="237" cy="256" rx="5" ry="7" fill="#2A211C" />

          <path
            d="M210 261C208 278 207 289 215 295"
            fill="none"
            stroke="#2A211C"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M177 314C196 327 224 327 243 314"
            fill="none"
            stroke="#2A211C"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M151 308C157 359 178 382 210 382C242 382 263 359 269 308C253 331 234 343 210 343C186 343 167 331 151 308Z"
            fill="#2A211C"
          />
        </svg>
      </motion.div>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#F4EBDD]/55">
            {barber.role}
          </p>

          <p className="mt-1 font-['DM_Serif_Display'] text-3xl text-[#F4EBDD] sm:text-4xl">
            {barber.name}
          </p>
        </div>

        <div
          className="hidden rounded-full px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#2A211C] sm:block"
          style={{ backgroundColor: barber.accent }}
        >
          {barber.years}
        </div>
      </div>
    </div>
  );
}

function Barbers() {
  return (
    <section
      id="barbers"
      className="relative overflow-hidden border-b border-[#2A211C]/15 bg-[#FBF6EE]"
    >
      <div className="section-shell py-16 sm:py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#B85C3C]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B85C3C] sm:text-xs">
                The Barbers
              </span>
            </div>

            <h2 className="mt-6 max-w-[760px] font-['DM_Serif_Display'] text-[clamp(3.8rem,8vw,7.2rem)] leading-[0.83] tracking-[-0.055em]">
              Different hands.
              <span className="block italic text-[#5C3A4A]">
                Same standard.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm font-medium leading-7 text-[#2A211C]/58 sm:text-base sm:leading-8 lg:ml-auto">
            Every barber has a point of view. Pick the specialist whose work
            lines up with the way you want to look and live.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {barbers.map((barber, index) => (
            <motion.article
              key={barber.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.58,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Portrait barber={barber} index={index} />

              <div className="border-x border-b border-[#2A211C]/18 bg-[#F4EBDD] p-5 sm:p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#B85C3C]">
                  Specialty
                </p>

                <p className="mt-2 font-['DM_Serif_Display'] text-2xl leading-tight">
                  {barber.specialty}
                </p>

                <p className="mt-4 text-sm font-medium leading-6 text-[#2A211C]/58">
                  {barber.bio}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#2A211C]/12 pt-5">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em]"
                  >
                    Book with {barber.name.split(" ")[0]}
                    <ArrowUpRight size={15} strokeWidth={1.8} />
                  </a>

                  <button
                    type="button"
                    aria-label={`View ${barber.name} profile`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2A211C]/30 transition-colors hover:bg-[#2A211C] hover:text-[#F4EBDD]"
                  >
                    <UserRound size={15} strokeWidth={1.8} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-y border-[#2A211C]/15 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Scissors
              size={18}
              strokeWidth={1.7}
              className="text-[#B85C3C]"
            />

            <p className="font-['DM_Serif_Display'] text-xl sm:text-2xl">
              Not sure who to book with?
            </p>
          </div>

          <a href="#booking" className="editorial-button">
            Match Me With A Barber
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Barbers;
