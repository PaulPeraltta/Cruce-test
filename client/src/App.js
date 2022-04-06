import "./App.css";
import Banner from "./Components/Banner/Banner";
import ProductsGrid from "./Components/ProductsGrid/ProductsGrid";
import Pagination from "./Components/Pagination/Pagination";
import UpBtn from "./Components/Buttons/Up/UpBtn";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";

import Catalog from "./Components/Catalog/Catalog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/">
          <NavBar />
          <Banner />
          <ProductsGrid />
          <Pagination />
          <UpBtn />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
