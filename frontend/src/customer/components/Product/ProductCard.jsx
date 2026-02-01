import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router";

const ProductCard = ({
  brand,
  image,
  title,
  selling_price,
  price,
  discount,
  id,
}) => {

  const navigate = useNavigate();
  return (
    <div className="product-card w-[100px] lg:w-[260px] m-2 lg:h-[440px]">
      <div className="bg-gray-100 overflow-hidden h-[120px] lg:h-[220px] flex image-part">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="bg-white px-2.5 flex flex-col lg:h-[220px] pb-3 text-part text-[11px] lg:text-[18px]">
        <p className="mb-0 font-bold">{brand}</p>

        <p className="mb-0 line-clamp-2">{title}</p>

        <p className="hidden lg:block lg:text-sm mb-0">
          Star Rating | No. of Ratings
        </p>

        <div className="flex flex-row">
          <p className="mt-1 lg:text-3xl text-[13px]">
            <span className="text-red-600">-{discount.split(" ")[0]}</span>{" "}
            {selling_price}{" "}
            <span className="text-sm line-through text-gray-500">{price}</span>
          </p>
        </div>

        <button
          style={{ borderRadius: "50px", borderColor: "gray" }}
          className=" mt-auto lg:mt-2 lg:mt-auto w-full lg:h-[36px] border bg-yellow-400
                 text-gray-900 lg:text-[18px] font-semibold text-[7px]
                 flex items-center justify-center hover:bg-yellow-500 px-2.5 py-1" 

                 onClick={()=>navigate(`/${id}`)}
        >
          Buying options
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
