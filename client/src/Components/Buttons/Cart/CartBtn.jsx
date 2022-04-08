import React from "react";
import s from "./CartBtn.module.css";

export default function CartBtn() {
  return (
    <button className={s.btnCart}>
        <div className={s.image}>
        </div>
      <p className={s.text}>Agregar</p>
    </button>
  );
}
