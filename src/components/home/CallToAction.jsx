import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function CallToAction() {
  return (
    <section
      className="relative overflow-hidden bg-gray-950 px-6 py-32"
      aria-labelledby="cta-heading"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-96 w-96 rounded-full bg-indigo-700 opacity-20 blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.h2
          id="cta-heading"
          variants={fadeUp}
          custom={0}
          className="mb-6 text-4xl font-extrabold text-white sm:text-5xl"
        >
          Ready to join?{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            আজই শুরু করো।
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="mb-10 text-lg text-gray-400"
        >
          Discord server এ join করো, mentor দের সাথে কথা বলো, আর নিজের developer journey শুরু করো।
        </motion.p>

        <motion.a
          variants={fadeUp}
          custom={2}
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="
            inline-flex items-center gap-3
            rounded-2xl
            bg-indigo-600 hover:bg-indigo-500
            px-10 py-4
            text-lg font-bold text-white
            shadow-xl shadow-indigo-800/40
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-950
          "
        >
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
          </svg>
          Join WireFrame Warriors
        </motion.a>
      </motion.div>
    </section>
  );
}
