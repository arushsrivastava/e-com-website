import React from "react";
import Rating from '@mui/material/Rating';
import userImage from "../../../../public/user.png";

const ReviewCard = ({name,date,rating,img}) => {
  return (
    <div>
      <div className="px-4">
        <div className="m-2 rounded-lg flex gap-4 items-start">
          <div className="flex-shrink-0">
            <img
              src={img || userImage}
              alt="user"
              className="w-12 h-12 rounded-full mb-2"
            />
          </div>
          <div className="flex-1">
            <p className="font-semibold mb-0">{name}</p>
            <p className="text-sm text-black/50 mb-2">{date}</p>
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly size="small" />
          </div>
        </div>
        <p className="mt-0">
          This product is really good! I am satisfied with the quality and
          performance. Highly recommended!
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
