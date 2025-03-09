import React, { useState } from "react";
import Speedlogo from "../assets/nexusbyte.png";
import Head from "../assets/head.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faBars,faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className="navbar">
      <div className="nav-top text-center flex items-center justify-center text-white bg-black p-4 ">
        Free shipping on orders above Rs.25,000
      </div>

      <div
        id="nav-middle"
        className="nav-middle  flex items-center justify-between px-10 py-5"
      >
        <div id="socialIcons" className="social flex justify-start gap-4 w-[20%]">
          <a href="">
            <FontAwesomeIcon icon={faFacebook} color="black" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} color="black" />
          </a>
        </div>
        <div id="homeLogo" className="logo flex items-center w-[2=60%]">
          <img src={Speedlogo} />
        </div>
        <div
          id="itemIcons"
          className="itemsicons flex justify-end gap-4 w-[20%]"
        >
          <a href="">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" color="black" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faUser} size="1x" color="black" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faHeart} size="1x" color="black" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faCartShopping} size="1x" color="black" />
          </a>
        </div>
      </div>
      <div
        id="nav-bottom"
        className="nav-bottom flex items-center justify-center flex-row"
      >
        
        <ul
          id="nav-links"
          className={`flex items-center justify-center flex-row gap-8 font-bold ${isSidebarOpen?"active":""}`}
        >
          <li>
            <a href="MEN">MEN</a>
          </li>
          <li>
            <a href="WOMEN">WOMEN</a>
          </li>
          <li>
            <a href="KIDS">KIDS</a>
          </li>
          <li>
            <a href="SPORTS">SPORTS</a>
          </li>
          <li>
            <a href="NEW ARRIVAL">NEW ARRIVAL</a>
          </li>
          <li>
            <a href="SALE">SALE</a>
          </li>
        </ul>
        <div id="mobile">
          <FontAwesomeIcon icon={faBars} onClick={toggleSidebar}/>
          <FontAwesomeIcon id="closeSide" className={`${isSidebarOpen?"active":""}`} onClick={toggleSidebar} icon={faXmark} />
        </div>
      </div>

      <div className="head min-w-full max-h-[70vh] overflow-hidden flex justify-center items-center">
        <img className="object-cover h-full" src={Head} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Navbar;
