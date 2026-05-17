import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

const LAST_UPDATED = "May 17, 2025";

const sections = [
  {
    id: "acceptance",
    title: "1. শর্তাবলী গ্রহণ",
    content: [
      "WireFrame Warriors Discord server এ join করা বা এই website ব্যবহার করার মাধ্যমে তুমি এই Terms & Conditions সম্পূর্ণভাবে মেনে নিচ্ছ।",
      "তুমি যদি এই শর্তাবলী না মানো, তাহলে অনুগ্রহ করে আমাদের community ব্যবহার থেকে বিরত থাকো।",
    ],
  },
  {
    id: "community-rules",
    title: "2. Community Rules — অবশ্যই মানতে হবে",
    content: [
      "সবার সাথে সম্মানজনক আচরণ করতে হবে। কোনো ধরনের harassment, bullying বা hate speech সহ্য করা হবে না।",
      "Spam, self-promotion বা অপ্রাসঙ্গিক content post করা নিষেধ।",
      "NSFW বা inappropriate content সম্পূর্ণ নিষিদ্ধ।",
      "অন্যের code বা কাজ নিজের বলে দাবি করা (plagiarism) সম্পূর্ণ নিষিদ্ধ।",
      "Mentor ও Admin দের নির্দেশনা মেনে চলতে হবে।",
      "সঠিক channel এ সঠিক বিষয় নিয়ে আলোচনা করতে হবে।",
    ],
  },
  {
    id: "learning",
    title: "3. Learning ও Mentorship",
    content: [
      "Mentors স্বেচ্ছাসেবী ভিত্তিতে সাহায্য করেন। তাদের সাথে সম্মানজনক আচরণ বাধ্যতামূলক।",
      "প্রশ্ন করার আগে নিজে চেষ্টা করতে হবে এবং কী চেষ্টা করেছ তা উল্লেখ করতে হবে।",
      "Community তে শেখা জ্ঞান অন্যদের সাথে share করার মনোভাব রাখতে হবে।",
      "Mentor দের দেওয়া feedback সম্মানের সাথে গ্রহণ করতে হবে।",
    ],
  },
  {
    id: "content",
    title: "4. Content ও Intellectual Property",
    content: [
      "Community তে শেয়ার করা তোমার নিজের code বা content এর copyright তোমার কাছেই থাকে।",
      "অন্যের কাজ share করলে অবশ্যই credit দিতে হবে।",
      "Community resources (roadmaps, guides) commercial উদ্দেশ্যে ব্যবহার করা নিষেধ।",
    ],
  },
  {
    id: "enforcement",
    title: "5. নিয়ম ভঙ্গের পরিণতি",
    content: [
      "প্রথম লঙ্ঘনে সাধারণত warning দেওয়া হবে।",
      "বারবার লঙ্ঘনে temporary mute বা kick করা হতে পারে।",
      "গুরুতর লঙ্ঘনে (harassment, hate speech, spam) permanent ban করা হতে পারে।",
      "Ban/kick এর সিদ্ধান্ত Admin ও Lead Mentor দের এবং এটি চূড়ান্ত।",
    ],
  },
  {
    id: "disclaimer",
    title: "6. Disclaimer",
    content: [
      "WireFrame Warriors একটি volunteer-run community। আমরা নির্দিষ্ট কোনো job placement বা career outcome guarantee করি না।",
      "Community তে শেয়ার করা resources এবং advice educational উদ্দেশ্যে। Professional advice এর বিকল্প নয়।",
      "Community এর কারণে কোনো ক্ষতি হলে আমরা দায়বদ্ধ নই।",
    ],
  },
  {
    id: "changes",
    title: "7. Terms পরিবর্তন",
    content: [
      "এই Terms যেকোনো সময় আপডেট হতে পারে। বড় পরিবর্তন হলে Discord server এ announce করা হবে।",
      "পরিবর্তনের পরেও community ব্যবহার অব্যাহত রাখলে নতুন Terms মেনে নেওয়া হয়েছে বলে ধরা হবে।",
    ],
  },
];

function Section({ section, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="border-b border-gray-800 pb-8 last:border-0"
    >
      <h2 className="mb-4 text-xl font-bold text-white">{section.title}</h2>
      <ul className="flex flex-col gap-3">
        {section.content.map((para, i) => (
          <li key={i} className="flex gap-3 text-gray-400 leading-relaxed">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden="true" />
            <p>{para}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function TermsAndConditions() {
  return (
    <main id="main-content" className="min-h-screen bg-gray-950 px-6 pb-28 pt-36">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-12"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400"
          >
            Legal
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mb-3 text-4xl font-extrabold text-white"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-sm text-gray-500">
            Last updated: {LAST_UPDATED}
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="mt-4 text-gray-400 leading-relaxed">
            WireFrame Warriors community ব্যবহার করার আগে এই শর্তাবলী মনোযোগ দিয়ে
            পড়ো। Community তে participate করার মাধ্যমে তুমি এই সমস্ত শর্ত মেনে
            নিচ্ছ।
          </motion.p>
        </motion.div>

        {/* Quick summary box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10 rounded-2xl border border-violet-800/40 bg-violet-600/10 p-5"
        >
          <p className="mb-2 text-sm font-bold text-violet-300">⚡ সংক্ষেপে</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "সবার সাথে সম্মানজনক আচরণ করো",
              "Spam ও inappropriate content নিষেধ",
              "Mentor দের সাথে ভালো ব্যবহার করো",
              "অন্যের কাজে credit দাও",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-violet-400">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Sections */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
          className="flex flex-col gap-8"
        >
          {sections.map((section, i) => (
            <Section key={section.id} section={section} index={i} />
          ))}
        </motion.div>

        {/* Footer links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-gray-500">
            আরও জানতে আমাদের{" "}
            <a href="/privacy-policy" className="text-indigo-400 hover:underline">
              Privacy Policy
            </a>{" "}
            পড়ো।
          </p>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 px-5 py-2.5 text-sm font-bold text-white transition-colors"
          >
            Discord এ Join করো
          </a>
        </motion.div>
      </div>
    </main>
  );
}
