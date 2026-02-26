import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AuthLayout from "./layouts/AuthLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";

axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fechUser = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/auth/me`);
        setUser(res.data);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fechUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} API_URL={API_URL} />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home user={user} error={error} />} />
          <Route
            path="/login"
            element={<Login setUser={setUser} API_URL={API_URL} />}
          />
          <Route
            path="/register"
            element={<Register setUser={setUser} API_URL={API_URL} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
