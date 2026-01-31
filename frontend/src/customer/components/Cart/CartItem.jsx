import React from "react";
import prodImg from "../../../../public/prodImg.png";


const CartItem = ({img,title,size,price,qty}) => {
    const [value, setValue] = React.useState(qty || '1');
  return (
    <div className="flex px-6 py-10 gap-4">
      <div className="">
        <img
          src={img || prodImg}
          alt="Product"
          className="w-[150px] h-[200px] object-cover"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 p-1">
          <p className="m-0 mb-1 p-0 font-semibold text-gray-600">T-Shirt</p>
          <p className="m-0 p-0 text-gray-600/80 text-sm">
            {title || "Black"}
            <span className="mx-2">|</span>
            Size: {size || "M"}
          </p>
          <p className="font-semibold mt-1">{price || "$32.00"}</p>
          <p className="mt-[95px] mb-0">
            <span className="text-green">✓ </span>In Stock
          </p>
        </div>
        <div className="p-1 mx-3">
          <select className="border rounded-md px-3 py-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
