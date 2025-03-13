import React from "react";

const FeaturedOn: React.FC = () => {
    return(
        <div className="flex flex-row items-center gap-8 justify-center mb-24">
            <div className="text-3xl font-extrabold" style={{ fontWeight: 900 }}>Featured On</div>
            <div><img src="/images/testImage1.png"></img></div>
            <div><img src="/images/testImage2.png"></img></div>
            <div><img src="/images/testImage3.png"></img></div>
            <div><img src="/images/testImage4.png"></img></div>
        </div>
    )
}

export default FeaturedOn;