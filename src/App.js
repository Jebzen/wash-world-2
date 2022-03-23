import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
    return (
        <>
            <header className="bg-black">
                <nav class="navbar navbar-dark">
                    <div class="container">
                        <Link to="/" className="logo">
                            <img
                                src="https://washworld.dk/assets/brand/logo.svg"
                                alt="Wash World"
                            />
                        </Link>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
}
