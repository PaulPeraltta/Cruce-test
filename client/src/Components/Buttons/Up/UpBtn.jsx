import React from "react";
import s from "./UpBtn.module.css";

export default function UpBtn() {
  return (
    <a href="#header" style={{ textDecoration: "none", color: "black" }}>
      <div className={s.button}>
        <div
          style={{
            width: "18px",
            height: "20px",
            paddingBottom: "2px",
            marginBottom: "5px",
          }}
          className={s.image}
        ></div>
        <span className={s.text}>SUBIR</span>
      </div>
    </a>
  );
}
