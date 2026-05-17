import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

/**
 * PageHeader
 * Members, Resources, Projects — সব inner page এ same header style।
 *
 * @param {string} eyebrow   — small label above heading
 * @param {string} title     — main heading (supports JSX for gradient spans)
 * @param {string} subtitle  — description paragraph
 */
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gray-950 px-6 pb-16 pt-36">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-indigo-700 opacity-15 blur-3xl"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        {eyebrow && (
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-400"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
