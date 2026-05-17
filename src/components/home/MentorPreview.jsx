import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { mentors } from "../../data/members";
import { fadeUp, scaleIn } from "../../utils/animations";

// ─── Single mentor card ─────────────────────────────────────────────────────
function MentorCard({ mentor, index }) {
  return (
    <motion.article
      variants={scaleIn}
      custom={index}
      className="
        group
        flex flex-col items-center gap-4
        rounded-2xl
        border border-gray-800
        bg-gray-900/50
        p-6
        text-center
        transition-all duration-300
        hover:border-indigo-700/50
        hover:bg-gray-900
      "
    >
      {/* Avatar */}
      <div
        aria-hidden="true"
        className="
          flex h-16 w-16 items-center justify-center
          rounded-full
          bg-gradient-to-br from-indigo-600 to-violet-600
          text-xl font-extrabold text-white
          shadow-lg shadow-indigo-900/40
          ring-2 ring-indigo-500/20
          transition-transform duration-300
          group-hover:scale-105
        "
      >
        {mentor.initials}
      </div>

      {/* Info */}
      <div>
        <p className="font-bold text-white">{mentor.name}</p>
        <p className="text-sm text-indigo-400">{mentor.role}</p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {mentor.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-700 bg-gray-800 px-2.5 py-0.5 text-xs text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

// ─── MentorPreview section ──────────────────────────────────────────────────
export default function MentorPreview() {
  return (
    <section
      id="mentors-preview"
      className="bg-gray-950 px-6 py-24"
      aria-labelledby="mentors-heading"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400"
          >
            Meet the Team
          </motion.p>
          <motion.h2
            id="mentors-heading"
            variants={fadeUp}
            custom={1}
            className="text-4xl font-extrabold text-white sm:text-5xl"
          >
            তোমার{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Mentors
            </span>
          </motion.h2>
        </motion.div>

        {/* Mentor grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
        >
          {mentors.map((mentor, i) => (
            <MentorCard key={mentor.id} mentor={mentor} index={i} />
          ))}
        </motion.div>

        {/* CTA to full members page */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <Link
            to="/members"
            className="
              inline-flex items-center gap-2
              rounded-2xl
              border border-gray-700 hover:border-indigo-600
              bg-transparent hover:bg-indigo-600/10
              px-6 py-3
              text-sm font-semibold text-gray-300 hover:text-white
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-950
            "
          >
            View All Members
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
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
