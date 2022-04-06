import React from "react";
import s from "./ProductCard.module.css";
import CartBtn from "../Buttons/Cart/CartBtn";
import ViewBtn from "../Buttons/View/ViewBtn";

export default function ProductCard({
  image,
  category,
  name,
  term,
  price,
  stock,
  discount,
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={s.container}>
            <div className={s.imageCont}>
              <img className={s.image} src={image} alt="funko" />
        {discount > 0 &&
              <div className={s.discountImage}>
                <img
                  style={{ width: "inherit" }}
                  src="https://imgur.com/xw6nWes.png"
                  alt="discount"
                />
                <p className={s.discountText}>{discount}%</p>
            </div>
        }
        </div>
        <div className={s.infoCont}>
          <p className={s.category}>
            <b>{category}</b>
          </p>
          <p className={s.name}>{name}</p>



          {stock === true && discount > 0 ? (
            <>
              <p className={s.term}>{term} Cuotas s/interés de</p>
              <h5>
                <b>
                  $
                  {((price - (price * discount) / 100) / term)
                    .toFixed(2)
                    .replace(".", ",")}
                </b>
              </h5>
              <p>
                Final: <del className={s.deletedPrice}>${price}</del>
                <b className={s.newPrice}>
                  $
                  {(price - (price * discount) / 100)
                    .toFixed(2)
                    .replace(".", ",")}
                </b>
              </p>
            </>
          )
          
          
           : stock === true && discount === 0 ? (
            <>
              <p className={s.term}>{term} Cuotas s/interés de</p>
              <h5>
                <b>${(price / term).toFixed(2).replace(".",",")}</b>
              </h5>
              <p>
                Final: <b>${price}</b>
              </p>
            </>
          )
          
          
          : (
            <p className={s.name}>
              Final: <b className={s.noStock}>Articulo sin stock</b>
            </p>
          )}
              {stock === true ? 
                <CartBtn />  
                :
                <ViewBtn />      
            }
        </div>
      </div>
    </div>
  );
}
