import React from "react";
import { useNavigate } from "react-router";

const orders = [
  {
    id: "54879",
    placedOn: "March 22, 2021",

    amount: 184,
    items: [
      {
        id: "prod_1",
        name: "Nomad Tumbler",
        price: 35,
        statusIndex: 3, // Delivered
        image: "/prodImg.png",
        deliveryDate: "March 24, 2021",
      },
      {
        id: "prod_2",
        name: "Minimalist Wristwatch",
        price: 149,
        statusIndex: 2, // Shipped
        image: "/prodImg.png",
        deliveryDate: "March 25, 2021",
      },
    ],
  },
  {
    id: "54880",
    placedOn: "April 10, 2021",
    amount: 45,
    items: [
      {
        id: "prod_3",
        name: "Leather Journal",
        price: 45,
        statusIndex: 2, // Shipped
        image: "/prodImg.png",
        deliveryDate: "April 15, 2021",
      },
    ],
  },
];

const MainOrderHistoryPage = () => {
  const navigate = useNavigate(); 
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-10">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Order history</h1>
          <p className="mt-1 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover
            similar products.
          </p>
        </div>

        {/* ORDERS */}
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="rounded-lg border bg-white">
              {/* Order meta */}
              <div className="flex flex-col gap-4 border-b px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-8 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Order number</p>
                    <p className="text-gray-500">{order.id}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Date placed</p>
                    <p className="text-gray-500">{order.placedOn}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Total amount</p>
                    <p className="text-gray-900 font-semibold">
                      ${order.amount}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="rounded-md border px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={()=>navigate(`/account/orders/${order.id}`)}>
                    View Order
                  </button>
                  <button className="rounded-md border px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    View Invoice
                  </button>
                </div>
              </div>

              {/* Items */}
              {order.items.map((product) => (
                <>
                  <div className="flex flex-col gap-6 px-6 py-6 sm:flex-row">
                    <img
                      src="/prodImg.png"
                      alt="Product"
                      className="h-28 w-28 rounded-lg bg-gray-100 object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-gray-900">
                          {product.name}
                        </h3>
                        <p className="font-semibold text-gray-900">
                          ${product.price}
                        </p>
                      </div>

                      <p className="mt-2 text-sm text-gray-500 max-w-xl">
                        Are you a minimalist looking for a compact carry option?
                        The Micro Backpack is the perfect size for your
                        essential everyday carry items.
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        {product.statusIndex === 3 && (
                          <p className="flex items-center gap-2 text-sm text-green-600">
                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-white text-xs">
                              ✓
                            </span>
                            Delivered on {product.deliveryDate}
                          </p>
                        )}

                        {product.statusIndex < 3 && (
                          <p className="flex items-center gap-2 text-sm text-yellow-600">
                            <span className="inline-flex h-4 w-4 items-center justify-center text-white text-lg">
                              ⏰
                            </span>
                            Expected delivery on {product.deliveryDate}
                          </p>
                        )}

                        <div className="flex gap-4 text-sm font-medium text-indigo-600">
                          <button>View product</button>
                          <button>Buy again</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t" />
                </>
              ))}
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default MainOrderHistoryPage;
