import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
 

 

  return (
    <div className='flex justify-between bg-green-100 shadow-xl'>
      <div className="logo-container">
        <img className="logo w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-6 justify-between" >
          <li> Online Status : {onlineStatus ? '✅' : '🔴'} </li>
          <li className="px-4">
          <Link to='/'>Home </Link>
          </li> 
          <li  className="px-4">
          <Link to='/About'>About Us </Link>
          </li> 
          <li  className="px-4 ">
            <Link to='/Contact'>Contact Us</Link></li>
          <li  className="px-4">
            <Link to='/Grocery'>Grocery</Link></li>
          <li  className="px-4 "> 
          <Link to='/Cart'>Cart - {cartItems.length}</Link></li>
          <button 
            className='login ' 
            onClick ={ () => {
            btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login')}}
            >
          { btnNameReact }

          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
