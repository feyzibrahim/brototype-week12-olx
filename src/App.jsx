import React from "react";

import CategoryNav from "./components/CategoryNav";
import Navbar from "./components/Navbar";
import LastSearch from "./components/LastSearch";
import FreshRecommendation from "./components/FreshRecommendation";

function App() {
  return (
    <>
      <Navbar />
      <CategoryNav />
      <LastSearch />
      <FreshRecommendation />
    </>
  );
}

export default App;
