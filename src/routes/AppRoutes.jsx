import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// Placeholder pages — পরে একে একে বানাবো
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
      <Route path="/" element={<Home />} />
      <Route path="/members" element={<ComingSoon name="Members" />} />
      <Route path="/resources" element={<ComingSoon name="Resources" />} />
      <Route path="/projects" element={<ComingSoon name="Projects" />} />
      <Route path="/contact" element={<ComingSoon name="Join Us" />} />
      {/* 404 */}
      <Route
        path="*"
        element={<ComingSoon name="404 — Page Not Found" />}
      />
    </Routes>
  );
}
