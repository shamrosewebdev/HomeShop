import React from "react";
import Logo from "../assets/nexusbyte.png";

function Footer() {
  return (
    <div className="w-full bg-black sm:overflow-hidden mt-10">
      <div className="mx-auto max-w-full sm:max-w-screen-xl py-14 px-4 sm:px-6">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white text-center sm:text-left">
          {/* Logo and Contact Section */}
          <div className="col-span-1 flex flex-col items-center sm:items-start">
            <img src={Logo} alt="Logo" className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]" />
            <ul className="mt-5">
              <li className="my-2.5"><strong>Email: </strong><a href="" className="break-words">www.shamrose.com</a></li>
              <li className="my-2.5"><strong>Phone: </strong><a href="">021-66779821</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h1 className="text-xl font-bold">QUICK LINKS</h1>
            <ul className="mt-5">
              <li className="my-2.5"><a href="">Nike US Size Guide</a></li>
              <li className="my-2.5"><a href="">Adidas UK Size Guide</a></li>
              <li className="my-2.5"><a href="">Under Armour Size Guide</a></li>
              <li className="my-2.5"><a href="">Birkenstock Size Guide</a></li>
              <li className="my-2.5"><a href="">Asics Size Guide</a></li>
              <li className="my-2.5"><a href="">Puma Size Guide</a></li>
            </ul>
          </div>

          {/* Divisions */}
          <div className="col-span-1">
            <h1 className="text-xl font-bold">DIVISIONS</h1>
            <ul className="mt-5">
              <li className="my-2.5"><a href="">Men</a></li>
              <li className="my-2.5"><a href="">Women</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-span-1">
            <h1 className="text-xl font-bold">NEWSLETTER SIGNUP</h1>
            <p className="mt-5 break-words">
              Subscribe to our newsletters and don’t miss new arrivals, the latest fashion updates, and our promotions.
            </p>
            <div className="relative flex h-10 mt-5 w-full max-w-[24rem] mx-auto sm:mx-0">
              <input
                type="email"
                className="h-full w-full rounded-3xl border border-amber-600 outline-0 px-3 py-2.5 pr-20 font-sans text-sm placeholder-gray-500"
                placeholder="Enter Your Email Address"
                required
              />
              <button
                className="absolute right-1 top-1 z-10 rounded-2xl bg-amber-600 py-2 px-4 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Row */}
        <div className="copyright text-center text-gray-600 w-full py-3 mt-10">
          <h1>Copyright © 2025 Shamroze Khan (Pvt.) Ltd. All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
