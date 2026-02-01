import { StarIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router";
import React from "react";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Six-pack tees flat lay",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Black tee",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Gray tee",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "White tee",
    },
  ],
  colors: [
    { id: "white", name: "White", classes: "bg-white" },
    { id: "gray", name: "Gray", classes: "bg-gray-200" },
    { id: "black", name: "Black", classes: "bg-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your personality with three grayscale options.',
  highlights: [
    "Hand cut and sewn locally",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    "Includes two black, two white, and two heather gray tees.",
};

const reviews = { average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [addToCartStatus, setAddToCartStatus] = React.useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="pt-6">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="mx-auto flex max-w-7xl items-center space-x-2 px-4">
            {product.breadcrumbs.map((crumb) => (
              <li key={crumb.id} className="flex items-center text-sm">
                <a href={crumb.href} className="text-gray-900 font-medium">
                  {crumb.name}
                </a>
                <span className="mx-2 text-gray-300">/</span>
              </li>
            ))}
            <li className="text-sm text-gray-500">{product.name}</li>
          </ol>
        </nav>

        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 px-4 lg:grid-cols-2">

          {/* IMAGE GALLERY */}
          <div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-3">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="lg:col-span-2 lg:row-span-3 h-full w-full rounded-2xl object-cover shadow-sm transition hover:scale-[1.02]"
              />
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={product.images[i].src}
                  alt={product.images[i].alt}
                  className="h-[220px] w-full rounded-2xl object-cover shadow-sm transition hover:scale-[1.05]"
                />
              ))}
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="lg:sticky lg:top-24 h-fit">
            <h1 className="text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-3 text-2xl font-semibold text-gray-900">
              {product.price}
            </p>

            {/* Reviews */}
            <div className="mt-4 flex items-center">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon
                  key={i}
                  className={classNames(
                    reviews.average > i ? "text-gray-900" : "text-gray-200",
                    "h-5 w-5"
                  )}
                />
              ))}
              <span className="ml-3 text-sm text-indigo-600">
                {reviews.totalCount} reviews
              </span>
            </div>

            {/* FORM */}
            <form className="mt-8 space-y-8">

              {/* COLORS */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="mt-3 flex gap-3">
                  {product.colors.map((color) => (
                    <label key={color.id}>
                      <input
                        type="radio"
                        name="color"
                        defaultChecked={color.id === "black"}
                        className="sr-only peer"
                      />
                      <span
                        className={classNames(
                          color.classes,
                          "block h-9 w-9 rounded-full ring-1 ring-gray-300 cursor-pointer peer-checked:ring-2 peer-checked:ring-indigo-600 peer-checked:ring-offset-2"
                        )}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* SIZES */}
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm text-indigo-600">
                    Size guide
                  </a>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2 max-w-md">
                  {product.sizes.map((size) => (
                    <label
                      key={size.name}
                      className={classNames(
                        size.inStock
                          ? "cursor-pointer"
                          : "opacity-40 cursor-not-allowed",
                        "flex items-center justify-center rounded-md border px-3 py-2 text-sm font-medium"
                      )}
                    >
                      <input
                        type="radio"
                        name="size"
                        disabled={!size.inStock}
                        className="sr-only peer"
                      />
                      <span className="peer-checked:bg-indigo-600 peer-checked:text-white rounded-md px-3 py-2">
                        {size.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4"><button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 py-4 text-white font-semibold shadow-md transition hover:bg-indigo-700 hover:shadow-lg"
                  onClick={() => setAddToCartStatus(true)}
              >
                Add to bag
              </button>

             { addToCartStatus && <button
                type="submit"
                className="w-full rounded-xl bg-yellow-400 py-4 text-white font-semibold shadow-md transition hover:bg-yellow-500 hover:shadow-lg"
                  onClick={() => navigate("/checkout")}
              >
                View Cart
              </button>}
              </div>
              
            </form>

            {/* DESCRIPTION */}
            <div className="mt-10 space-y-6">
              <p className="text-gray-700">{product.description}</p>

              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {product.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <p className="text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
