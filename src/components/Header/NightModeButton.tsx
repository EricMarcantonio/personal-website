import React from "react";
import { container } from "../../state";
import { ButtonRiseOnHover } from "../../animations/CardAnimations";
export const NightModeButton = () => {
    const con = container.useContainer();
    return (
        <ButtonRiseOnHover onClick={() => con.setIsDark(!con.isDark)}>
            <div
                className={`${
                    con.isDark
                        ? " bg-orange-300 text-gray-900"
                        : " bg-gray-900 text-orange-300"
                } px-3 py-1 rounded-lg font-mono font-bold text-xl`}
            >
                {con.isDark ? "Light" : "Dark"}
            </div>
        </ButtonRiseOnHover>
    );
};
