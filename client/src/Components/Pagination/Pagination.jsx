import React from 'react'
import s from './Pagination.module.css';
import right from '../assets/CRUCE • Prueba - Listado (1)/Vector.png'
import left from '../assets/CRUCE • Prueba - Listado (1)/Vector-1.png'

export default function Pagination() {
  return (
    <div>
            <nav>
              <ul className={s.list}>
                <li className={s.arrow}>
                    <a className={s.pageLinkArrow} href="#" >
                        <img style={{width: "16px"}} src={left} alt="left-arrow"/>
                    </a>
                </li>
                <li><a className={s.pageLink} href="#">4</a></li>
                <li><a className={s.pageLink} href="#">5</a></li>
                <li><a className={`${s.pageLink} ${s.selectedPage}`} href="#">6</a></li>
                <li><a className={s.pageLink} href="#">7</a></li>
                <li><a className={s.pageLink} href="#">8</a></li>
                <li className={s.arrow}>
                    <a className={s.pageLinkArrow} href="#">
                        <img style={{width: "16px"}} src={right} alt="right-arrow" />
                    </a>
                </li>
             </ul>
            </nav>
          </div>
  )
}
