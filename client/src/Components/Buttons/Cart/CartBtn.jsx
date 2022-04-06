import React from "react";
import s from "./CartBtn.module.css";

export default function CartBtn() {
  return (
    <button className={s.btnCart}>
      <span>
        <img
          style={{ width: "26px" }}
          src="https://imgur.com/lhjyKV4.png"
          alt="cart"
        />
      </span>
    </button>
  );
}
