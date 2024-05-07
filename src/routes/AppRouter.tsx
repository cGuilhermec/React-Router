import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RGB from "../pages/RGB";
import HSLA from "../pages/HSLA";
import CMYK from "../pages/CMYK";
import { Header } from "../components/Header/Header";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<RGB />} />
          <Route path="/hsla" element={<HSLA />} />
          <Route path="/cmyk" element={<CMYK />} />
        </Routes>
      </div>
    </Router>
  );
};
