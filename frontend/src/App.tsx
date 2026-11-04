// import { useState } from "react";
import Login from "./components/Login.tsx";
import RegisterPage from "./components/RegisterPage.tsx";
import Home from "./components/Home.tsx";
import { BrowserRouter, Routes, Route, Link } from "react-router";
// import Counter from "./components/Counter.tsx";

export const App = () => {
  return (
    <BrowserRouter>
      {/* <Counter /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/reg" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
