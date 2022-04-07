import { React, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
// import products from "../json/products.json";
import s from "./ProductsGrid.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Store/actions";

export default function ProductsGrid() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
}, [dispatch])

  return (
    <>
    { products.length > 0 ?
    <div className={s.productsGrid}>
      {products.map((p) => (
        <ProductCard image={p.image}
        category={p.category}
        name={p.name}
        term={p.term}
        price={p.price}
        stock={p.stock}
        discount={p.discount} 
        key={p.id}   
      />))}
    </div> : 
    <div style={{display: "flex", justifyContent:"center", marginBottom: "30px"}}>
      <p>No hay productos para mostrar en este momento</p>
    </div>
      }
    </>
    // <>
    // { products.length > 0 ?
    // <div className={s.productsGrid}>
    //   {products.map((p) => (
    //     <ProductCard image={p.image}
    //     category={p.category}
    //     name={p.name}
    //     term={p.term}
    //     price={p.price}
    //     stock={p.stock}
    //     discount={p.discount} 
    //     key={p.id}   
    //   />))}
    // </div> : 
    // <div style={{display: "flex", justifyContent:"center", marginBottom: "30px"}}>
    //   <p>No hay productos para mostrar en este momento</p>
    // </div>
    //   }
    // </>
  );
}
