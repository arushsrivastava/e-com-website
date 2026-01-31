import React from "react";
import CartItem from "../../components/Cart/CartItem";
import Button from "@mui/material/Button";


const CartPage = ({handleNext}) => {
  const shoppingItems = [1,1,1,1]
  return (
    <div className=" ">
      <p className="font-semibold text-5xl mt-14 ml-5 mb-5">Shopping Cart</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Cart Items */}
        <div className="lg:col-span-1 divide-y divide-gray-300 border-t border-b border-gray-300 ml-6">
          {shoppingItems.map((item, index) => (<CartItem key={index} />))}
        </div>

        {/* Price Section */}
        <div className="lg:flex lg:justify-center">
          <div className="bg-gray-100/70 rounded py-8 px-8 max-w-[500px] max-h-[390px] w-full">
            <span className="font-semibold text-3xl ">Order summary</span>
            <div className="divide-y divide-gray-300 py-2 mt-3">
              <div className="flex justify-between items-center py-3 text-md text-black/50 leading-tight">
                <span>Subtotal</span>
                <span>$99.00</span>
              </div>

              <div className="flex justify-between items-center py-3 text-md text-black/50 leading-tight">
                <span>Shipping Estimate</span>
                <span>$99.00</span>
              </div>

              <div className="flex justify-between items-center py-3 text-md text-black/50 leading-tight">
                <span>Tax Estimate</span>
                <span>$99.00</span>
              </div>

              <div className="flex justify-between items-center py-3 text-xl font-semibold leading-tight">
                <span>Order Total</span>
                <span>$99.00</span>
              </div>
            </div>
            <Button variant="contained" className="w-full mt-2"
              onClick={handleNext}
            >CheckOut</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
