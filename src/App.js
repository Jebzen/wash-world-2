import React from "react";
import "./style.scss";
import { Link, Outlet } from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Hello wash world!</h1>
            <nav>
                <Link to="/">Index</Link>
                <Link to="/home">Home</Link>
            </nav>
            <Outlet />
        </div>
    );
}
