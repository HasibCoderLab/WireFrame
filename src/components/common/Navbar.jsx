import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/members", label: "Members" },
  { to: "/resources", label: "Resources" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Join" },
];

// Reusable nav link with active indicator
function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === "/"}
      className={({ isActive }) =>
        [
          "relative py-1 text-sm font-medium transition-colors duration-200",
          isActive
            ? "text-white"
            : "text-gray-400 hover:text-white",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          {label}
          {isActive && (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-indigo-400"
            />
          )}
        </>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow + blur on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-gray-800 bg-gray-950/90 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg"
          aria-label="WireFrame Warriors Home"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-10 items-center justify-center rounded-lg text-white shadow-md"
          >
            <img src={logo} alt="" />
          </span>
          <span className="hidden text-base font-bold text-white sm:block">
            WireFrame <span className="text-indigo-400">Warriors</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavItem to={link.to} label={link.label} />
            </li>
          ))}
        </ul>

        {/* Discord CTA — desktop */}
        <a
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden md:inline-flex items-center gap-2
            rounded-xl
            bg-indigo-600 hover:bg-indigo-500
            px-4 py-2
            text-sm font-semibold text-white
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-950
          "
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
          </svg>
          Join Discord
        </a>

        {/* Hamburger — mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="
            flex md:hidden
            h-9 w-9 items-center justify-center
            rounded-lg border border-gray-700
            text-gray-400 hover:text-white
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-indigo-400
          "
        >
          <span aria-hidden="true">
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-gray-800 bg-gray-950/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200",
                        isActive
                          ? "bg-indigo-600/20 text-indigo-300"
                          : "text-gray-400 hover:bg-gray-800 hover:text-white",
                      ].join(" ")
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://discord.gg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  Join Discord
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
