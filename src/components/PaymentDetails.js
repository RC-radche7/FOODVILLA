// PaymentDetails.js
import { Link } from "react-router-dom";

const PaymentDetails = () => {
  return (
    <div className="container mx-auto py-8 w-6/12">
      <h1 className="text-2xl font-semibold mb-4">Payment Details</h1>
      <div className="bg-white shadow-md rounded px-8 py-6 mb-8">
       
        <form>

          <div className="mb-4">
            <label  className="block text-sm font-medium text-gray-700">Card Number</label>
            <input type="text"  name="cardNumber" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Pay With card" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Net Banking</label>
            <input type="text"  name="cashOnDelivery" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Pay with Bank" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Cash On Delivery</label>
            <input type="text"  name="cashOnDelivery" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Pay with cash" />
          </div>
          <button type="submit" className="inline-block bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"><Link to='/payment'> Pay Now </Link></button>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
