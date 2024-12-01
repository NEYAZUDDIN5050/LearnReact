import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";


function App() {
  const [auth, setAuth] = useState(false);
  function signIn() {
    setAuth(true);
  }
  if (auth) {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} /> 
        </Routes>
      </Router>
    );
  }

  return (
    <div>
      {/*<Login signIn={signIn}/>*/}
      {/*<Signup signIn={signIn} />*/}
      <Signup  signIn={signIn} setAuth={setAuth}/>
    </div>
  );
}
export default App;
