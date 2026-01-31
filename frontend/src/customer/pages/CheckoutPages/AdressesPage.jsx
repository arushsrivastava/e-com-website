import React from "react";
import NewAddressForm from "../../components/Checkout/NewAddressForm";
const addresses = [1, 1, 1, 1, 1, 1, 1, 1]; // Mock data for addresses
import AddressCard from "../../components/Checkout/AddressCard";

const AddressesPage = ({handleNext}) => {
  const [showMoreAddresses, setShowMoreAddresses] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);
  const [addNewAddress, setAddNewAddress] = React.useState(false);
  return (
    <div className="grid grid-cols-3 gap-4 py-3 px-4 bg-gray-100"
    style={{height:"100vh"}}>

    <div className="lg:col-span-2">
    <div className="bg-white p-2 ">
    <div className=" mt-8 pb-3">
      {/* Added Addresses */}
      <div className="lg:col-span-2 ml-5 space-y-3 pr-3 ">
        {addresses.slice(0, 2).map((_, index) => (
          <AddressCard
            key={index}
            selected={selectedId === index}
            onSelect={() => setSelectedId(index)}
          />
        ))}

        {!showMoreAddresses && (
          <button
            className="lg:ml-7 text-blue-600 underline"
            onClick={() => setShowMoreAddresses(!showMoreAddresses)}
          >
            Show more addresses
          </button>
        )}

        {showMoreAddresses &&
          addresses
            .slice(2)
            .map((_, index) => (
              <AddressCard
                key={index + 4}
                selected={selectedId === index + 4}
                onSelect={() => setSelectedId(index + 4)}
                handleNext={handleNext}
              />
            ))}

        {showMoreAddresses && (
          <button
            className="lg:ml-7 text-blue-600 underline "
            onClick={() => setShowMoreAddresses(!showMoreAddresses)}
          >
            Show fewer addresses
          </button>
        )}

        {!addNewAddress && <button
          className="lg:ml-7 text-blue-600 underline "
          onClick={() => setAddNewAddress(!addNewAddress)}
        >
          Add a new delivery address
        </button>}
      </div>
      {/* Add an Address */}
    </div>
    {addNewAddress && <div className="px-5 max-w-[700px]">
        <div className="flex justify-between ">
        <p className="font-semibold text-2xl">
          {" "}
          Add a new delivery address
        </p>
        <button className="text-blue-600 underline" onClick={()=>setAddNewAddress(!addNewAddress)}>close</button>
        </div>
        <div className="">
          <NewAddressForm />  
        </div>
    </div>}
    </div>
    <div className="p-4 bg-white  mt-3">
        <p className="font-semibold text-xl m-0">Review items and shipping</p>
    </div>
    <div className="p-4 bg-white mt-3">
        <p className="text-xs m-0">Need help? Check our <span className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer" onClick={() => {
            window.location.href = "https://theuselessweb.com/";
        }}>help pages</span> or <span className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer" 
        onClick={() => {
            window.location.href = "https://theuselessweb.com/";
        }}
        >contact us 24x7</span>.
        <br /><br />
        When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card, debit card or net banking), you will be directed to your bank's website to complete your payment. Your contract to purchase an item will not be complete until we receive your electronic payment and dispatch your item. If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you receive your item.
        <br /><br />
        See Amazon.in's <span className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer" onClick={() => {
            window.location.href = "https://theuselessweb.com/";}}>Return Policy</span>.</p>
    </div>
    </div>

    <div className="bg-white p-3 max-h-[165px]">
        <button className="bg-yellow-400 rounded-3xl font-semibold px-3 py-2 w-full mb-3"
            onClick={handleNext}
        >Deliver Here</button>
        <div className="flex justify-between"><p className="m-0">Items</p><p className="m-0">$99</p></div>
        <div className="flex justify-between"><p className="m-0 mb-1">Delivery</p><p className="m-0 mb-1">$99</p></div>
        <div className="flex justify-between font-bold text-xl"><p className="m-0">Total</p><p className="m-0">$199</p></div>
    </div>
    
    </div>
  );
};

export default AddressesPage;
