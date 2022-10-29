import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
<<<<<<< HEAD
import "react-toastify/dist/ReactToastify.min.css";
=======
import "react-toastify/dist/ReactToastify.css";
>>>>>>> 07748b27582d3fa538a7052341ddece8d5f3d673

import styles from "./App.module.css";

import Home from "./pages/Home/Home";
import Identification from "./pages/Identification/Identification";
import Login from "./pages/Login/Login";
import Registration from "./pages/Bloodcenter/Registration/Registration";
import Profile from "./pages/Bloodcenter/Profile/Profile";
import EditProfile from "./pages/Bloodcenter/EditProfile/EditProfile";
import RequireAuth from "./contexts/Auth/RequireAuth";
import RecoverPassword from "./pages/Login/RecoverPassword/RecoverPassword";

const App = () => {
  return (
<<<<<<< HEAD
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
        <Route path="/forgetpassword" element={<RecoverPassword />} />
      </Routes>

      <ToastContainer
        limit={3}
=======
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/identification" element={<Identification />} />
          <Route path="/bloodcenter/login" element={<Login />} />
          <Route path="/bloodcenter/registration" element={<Registration />} />
          <Route
            path="/bloodcenter/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/bloodcenter/profile/edit"
            element={
              <RequireAuth>
                <EditProfile />
              </RequireAuth>
            }
          />
          <Route path="/forgetpassword" element={<RecoverPassword />} />
        </Routes>
      </Router>

      <ToastContainer
>>>>>>> 07748b27582d3fa538a7052341ddece8d5f3d673
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
<<<<<<< HEAD
      />
    </Router>
=======
        className={styles.toast}
      />
    </>
>>>>>>> 07748b27582d3fa538a7052341ddece8d5f3d673
  );
};

export default App;
