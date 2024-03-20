import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;
  console.log(RestaurantCard);

  return (
    <div className="m-4 p-4 w-[220px]  rounded-lg bg-gray-100 hover:bg-gray-300" >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
      <label className ='absolute m-1 p-1 rounded-lg bg-black text-white'>Top Rated</label>
      <RestaurantCard {...props}/>
      </div>
    );
  };
}

export default RestaurantCard;