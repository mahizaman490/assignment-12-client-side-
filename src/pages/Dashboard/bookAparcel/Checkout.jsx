

import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="card" className="block text-sm font-medium text-gray-600">
              Card Number
            </label>
            <input
              type="text"
              id="card"
              placeholder="**** **** **** ****"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="card" className="block text-sm font-medium text-gray-600">
              amount?
            </label>
            <input
              type="text"
              id="card"
              placeholder="$"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Additional card details (expiration date, CVV, etc.) can be added here */}

         <Link to='/dashboard/confettii'>
         
         
         
         <button
            type="button" // Change to type="submit" if you are handling the form submission
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Pay
          </button>
         
         </Link>
        </form>

        <div className="mt-4 text-center">
          <Link to="/dashboard/bookings" className="text-blue-500 hover:underline">
            Cancel and go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

