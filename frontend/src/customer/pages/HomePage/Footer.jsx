import React from "react";

const Footer = () => {
  const linkStyle = {
    textDecoration: "none",
    borderBottom: "none",
    color: "#9ca3af", // gray-400
    cursor: "pointer",
  };

  return (
    <>
      {/* Back to top */}
      <div className="bg-gray-700 p-2 text-center ">
        <a
          href="#"
          style={{ textDecoration: "none", color: "white" }}
          className="text-sm"
        >
          Back to top
        </a>
      </div>

      {/* Footer main */}
      <div className="bg-gray-800 text-white flex items-start justify-center px-2 lg:gap-[50px] text-[8px] lg:text-sm py-8">
        
        <div className="flex flex-col text-left lg:max-w-[130px]">
          <p className="mb-2">Get to Know Us</p>
          <a href="" style={linkStyle}>About Amazon</a>
          <a href="" style={linkStyle}>Careers</a>
          <a href="" style={linkStyle}>Press Releases</a>
          <a href="" style={linkStyle}>Amazon Science</a>
        </div>

        <div className="flex flex-col text-left lg:max-w-[130px]">
          <p className="mb-2">Connect with Us</p>
          <a href="" style={linkStyle}>Facebook</a>
          <a href="" style={linkStyle}>Twitter</a>
          <a href="" style={linkStyle}>Instagram</a>
        </div>

        <div className="flex flex-col text-left lg:max-w-[220px]">
          <p className="mb-2">Make Money with Us</p>
          <a href="" style={linkStyle}>Sell on Amazon</a>
          <a href="" style={linkStyle}>Sell under Amazon Accelerator</a>
          <a href="" style={linkStyle}>Protect and Build Your Brand</a>
          <a href="" style={linkStyle}>Amazon Global Selling</a>
          <a href="" style={linkStyle}>Supply to Amazon</a>
          <a href="" style={linkStyle}>Become an Affiliate</a>
          <a href="" style={linkStyle}>Fulfilment by Amazon</a>
          <a href="" style={linkStyle}>Advertise Your Products</a>
          <a href="" style={linkStyle}>Amazon Pay on Merchants</a>
        </div>

        <div className="flex flex-col text-left lg:max-w-[220px]">
          <p className="mb-2">Let Us Help You</p>
          <a href="" style={linkStyle}>Your Account</a>
          <a href="" style={linkStyle}>Returns Centre</a>
          <a href="" style={linkStyle}>Recalls and Product Safety Alerts</a>
          <a href="" style={linkStyle}>100% Purchase Protection</a>
          <a href="" style={linkStyle}>Amazon App Download</a>
          <a href="" style={linkStyle}>Help</a>
        </div>

      </div>
    </>
  );
};

export default Footer;
