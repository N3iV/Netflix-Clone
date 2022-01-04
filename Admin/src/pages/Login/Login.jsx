import React, { useContext, useState } from "react";
import { login } from "../../Context/AuthContext/apiCall";
import { AuthContext } from "../../Context/AuthContext/authContext";
import "./login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <form className="login">
        <input
          type="text"
          placeholder="email"
          className="login_input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="login_input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}
