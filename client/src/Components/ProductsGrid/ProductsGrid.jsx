import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import api from "../json/products.json";
import s from "./ProductsGrid.module.css";

export default function ProductsGrid() {
  return (
    <div className={s.productsGrid}>
      {api.map((f) => (
        <ProductCard image={f.image}
        category={f.category}
        name={f.name}
        term={f.term}
        price={f.price}
        stock={f.stock}
        discount={f.discount}    
      />))}
    </div>
  );
}
