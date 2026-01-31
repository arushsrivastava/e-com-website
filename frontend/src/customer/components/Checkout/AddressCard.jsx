import React from "react";

const AddressCard = ({
  addressLine1,
  addressLine2,
  city,
  state,
  pincode,
  phoneNo,
  selected,
  onSelect,
  name,
}) => {
  return (
    <label className="block cursor-pointer">
      <input
        type="radio"
        name="address"
        checked={selected}
        onChange={onSelect}
        className="sr-only peer"
      />

      <div className="flex gap-3 text-sm">
        {/* RADIO INDICATOR (minimal, no layout change) */}
        <span
          className={`
            mt-1 h-4 w-4 rounded-full border flex-shrink-0
            ${selected ? "border-indigo-600 bg-indigo-600" : "border-gray-400"}
          `}
        />

        {/* EXISTING CONTENT (unchanged) */}
        <div className="">
          <p className="font-semibold m-0">{name ||"Arush Srivastava"}</p>
          <p className="m-0">
            {addressLine1 || "C-91, 2nd Floor"},{" "}
            {addressLine2 || "West Gorakh Park Extn., Shahdara"},{" "}
            {city || "Delhi"}, {state || "Delhi"}, {pincode || "110032"}
          </p>
          <p className="m-0">Phone: {phoneNo || "(123) 456-7890"}</p>

          <div className="flex gap-1 items-center">
            <button className="py-2 m-0 text-blue-600 hover:underline">
              Edit address
            </button>
            <p className="py-1 m-0 text-xl">|</p>
            <button className="py-2 m-0 text-blue-600 hover:underline">
              Add delivery instructions
            </button>
          </div>
        </div>
      </div>
    </label>
  );
};

export default AddressCard;
