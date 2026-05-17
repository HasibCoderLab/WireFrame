import { useState, useMemo } from "react";

/**
 * useFilter
 * Generic filter hook — Members page আর Resources page দুইটায় কাজে আসবে।
 *
 * @param {Array}  items      — filter করার array
 * @param {string} field      — কোন field এর উপর filter করবে (e.g. "category", "skills")
 * @param {string} allValue   — "সব দেখাও" option এর value (e.g. "all")
 * @returns {{ active, setActive, filtered }}
 */
export function useFilter(items = [], field = "category", allValue = "all") {
  const [active, setActive] = useState(allValue);

  const filtered = useMemo(() => {
    if (active === allValue) return items;

    return items.filter((item) => {
      const value = item[field];
      // Array field (e.g. skills: ["React", "CSS"])
      if (Array.isArray(value)) {
        return value.some(
          (v) => v.toLowerCase() === active.toLowerCase()
        );
      }
      // String field (e.g. category: "beginner")
      return value?.toLowerCase() === active.toLowerCase();
    });
  }, [items, field, active, allValue]);

  return { active, setActive, filtered };
}
