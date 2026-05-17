import { motion } from "framer-motion";
import { scaleIn } from "../../utils/animations";
import { typeIcons, typeLabels } from "../../data/resources";

const categoryColors = {
  beginner: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  intermediate: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  advanced: "text-rose-400 bg-rose-400/10 border-rose-400/20",
  tools: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
};

const categoryLabels = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  tools: "Tools",
};

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function ResourceCard({ resource, index }) {
  return (
    <motion.article
      variants={scaleIn}
      custom={index}
      layout
      className="
        group flex flex-col
        rounded-2xl border border-gray-800
        bg-gray-900/60
        overflow-hidden
        transition-all duration-300
        hover:border-indigo-700/50
        hover:shadow-xl hover:shadow-indigo-950/20
      "
    >
      {/* Top accent bar by category */}
      <div
        aria-hidden="true"
        className={`h-1 w-full ${
          resource.category === "beginner"
            ? "bg-gradient-to-r from-emerald-500 to-teal-500"
            : resource.category === "intermediate"
            ? "bg-gradient-to-r from-amber-500 to-orange-500"
            : resource.category === "advanced"
            ? "bg-gradient-to-r from-rose-500 to-pink-500"
            : "bg-gradient-to-r from-cyan-500 to-blue-500"
        }`}
      />

      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Type icon + badges row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-hidden="true">
              {typeIcons[resource.type]}
            </span>
            <span className="rounded-full border border-gray-700 bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-400">
              {typeLabels[resource.type]}
            </span>
          </div>

          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize ${
              categoryColors[resource.category]
            }`}
          >
            {categoryLabels[resource.category]}
          </span>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-base font-bold text-white leading-snug group-hover:text-indigo-300 transition-colors duration-200">
            {resource.title}
          </h2>
          <p className="mt-1 text-xs text-gray-500">by {resource.author}</p>
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-gray-400">
          {resource.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5" aria-label="Tags">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-700 bg-gray-800/80 px-2 py-0.5 text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-800" aria-hidden="true" />

        {/* Footer row */}
        <div className="flex items-center justify-between">
          {resource.free && (
            <span className="text-xs font-semibold text-emerald-400">✓ Free</span>
          )}
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              ml-auto inline-flex items-center gap-1.5
              rounded-lg border border-gray-700 hover:border-indigo-500
              bg-transparent hover:bg-indigo-600/10
              px-3 py-1.5
              text-xs font-semibold text-gray-300 hover:text-indigo-300
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-indigo-400
            "
          >
            Visit
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
