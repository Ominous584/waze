import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Hotel from "./routes/Hotel";
import TravelPlan from "./routes/TravelPlan";
import TravelPackages from "./routes/TravelPackages";
import Package from "./routes/Package";
import Budget from './routes/Budget';
import Signup from './routes/Signup';
import Login from './routes/Login';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/travelplan" element={<TravelPlan />} />
        <Route path="/travelpackages" element={<TravelPackages />} />
        <Route path="/package" element={<Package />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
