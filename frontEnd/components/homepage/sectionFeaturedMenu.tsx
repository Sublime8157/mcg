import React, { useState, useEffect, useRef } from "react"; 
import useVisibilityObserver from "../../hooks/useVisibilityObserver";

const FeaturedMenu: React.FC = () => {
    const items = Array.from({ length: 6 })
    const { targetRef, isVisible } = useVisibilityObserver()
    
    return (
        <div ref={targetRef} className={`animate px-48 w-full flex start items-center flex-col ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`}`} >
            <div className="w-full flex justify-start flex-col items-center">
                <div className="flex-wrap w-12/12 gap-24 justify-center flex flex-row ">
                    {items.map((_, index) => (
                        <div className="flex w-5/12 justify-evenly flex-row">
                            <div className="flex-col w-5/12 justify-between flex">
                                <h1 className="text-2xl" style={{ fontWeight: 700 }}>Filipino Authentic Pork Sisig</h1>
                                <h1 className="text-2xl">$5.00</h1>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="p-4">
                                <img src="/images/Menu/image1.jpg" className="rounded-full" width="160"></img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedMenu;