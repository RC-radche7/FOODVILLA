import { useDispatch, useSelector } from 'react-redux';
import {clearCart} from '../utils/cartSlice';
import ItemsList from './ItemsList';
import { Link } from "react-router-dom";
import EmptyCart from './EmptyCart';





const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart=() => {
        dispatch(clearCart());
    }
    return (
        <div className='text-center m-2 p-2 '>
            <div className=' m-auto p-2 '>
               <h1 className='m-auto w-6/12'> {cartItems?.length === 0 ? '' : (<><h1 className='m-2 p-2 text-2xl text-blue-800'>CART</h1><ItemsList items={cartItems}  /></>)} </h1>
                {cartItems?.length === 0 ? <EmptyCart /> : (<><button type="submit" className="inline-block bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-4">
                    <Link to='/paymentDetails'> PROCEED TO PAY </Link></button><br></br><button className = ' inline-block bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mt-4' 
                onClick={handleClearCart}>
                    <Link to='/emptyCart'>Clear Cart </Link>
                </button>
                </>)}
            </div>
        </div>
    )
}
export default Cart;