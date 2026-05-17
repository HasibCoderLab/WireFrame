import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn } from "../../utils/animations";

// ─── Animated noise / grid background ──────────────────────────────────────
function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Radial glow — top-left */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600 opacity-20 blur-3xl" />
      {/* Radial glow — bottom-right */}
      <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-cyan-500 opacity-15 blur-3xl" />
      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

// ─── Discord CTA Button ─────────────────────────────────────────────────────
function DiscordButton() {
  return (
    <motion.a
      href="https://discord.gg/"
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      custom={3}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="
        inline-flex items-center gap-3
        rounded-2xl
        bg-indigo-600 hover:bg-indigo-500
        px-8 py-4
        text-base font-semibold text-white
        shadow-lg shadow-indigo-700/40
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-950
      "
    >
      {/* Discord SVG icon — inline, no external dependency */}
      <svg
        aria-hidden="true"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
      Join Discord Server
    </motion.a>
  );
}

function LearnMoreButton() {
  return (
    <motion.a
      href="#about"
      variants={fadeUp}
      custom={4}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="
        inline-flex items-center gap-2
        rounded-2xl
        border border-gray-700 hover:border-gray-500
        bg-gray-900/60 hover:bg-gray-800/60
        px-8 py-4
        text-base font-semibold text-gray-300 hover:text-white
        backdrop-blur-sm
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-950
      "
    >
      Learn More
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </motion.a>
  );
}

// ─── Floating mentor avatar chip ────────────────────────────────────────────
function MentorChip({ initials, name, index }) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      title={name}
      className="flex items-center gap-2 rounded-full border border-gray-700/60 bg-gray-900/70 px-3 py-1.5 backdrop-blur-sm"
    >
      <span
        aria-hidden="true"
        className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white"
      >
        {initials}
      </span>
      <span className="text-sm font-medium text-gray-300">{name}</span>
    </motion.div>
  );
}

// ─── Animated badge / pill ──────────────────────────────────────────────────
function LiveBadge() {
  return (
    <motion.div
      variants={fadeIn}
      custom={0}
      className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5"
    >
      <span
        aria-hidden="true"
        className="relative flex h-2 w-2"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
      </span>
      <span className="text-sm font-medium tracking-wide text-violet-300">
        WireFrame Warriors — Active Community
      </span>
    </motion.div>
  );
}

// ─── HeroSection (main export) ──────────────────────────────────────────────
const MENTORS_PREVIEW = [
  { initials: "HH", name: "Hasib" },
  { initials: "SH", name: "Shanto" },
  { initials: "FK", name: "Farhatul" },
  { initials: "MH", name: "Mahin" },
  { initials: "SA", name: "Sumaiya" },
  { initials: "HN", name: "Hasnine" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 px-6 py-24"
    >
      <GridBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          {/* Live badge */}
          <LiveBadge />

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Learn.{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Build.
            </span>{" "}
            Grow Together.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl"
          >
            WireFrame Warriors হলো একটা Discord community যেখানে developers
            একসাথে শেখে, projects বানায়, আর একে অপরকে mentor করে। Beginner
            থেকে Pro  সবার জন্য জায়গা আছে।
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <DiscordButton />
            <LearnMoreButton />
          </motion.div>

          {/* Mentor chips */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
            }}
            className="flex flex-wrap justify-center gap-2 pt-4"
          >
            {MENTORS_PREVIEW.map((mentor, i) => (
              <MentorChip
                key={mentor.initials}
                initials={mentor.initials}
                name={mentor.name}
                index={i}
              />
            ))}
          </motion.div>

          {/* Mentor label */}
          <motion.p
            variants={fadeIn}
            custom={7}
            className="text-sm text-gray-600"
          >
            6 experienced mentors ready to guide you
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"
      />
    </section>
  );
}
