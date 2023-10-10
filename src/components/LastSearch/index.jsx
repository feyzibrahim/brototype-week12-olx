import React, { useEffect, useState, useRef } from "react";
import Card from "../Card";

function LastSearch() {
  let [data, setData] = useState([]);
  const scrollContainerRef = useRef(null);
  let [isLeft, setIsLeft] = useState(false);

  useEffect(() => {
    const handleAPICall = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=8");
      const data = await res.json();
      setData(data);
    };
    handleAPICall();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 1200;
      setIsLeft(!isLeft);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 1200;
      setIsLeft(!isLeft);
    }
  };

  return (
    <>
      {data && (
        <div className="m-16 bg-zinc-100 rounded py-5 px-10 relative">
          <h1 className="text-2xl pb-3">Based on your last search</h1>
          <div className="flex  overflow-hidden" ref={scrollContainerRef}>
            {data.map((product) => {
              return <Card data={product} key={product.id} />;
            })}
          </div>
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