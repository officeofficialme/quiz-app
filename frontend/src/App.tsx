import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Sidebar from "./pages/components/Sidebar";

// import Counter from "./components/Counter.tsx";

export const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <BrowserRouter>
        {/* <Counter /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/reg" element={<RegisterPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
