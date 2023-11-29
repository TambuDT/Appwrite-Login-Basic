import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../util/AuthContext";
import "./Login.css";

function Login() {
  const auth = useAuth();
  const { user, errore } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (errore) {
      // Verifica se l'errore contiene la stringa specifica
      const shouldShowError = errore.message.indexOf("User (role: guests) missing scope (account)") === -1;

      setShowError(shouldShowError);

      const timeoutId = setTimeout(() => {
        setShowError(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [errore]);

  async function handleLogin() {
    console.log(email);
    console.log(password);
    try {
      await auth.loginUser(email, password);
      navigate("/");
    } catch (error) {
      setShowError(true);
      console.error("Errore durante il login:", error);
    }
  }

  return (
    <div className="page-wrapper">
      <div className={`oaerror danger ${showError ? "visible" : ""}`}>
        <strong>Error </strong>
        {errore && errore.message}
      </div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button className="login-button" onClick={handleLogin}>
        LOGIN
      </button>
    </div>
  );
}

export default Login;
