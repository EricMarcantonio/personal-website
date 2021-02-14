import React from "react";
import { container } from "../../state";
import { DynamicColor, InvDynamicColor, Card } from "../util";
import Lottie from "react-lottie";
import gitOrangeData from "../../images/orange_git.json";
import gitGrayData from "../../images/gray_git.json";
import linkedOrangeData from "../../images/linkedin_orange.json";
import linkedGrayData from "../../images/linkedin_gray.json";
import resumeGrayData from "../../images/resume_gray.json";
import resumeOrangeData from "../../images/resume_orange.json";
//@ts-ignore
import resume from "../../images/Resume.pdf";
import { RiseOnHover } from "../../animations/CardAnimations";

export const Body1 = () => {
    const con = container.useContainer();
    const git_orange = {
        loop: true,
        autoplay: true,
        animationData: gitOrangeData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const git_gray = {
        loop: true,
        autoplay: true,
        animationData: gitGrayData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const link_orange = {
        loop: true,
        autoplay: true,
        animationData: linkedOrangeData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const link_gray = {
        loop: true,
        autoplay: true,
        animationData: linkedGrayData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const resume_gray = {
        loop: true,
        autoplay: true,
        animationData: resumeGrayData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const resume_orange = {
        loop: true,
        autoplay: true,
        animationData: resumeOrangeData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div
            className={`${
                !con.isDark ? "bg-orange-300" : "bg-gray-900"
            } flex justify-center flex-col md:flex-row`}
        >
            <RiseOnHover
                onClick={() =>
                    window.open("https://github.com/EricMarcantonio", "_blank")
                }
            >
                <Card>
                    <div className="text-3xl font-bold md:w-64 md:h-64 flex flex-col w-full">
                        <div className="flex justify-center w-full">
                            <InvDynamicColor>GitHub</InvDynamicColor>
                        </div>
                        {con.isDark ? (
                            <Lottie options={git_gray} autoplay />
                        ) : (
                            <Lottie options={git_orange} autoplay />
                        )}
                    </div>
                </Card>
            </RiseOnHover>
            <RiseOnHover
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/eric-marcantonio/",
                        "_blank"
                    )
                }
            >
                <Card>
                    <div className="text-3xl font-bold md:w-64 md:h-64 flex flex-col w-full">
                        <div className="flex justify-center w-full">
                            <InvDynamicColor>LinkedIn</InvDynamicColor>
                        </div>
                        {con.isDark ? (
                            <Lottie options={link_gray} autoplay />
                        ) : (
                            <Lottie options={link_orange} autoplay />
                        )}
                    </div>
                </Card>
            </RiseOnHover>

            <RiseOnHover onClick={() => window.open(resume, "_blank")}>
                <Card>
                    <div className="text-3xl font-bold md:w-64 md:h-64 flex flex-col w-full">
                        <div className="flex justify-center w-full">
                            <InvDynamicColor>Resume</InvDynamicColor>
                        </div>
                        {!con.isDark ? (
                            <Lottie options={resume_orange} autoplay />
                        ) : (
                            <Lottie options={resume_gray} autoplay />
                        )}
                    </div>
                </Card>
            </RiseOnHover>
        </div>
    );
};
