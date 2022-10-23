import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Identification from "./pages/Identification/Identification";
import Login from "./pages/Login/Login";
import Registration from "./pages/Bloodcenter/Registration/Registration";
import Profile from "./pages/Bloodcenter/Profile/Profile";
import EditProfile from "./pages/Bloodcenter/EditProfile/EditProfile";
import RequireAuth from "./contexts/Auth/RequireAuth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/identification" element={<Identification />} />
        <Route path="/bloodcenter/login" element={<Login />} />
        <Route path="/bloodcenter/registration" element={<Registration />} />
        <Route path="/bloodcenter/profile" element={<Profile />} />
        <Route path="/bloodcenter/profile/edit" element={<EditProfile />} />
        <Route
          path="/bloodcenter/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
