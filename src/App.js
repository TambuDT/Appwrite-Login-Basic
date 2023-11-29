import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoutes from "./util/PrivateRoutes";
import { AuthProvider } from "./util/AuthContext";

function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes></PrivateRoutes>}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    </AuthProvider>
  );
}

export default App;
