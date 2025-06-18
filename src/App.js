import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import Plays from "./pages/Plays";
import Streams from "./pages/Streams";
import Sports from "./pages/Sports";
import Events from "./pages/Events";
import MovieDetails from "./pages/MovieDetails";
import Tickets from "./pages/Tickets";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieDetails />} />
          <Route exact path="/plays" element={<Plays />} />
           <Route exact path="/my-tickets" element={<Tickets />} />
          <Route exact path="/streams" element={<Streams />} />
          <Route exact path="/sports" element={<Sports />} />
          <Route exact path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
