import React from "react";
import info from "../info";

function WashLocation({ location }) {
    function locationClicked() {
        console.log(location.name, location.id);
        console.log(getProductUrl());
    }

    function getProductUrl() {
        return info.backendUrl + "/cam/" + location.id;
    }

    return (
        <div className="washLocation" onClick={locationClicked}>
            {location.name} - {location.status}
        </div>
    );
}

export default WashLocation;
