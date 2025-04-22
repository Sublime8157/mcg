import React, {useState, useEffect} from "react";

interface HeaderProps {
    header: string, 
    subHeader: string
}
       
const KnowMore: React.FC<HeaderProps> = ({  header, subHeader }) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 300);
    return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`w-full flex items-start justify-center bg-red-100`}>
            <div className="w-full flex flex-col gap-12 p-10 items-center justify-center featuredDelicacies">
              <img src='/images/testImage0.png' alt="Delicacy" />
              <h1 className={`animate text-3xl transition-all transform ease-in-out ${ isOpen ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`}`}>Know More</h1>
              <h1 className={`animate text-8xl text-white font-bold transition-all transform ease-in-out delay-300 ${ isOpen ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`}`}>{header}</h1>
              <h1 className={`animate ext-lg w-7/12 text-white text-center transition-all transform ease-in-out delay-300 ${ isOpen ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`}`}>{subHeader}</h1>
            </div>
          </div>
    )
}

export default KnowMore