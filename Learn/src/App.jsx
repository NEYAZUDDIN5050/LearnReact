import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Picture from "./pages/Picture";
import Slide from "./pages/Slide";
import Navbar from "./Components/Navbar";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(false);
  function signIn() {
    setAuth(true);
  }
  if (auth) {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/picture" element={<Picture/>} />
          <Route path="/Slide" element={<Slide/>} />
        </Routes>
      </Router>
    );
  }

  return (
    <div>
      <Login signIn={signIn}/>
    </div>
  );
}

export default App;
