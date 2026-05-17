import { motion } from "framer-motion";
import { communityStats } from "../../data/members";
import { fadeUp } from "../../utils/animations";

export default function StatsBar() {
  return (
    <section
      id="stats"
      className="bg-gray-950 px-6 pb-20"
      aria-label="Community statistics"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {communityStats.map((stat, i) => (
          <motion.div
            key={stat.id}
            variants={fadeUp}
            custom={i}
            className="
              flex flex-col items-center gap-2
              rounded-2xl
              border border-gray-800
              bg-gray-900/50
              p-6
              text-center
              backdrop-blur-sm
              transition-colors duration-200
              hover:border-gray-700
            "
          >
            <span className="text-3xl" role="img" aria-label={stat.label}>
              {stat.icon}
            </span>
            <span className="text-3xl font-extrabold text-white">
              {stat.value}
            </span>
            <span className="text-sm text-gray-500">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
