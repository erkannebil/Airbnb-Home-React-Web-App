import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Pages/navbar";
import Home from "./component/Pages/home";
import About from './component/Pages/aboutUs'; // Düzeltildi
import Details from "./component/Pages/details";
import Contact from "./component/Pages/contacksAndReservations";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    {/* Routes içinde Route'ları kullanarak rotaları belirtin */}
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/details" element={<Details />} />
                        <Route path="/aboutUs" element={<About />} /> {/* Düzeltildi */}
                        <Route path="/contacksAndReservations" element={<Contact />} />
                    </Routes>
                    
                </div>
            </Router>


        );
    }
}

















export default App;
