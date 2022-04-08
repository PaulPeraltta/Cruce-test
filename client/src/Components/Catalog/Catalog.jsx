import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProduct, getProducts, deleteProduct } from "../Store/actions";
// import products from "../json/products.json"
import { Link } from "react-router-dom";
import s from "./Catalog.module.css";

export default function Catalog() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  function delProduct(e, id) {
    e.preventDefault();
    dispatch(deleteProduct(id));
    navigate(0);
  }

  function putProduct(e, id) {
    e.preventDefault();
    dispatch(getProduct(id));
    navigate(`/edit/${id}`);
  }

  return (
    <div className="container-fluid mt-4">
      <div className="card">
        <div className="card-body">
          <table style={{ margin: "0" }} className="table table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                <>
                  {products.map((p) => (
                    <tr key={p.id}>
                      <td>
                        <a>{p.name}</a>
                      </td>
                      <td>${p.price}</td>
                      <td className="text-right">
                        <a className="btn">
                          <i className="fa fa-eye"></i>
                        </a>
                        <a to={`/edit/${p.id}`} className="btn" onClick={(e) => putProduct(e, p.id)}>
                          <i className="fa fa-pencil"></i>
                        </a>
                        <a
                          className="btn"
                          onClick={(e) => delProduct(e, p.id)}
                        >
                          <i className="fa fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <div className={s.noProductText}>
                  <p>No hay productos para mostrar en este momento</p>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/add">
        <button className={s.buttonAdd}>Agregar un producto</button>
      </Link>
    </div>
  );
}
