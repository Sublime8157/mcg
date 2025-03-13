import React from "react"; 

const FeaturedDelicacies: React.FC = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col gap-8">
            <h1 className="text-5xl" style={{ fontWeight: 900 }}>Featured Delicacies</h1>
            <h6 style={{ fontWeight: "bold" }}>Fresh from the grill</h6>
            <img src="/images/testImage0.png"></img>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
        </div>
    )
}

export default FeaturedDelicacies;
