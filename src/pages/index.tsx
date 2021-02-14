import React from "react";
import { Landing } from "../views/LandingPage/index";
import { container } from "../state";
const Wrapper = () => {
    return (
        <container.Provider>
            <Landing />
        </container.Provider>
    );
};

export default Wrapper;
