import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

const LAST_UPDATED = "May 17, 2025";

const sections = [
  {
    id: "information",
    title: "1. আমরা কী তথ্য সংগ্রহ করি?",
    content: [
      "WireFrame Warriors একটি Discord-based community। আমাদের website ব্যবহার করলে আমরা কোনো personal data সংগ্রহ করি না।",
      "Discord platform এ join করলে Discord এর নিজস্ব Privacy Policy প্রযোজ্য হয়। আমরা Discord এর মাধ্যমে শুধুমাত্র তোমার username এবং publicly visible তথ্য দেখতে পারি।",
      "আমাদের website analytics (যদি থাকে) শুধুমাত্র anonymous traffic data সংগ্রহ করে — যেমন page views এবং visit duration। কোনো personally identifiable information (PII) collect করা হয় না।",
    ],
  },
  {
    id: "cookies",
    title: "2. Cookies",
    content: [
      "আমাদের website essential cookies ব্যবহার করতে পারে যা site টি সঠিকভাবে কাজ করার জন্য প্রয়োজনীয়।",
      "আমরা কোনো third-party tracking cookies বা advertising cookies ব্যবহার করি না।",
      "Browser settings থেকে cookies disable করা যাবে, তবে কিছু features কাজ নাও করতে পারে।",
    ],
  },
  {
    id: "data-use",
    title: "3. তথ্য কীভাবে ব্যবহার করা হয়?",
    content: [
      "সংগৃহীত যেকোনো তথ্য শুধুমাত্র community পরিচালনা এবং উন্নতির জন্য ব্যবহার করা হয়।",
      "আমরা কোনো তৃতীয় পক্ষের কাছে তোমার তথ্য বিক্রি, ভাড়া বা শেয়ার করি না।",
      "Community safety নিশ্চিত করতে Discord server এর activity monitor করা হতে পারে।",
    ],
  },
  {
    id: "third-party",
    title: "4. Third-Party Links",
    content: [
      "আমাদের Resources page এ বাহ্যিক websites এর link রয়েছে (YouTube, GitHub, ইত্যাদি)। এই sites এর নিজস্ব Privacy Policy রয়েছে এবং আমরা তাদের content বা practices এর জন্য দায়ী নই।",
      "External links এ click করার আগে সেই site এর privacy policy পড়ে নেওয়ার পরামর্শ দেওয়া হচ্ছে।",
    ],
  },
  {
    id: "children",
    title: "5. শিশুদের গোপনীয়তা",
    content: [
      "WireFrame Warriors ১৩ বছরের কম বয়সী কাউকে সদস্যপদ দেয় না। এটি Discord এর Terms of Service এর সাথে সামঞ্জস্যপূর্ণ।",
      "যদি আমরা জানতে পারি যে ১৩ বছরের কম বয়সী কেউ আমাদের community তে আছে, আমরা তাৎক্ষণিকভাবে সেই account remove করব।",
    ],
  },
  {
    id: "changes",
    title: "6. Policy পরিবর্তন",
    content: [
      "এই Privacy Policy যেকোনো সময় আপডেট করা হতে পারে। পরিবর্তন হলে Discord server এ announcement দেওয়া হবে।",
      "Page এর শীর্ষে 'Last Updated' তারিখ দেখে সর্বশেষ পরিবর্তন সম্পর্কে জানতে পারবে।",
    ],
  },
  {
    id: "contact",
    title: "7. যোগাযোগ",
    content: [
      "Privacy সংক্রান্ত যেকোনো প্রশ্নের জন্য Discord server এ আমাদের সাথে যোগাযোগ করো।",
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
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden="true" />
            <p>{para}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function PrivacyPolicy() {
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
            className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-400"
          >
            Legal
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mb-3 text-4xl font-extrabold text-white"
          >
            Privacy Policy
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-sm text-gray-500">
            Last updated: {LAST_UPDATED}
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="mt-4 text-gray-400 leading-relaxed">
            WireFrame Warriors community তে তোমাকে স্বাগতম। তোমার privacy আমাদের
            কাছে গুরুত্বপূর্ণ। এই policy তে আমরা ব্যাখ্যা করছি কীভাবে আমরা তথ্য
            সংগ্রহ ও ব্যবহার করি।
          </motion.p>
        </motion.div>

        {/* Sections */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
          className="flex flex-col gap-8"
        >
          {sections.map((section, i) => (
            <Section key={section.id} section={section} index={i} />
          ))}
        </motion.div>

        {/* Discord CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 rounded-2xl border border-indigo-800/40 bg-indigo-600/10 p-6 text-center"
        >
          <p className="mb-3 font-semibold text-white">প্রশ্ন আছে?</p>
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-sm font-bold text-white transition-colors"
          >
            Discord এ জিজ্ঞেস করো
          </a>
        </motion.div>
      </div>
    </main>
  );
}
