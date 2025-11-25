import React  from "react";
import "./about-page.css";
import CardBody from "../components/about-component/react.js/card-body";
import FadeInIp from "../components/about-component/react.js/fade-in-up";
import CardBodyBig from "../components/about-component/react.js/card-body-big";

export const About = () => {

    return (
        <div className="about">
            <CardBody/>
            <FadeInIp/>
            <CardBodyBig/>
        </div>
    );
};
