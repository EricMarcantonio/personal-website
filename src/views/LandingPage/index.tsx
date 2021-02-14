import React from "react";
import { container } from "../../state";
import { Header } from "../../components/Header";
import { Body1 } from "../../components/Body1";
export const Landing = () => {
    const con = container.useContainer();
    return (
        <div className={`${con.isDark ? "bg-gray-900" : "bg-orange-300"} w-screen h-screen`}>
            <Header />
            <Body1 />
        </div>
    );
};
