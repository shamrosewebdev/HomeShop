import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ProductCard(props) {

  return (
    <div className="productCard pt-2.5">
      <div className="product_image">
        <img src={props.image} alt={props.name} />
        <div className="productButtons">
        <div className="quickview productBtn"><a href=""><FontAwesomeIcon icon={faEye} /></a></div>
        <div className="quickview productBtn"><a href=""><FontAwesomeIcon icon={faCartShopping} /></a></div>
        <div className="quickview productBtn"><a href=""><FontAwesomeIcon icon={faHeart} /></a></div>
      </div>
      </div>
      <div className="productName pt-2.5"></div>
      <div className="pName">{props.name}</div>
      <div className="pPrice">Rs.{props.price}</div>
      <div className="newBadge">New</div>
    </div>
    // <div className="productCard border-2 w-[50%] md:w-[25%] flex flex-col justify-center p-5" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
    //   <div className={`productsImage flex justify-center cursor-pointer ${mouseOver?"mouseOver":"bg-white"}`}>
    //     <img src={props.image} alt={props.name}/>
    //   </div>
    //   <div className="ProductName text-lg font-semibold mt-2 text-center">{props.name}</div>
    //   <div className="ProductPrice text-gray-700 text-center">Rs.{props.price}</div>
    // </div>
  );
}

export default ProductCard;
