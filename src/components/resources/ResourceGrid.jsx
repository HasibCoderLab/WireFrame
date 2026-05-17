import { motion, AnimatePresence } from "framer-motion";
import ResourceCard from "./ResourceCard";

export default function ResourceGrid({ resources }) {
  return (
    <motion.div
      layout
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {resources.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="col-span-full flex flex-col items-center gap-3 py-24 text-center"
          >
            <span className="text-5xl">📭</span>
            <p className="text-lg font-semibold text-white">কোনো resource নেই</p>
            <p className="text-sm text-gray-500">অন্য filter try করো</p>
          </motion.div>
        ) : (
          resources.map((resource, i) => (
            <ResourceCard key={resource.id} resource={resource} index={i} />
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
}
