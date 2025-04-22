import React, { useEffect, useState, useRef } from "react";
import useVisibilityObserver from "../../hooks/useVisibilityObserver";

const FeaturedOn: React.FC = () => {
    const { targetRef, isVisible } = useVisibilityObserver()
    
    return(
        <div className={`animate transition flex flex-row items-center gap-8 justify-center mb-24 ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`}`}>
            <div ref={targetRef}  className="text-3xl font-extrabold" style={{ fontWeight: 900 }}>Featured On</div>
            <div><img src="/images/testImage1.png"></img></div>
            <div><img src="/images/testImage2.png"></img></div>
            <div><img src="/images/testImage3.png"></img></div>
            <div><img src="/images/testImage4.png"></img></div>
        </div>
    )
}

export default FeaturedOn;