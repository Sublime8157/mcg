import React, { useRef, useEffect, useState } from "react";
import useVisibilityObserver from "../../hooks/useVisibilityObserver";

const FewWords: React.FC = () => {
    const { targetRef, isVisible } = useVisibilityObserver()

    return(
        <div ref={targetRef} className="w-full flex flex-row items-center pb-10 justify-evenly">
            <div className={`flex flex-col  gap-8 items-start animate ${isVisible ? `opacity-100 translate-x-0` : `opacity-0 -translate-x-20`}`}>
                <h1 className="text-5xl" style={{ fontWeight: "bold" }}>A Few Words About Us</h1>
                <p className="text-xl">Serving best filipino foods</p>
                <hr className="border-none w-24 rounded bg-pink-400  h-1"></hr>
                <p className="w-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptatem similique veniam ipsam unde, dolorem eveniet molestiae eligendi rerum quae saepe earum quisquam nobis totam quasi quaerat exercitationem soluta mollitia dolor cum expedita eaque facilis molestias consectetur. Neque quod atque ad perferendis esse repellat veritatis, quaerat saepe quibusdam, quisquam labore.</p>
                <button className='hover:cursor-pointer hover:bg-pink-300 w-38 h-12 bg-pink-400 text-white font-bold rounded-full'>
                    Book Order
                </button>
            </div>
            <div className={`animate ${isVisible ? `opacity-100 translate-x-0` : `opacity-0 translate-x-20`}`}><img src="images/fewWords.jpg" className="shadow-lg rounded-lg" width={500} height={750}/></div>
        </div>
    )
}

export default FewWords