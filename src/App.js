import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Identification from "./pages/Identification/Identification";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identification" element={<Identification />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
