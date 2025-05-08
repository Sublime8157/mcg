import React from 'react'
import useVisibilityObserver from '../../hooks/useVisibilityObserver'

const BestFilipinoFood: React.FC = () => {
    const { targetRef, isVisible } = useVisibilityObserver()
    return(
        <div className='flex flex-col w-full gap-12 text-center items-center justify-center p-24'>
            <div className={`animate flex flex-col gap-4 ${isVisible ? `opacity-100 -translate-y-0` : `opacity-0 -translate-y-10`}`}>
                <h1 className='text-5xl' style={{ fontWeight: "bold" }}>Best Filipino Foods</h1>
                <p className='text-lg'>Loved by thousands</p>
            </div>
            <div ref={targetRef} className={`animate w-8/12 w-full flex flex-col items-center gap-4 ${isVisible ? `opacity-100 transalte-y-0` : `opacity-0 translate-y-10`}`}>
                <p className='w-96'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic asperiores nisi distinctio sunt fugit odit.</p>
                <img src='/images/testImage0.png' width={250}></img>
            </div>
        </div>
    )

}

export default BestFilipinoFood