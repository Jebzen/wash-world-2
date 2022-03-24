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
        <div>
            <input
                type="radio"
                class="btn-check"
                id={"card-" + location.id}
                autocomplete="off"
                name="location-id"
                onChange={locationClicked}
                disabled={location.status !== "available" ? "on" : ""}
            />
            <label
                class={"wash-location-card " + location.status}
                for={"card-" + location.id}
            >
                {location.name}
                {location.status === "available" && (
                    <i class="bi bi-arrow-right"></i>
                )}
            </label>
        </div>
    );
}

export default WashLocation;
