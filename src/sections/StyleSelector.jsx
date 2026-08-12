import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Scissors,
  Sparkles,
} from "lucide-react";

const styles = [
  {
    id: "fade",
    name: "Low Fade",
    category: "Clean + Controlled",
    price: "$65",
    time: "45 min",
    maintenance: "Low",
    description:
      "A sharp low fade with clean weight through the top. Polished enough for work, relaxed enough for everything after.",
    recommendation: "Best for structured, versatile everyday style.",
    background: "#B85C3C",
    accent: "#D7A84A",
    silhouette: "fade",
  },
  {
    id: "crop",
    name: "Textured Crop",
    category: "Modern + Easy",
    price: "$70",
    time: "50 min",
    maintenance: "Medium",
    description:
      "Texture through the top with a tight perimeter and effortless movement. Built to look good without over-styling.",
    recommendation: "Best for texture, movement, and easy mornings.",
    background: "#9FAF95",
    accent: "#5C3A4A",
    silhouette: "crop",
  },
  {
    id: "classic",
    name: "Classic Taper",
    category: "Timeless + Refined",
    price: "$65",
    time: "45 min",
    maintenance: "Low",
    description:
      "A refined taper with natural transitions and a clean finish. Understated, classic, and never overdone.",
    recommendation: "Best for business, formal wear, and timeless shape.",
    background: "#D7A84A",
    accent: "#B85C3C",
    silhouette: "classic",
  },
  {
    id: "flow",
    name: "Modern Flow",
    category: "Relaxed + Editorial",
    price: "$80",
    time: "60 min",
    maintenance: "Medium",
    description:
      "Longer movement, layered shape, and controlled volume. Designed for clients who want style without looking overly styled.",
    recommendation: "Best for longer hair and a softer fashion-forward finish.",
    background: "#5C3A4A",
    accent: "#9FAF95",
    silhouette: "flow",
  },
];

function HairSilhouette({ type }) {
  const paths = {
    fade:
      "M102 176C96 118 121 72 183 59C232 49 286 64 315 98C332 118 341 141 338 174C320 146 298 131 264 128C217 123 176 139 148 169C129 189 111 195 102 176Z",
    crop:
      "M101 171C99 123 116 83 153 65C176 54 202 53 223 58C241 42 277 48 288 69C320 76 340 104 339 143C328 128 315 121 298 120C269 120 254 131 231 129C199 126 180 110 153 120C128 129 113 149 101 171Z",
    classic:
      "M105 176C102 120 125 77 170 61C207 48 250 54 281 71C317 91 337 124 336 163C315 145 296 139 270 138C226 135 193 144 163 161C139 175 121 189 105 176Z",
    flow:
      "M98 183C90 131 107 86 150 61C180 43 215 41 245 51C276 40 314 56 330 85C348 116 343 156 329 189C311 165 292 153 263 150C230 147 204 157 177 176C147 197 116 203 98 183Z",
  };

  return (
    <svg
      viewBox="0 0 440 520"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="220" cy="470" rx="105" ry="18" fill="rgba(42,33,28,0.14)" />

      <path
        d="M147 395C153 333 178 306 220 306C262 306 287 333 293 395L323 482H117L147 395Z"
        fill="#2A211C"
      />

      <ellipse cx="220" cy="235" rx="95" ry="119" fill="#C98D69" />

      <path
        d={paths[type]}
        fill="#2A211C"
      />

      <path
        d="M176 228C187 220 197 219 207 224"
        fill="none"
        stroke="#2A211C"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M233 224C243 219 254 220 265 228"
        fill="none"
        stroke="#2A211C"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <ellipse cx="193" cy="239" rx="5" ry="7" fill="#2A211C" />
      <ellipse cx="247" cy="239" rx="5" ry="7" fill="#2A211C" />

      <path
        d="M219 243C217 260 215 271 223 277"
        fill="none"
        stroke="#2A211C"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M188 295C207 307 233 307 252 295"
        fill="none"
        stroke="#2A211C"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M158 286C163 338 184 360 220 360C256 360 277 338 282 286C265 310 245 322 220 322C195 322 175 310 158 286Z"
        fill="#2A211C"
        opacity="0.92"
      />
    </svg>
  );
}

function StyleSelector() {
  const [activeId, setActiveId] = useState("fade");

  const activeStyle = useMemo(
    () => styles.find((style) => style.id === activeId),
    [activeId]
  );

  return (
    <section
      id="style-selector"
      className="relative overflow-hidden border-b border-[#2A211C]/15 bg-[#F4EBDD]"
    >
      <div className="section-shell py-16 sm:py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#5C3A4A]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#5C3A4A] sm:text-xs">
                Choose Your Cut
              </span>
            </div>

            <h2 className="mt-6 max-w-[720px] font-['DM_Serif_Display'] text-[clamp(3.8rem,8vw,7.2rem)] leading-[0.83] tracking-[-0.055em]">
              Find the shape
              <span className="block italic text-[#B85C3C]">
                that fits you.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm font-medium leading-7 text-[#2A211C]/58 sm:text-base sm:leading-8 lg:ml-auto">
            Tap through a few signature looks and see how the mood, maintenance,
            timing, and recommendation change with each style.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          {/* OPTIONS */}
          <div className="order-2 lg:order-1">
            <div className="border-t border-[#2A211C]/18">
              {styles.map((style, index) => {
                const active = style.id === activeId;

                return (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setActiveId(style.id)}
                    className="group relative w-full border-b border-[#2A211C]/18 py-5 text-left sm:py-6"
                  >
                    <div className="grid grid-cols-[42px_1fr_auto] items-center gap-3 sm:grid-cols-[52px_1fr_auto] sm:gap-4">
                      <span
                        className={`text-[10px] font-bold tracking-[0.16em] transition-colors ${
                          active
                            ? "text-[#B85C3C]"
                            : "text-[#2A211C]/35"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <div>
                        <h3
                          className={`font-['DM_Serif_Display'] text-2xl leading-none transition-all duration-250 sm:text-3xl ${
                            active
                              ? "translate-x-1 text-[#B85C3C]"
                              : "text-[#2A211C]"
                          }`}
                        >
                          {style.name}
                        </h3>

                        <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#2A211C]/40 sm:text-[10px]">
                          {style.category}
                        </p>
                      </div>

                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all sm:h-10 sm:w-10 ${
                          active
                            ? "border-[#2A211C] bg-[#D7A84A]"
                            : "border-[#2A211C]/25"
                        }`}
                      >
                        {active ? (
                          <Check size={16} strokeWidth={2.2} />
                        ) : (
                          <Scissors size={15} strokeWidth={1.7} />
                        )}
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 h-[3px] bg-[#B85C3C]"
                      animate={{
                        width: active ? "100%" : "0%",
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStyle.id}
                initial={{
                  opacity: 0,
                  y: 18,
                  scale: 0.99,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -14,
                  scale: 0.99,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden border border-[#2A211C]"
              >
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <div
                    className="relative min-h-[430px] overflow-hidden sm:min-h-[520px] lg:min-h-[620px]"
                    style={{
                      backgroundColor: activeStyle.background,
                    }}
                  >
                    <div
                      className="absolute left-5 top-5 z-10 rounded-full px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#2A211C] sm:left-7 sm:top-7"
                      style={{
                        backgroundColor: activeStyle.accent,
                      }}
                    >
                      {activeStyle.category}
                    </div>

                    <motion.div
                      initial={{ scale: 0.95, y: 15 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-x-[7%] bottom-0 top-[10%]"
                    >
                      <HairSilhouette type={activeStyle.silhouette} />
                    </motion.div>

                    <div className="absolute bottom-6 left-6 text-[#F4EBDD] sm:bottom-8 sm:left-8">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] opacity-60">
                        Selected Style
                      </p>

                      <p className="mt-1 font-['DM_Serif_Display'] text-4xl sm:text-5xl">
                        {activeStyle.name}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FBF6EE] p-6 sm:p-8 lg:p-9">
                    <div className="flex items-center gap-2 text-[#B85C3C]">
                      <Sparkles size={16} strokeWidth={1.9} />

                      <span className="text-[9px] font-bold uppercase tracking-[0.17em]">
                        Style Profile
                      </span>
                    </div>

                    <h3 className="mt-5 font-['DM_Serif_Display'] text-4xl leading-[0.95] tracking-[-0.03em] sm:text-5xl">
                      {activeStyle.name}
                    </h3>

                    <p className="mt-6 text-sm font-medium leading-7 text-[#2A211C]/62 sm:text-base">
                      {activeStyle.description}
                    </p>

                    <div className="mt-8 grid grid-cols-3 border-y border-[#2A211C]/15 py-5">
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#2A211C]/35 sm:text-[9px]">
                          From
                        </p>

                        <p className="mt-1 font-['DM_Serif_Display'] text-2xl">
                          {activeStyle.price}
                        </p>
                      </div>

                      <div className="border-l border-[#2A211C]/15 pl-4">
                        <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#2A211C]/35 sm:text-[9px]">
                          Time
                        </p>

                        <div className="mt-1 flex items-center gap-1.5">
                          <Clock3 size={14} strokeWidth={1.8} />
                          <p className="font-['DM_Serif_Display'] text-xl">
                            {activeStyle.time}
                          </p>
                        </div>
                      </div>

                      <div className="border-l border-[#2A211C]/15 pl-4">
                        <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#2A211C]/35 sm:text-[9px]">
                          Upkeep
                        </p>

                        <p className="mt-1 font-['DM_Serif_Display'] text-xl">
                          {activeStyle.maintenance}
                        </p>
                      </div>
                    </div>

                    <div
                      className="mt-7 p-5"
                      style={{
                        backgroundColor: activeStyle.accent,
                      }}
                    >
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#2A211C]/50">
                        Barber Recommendation
                      </p>

                      <p className="mt-2 font-['DM_Serif_Display'] text-xl leading-snug">
                        {activeStyle.recommendation}
                      </p>
                    </div>

                    <a
                      href="#booking"
                      className="editorial-button editorial-button-primary mt-7 w-full"
                    >
                      Book This Cut
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StyleSelector;
