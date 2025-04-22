import React, {useRef, useEffect, useState} from 'react';
import useVisibilityObserver from '../../hooks/useVisibilityObserver';

const HappyHours: React.FC = () => {
    const { targetRef, isVisible } = useVisibilityObserver()
    
    return (
        <div ref={targetRef} className={`animate gap-12 items-center justify-center flex-col flex w-full h-screen`}>
            <div className={`flex flex-col items-center w-full animate ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`}`}>
                <div className='flex-row flex items-center justify-center w-full'>
                    <hr className='border-gray-400 border-2 w-80'></hr>
                    <img src='/images/sampleLogo.jpg' width={200}></img>
                    <hr className='border-gray-400 border-2 w-80'></hr>
                </div>
            </div>
            <div className={`flex flex-col items-center w-full gap-8 animate ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`}`}>
                <div>
                    <h1 className='text-2xl font-bold'>Enjoy 50% on Your First Purchase</h1>
                </div>
                <div>
                    <h1 className='text-4xl font-bold text-pink-300' style={{ fontWeight: 900 }}>Happy Hours</h1>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Everyday Open</h1>
                </div>
                <div>
                    <button className='hover:cursor-pointer hover:bg-pink-300 w-54 h-16 bg-pink-400 text-white font-bold rounded-full'>
                        Book Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HappyHours;