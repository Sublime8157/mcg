import React from "react";

const KnowMore: React.FC = () => {
    return (
        <div className="h-auto w-full flex items-start justify-center bg-red-100">
            <div className="flex flex-col gap-12  p-10 items-center justify-center featuredDelicacies">
                <img src='/images/testImage0.png'></img>
                <h1 className="text-3xl">Know More</h1>
                <h1 className="text-8xl text-white" style={{ fontWeight: "bold" }}>About Us</h1>
                <h1 className="text-lg w-7/12 text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum temporibus beatae facilis iusto dicta sed. Adipisci odio quisquam aut harum quos, distinctio vero ea. Non illum voluptas omnis molestias!</h1>
            </div>
        </div>
    )
}

export default KnowMore