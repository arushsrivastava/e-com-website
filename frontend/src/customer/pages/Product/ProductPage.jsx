"use client";

import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { kurtaPage1 } from "../../components/Product/data/kurta";
import ProductCard from "../../components/Product/ProductCard";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useLocation, useNavigate } from "react-router";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 To ₹399" },
      { value: "399-999", label: "₹399 To ₹999" },
      { value: "999-1999", label: "₹999 To ₹1999" },
      { value: "1999-2999", label: "₹1999 To ₹2999" },
      { value: "3999-4999", label: "₹3999 To ₹4999" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
      { value: "XXL", label: "XXL" },
      { value: "XXL+", label: "XXL+" },
    ],
  },
];

export default function Example() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const getSelectedValues = (id) =>
    searchParams.get(id)?.split(",") || [];

  const selectedPrice = getSelectedValues("price")[0] || "";

  const handleFilter = (value, sectionId) => {
    let values = getSelectedValues(sectionId);

    if (values.includes(value)) {
      values = values.filter((v) => v !== value);
    } else {
      values.push(value);
    }

    if (values.length === 0) {
      searchParams.delete(sectionId);
    } else {
      searchParams.set(sectionId, values.join(","));
    }

    navigate({
      search: `?${searchParams.toString()}`,
    });
  };

  const handleSingleFilter = (value, sectionId) => {
    if (getSelectedValues(sectionId)[0] === value) {
      searchParams.delete(sectionId);
    } else {
      searchParams.set(sectionId, value);
    }

    navigate({
      search: `?${searchParams.toString()}`,
    });
  };

  const clearPriceFilter = () => {
    searchParams.delete("price");
    navigate({
      search: `?${searchParams.toString()}`,
    });
  };

  return (
    <div className="bg-white">
      <main className="mx-auto px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 className="text-4xl font-bold text-gray-900">
            New Arrivals
          </h1>

          <Menu as="div" className="relative">
            <MenuButton className="flex items-center text-sm font-medium text-gray-700">
              Sort
              <ChevronDownIcon className="ml-1 size-5" />
            </MenuButton>

            <MenuItems className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black/5">
              {sortOptions.map((option) => (
                <MenuItem key={option.name}>
                  <a className="block px-4 py-2 text-sm hover:bg-gray-100">
                    {option.name}
                  </a>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5 pt-6">
          {/* Filters */}
          <aside className="hidden lg:block">
            <ul className="border-b pb-6 text-sm font-medium text-gray-900">
              {subCategories.map((c) => (
                <li key={c.name}>{c.name}</li>
              ))}
            </ul>

            {filters.map((section) => (
              <Disclosure key={section.id} as="div" className="border-b py-6">
                <DisclosureButton className="flex w-full justify-between text-sm font-medium">
                  {section.name}
                  <span>
                    <PlusIcon className="size-5 group-data-[open]:hidden" />
                    <MinusIcon className="size-5 hidden group-data-[open]:block" />
                  </span>
                </DisclosureButton>

                <DisclosurePanel className="pt-4">
                  {section.id === "price" ? (
                    <>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Price</span>
                        {selectedPrice && (
                          <button
                            onClick={clearPriceFilter}
                            className="text-indigo-600 hover:underline text-sm"
                          >
                            Clear
                          </button>
                        )}
                      </div>

                      <FormControl>
                        <RadioGroup
                          value={selectedPrice}
                          onChange={(e) =>
                            handleSingleFilter(e.target.value, "price")
                          }
                        >
                          {section.options.map((o) => (
                            <FormControlLabel
                              key={o.value}
                              value={o.value}
                              control={<Radio size="small" />}
                              label={o.label}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </>
                  ) : (
                    <div className="space-y-2">
                      {section.options.map((o) => (
                        <label
                          key={o.value}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="hidden peer"
                            checked={getSelectedValues(section.id).includes(
                              o.value
                            )}
                            onChange={() =>
                              handleFilter(o.value, section.id)
                            }
                          />
                          <span className="h-4 w-4 border peer-checked:bg-indigo-600" />
                          <span className="text-sm">{o.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </aside>

          {/* Products */}
          <div className="lg:col-span-4 flex flex-wrap gap-4">
            {kurtaPage1.map((item) => (
              <ProductCard brand={item.brand} image={item.image} title={item.title} selling_price={item.selling_price} price={item.price} discount={item.disscount} key={item.id} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
