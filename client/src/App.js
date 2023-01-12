import "./App.css";

import Home from "./pages/Home/Home";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user, "localuser");
    setUser(user);
  }, [navigate]);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
