import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({items}) =>{
  const dispatch = useDispatch();

  const handleAdditem = (item) => {
    dispatch(addItem(item))
  };
    return (

    <div>
        {items.map((item)=> (
            <div 
            key =  {item.card.info.id} 
            className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
            <div className="flex flex-col">
              <span>{item.card.info.name}</span>
              <span>₹{item.card.info.price/100}</span>
            </div>
            <div className="w-48 p-2 rounded-lg">
              <div className="absolute">
              <button className=" absolute w-20 shadow-lg rounded-lg bg-white text-green-800 p-1 m-1 font-bold" onClick ={() => handleAdditem(item)}> ADD </button>
              </div>
              <img src= {CDN_URL+ item?.card?.info?.imageId} alt='Image Loading'/>
            </div>
            </div>

        ))}

</div>
)

}
export default ItemsList;