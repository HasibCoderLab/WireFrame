import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "./ScrollToTop";

/**
 * MainLayout
 * সব page এই layout এর ভেতরে render হয়।
 * Navbar + children (page content) + Footer
 */
export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-white">
      <ScrollToTop />
      <Navbar />
      {/* skip-to-content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
