import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
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

  const incrementLimit = () => {
    setLimit((prev) => prev + 8);
  };

  return (
    <DataContext.Provider value={{ data, incrementLimit }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
