import   DeliciousStory  from "./sectionDeliciousStory"
import   FeaturedDelicacies  from "./sectionFeaturedDelicacies"
import   FeaturedMenu  from "./sectionFeaturedMenu"
import   FeaturedOn  from "./sectionFeaturedOn"
import   Feedback  from "./sectionFeedback"
import   HappyHours  from "./sectionHappyHours"
import   LandingView  from "./sectionLandingView"

import React from "react";

const HomePage: React.FC = () => {
    return(
        <>
        <LandingView />
        <DeliciousStory />
        <FeaturedOn />
        <FeaturedDelicacies />
        <FeaturedMenu />
        <Feedback />
        <HappyHours />
        </>
    )
}


export default HomePage