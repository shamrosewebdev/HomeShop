import React from "react";
import ProductCard from "./ProductCard";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
function Products() {
  
  return (
    <div className="flex justify-center flex-col mt-20">
      <div>
        <h1 className="text-center font-bold text-4xl justify-center">
          LATEST PRODUCTS
        </h1>
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex flex-wrap justify-center gap-5 md:w-[100%] ">
          <ProductCard
            image={p1}
            name="AS M NSW TEE LS OS OPP1"
            price="16,000"
            className="w-[100%]"
          ></ProductCard>
          <ProductCard
            image={p2}
            name="AS W NK DF BLISS MR VCTRY PNT"
            price="17,500"
            className="w-[100%]"
          ></ProductCard>
          <ProductCard
            image={p3}
            name="AS M NK DF TEE SS CAMO JDI"
            price="10,000"
            className="w-[100%]"
          ></ProductCard>
          <ProductCard
            image={p4}
            name="CR7 K NK DF ACD23 TOP SS"
            price="9,000"
            className="w-[100%]"
          ></ProductCard>
          <ProductCard
            image={p5}
            name="CR7 K NK DF ACD23 SHORT K"
            price="8,800"
            className="w-[100%]"
          ></ProductCard>
          <ProductCard
            image={p6}
            name="U NK PEAK BEANIE TC FUT F24 L"
            price="7,500"
            className="w-[100%]"
          ></ProductCard>
          <ProductCard
            image={p7}
            name="AS W NK DF ONE HR 7/8 TIGHT AO"
            price="16,800"
            className="w-[100%]"
          ></ProductCard>
          <ProductCard
            image={p8}
            name="AS W NK DF ONE HR 7/8 TIGHT AO"
            price="16,800"
            className="w-[100%]"
          ></ProductCard>
        </div>
      </div>
    </div>
  );
}

export default Products;
