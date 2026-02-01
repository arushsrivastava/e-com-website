import React, { useState } from "react";

const STATUS_STEPS = ["Order placed", "Processing", "Shipped", "Delivered"];

export default function OrderHistoryDetails() {
  const order = {
    id: "54879",
    placedOn: "March 22, 2021",
    statusIndex: 3, // Delivered
    items: [
      {
        id: "prod_1",
        name: "Nomad Tumbler",
        price: 35,
        image: "/prodImg.png",
        deliveredOn: "March 24, 2021",
      },
      {
        id: "prod_2",
        name: "Minimalist Wristwatch",
        price: 149,
        image: "/prodImg.png",
        deliveredOn: "March 23, 2021",
      },
    ],
  };

  const progressPercent =
    (order.statusIndex / (STATUS_STEPS.length - 1)) * 100;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* HEADER */}
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold">Order #{order.id}</h1>
        <p className="text-sm text-gray-500">
          Placed on {order.placedOn}
        </p>
      </div>

      {/* STATUS PROGRESSION */}
      <div>
        <p className="text-sm font-medium mb-2">
          Order status
        </p>

        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div
            className="h-2 bg-indigo-600 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="mt-3 flex justify-between text-xs sm:text-sm">
          {STATUS_STEPS.map((step, index) => (
            <span
              key={step}
              className={
                index <= order.statusIndex
                  ? "font-medium text-indigo-600"
                  : "text-gray-400"
              }
            >
              {step}
            </span>
          ))}
        </div>
      </div>

      {/* ITEMS */}
      <div className="space-y-6">
        {order.items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>

      {/* SUMMARY */}
      <div className="rounded-lg bg-gray-50 p-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>₹184</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>Shipping</span>
          <span>₹5</span>
        </div>
        <div className="flex justify-between font-semibold mt-4">
          <span>Total</span>
          <span className="text-indigo-600">₹189</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- ITEM COMPONENT ---------------- */

function OrderItem({ item }) {
  const [showReview, setShowReview] = useState(false);
  const [showReturn, setShowReturn] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className="rounded-lg border p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-24 w-24 rounded-md object-cover bg-gray-100"
        />

        <div className="flex-1">
          <p className="font-semibold text-lg">{item.name}</p>
          <p className="text-gray-600">₹{item.price}</p>
          <p className="text-sm text-green-600 mt-1">
            Delivered on {item.deliveredOn}
          </p>

          {/* ACTIONS */}
          <div className="mt-3 flex gap-4">
            <button
              onClick={() => setShowReview(!showReview)}
              className="text-indigo-600 text-sm font-medium hover:underline"
            >
              ⭐ Rate & Review
            </button>

            <button
              onClick={() => setShowReturn(!showReturn)}
              className="text-sm font-medium text-gray-700 hover:underline"
            >
              ↩ Return / Exchange
            </button>
          </div>
        </div>
      </div>

      {/* REVIEW SECTION */}
      {showReview && (
        <div className="mt-4 rounded-md bg-gray-50 p-4">
          <p className="font-medium mb-2">Rate this product</p>

          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-xl ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </button>
            ))}
          </div>

          <textarea
            placeholder="Write your review..."
            className="w-full rounded-md border p-2 text-sm"
            rows={3}
          />

          <button className="mt-3 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
            Submit review
          </button>
        </div>
      )}

      {/* RETURN SECTION */}
      {showReturn && (
        <div className="mt-4 rounded-md bg-gray-50 p-4">
          <p className="font-medium mb-2">Return / Exchange</p>

          <select className="w-full rounded-md border p-2 text-sm">
            <option>Select a reason</option>
            <option>Damaged product</option>
            <option>Wrong item</option>
            <option>Size / fit issue</option>
            <option>Other</option>
          </select>

          <button className="mt-3 rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Request return
          </button>
        </div>
      )}
    </div>
  );
}
