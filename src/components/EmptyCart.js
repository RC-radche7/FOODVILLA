import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const EmptyCart = () => {
 
    return (
        <div className="w-3/12 m-auto p-6 my-8">
          <img className='p-2 my-2 w-80' src='https://shidory.com/assets/images/empty_cart.webp'></img>
          <div className="text-center p-4">
          <h1 className='text-2xl'>Your cart is empty </h1>
          <h4>You can go to home page to view more restaurants</h4> 
          < button  className='p-3 m-2 px-6 bg-green-500 text-white'><Link to='/'>SEE RESTAURANTS NEAR YOU</Link></button> 
          </div>
          
        </div>
    )
}
export default EmptyCart;