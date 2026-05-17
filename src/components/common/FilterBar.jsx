import { motion } from "framer-motion";

/**
 * FilterBar
 * Reusable pill-tab filter।
 * Members page আর Resources page — দুইটায় use হবে।
 *
 * @param {{ id: string, label: string }[]} tabs
 * @param {string}   active
 * @param {Function} onSelect
 */
export default function FilterBar({ tabs, active, onSelect }) {
  return (
    <div
      role="tablist"
      aria-label="Filter options"
      className="flex flex-wrap items-center gap-2"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(tab.id)}
            className={[
              "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-950",
              isActive
                ? "text-white"
                : "border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white",
            ].join(" ")}
          >
            {/* Animated active background */}
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-indigo-600"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
              />
            )}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
