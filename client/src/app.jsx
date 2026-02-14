import { Routes, Route, Link } from "react-router-dom";
import TripEditor from "./pages/TripEditor";
import Preview from "./pages/Preview";

export default function App() {
  return (
    <div>
      {/* Simple Navigation */}
      <nav style={{ padding: 10 }}>
        <Link to="/editor" style={{ marginRight: 10 }}>
          Trip Editor
        </Link>
        <Link to="/preview">
          Preview
        </Link>
      </nav>

      <Routes>
        <Route path="/editor" element={<TripEditor />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </div>
  );
}
