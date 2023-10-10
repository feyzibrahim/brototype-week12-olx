import React, { useState, useRef } from "react";
import Card from "../Card";
import { useData } from "../../context/DataContext";

function LastSearch() {
  const scrollContainerRef = useRef(null);
  let [isLeft, setIsLeft] = useState(false);

  const { data } = useData();

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 1125;
      setIsLeft(!isLeft);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 1125;
      setIsLeft(!isLeft);
    }
  };

  return (
    <>
      {data && (
        <div className="m-16 bg-zinc-100 rounded py-5 px-10 relative">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl pb-3">Based on your last search</h1>
            <a
              className="font-bold text-sm underline hover:no-underline cursor-pointer"
              href="/"
            >
              View More
            </a>
          </div>
          <div className="flex  overflow-hidden" ref={scrollContainerRef}>
            {data.map((product) => {
              return <Card data={product} key={product.id} isFeatured={true} />;
            })}
          </div>
          {/* Left and Right Buttons */}
          {isLeft && (
            <button
              className="scroll-button right text-5xl absolute top-44  bg-white pb-3 px-1 shadow"
              onClick={scrollLeft}
            >
              &#8249;
            </button>
          )}
          {!isLeft && (
            <button
              className="scroll-button right text-5xl absolute top-44 right-10 bg-white pb-3 px-1 shadow"
              onClick={scrollRight}
            >
              &#8250;
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default LastSearch;
