import React from "react";
import Card from "../Card";
import { useData } from "../../context/DataContext";

function FreshRecommendation() {
  const { data, incrementLimit } = useData();

  return (
    <>
      {data && (
        <div className="m-16 rounded py-5 px-10 relative">
          <h1 className="text-2xl pb-3">Fresh Recommendations</h1>
          <div className="flex flex-wrap">
            {data.map((product) => {
              return <Card data={product} key={product.id} />;
            })}
          </div>
        </div>
      )}
      <div className="flex justify-center mb-10" onClick={incrementLimit}>
        <button className="border-2 rounded border-black p-3 font-bold hover:border-4">
          Load More
        </button>
      </div>
    </>
  );
}

export default FreshRecommendation;
