import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";

import styles from "./App.module.css";

import Home from "./pages/Home/Home";
import Campaign from "./pages/Campaign/Campaign";
//import Identification from "./pages/Identification/Identification";
import Login from "./pages/Login/Login";
import Registration from "./pages/Bloodcenter/Registration/Registration";
import Profile from "./pages/Bloodcenter/Profile/Profile";
import EditProfile from "./pages/Bloodcenter/EditProfile/EditProfile";
import RequireAuth from "./contexts/Auth/RequireAuth";
import RecoverPassword from "./pages/Login/RecoverPassword/RecoverPassword";
import Bloodcenters from "./pages/Bloodcenters/Bloodcenters";
import { useContext } from "react";
import { AuthContext } from "./contexts/Auth/AuthContext";
import ForgetPassword from "./pages/Login/ForgetPassword/ForgetPassword";
import BloodcenterProfile from "./pages/BloodcenterProfile/BloodcenterProfile";
import ScheduledAppointment from "./pages/Bloodcenter/ScheduledAppointment/ScheduledAppointment";

const App = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaign/:id" element={<Campaign />} />
          <Route path="/bloodcenters" element={<Bloodcenters />} />
          <Route path="/bloodcenters/:id" element={<BloodcenterProfile />} />
          {/* <Route path="/identification" element={<Identification />} /> */}
          {!auth.user ? (
            <Route path="/bloodcenter/login" element={<Login />} />
          ) : (
            <Route path="/bloodcenter/login" element={<Profile />} />
          )}
          <Route path="/bloodcenter/registration" element={<Registration />} />
          <Route
            path="/bloodcenter/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="/bloodcenter/profile/edit/">
            <Route
              path=""
              element={
                <RequireAuth>
                  <EditProfile />
                </RequireAuth>
              }
            />
            <Route
              path=":tab"
              element={
                <RequireAuth>
                  <EditProfile />
                </RequireAuth>
              }
            />
            <Route
              path=":tab/:id"
              element={
                <RequireAuth>
                  <EditProfile />
                </RequireAuth>
              }
            />
          </Route>
          <Route
            path="/scheduledappointment"
            element={
              <RequireAuth>
                <ScheduledAppointment />
              </RequireAuth>
            }
          />

          <Route path="/recoverpassword/:token" element={<RecoverPassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
      </Router>

      <ToastContainer
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
        limit={3}
        className={styles.toast}
      />
    </>
  );
};

export default App;
