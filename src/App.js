import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Identification from "./pages/Identification/Identification";
import Login from "./pages/Login/Login";
import Registration from "./pages/Bloodcenter/Registration/Registration";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identification" element={<Identification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bloodcenterregistration" element={<Registration />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
