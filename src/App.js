import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Identification from "./pages/Identification/Identification";
import Login from "./pages/Login/Login";
import BloodcenterRegistration from "./pages/Bloodcenter/Registration/BloodcenterRegistration";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identification" element={<Identification />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/bloodcenterregistration"
            element={<BloodcenterRegistration />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
