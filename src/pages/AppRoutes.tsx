import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

export default function AppRoutes() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}
