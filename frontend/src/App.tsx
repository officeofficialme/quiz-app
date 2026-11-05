import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./pages/components/Sidebar";

export const App = () => {
  return (
    <div className="flex max-md:block">
      <Sidebar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};