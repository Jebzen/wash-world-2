import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Front from "./pages/Front";
import "./style.scss";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
            <Routes>
                <Route path="/" element={<Front />} />
                <Route
                    path="*"
                    element={
                        <main>
                            <h1>Nothing here!</h1>
                        </main>
                    }
                />
            </Routes>
        </React.StrictMode>
    </BrowserRouter>,
    rootElement
);
