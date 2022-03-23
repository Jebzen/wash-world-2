import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Front from "./Front";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
            <Routes>
                <Route path="/" element={<Front />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </React.StrictMode>
    </BrowserRouter>,
    rootElement
);
