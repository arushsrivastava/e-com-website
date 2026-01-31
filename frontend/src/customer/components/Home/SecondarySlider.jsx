import React, { useRef } from "react";

const SecondarySlider = ({items, title}) => {
  const ref = useRef(null);

  return (
    <div className="bg-gray-200 py-2 px-4">
      <div className="relative bg-white pt-2 pb-1">
        <h3 className="text-left px-3 ">
          {title}
        </h3>

        {/* Left button */}
        <button
          onClick={() =>
            ref.current.scrollBy({ left: -300, behavior: "smooth" })
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white py-6 pr-6 pl-3"
          
        >
          ◀
        </button>


        {/* Scroll area */}
        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-8"
        >
          {items.map((item) => (
            <div key={item.id} className="snap-start shrink-0 w-49 text-center justify-center items-center">
                <img src={item.image} className="object-contain" />
                <p className="mb-0">XYZ</p>
            </div>
          ))}
        </div>


        {/* Right button */}
        <button
          onClick={() =>
            ref.current.scrollBy({ left: 300, behavior: "smooth" })
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10  bg-white py-6 pl-6 pr-3"
        >
          ▶
        </button>

        
      </div>
    </div>
  );
};

export default SecondarySlider;