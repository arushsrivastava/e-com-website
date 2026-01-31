// OrdersPage.jsx
import React from "react";
import SummaryCard from "../../components/Checkout/SummaryCard";

// mockOrders.js
const orders = [
  
  {
    id : "54879",
    placedOn: "March 22, 2021",
    shipping : 50,
    address: {
      name: "Floyd Miles",
      line1: "7363 Cynthia Pass",
      city: "Toronto",
      state: "ON",
      zip: "N3Y 4H8",
    },
    contact: {
      email: "f•••@example.com",
      phone: "1•••••••••40",
    },
    payment:{
      method: "VISA •••• 4242",
      expiry: "02 / 24",
      billingAddress: {
        name: "Floyd Miles",
        line1: "7363 Cynthia Pass",
        city: "Toronto",
        state: "ON",
        zip: "N3Y 4H8",
      }
    },  
    items : [
      {
      prodId: "#prod_54879",
      name: "Nomad Tumbler",
      price: 350,
      image: "/prodImg.png",
      description:
        "This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.",
      statusIndex: 1,
      expectedDate: "March 24, 2021",
    },
    {
      prodId: "#prod_12345",
      name: "Minimalist Wristwatch",
      price: 149,
      image: "/prodImg.png",
      description:
        "This contemporary wristwatch has a clean, minimalist look and high quality components.",
      statusIndex: 2,
      expectedDate: "March 23, 2021",
    },

  ],
  
  }
    
];


export default function SummaryPage() {
  const order = orders.find(o => o.id === "54879");
  const bill = order.items.reduce((total, item) => total + item.price, 0);
  const tax = Math.floor(5*bill) / 100;
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-2xl font-bold">
          Order #54879{" "}
          <span className="text-sm font-medium text-indigo-600 cursor-pointer">
            View invoice →
          </span>
        </h1>
        <p className="text-sm text-gray-500">
          Order placed {order.placedOn}
        </p>
      </div>

      {/* Orders */}
      <div className="space-y-6">
        {orders.map((order) => (
          <SummaryCard key={order.id} order={order} />
        ))}
      </div>

      {/* Bottom summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl bg-gray-50 p-6">
        <div>
          <p className="font-semibold">Billing address</p>
          <p className="mt-2 text-sm text-gray-500">
            {order.payment.billingAddress.name} <br />
            {order.payment.billingAddress.line1} <br />
            {order.payment.billingAddress.city}, {order.payment.billingAddress.state} {order.payment.billingAddress.zip}
          </p>
        </div>

        <div>
          <p className="font-semibold">Payment information</p>
          <p className="mt-2 text-sm text-gray-500">
            {order.payment.method} <br />
            Expires {order.payment.expiry}
          </p>
        </div>

        <div>
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{bill}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Shipping</span>
            <span>₹{order.shipping}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Tax</span>
            <span>₹{tax}</span>
          </div>
          <div className="flex justify-between font-semibold mt-4">
            <span>Order total</span>
            <span className="text-indigo-600">₹{tax+bill+order.shipping}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
