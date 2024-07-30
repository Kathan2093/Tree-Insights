import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TreeDetails from "./components/TreeDetails";
import ShrubPage from "./pages/ShrubPage";
import HerbPage from "./pages/HerbPage";
import ClimberPage from "./pages/ClimberPage";
import CreeperPage from "./pages/CreeperPage";
import Footer from "./components/Footer";
import ShrubDetails from "./components/ShrubDetails";
import HerbDetails from "./components/HerbDetails";
import ClimberDetails from "./components/ClimberDetails";
import CreeperDetails from "./components/CreeperDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tree/:id" element={<TreeDetails />} />
        <Route path="/shrubs" element={<ShrubPage />} />
        <Route path="/shrub/:id" element={<ShrubDetails />} />
        <Route path="/herbs" element={<HerbPage />} />
        <Route path="/herb/:id" element={<HerbDetails />} />
        <Route path="/climbers" element={<ClimberPage />} />
        <Route path="/climber/:id" element={<ClimberDetails />} />
        <Route path="/creepers" element={<CreeperPage />} />
        <Route path="/creeper/:id" element={<CreeperDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
