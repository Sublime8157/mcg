import React, { useRef, useEffect, useState } from 'react';
import useVisibilityObserver from '../../hooks/useVisibilityObserver';
const Feedback: React.FC = () => {
    const { targetRef, isVisible } = useVisibilityObserver()
    const items = Array.from({ length: 4})
    
    return (
        <div ref={targetRef} className='w-full flex flex-col justify-start items-center gap-4 my-10'>
            <div className={`flex w-full flex-col justify-start items-center gap-4 animate ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`}`}>
                <h1 className={`text-4xl text-pink-300 animate`} style={{ fontWeight: 900 }}>They All Love Our Food</h1>
                <img src="/images/testImage0.png"></img>
                <p className='w-6/12 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio sequi pariatur praesentium illo iste quia perferendis quam mollitia et?</p>
            </div>
            <div className={`animate mt-10 flex flex-row gap-4 ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`}`}>
                {items.map((_, index) => (
                    <div className="w-64 flex flex-col gap-4 p-4">
                        <p className='font-thin indent-10 italic' style={{ fontStyle: "italic" }}>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, numquam!"</p>
                        <div className='flex flex-row items-center'>
                            <img src="/images/sampleUser.png" width={75}></img>
                            <span>- Miran, Joven</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feedback;