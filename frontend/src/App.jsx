import Product from "./customer/pages/Product/ProductPage";
import ProductCard from "./customer/components/Product/ProductCard";
import HomePage from "./customer/pages/HomePage/HomePage";
import ProductDetails from "./customer/pages/ProductDetails/ProductDetails";
import ProductDetailsPage from "./customer/pages/ProductDetails/ProductDetailsPage";
import NewAddressForm from "./customer/components/Checkout/NewAddressForm";
import AdressesPage from "./customer/pages/CheckoutPages/AdressesPage";
import MainCheckoutPage from "./customer/pages/CheckoutPages/MainCheckoutPage";
import MainOrderHistoryPage from "./customer/pages/OrderHistory/MainOrderHistoryPage";
import OrderHistoryDetails from "./customer/pages/OrderHistory/OrderHistoryDetails";

function App() {
  return (
    <div className="app">
      <div>
        <MainOrderHistoryPage />
      </div>
    </div>
  );
}

export default App;
