import React from "react";
import Menimg from "../assets/MEN.jpg";
import Womenimg from "../assets/WOMEN.jpg";
import Kidsimg from "../assets/KIDS.jpg";
import Apparelimg from "../assets/APPAREL.jpg";
import Equipmentimg from "../assets/EQUIPMENT.jpg";
import Footwearimg from "../assets/FOOTWEAR.jpg";

function Categories() {
  return (
    <div className="Categories gap-2 flex flex-col flex-wrap justify-between md:flex-row md:gap-2 lg:gap-12 lg:mt-12 ">
      {/* Category Card (Men) */}
      <div className="catMen w-[100%] lg:w-[30%] min-w-[250px] shadow-lg overflow-hidden flex items-center justify-center relative group cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={Menimg}
            alt="Men"
            className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Gray Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>
        <div className="categoryName text-[35px] text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">MEN</div>
      </div>

      {/* Category Card (Women) */}
      <div className="catMen w-[100%] lg:w-[30%] min-w-[250px] shadow-lg overflow-hidden flex items-center justify-center relative group cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={Womenimg}
            alt="Women"
            className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Gray Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>
        <div className="categoryName text-[35px] text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">WOMEN</div>
      </div>

      {/* Category Card (Kids) */}
      <div className="catMen w-[100%] lg:w-[30%] min-w-[250px] shadow-lg overflow-hidden flex items-center justify-center relative group cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={Kidsimg}
            alt="Kids"
            className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Gray Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>
        <div className="categoryName text-[35px] text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">KIDS</div>
      </div>

      {/* Category Card (Apparel) */}
      <div className="catMen w-[100%] lg:w-[30%] min-w-[250px] shadow-lg overflow-hidden flex items-center justify-center relative group cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={Apparelimg}
            alt="Apparel"
            className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Gray Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>
        <div className="categoryName text-[35px] text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">APPAREL</div>
      </div>

      {/* Category Card (Equipment) */}
      <div className="catMen w-[100%] lg:w-[30%] min-w-[250px] shadow-lg overflow-hidden flex items-center justify-center relative group cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={Equipmentimg}
            alt="Equipment"
            className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Gray Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>
        <div className="categoryName text-[35px] text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">EQUIPMENT</div>
      </div>

      {/* Category Card (Footwear) */}
      <div className="catMen w-[100%] lg:w-[30%] min-w-[250px] shadow-lg overflow-hidden flex items-center justify-center relative group cursor-pointer">
        <div className="relative w-full h-full">
          <img
            src={Footwearimg}
            alt="Footwear"
            className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Gray Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>
        <div className="categoryName text-[35px] text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">FOOTWEAR</div>
      </div>
    </div>
  );
}

export default Categories;
