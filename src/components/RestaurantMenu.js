import { useEffect,useState } from 'react';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex] = useState(null);
    console.log(resInfo);
    
    if (resInfo===null){
        return <Shimmer />
    }
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
   // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    //const {price} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card?.itemCards[0]?.card?.info?.itemBadge?.price;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.['card']?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    //console.log(categories);
    return (
        <div className='text-center'> 
           <h2 className='font-bold my-6 text-2xl'>{name}</h2>
           <p className='font-bold text-lg'>{cuisines.join(',')}- {costForTwoMessage}</p>
            {categories.map((category,index)   =>
             <RestaurantCategory 
             key={category?.card?.card?.title} 
             data={category?.card?.card } 
            showItems = {index === showIndex ? true: false}
            setShowIndex= { () => setShowIndex(index)}

            />
            )}
        </div>
    )
}
export default RestaurantMenu;