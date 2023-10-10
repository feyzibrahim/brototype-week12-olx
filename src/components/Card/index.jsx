import React from "react";

function Card({ data }) {
  console.log(data);
  return (
    <div className="lg:w-1/4 pr-5 mb-3">
      <div className="border border-gray-200 bg-white rounded p-3">
        <div className="h-52 overflow-hidden">
          <img src={data.image} alt="asdfa" className="mx-auto" />
        </div>
        <h2 className="font-bold text-xl">₹ {data.price}</h2>
        <h3 className="whitespace-nowrap overflow-hidden text-ellipsis">
          {data.title}
        </h3>
        {/* <h3>{data.category}</h3> */}
        <p className="text-sm text-gray-500  whitespace-nowrap overflow-hidden text-ellipsis">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
