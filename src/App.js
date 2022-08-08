import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Create from "./components/Create/Create";
import Navbar from "./components/Navbar/Navbar";
import Clubs from "./components/Clubs/Clubs";
function App() {
  return (
    <Router>
      {/* <Navbar  /> */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/clubs" element={<Clubs/>} />

      </Routes>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
