import React, { useState, useEffect } from "react";

interface CarouselPops {
    images: string[]; 
}

const Carousel: React.FC<CarouselPops> = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const total = images.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    

    return(
        <>
            <div className="w-full p-20 items-center justify-center flex">
                <div className="relative w-[850px] overflow-hidden">
                    <div className="flex space-between w-full" style={{ transform: `translateX(-${current * 100}%)` }}>
                        {images.map((img, index) => (
                            <img key={index} src={img} alt={`Slide ${index}`} className="rounded-sm shadow-lg h-80 object-cover w-[850px] flex-shrink-0" width={850} />
                        ))}
                    </div>
                    <button onClick={prevSlide} className="cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md">
                        ◀
                    </button>
                    <button onClick={nextSlide} className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md">
                        ▶
                    </button>
                </div>
            </div>
        </>
    )
}

export default Carousel

