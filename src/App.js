import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar"; // Assuming you have a Navbar component

import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import "./App.css" ;

class App extends Component  {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    {/* Routes içinde Route'ları kullanarak rotaları belirtin */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
