import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

import { RiUserCommunityFill } from "react-icons/ri";
import { PiStepsFill } from "react-icons/pi";

import {
  FaBullseye,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

const FEATURES = [
  {
    icon: PiStepsFill,
    title: "Structured Learning",
    description:
      "Roadmap-driven learning path — HTML → CSS → JS → React → MERN। Step by step, কোনো confusion নেই।",
  },
  {
    icon: FaLaptopCode,
    title: "Project-Based Practice",
    description:
      "Real projects বানিয়ে শেখো। Portfolio তৈরি হয়, আর practically কী শিখলে সেটা বোঝা যায়।",
  },
  {
    icon: FaUsers,
    title: "Mentor Support",
    description:
      "৬ জন experienced mentor সবসময় available। যেকোনো সমস্যায় Discord এ জিজ্ঞেস করো।",
  },
  {
    icon: RiUserCommunityFill,
    title: "Active Community",
    description:
      "50+ active members। Daily discussions, code reviews, আর weekly challenges চলে।",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gray-950 px-6 py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16 text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400"
          >
            কেন WireFrame Warriors?
          </motion.p>
          <motion.h2
            id="about-heading"
            variants={fadeUp}
            custom={1}
            className="text-4xl font-extrabold text-white sm:text-5xl"
          >
            একা না,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              একসাথে শেখো
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-400"
          >
            Programming শেখা কঠিন, কিন্তু সঠিক community থাকলে অনেক সহজ হয়।
            আমরা সেই community।
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                custom={i}
                className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border border-gray-800
        bg-gray-900/50
        p-8
        transition-all duration-300
        hover:border-indigo-800/60
        hover:bg-gray-900
      "
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-indigo-600/0 transition-all duration-300 group-hover:bg-indigo-600/5"
                />

                <div className="relative z-10">
                  <Icon
                    className="mb-4 text-4xl text-indigo-400 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />

                  <h3 className="mb-2 text-xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
