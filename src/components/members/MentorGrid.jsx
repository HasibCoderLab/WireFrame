import { motion, AnimatePresence } from "framer-motion";
import MemberCard from "./MemberCard";

export default function MentorGrid({ mentors }) {
  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {mentors.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-span-full flex flex-col items-center gap-3 py-24 text-center"
          >
            <span className="text-5xl">🔍</span>
            <p className="text-lg font-semibold text-white">কোনো result নেই</p>
            <p className="text-sm text-gray-500">অন্য filter try করো</p>
          </motion.div>
        ) : (
          mentors.map((mentor, i) => (
            <MemberCard key={mentor.id} mentor={mentor} index={i} />
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
}
