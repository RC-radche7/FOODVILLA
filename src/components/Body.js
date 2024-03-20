import RestaurantCard ,{withTopRatedLabel} from "./RestaurantCard";
import {useEffect , useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant,setFilteredRestaurants] =useState([]);
  const [searchText,setSearchText] = useState('');
  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);

  

  //console.log(listOfRestaurants)
  useEffect(() => {
    fetchData();
  },[])
  

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4415803&lng=78.3576968&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    //console.log(json);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ??[]);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ??[]);
  }
  

  const onlineStatus = useOnlineStatus();
  if (onlineStatus===false)
    return (
      <h1>
        Looks like you are offline !!!. Please check your internet connection;
      </h1>
    );
  

  return (listOfRestaurants.length === 0) ? (<Shimmer />) : ( 
    <div className="body">
      <div className="filter flex">
      <div className='search m-4 p-4'>
          <input type= 'text' className='border border-solid border-black' value={searchText} 
          onChange = {(e) => {
            setSearchText(e.target.value);
          }} 
          />
        <button 
        className='px-4 py-2 m-4 bg-green-100'
        onClick={() => {
            //console.log('tested');
            const filteredRestaurant = listOfRestaurants.filter((res) => 
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurants(filteredRestaurant);
          }}>Search
          </button>
      </div>
      <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link key={restaurant.info.id} to={'./restaurants/'+ restaurant.info.id}>
            { restaurant.info.avgRating>4.3 ? (<RestaurantCardTopRated resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)
            }
            </Link>
        ))}
      </div>
      </div>
  );
};

export default Body;