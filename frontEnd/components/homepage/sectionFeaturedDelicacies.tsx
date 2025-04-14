import React from "react"; 

const FeaturedDelicacies: React.FC = () => {
    return (
        <div className="featuredDelicacies w-full h-screen flex items-center justify-center flex-col gap-8 mb-10">
            <h1 className="text-6xl text-pink-300" style={{ fontWeight: 900 }}>Featured Delicacies</h1>
            <h6  className="text-2xl text-white" style={{ fontWeight: "bold" }}>Fresh from the grill</h6>
            <img src="/images/testImage0.png"></img>
            <h6 className="text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
        </div>
    )
}

export default FeaturedDelicacies;
