import React, { useEffect, useState } from "react";
import Card from "../Card";

function FreshRecommendation() {
  let [data, setData] = useState([]);

  const [limit, setLimit] = useState(8);

  useEffect(() => {
    const handleAPICall = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      const data = await res.json();
      setData(data);
    };
    handleAPICall();
  }, [limit]);

  return (
    <>
      {data && (
        <div className="m-16 rounded py-5 px-10 relative">
          <h1 className="text-2xl pb-3">Fresh recommendations</h1>
          <div className="flex flex-wrap">
            {data.map((product) => {
              return <Card data={product} key={product.id} />;
            })}
          </div>
        </div>
      )}
      <div
        className="flex justify-center mb-10"
        onClick={() => {
          setLimit((prev) => prev + 8);
        }}
      >
        <button className="border border-black ">Load More</button>
      </div>
    </>
  );
}

export default FreshRecommendation;
