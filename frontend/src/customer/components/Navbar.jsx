'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  cursor: 'pointer',
}

const navigation = {
  categories: [
    { id: 'women', name: 'Women' },
    { id: 'men', name: 'Men' },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-gray-800">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/40" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative flex w-full max-w-xs flex-col bg-white pb-12 shadow-xl">
            <div className="flex px-4 pt-5 pb-2">
              <button onClick={() => setOpen(false)} className="p-2 text-gray-500">
                <XMarkIcon className="size-6" />
              </button>
            </div>

            <TabGroup>
              <TabList className="flex space-x-8 border-b px-4">
                {navigation.categories.map((cat) => (
                  <Tab
                    key={cat.name}
                    className="py-4 text-base font-medium text-gray-700 data-selected:text-indigo-600"
                  >
                    {cat.name}
                  </Tab>
                ))}
              </TabList>

              <TabPanels>
                {navigation.categories.map((cat) => (
                  <TabPanel key={cat.name} className="px-4 pt-8">
                    <a href="#" style={{ color: '#000', textDecoration: 'none' }}>
                      Sample Link
                    </a>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Header */}
      <header className="bg-gray-800">
        <p className="flex h-10 items-center justify-center bg-gray-900 text-sm text-white">
          Get free delivery on orders over $100
        </p>

        <nav className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center border-b border-gray-700">
            {/* Mobile button */}
            <button
              onClick={() => setOpen(true)}
              className="p-2 text-gray-400 lg:hidden"
            >
              <Bars3Icon className="size-6" />
            </button>

            {/* Logo */}
            <div className="ml-4">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8"
                alt=""
              />
            </div>

            {/* Desktop navigation */}
            <PopoverGroup className="ml-8 hidden lg:flex space-x-8">
              {navigation.categories.map((category) => (
                <Popover key={category.name}>
                  <PopoverButton
                    style={linkStyle}
                    className="text-sm font-medium"
                  >
                    {category.name}
                  </PopoverButton>

                  <PopoverPanel className="absolute inset-x-0 top-full bg-white shadow">
                    <div className="p-6">
                      <a href="#" style={{ color: '#000', textDecoration: 'none' }}>
                        Dropdown Item
                      </a>
                    </div>
                  </PopoverPanel>
                </Popover>
              ))}

              {navigation.pages.map((page) => (
                <a
                  key={page.name}
                  href={page.href}
                  style={linkStyle}
                  className="text-sm font-medium"
                >
                  {page.name}
                </a>
              ))}
            </PopoverGroup>

            {/* Right side */}
            <div className="ml-auto flex items-center gap-6">
              <a href="#" style={linkStyle} className="hidden lg:block text-sm">
                Sign in
              </a>
              <a href="#" style={linkStyle} className="hidden lg:block text-sm">
                Create account
              </a>

              <MagnifyingGlassIcon className="size-6 text-white cursor-pointer" />
              <ShoppingBagIcon className="size-6 text-white cursor-pointer" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
