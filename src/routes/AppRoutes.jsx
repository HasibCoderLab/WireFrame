import { Routes, Route } from "react-router-dom";

// ✅ Done — fully built pages
import Home from "../pages/Home";
import Members from "../pages/Members";
import Resources from "../pages/Resources";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";

// 🚧 Coming soon
function ComingSoon({ name }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 pt-20">
      <div className="text-center">
        <p className="text-6xl mb-4">🚧</p>
        <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
        <p className="text-gray-400">এই page টা তৈরি হচ্ছে...</p>
      </div>
    </main>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* ✅ Built */}
      <Route path="/" element={<Home />} />
      <Route path="/members" element={<Members />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} />

      {/* 🚧 Coming soon */}
      <Route path="/projects" element={<ComingSoon name="Projects" />} />
      <Route path="/contact" element={<ComingSoon name="Join Us" />} />

      {/* 404 */}
      <Route path="*" element={<ComingSoon name="404 — Page Not Found" />} />
    </Routes>
  );
}
