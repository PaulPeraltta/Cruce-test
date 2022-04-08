import React from "react";
import s from "./UpBtn.module.css";

export default function UpBtn() {
  return (
    <a href="#header">
      <div className={s.button}>
        <div className={s.image}
        ></div>
        <span className={s.text}>SUBIR</span>
      </div>
    </a>
  );
}
