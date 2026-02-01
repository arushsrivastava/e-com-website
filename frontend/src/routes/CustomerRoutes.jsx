import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from '../customer/pages/HomePage/HomePage'
import MainCheckoutPage from '../customer/pages/CheckoutPages/MainCheckoutPage'
import Navigation from '../customer/components/Navbar'
import Footer from '../customer/pages/HomePage/Footer'
import ProductPage from '../customer/pages/Product/ProductPage'
import MainOrderHistoryPage from '../customer/pages/OrderHistory/MainOrderHistoryPage'
import OrderHistoryDetails from '../customer/pages/OrderHistory/OrderHistoryDetails'
import ProductDetailsPage from '../customer/pages/ProductDetails/ProductDetailsPage'

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:level1/:level2/:level3" element={<ProductPage />}></Route>
        <Route path="/checkout" element={<MainCheckoutPage />}></Route>
        <Route path="/product/:productId" element={<ProductDetailsPage />}></Route>
        <Route path="/account/orders" element={<MainOrderHistoryPage />}></Route>
        <Route path="/account/orders/:orderId" element={<OrderHistoryDetails />}></Route>  
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CustomerRoutes