import React from "react";
import Banner from "../Components/Banner/Banner";
import ProductsGrid from "../Components/ProductsGrid/ProductsGrid";
import Pagination from "../Components/Pagination/Pagination";
import UpBtn from "../Components/Buttons/Up/UpBtn";
// import NavBar from "../Components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <Banner />
      <ProductsGrid />
      <Pagination />
      <UpBtn />
    </div>
  );
}
