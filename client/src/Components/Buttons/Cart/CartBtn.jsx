import React from "react";
import s from "./CartBtn.module.css";

export default function CartBtn() {
  return (
    <button className={s.btnCart}>
        <div style={{ width: "26px", height: "24px", paddingTop: "2px" }} className={s.image}>
        </div>
      <p className={s.text}>Agregar</p>
    </button>
  );
}
