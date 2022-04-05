import React from 'react'
import banner from "../assets/banner_listado.png";
import s from "./BanNav.module.css"

export default function BanNav() {
  return (
    <div className={s.container}>
        <img className={s.banner} src={banner} alt="banner" />
        <div className={s.nav}>
            <p className={s.text}>Inicio  /  Juguetes  / <b>Funko Pop</b></p>
            <select className={s.selectFilter}>
                <option>Filtrar</option>
                <option>2</option>
            </select>
            <select className={s.selectOrder}>
                <option>Ordenar por</option>
                <option>2</option>
            </select>

        </div>
    </div>
  )
}
