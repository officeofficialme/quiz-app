import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./pages/components/Sidebar";
import AI from "./pages/AI";

export const App = () => {
  return (
    <div className="flex max-md:block">
      <Sidebar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<AI />} />
        </Routes>
      </main>
    </div>
  );
};