import "./App.css";
import Navbar from "./components/Navbar"; 
import AddBeerPage from "./pages/AddBeerPage";
import AllBeersPage from "./pages/AllBeersPage"; 
import BeerDetailsPage from "./pages/BeerDetailsPage";
import HomePage from "./pages/HomePage";
import RandomBeerPage from "./pages/RandomBeerPage";

import { Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/addBeer" element={<AddBeerPage />} />
        <Route path="/allBeer" element={<AllBeersPage />} />
        <Route path="/detail/:id" element={<BeerDetailsPage />} />
        <Route path="/random" element={<RandomBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
