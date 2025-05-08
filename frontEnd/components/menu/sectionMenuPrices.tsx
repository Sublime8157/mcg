import React from 'react'
import useVisibilityObserver from '../../hooks/useVisibilityObserver';

const MenuPrices: React.FC = () => {
    const { targetRef, isVisible } = useVisibilityObserver()
    
    type MenuItem = {
        name: string; 
        price: number; 
        description: string;
    }

    type MenuSection = {
        title: string; 
        items: MenuItem[]; 
    }

    const menu: MenuSection[] = [
        {
            title: "Dishes", 
            items: [
                { name: "Chicken Adobo", price: 10.0,  description: "A savory Filipino chicken dish with soy and vinegar."},
                { name: "Beef Calldereta", price: 12.0, description: "Tender beef stew with potatoes, carrots, and tomato sauce."},
                { name: "Chicken Afritada", price: 10.0, description: "Chicken cooked in tomato sauce with vegetables and spices."}
            ], 
        }, 
        {
            title: "Desserts", 
            items: [
                { name: "Putoflan", price: 3.0, description: "Filipino steamed caramel pudding made with eggs and milk."},
                { name: "Halo-Halo", price: 2.0, description: "A refreshing mixed dessert with ice, fruits, and sweet toppings."}, 
                { name: "Leche Flan", price: 5.0, description: "Rich Filipino caramel custard dessert made with condensed milk." } 
            ]
        }, 
    ]
    return(
        <div ref={targetRef} className={`animate h-screen flex flex-row justify-around w-full items-center p-24 ${isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`}`}>
            {menu.map((section, index) => (
                <div className='flex flex-col gap-12 self-start justify-center'>
                    <div className=' flex items-center justify-between  flex-row'>
                        <h1 className='text-5xl' style={{ fontWeight: "bold" }}>{section.title}</h1>
                        <div className='opacity-0'>Test</div>
                    </div>
                    <div className="flex flex-col gap-12 items-start">
                        {section.items.map((item, dex) => (
                            <div key={index} className="items-center justify-between flex flex-row">
                                <div className="w-100 gap-2 flex flex-col">
                                    <div className='text-2xl'>
                                        {item.name}
                                    </div>
                                    <div className="text-md w-80 text-gray-600">
                                        {item.description}
                                    </div>
                                </div>
                                <div className="text-2xl">
                                    ${item.price.toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
            ))}
        </div>
    )    
}

export default MenuPrices