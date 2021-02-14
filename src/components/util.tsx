import React from "react";
import { container } from "../state";

export const DynamicColor = (
    props: React.PropsWithChildren<React.ReactNode>
) => {
    const con = container.useContainer();
    return (
        <div className={`${con.isDark ? "text-orange-300" : "text-gray-900"}`}>
            {props.children}
        </div>
    );
};

export const InvDynamicColor = (
    props: React.PropsWithChildren<React.ReactNode>
) => {
    const con = container.useContainer();
    return (
        <div className={`${con.isDark ? "text-gray-900" : "text-orange-300"}`}>
            {props.children}
        </div>
    );
};

export const Code = (props: React.PropsWithChildren<React.ReactNode>) => {
    const con = container.useContainer();
    return (
        <div
            className={`rounded-lg ${
                con.isDark ? "bg-orange-300" : "bg-gray-900"
            }`}
        >
            {props.children}
        </div>
    );
};

export const Card = (props: React.PropsWithChildren<React.ReactNode>) => {
    const con = container.useContainer();
    return (
        <div
            className={`m-5 p-3 rounded-lg ${
                con.isDark ? "bg-orange-300" : "bg-gray-900"
            } `}
        >
            {props.children}
        </div>
    );
};
