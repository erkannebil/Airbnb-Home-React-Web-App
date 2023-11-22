import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import About from './component/aboutUs'; // Düzeltildi
import Details from "./component/details";
import Contact from "./component/contacksAndReservations";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
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
