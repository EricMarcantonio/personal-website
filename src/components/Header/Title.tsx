import React from "react";
import { DynamicColor, InvDynamicColor, Code, Card } from "../util";
import Lottie from "react-lottie";
import orangeRocket from "../../images/rocket_orange.json";
import grayRocket from "../../images/rocket_gray.json";
import { container } from "../../state";
import { RiseOnHover } from "../../animations/CardAnimations";
export const Title = () => {
    const orangeRocketData = {
        loop: true,
        autoplay: true,
        animationData: orangeRocket,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const grayRocketData = {
        loop: true,
        autoplay: true,
        animationData: grayRocket,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const con = container.useContainer();
    return (
        <div
            className="flex justify-center pt-4"
            onClick={() => (window.location.href = "/")}
        >
            <div className="text-6xl font-bold">
                <div className="flex items-center align-middle space-x-3 flex-col md:flex-row">
                    <DynamicColor>Hi, I'm </DynamicColor>

                    <div className="flex">
                        <RiseOnHover>
                            <Code>
                                <InvDynamicColor>
                                    <div className="px-2">Eric</div>
                                </InvDynamicColor>
                            </Code>
                        </RiseOnHover>
                    </div>
                    <DynamicColor>Marcantonio</DynamicColor>

                    <div className="w-24 pt-2">
                        <RiseOnHover>
                            {!con.isDark ? (
                                <Lottie options={orangeRocketData} autoplay />
                            ) : (
                                <Lottie options={grayRocketData} autoplay />
                            )}
                        </RiseOnHover>
                    </div>
                </div>
            </div>
        </div>
    );
};
