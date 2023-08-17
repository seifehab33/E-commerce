import React from "react";
import logo from "../../assets/images/logo.png";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="flex items-center justify-center">
        <hr className="h-px w-4/5 bg-gray-500 opacity-50 outline-none border-none" />
      </div>
      <div className="flex items-center justify-around pt-4">
        <div>
          <img src={logo} className="h-20" alt="logo" />
        </div>
        <div>
          <p className="text-black text-sm font-inter no-underline normal-case">
            CoptRight &copy {year} page by S|E developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
