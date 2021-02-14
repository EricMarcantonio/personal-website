import React from "react";
import { NightModeButton } from "./NightModeButton";
import { Title } from "./Title";
import { Subtitle } from "./Subtitle";
export const Header = () => {
    return (
        <div>
            <Title />
            <Subtitle />
            <div className="absolute top-0 right-0 pr-5 pt-5">
                <NightModeButton />
            </div>
        </div>
    );
};
