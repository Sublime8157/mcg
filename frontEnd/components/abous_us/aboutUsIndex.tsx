import React from "react";
import KnowMore from "../knowMore"
import OurResto from "../abous_us/ourResto"
import Carousel from "../abous_us/aboutUsCarousel"
import FewWords from "../abous_us/aboutUsFewWords"

const imageUrls: string[] = [
    'https://www.tastingtable.com/img/gallery/14-popular-filipino-foods-you-have-to-try-at-least-once/l-intro-1725652895.jpg',
    'https://www.seriouseats.com/thmb/BBksd7FXnrkxFa8Dipf_LmgP9HA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Filipino-Features-Hero-Final-2-b785e627967843b0aa631c6a977adabe.jpg',
    'https://shef.com/homemade-food/wp-content/uploads/filipino-food-philippines-history-homemade.jpeg',
  ];
  

const AboutUsIndex: React.FC = () => {
    return(
        <>
            <div className="flex flex-col w-full">
                <KnowMore 
                    header="About Us." 
                    subHeader="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam officiis quod recusandae fugit commodi quisquam impedit repudiandae dignissimos officia maxime! Officia excepturi eius itaque soluta. Tempore, vel. Atque provident quidem quis magnam dignissimos aliquam ipsa totam. Esse dignissimos laborum dolorem!" />
                <OurResto />
                <Carousel images={imageUrls}/>
                <FewWords />
            </div>
        </>
    )
}

export default AboutUsIndex


