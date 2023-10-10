import React from "react";

function CategoryNav() {
  return (
    <div className="text-sm flex gap-5 shadow py-3 pl-16">
      <div className="flex items-center gap-3 font-bold">
        <a href="/" className="uppercase">
          All Categories
        </a>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="2"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
            clipRule="evenodd"
          ></path>
        </svg>
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
