import React from "react";
import info from "../info";

function WashLocation({ location }) {
    function locationClicked() {
        if (location.status !== "available") {
            return;
        }
        console.log(location.name, location.id);
        console.log(getProductUrl());
    }

    function getProductUrl() {
        return info.backendUrl + "/cam/" + location.id;
    }

    return (
        <div
            className={"wash-location-card " + location.status}
            onClick={locationClicked}
        >
            {location.name}
            {location.status === "available" && (
                <i class="bi bi-arrow-right"></i>
            )}
        </div>
    );
}

export default WashLocation;
