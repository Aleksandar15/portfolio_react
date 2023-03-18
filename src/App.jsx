import "./LightMode.css";
import "./DarkMode.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Page not found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
