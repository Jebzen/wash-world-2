import React, { useEffect, useState } from "react";
import axios from "axios";
import info from "./info";
import WashLocation from "./components/WashLocation.js";

function App() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get(info.backendUrl + "/locations").then((result) => {
            //console.log(result.data.response.locations);
            setLocations(result.data.response.locations);
        });
    }, []);

    return (
        <div>
            {locations.map((location) => {
                return <WashLocation key={location.id} location={location} />;
            })}
        </div>
    );
}

export default App;
