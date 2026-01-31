import React from "react";
import "./ProductCard.css"

const ProductCard = ({brand,image, title,selling_price,price,discount}) => {
  return (
    <div className="product-card max-w-[260px] min-w-[220px] m-2">
      <div className="bg-gray-100  overflow-hidden h-[220px] flex image-part">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white px-2.5 flex flex-col h-[220px] pb-3 text-part">
        <p className="mb-0 font-bold">{brand}</p>
        <p className="mb-0">{title}</p>
        <p className="text-sm mb-0">Start Rating | No. of Ratings</p>

        <div className="flex flex-row">
          <p className="text-3xl mt-1">
            <span className="text-red-600">-{discount.split(" ")[0]}</span> {selling_price}{" "}
            <span className="text-sm line-through text-gray-500">{price}</span>
          </p>
        </div>

        <button
          style={{ borderRadius: "50px", borderColor: "gray" }}
          className="mt-auto w-full h-[36px] border bg-white text-gray-900 text-[18px] font-semibold flex items-center justify-center hover:bg-gray-50"
        >
          Buying options
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
