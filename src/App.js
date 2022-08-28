import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import WomenItem from "./components/womenItem";
import Home from "./components/home";
import JewelItem from "./components/jewel";
import MenItem from "./components/menItem";
import ElecItem from "./components/electronics";

function App() {


  return (
    <Router>
      <Routes>
          <Route exact path="/item/women" element={<WomenItem />}/>
          <Route exact path="/item/jewel" element={<JewelItem />}/>
          <Route exact path="/item/men" element={<MenItem />}/>
          <Route exact path="/item/elec" element={<ElecItem />}/>
          <Route exact path="/" element={<Home />}/>
        </Routes>

    </Router>
  );
}

export default App;
