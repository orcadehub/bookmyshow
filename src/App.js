import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/register" element={<Signup/>}/>
          <Route exact path="/login" element={<Login/>}/>
          {/* <Route /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
