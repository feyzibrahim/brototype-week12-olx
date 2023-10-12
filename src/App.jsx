import React from "react";

import CategoryNav from "./components/CategoryNav";
import Navbar from "./components/Navbar";
import LastSearch from "./components/LastSearch";
import FreshRecommendation from "./components/FreshRecommendation";
import AppIntro from "./components/AppIntro";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <CategoryNav />
        <DataProvider>
          <LastSearch />
          <FreshRecommendation />
        </DataProvider>
        <AppIntro />
        <Footer />
      </div>
    </>
  );
}

export default App;
