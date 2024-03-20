import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    const handleClicked =(()=> {
        setShowIndex();
    })
    return (
        <div className="">
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 border-b-2 border-gray">
                <div className='flex justify-between cursor-pointer' onClick={handleClicked}>
                <span className="font-bold">
                    {data.title} ({data.itemCards.length})
                </span>
                <span> ▼</span>
                </div>
                {showItems && <ItemsList items={data.itemCards}/>}
            </div>
        </div>
    );
};
export default RestaurantCategory;