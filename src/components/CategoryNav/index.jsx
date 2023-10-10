import React from "react";
import { FiChevronDown } from "react-icons/fi";

function CategoryNav() {
  return (
    <div className="text-sm flex gap-5 shadow py-3 pl-16 items-center">
      <div className="flex items-center font-bold">
        <a href="/" className="uppercase">
          All Categories
        </a>
        <FiChevronDown className="text-3xl" />
      </div>
      <a href="/">Cars</a>
      <a href="/">Motorcycles</a>
      <a href="/">Mobile Phones</a>
      <a href="/">For Sale: Houses & Apartments</a>
      <a href="/">Scooters</a>
      <a href="/">Commercial & Other Vehicles</a>
      <a href="/">For Rent: Houses & Apartments</a>
    </div>
  );
}

export default CategoryNav;
