import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { resources, categories } from "../data/resources";
import ResourceGrid from "../components/resources/ResourceGrid";
import PageHeader from "../components/common/PageHeader";
import FilterBar from "../components/common/FilterBar";
import { fadeUp } from "../utils/animations";

function SearchIcon() {
    return (
        <svg
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    );
}

export default function Resources() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = useMemo(() => {
        let result = resources;

        // Category filter
        if (activeCategory !== "all") {
            result = result.filter((r) => r.category === activeCategory);
        }

        // Search filter — title, description, tags, author
        const q = searchQuery.trim().toLowerCase();
        if (q) {
            result = result.filter(
                (r) =>
                    r.title.toLowerCase().includes(q) ||
                    r.description.toLowerCase().includes(q) ||
                    r.tags.some((t) => t.toLowerCase().includes(q)) ||
                    r.author.toLowerCase().includes(q)
            );
        }

        return result;
    }, [activeCategory, searchQuery]);

    return (
        <main id="main-content">
            {/* Hero header */}
            <PageHeader
                eyebrow="Learning Resources"
                title={
                    <>
                        সেরা{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            Resources
                        </span>
                    </>
                }
                subtitle="Mentor-curated resources  Beginner থেকে Advanced পর্যন্ত। সব free, সব handpicked।"
            />

            {/* Content */}
            <section className="bg-gray-950 px-6 pb-28">
                <div className="mx-auto max-w-6xl">

                    {/* Search + Filter */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        className="mb-10 flex flex-col gap-5"
                    >
                        {/* Search bar */}
                        <motion.div variants={fadeUp} custom={0} className="relative">
                            <label htmlFor="resource-search" className="sr-only">
                                Search resources
                            </label>
                            <SearchIcon />
                            <input
                                id="resource-search"
                                type="search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by title, tag, or author..."
                                className="
                  w-full rounded-xl border border-gray-700
                  bg-gray-900/60 py-3 pl-11 pr-4
                  text-sm text-white placeholder-gray-500
                  transition-colors duration-200
                  hover:border-gray-600
                  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500
                "
                            />
                            {/* Clear button */}
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery("")}
                                    aria-label="Clear search"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-500 hover:text-white transition-colors"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </motion.div>

                        {/* Filter bar + count */}
                        <motion.div
                            variants={fadeUp}
                            custom={1}
                            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <FilterBar
                                tabs={categories}
                                active={activeCategory}
                                onSelect={setActiveCategory}
                            />
                            <p className="shrink-0 text-sm text-gray-500">
                                {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
                                {searchQuery && (
                                    <span className="ml-1 text-gray-600">
                                        for &quot;{searchQuery}&quot;
                                    </span>
                                )}
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Resource grid */}
                    <ResourceGrid resources={filtered} />

                    {/* Suggest resource CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-20 rounded-2xl border border-dashed border-gray-700 p-10 text-center"
                    >
                        <p className="mb-1 text-xl font-bold text-white">
                            কোনো ভালো resource জানো?
                        </p>
                        <p className="mb-6 text-gray-400 text-sm">
                            Discord server এ শেয়ার করো  mentor রা review করে list এ add করবে।
                        </p>
                        <a
                            href="https://discord.gg/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex items-center gap-2
                rounded-xl border border-gray-700 hover:border-indigo-500
                bg-gray-900 hover:bg-indigo-600/10
                px-5 py-2.5
                text-sm font-semibold text-gray-300 hover:text-white
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-950
              "
                        >
                            💬 Suggest a Resource
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
