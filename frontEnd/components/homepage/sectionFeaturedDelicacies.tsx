import React, { useState, useEffect, useRef } from "react"; 
import useVisibilityObserver from "../../hooks/useVisibilityObserver";

const FeaturedDelicacies: React.FC = () => {
    const { targetRef, isVisible } = useVisibilityObserver()

    return (
        <div ref={targetRef} className="featuredDelicacies w-full h-screen flex items-center justify-center flex-col gap-8 mb-10">
            <div className={`animate transition flex flex-col text-center gap-2 ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`}`}>
                <h1 className="text-6xl text-pink-300" style={{ fontWeight: 900 }}>Featured Delicacies</h1>
                <h6  className="text-2xl text-white" style={{ fontWeight: "bold" }}>Fresh from the grill</h6>
            </div>
            <div className={`animate transition flex flex-col gap-2 items-center ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`}`}>
                <img src="/images/testImage0.png" width={300}></img>
                <h6 className="text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            </div>
        </div>
    )
}

export default FeaturedDelicacies;
