import React from "react";

import CategoryNav from "./components/CategoryNav";
import Navbar from "./components/Navbar";
import LastSearch from "./components/LastSearch";
import FreshRecommendation from "./components/FreshRecommendation";
import AppIntro from "./components/AppIntro";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <CategoryNav />
      <LastSearch />
      <FreshRecommendation />
      <AppIntro />
      <Footer />
    </>
  );
}

export default App;
