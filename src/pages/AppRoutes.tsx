import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Main from "./Main/Main";
import Zustatek from "./Zustatek/Zustatek";
import Vklad from "./Vklad/Vklad";
import Vyber from "./Vyber/Vyber";

export default function AppRoutes() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Vyber" element={<Vyber />} />
          <Route path="/Vklad" element={<Vklad />} />
          <Route path="/Zustatek" element={<Zustatek />} />
        </Routes>
      </HashRouter>
    </>
  );
}
