import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Picture from "./pages/Picture";
import Slide from "./pages/Slide";
import Navbar from "./Components/Navbar";
import Signup from "./pages/Signup";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

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
          <Route path="/home" element={<Home />} />
          <Route path="/picture" element={<Picture />} />
          <Route path="/Slide" element={<Slide />} />
        </Routes>
      </Router>
    );
  }

  return (
    <div>
      {/*<Login signIn={signIn}/>*/}
      {/*<Signup signIn={signIn} />*/}
      <Header signIn={signIn} />
      <Header signIn={signIn} />
    </div>
  );
}

export default App;
