import React from 'react'
import banner from "../assets/banner_listado.png";
import s from "./Banner.module.css";
import { orderProducts } from '../Store/actions';
import { useDispatch } from "react-redux";

export default function Banner() {
  const dispatch = useDispatch();

  function onSelectChange(e) {
    e.preventDefault();
    dispatch(orderProducts(e.target.value))
}

  return (
    <div className={s.container}>
        <img className={s.banner} src={banner} alt="banner" />
        <div className={s.miniNav}>
            <p className={s.text}><span className={s.juguetes}>Inicio</span>  /  <span className={s.juguetes}>Juguetes</span>  / <b>Funko Pop</b></p>
            <select className={s.selectFilter}>
                <option value="none" disabled selected>Filtrar</option>
                <option value="2">2</option>
            </select>
            <select className={s.selectOrder} onChange={(e) => onSelectChange(e)}>
                <option value="ALL" disabled selected>Ordenar por</option>
                <option value="DESCENDENTE">Mayor valor</option>
                <option value="ASCENDENTE">Menor valor</option>
            </select>
        </div>
    </div>
  )
}
