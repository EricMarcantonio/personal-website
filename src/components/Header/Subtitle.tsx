import React from "react";
import { DynamicColor } from "../util";

export const Subtitle = () => {
    return (
        <div className="flex justify-center w-full text-3xl font-mono font-bold flex-col md:flex-row">
            <div className="self-center">
                <DynamicColor>
                    Ethical Hacker and Software Developer
                </DynamicColor>
            </div>
        </div>
    );
};
