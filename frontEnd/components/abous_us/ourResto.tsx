import React, {useRef, useState, useEffect} from "react";
import useVisibilityObserver from "../../hooks/useVisibilityObserver";

const OurResto: React.FC= () => {
    const { targetRef, isVisible } = useVisibilityObserver()
   
    return(
        <div ref={targetRef} className="flex flex-col w-full h-auto p-12 items-center justify-center">
            <div className="gap-8 text-center w-5/12 flex flex-col items-center">
                <div className={`flex flex-col items-center gap-8 text-center animate ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`}`}>
                    <h1 className="text-4xl text-black" style={{ fontWeight: "bolder" }}>Our Resto.</h1>
                    <p className="text-lg">Serving best Filipino food in Perth</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit beatae repudiandae deleniti necessitatibus culpa officia tempore, sequi id earum.</p>
                    <img src='/images/testImage0.png'></img>
                </div>
                <div className={`flex flex-col items-center gap-8 text-center animate ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam provident qui impedit voluptates omnis. Ex est quidem ratione repellendus quaerat. Ab saepe facilis libero, temporibus perferendis veniam accusantium dolorem!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, amet.</p>
                </div>
            </div>
        </div>
    )
}

export default OurResto 