import Home from "./Pages/Home/Home";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Watch from "./Pages/Watch/Watch";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/authContext";
function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route path="/movies" element={<Home type="movie" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
