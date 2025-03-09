import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function BestSellersCard(props) {
  // const [mouseOver,setMouseOver]=useState(false);
  // function handleMouseOver(){
  //     setMouseOver(true);
  // }
  // function handleMouseLeave(){
  //   setMouseOver(false);
  // }
  return (
    // <div className="flex flex-col justify-between mt-5 w-full sm:w-72 lg:w-64" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
    //   <div className={`productCard max-h-44 flex justify-center cursor-pointer ${mouseOver?"mouseOver":"bg-white"}`}>
    //     <img src={props.image} alt={props.name} className="max-h-44" />
    //   </div>
    //   <div className="ProductName text-lg font-semibold mt-2 text-center">{props.name}</div>
    //   <div className="ProductPrice text-gray-700 text-center">Rs.{props.price}</div>
    // </div>
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
  );
}

export default BestSellersCard;