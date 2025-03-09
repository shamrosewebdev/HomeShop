import React from 'react'
import BestSellersCard from './BestSellersCard';
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import b5 from "../assets/b5.jpg";
import b6 from "../assets/b6.jpg";
import b7 from "../assets/b7.jpg";
import b8 from "../assets/b8.jpg";
function BestSellers() {
  return (
    <div className="flex justify-center flex-col mt-20">
      <div>
        <h1 className="text-center font-bold text-4xl justify-center ">
          BEST SELLERS
        </h1>
      </div>
      <div className="w-[100%] flex justify-center mt-5">
        <div className="ProductSection flex flex-wrap justify-center gap-5 md:w-[100%]">
          <BestSellersCard
            image={b1}
            name="ZOOM VAPOR 16 ACADEMY FG/MG"
            price="Rs.32,500"
            className="w-[100%]"
          ></BestSellersCard>
          <BestSellersCard
            image={b2}
            name="NIKE REVOLUTION 7 EASYON"
            price="Rs.25,000"
            className="w-[100%]"
          ></BestSellersCard>
          <BestSellersCard
            image={b3}
            name="ZOOM FLY 6"
            price="Rs.63,000"
            className="w-[100%]"
          ></BestSellersCard>
          <BestSellersCard
            image={b4}
            name="PHANTOM GX II ACADEMY FG/MG"
            price="Rs.32,500"
            className="w-[100%]"
          ></BestSellersCard>
          <BestSellersCard
            image={b5}
            name="NIKE QUEST 6 "
            price="Rs.32,000"
            className="w-[100%]"
          ></BestSellersCard>
          <BestSellersCard
            image={b6}
            name="NIKE QUEST 6"
            price="Rs.32,000"
            className="w-[100%]"
          ></BestSellersCard>
          <BestSellersCard
            image={b7}
            name="NIKE AIR MAX NUAXIS"
            price="Rs.36,000"
            className="w-[100%]"
          ></BestSellersCard>
          <BestSellersCard
            image={b8}
            name="NIKE AIR MAX NUAXIS"
            price="Rs.36,000"
            className="w-[100%]"
          ></BestSellersCard>
        </div>
      </div>
    </div>
  )
}

export default BestSellers
