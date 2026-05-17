import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { mentors } from "../data/members";
import MentorGrid from "../components/members/MentorGrid";
import PageHeader from "../components/common/PageHeader";
import FilterBar from "../components/common/FilterBar";
import { fadeUp } from "../utils/animations";

// Build skill filter tabs dynamically from data
const ALL_SKILLS = ["all", ...Array.from(new Set(mentors.flatMap((m) => m.skills)))];
const SKILL_TABS = ALL_SKILLS.map((s) => ({ id: s, label: s === "all" ? "All" : s }));

export default function Members() {
  const [activeSkill, setActiveSkill] = useState("all");

  const filtered = useMemo(() => {
    if (activeSkill === "all") return mentors;
    return mentors.filter((m) =>
      m.skills.some((s) => s.toLowerCase() === activeSkill.toLowerCase())
    );
  }, [activeSkill]);

  return (
    <main id="main-content">
      {/* Hero header */}
      <PageHeader
        eyebrow="Meet the Team"
        title={
          <>
            তোমার{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Mentors
            </span>
          </>
        }
        subtitle="WireFrame Warriors এর ৬ জন mentor — প্রত্যেকে তাদের নিজ নিজ area তে experienced এবং তোমাকে সাহায্য করতে ready।"
      />

      {/* Main content */}
      <section className="bg-gray-950 px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          {/* Filter + count row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <motion.div variants={fadeUp} custom={0}>
              <FilterBar
                tabs={SKILL_TABS}
                active={activeSkill}
                onSelect={setActiveSkill}
              />
            </motion.div>

            <motion.p variants={fadeUp} custom={1} className="text-sm text-gray-500">
              {filtered.length} mentor{filtered.length !== 1 ? "s" : ""} found
            </motion.p>
          </motion.div>

          {/* Grid */}
          <MentorGrid mentors={filtered} />

          {/* Join CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 rounded-2xl border border-indigo-800/40 bg-indigo-600/10 p-10 text-center"
          >
            <p className="mb-2 text-2xl font-extrabold text-white">
              Mentor হতে চাও?
            </p>
            <p className="mb-6 text-gray-400">
              Discord server এ join করো এবং community contribute করো।
            </p>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-xl bg-indigo-600 hover:bg-indigo-500
                px-6 py-3 text-sm font-bold text-white
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-950
              "
            >
              Join Discord
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
