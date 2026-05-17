import { motion } from "framer-motion";
import { scaleIn } from "../../utils/animations";

// ─── Social icon link ───────────────────────────────────────────────────────
function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex h-8 w-8 items-center justify-center
        rounded-lg border border-gray-700
        text-gray-400 hover:border-indigo-500 hover:text-indigo-400
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-indigo-400
      "
    >
      {children}
    </a>
  );
}

// ─── GitHub icon ─────────────────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// ─── LinkedIn icon ───────────────────────────────────────────────────────────
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── Discord icon ─────────────────────────────────────────────────────────────
function DiscordIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

// ─── MemberCard ───────────────────────────────────────────────────────────────
export default function MemberCard({ mentor, index }) {
  return (
    <motion.article
      variants={scaleIn}
      custom={index}
      className="
        group
        flex flex-col
        rounded-2xl
        border border-gray-800
        bg-gray-900/60
        overflow-hidden
        transition-all duration-300
        hover:border-indigo-700/60
        hover:shadow-xl hover:shadow-indigo-950/30
      "
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${mentor.color}`} aria-hidden="true" />

      <div className="flex flex-col gap-4 p-6">
        {/* Avatar + name row */}
        <div className="flex items-center gap-4">
          <div
            aria-hidden="true"
            className={`
              flex h-14 w-14 shrink-0 items-center justify-center
              rounded-xl
              bg-gradient-to-br ${mentor.color}
              text-lg font-extrabold text-white
              shadow-lg
              ring-2 ring-white/10
              transition-transform duration-300
              group-hover:scale-105
            `}
          >
            {mentor.initials}
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-base font-bold text-white">
              {mentor.name}
            </h2>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/15 px-2.5 py-0.5 text-xs font-semibold text-indigo-300">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              {mentor.role}
            </span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed text-gray-400">{mentor.bio}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5" aria-label={`${mentor.name}'s skills`}>
          {mentor.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-700 bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-800" aria-hidden="true" />

        {/* Social links */}
        <div className="flex items-center gap-2">
          <SocialLink href={mentor.github} label={`${mentor.name}'s GitHub`}>
            <GithubIcon />
          </SocialLink>
          <SocialLink href={mentor.linkedin} label={`${mentor.name}'s LinkedIn`}>
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href={`https://discord.com/`} label={`${mentor.name} on Discord`}>
            <DiscordIcon />
          </SocialLink>
          <span className="ml-auto text-xs text-gray-600">{mentor.discord}</span>
        </div>
      </div>
    </motion.article>
  );
}
