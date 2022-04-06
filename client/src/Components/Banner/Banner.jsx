import React from 'react'
import banner from "../assets/banner_listado.png";
import s from "./Banner.module.css"

export default function Banner() {
  return (
    <div className={s.container}>
        <img className={s.banner} src={banner} alt="banner" />
        <div className={s.miniNav}>
            <p className={s.text}>Inicio  /  Juguetes  / <b>Funko Pop</b></p>
            <select className={s.selectFilter}>
                <option value="" disabled selected>Filtrar</option>
                <option>2</option>
            </select>
            <select className={s.selectOrder}>
                <option value="" disabled selected>Ordenar por</option>
                <option>Mayor valor</option>
                <option>Menor valor</option>
            </select>
        </div>
    </div>
  )
}
