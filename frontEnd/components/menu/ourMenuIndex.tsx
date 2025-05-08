import React from "react";
import KnowMore from "../knowMore"
import BestFilipinoFoods from "./sectionBestFilipinoFood"
import FoodImages from "./sectionFoodImages"
import Menus from "../homepage/sectionFeaturedMenu"
import MenuPrices from "./sectionMenuPrices"

const OurMenu: React.FC = () => {

    return(
        <div className="flex flex-col w-full items-center ">
            <KnowMore 
                header="Our Menu." 
                subHeader="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae a dolores nihil nobis adipisci minus porro nostrum amet vero sed quisquam consequuntur, tempora, voluptates labore distinctio necessitatibus eaque quam, veniam facere. Quis dignissimos omnis cumque ipsam quas nobis cum inventore." />
            <BestFilipinoFoods />
            <FoodImages />
            <div className="p-10">
                <Menus />
            </div>
            <MenuPrices />
        </div>
    )
}

export default OurMenu