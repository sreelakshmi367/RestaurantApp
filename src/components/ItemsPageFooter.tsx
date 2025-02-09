import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Footer: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items); 
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="bg-cyan-800 text-white py-4 px-4 sm:px-6 md:px-8 rounded-t-3xl flex justify-between items-center">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <div className="w-6 h-6 bg-white text-cyan-800 flex items-center justify-center rounded">
            {totalCount}
          </div>
          <span className="text-xl">View Cart</span>
        </div>
        <span className="text-xl font-semibold">AED {totalPrice.toFixed(2)}</span> 
      </div>
      <div className="bg-white text-cyan-800 text-md text-center py-2 px-4 font-semibold">
        Prices are in AED and are inclusive of 10% service charges, 5% VAT & 7% municipality fee.
      </div>
    </div>
  );
};

export default Footer;
