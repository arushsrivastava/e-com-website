import React from "react";

const STATUS_STEPS = ["Order placed", "Processing", "Shipped", "Delivered"];

export default function SummaryCard({ order }) {
  return (
    <div className="space-y-6">
      {order.items.map((item) => {
        const safeIndex = Math.min(
          Math.max(item.statusIndex, 0),
          STATUS_STEPS.length - 1
        );

        const progress =
          (safeIndex / (STATUS_STEPS.length - 1)) * 100;

        return (
          <div
            key={item.prodId}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            {/* TOP */}
            <div className="flex flex-col gap-6 lg:flex-row">
              {/* Product */}
              <div className="flex gap-4 flex-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover bg-gray-100"
                />

                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="font-medium">₹{item.price}</p>
                  <p className="mt-2 text-sm text-gray-500 max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Address (shared) */}
              <div className="min-w-[180px]">
                <p className="font-semibold">Delivery address</p>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {order.address.name} <br />
                  {order.address.line1} <br />
                  {order.address.city}, {order.address.state}{" "}
                  {order.address.zip}
                </p>
              </div>

              {/* Contact (shared) */}
              <div className="min-w-[180px]">
                <p className="font-semibold">Shipping updates</p>
                <p className="mt-2 text-sm text-gray-500">
                  {order.contact.email}
                </p>
                <p className="text-sm text-gray-500">
                  {order.contact.phone}
                </p>
                <button className="mt-2 text-sm text-indigo-600 hover:underline">
                  Edit
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t" />

            {/* Status */}
            <p className="text-sm font-medium">
              Preparing to ship on {item.expectedDate}
            </p>

            {/* Progress */}
            <div className="mt-4">
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  className="h-2 rounded-full bg-indigo-600 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-4 flex justify-between text-xs sm:text-sm">
                {STATUS_STEPS.map((step, idx) => (
                  <span
                    key={step}
                    className={
                      idx <= safeIndex
                        ? "font-medium text-indigo-600"
                        : "text-gray-400"
                    }
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
