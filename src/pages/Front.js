import React, { useEffect, useState } from "react";
import axios from "axios";
import info from "../info";
import WashLocation from "../components/WashLocation.js";

export default function Front() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get(info.backendUrl + "/locations").then((result) => {
            //console.log(result.data.response.locations);
            setLocations(result.data.response.locations);
        });
    }, []);

    function sortArray(a, b) {
        if (a.status !== "available") {
            return 1;
        }
        if (b.status !== "available") {
            return 1;
        }
        return 0;
    }

    return (
        <main className="container">
            <div className="d-grid wash-location-list mt-5">
                {locations.sort(sortArray).map((location) => {
                    return (
                        <WashLocation key={location.id} location={location} />
                    );
                })}
            </div>
        </main>
    );
}
