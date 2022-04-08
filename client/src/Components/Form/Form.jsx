import React, { useState } from "react";
import s from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postProduct } from "../Store/actions";

function validate(product) {
  let errors = {};
  if (!product.name) {
    errors.name = "Require name";
  } else if (!product.image) {
    errors.image = "Require image";
  } else if (!product.price) {
    errors.price = "Require price";
  } else if (!product.term) {
    errors.term = "Require term";
  } else if (!product.category) {
    errors.category = "Require category";
  } else if (!product.stock) {
    errors.stock = "Require stock";
  } else if (!product.discount) {
    errors.discount = "Require discount";
  }

  return errors;
}


export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: 0,
    category: "",
    stock: 0,
    discount: 0,
    term: 0,
  });
  
  const [errors, setErrors] = useState({});

  function onInputChange(e) {
    e.preventDefault();
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...product,
        [e.target.name]: e.target.value,
      })
    );
  }

  function onBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  function onSubmit(e) {
    e.preventDefault();
      dispatch(postProduct(product));
      alert("¡Felicidades! Tu producto ha sido publicado");
      setProduct({
        name: "",
        image: "",
        price: 0,
        category: "",
        stock: 0,
        discount: 0,
        term: 0,
      });
      setErrors({});
      navigate("/");
}

  return (
    <div class="container-fluid mt-4">
      <div class="card">
        <div class="card-body">
          <form className={s.formCont} onSubmit={(e) => onSubmit(e)}>
            <img
              src={
                product.image
                  ? product.image
                  : "https://thumbs.dreamstime.com/b/icono-linear-del-nuevo-producto-concepto-moderno-logotipo-esquema-133525840.jpg"
              }
              className={s.image}
              alt="new-product"
            />
            <div className={s.divText}>
              <div>
                <h1>Nuevo producto</h1>
                <div className={s.posInputs}>
                  <div className={s.subPosInputs}>
                    <div className={s.labelInput}>
                      <label>Nombre del producto *</label>
                      <input
                        className={errors.name ? `${s.inputError} form-control` : `form-control`}
                        onChange={onInputChange}
                        value={product.name}
                        type="text"
                        name="name"
                        placeholder="FunkoPop 2022"
                      />
                    </div>
                    <div className={s.labelInput}>
                      <label>URL de la imagen *</label>
                      <input
                        className={errors.image ? `${s.inputError} form-control` : "form-control"}
                        onChange={onInputChange}
                        value={product.image}
                        type="url"
                        name="image"
                        placeholder="https://.png"
                      />
                    </div>
                    <div className={s.labelInput}>
                      <label>Precio *</label>
                      <input
                        className={errors.price ? `${s.inputError} form-control` : "form-control"}
                        onChange={onInputChange}
                        value={product.price}
                        type="number"
                        name="price"
                        placeholder="2500"
                      />
                    </div>
                    <div className={s.labelInput}>
                    <label>Cuotas s/interés *</label>
                    <input
                      className={errors.term ? `${s.inputError} form-control` : "form-control"}
                      onChange={onInputChange}
                      value={product.term}
                      type="number"
                      name="term"
                      placeholder="12"
                    />
                  </div>
                  </div>
                  <div className={s.subPosInputs}>
                    <div className={s.labelInput}>
                      <label>Categoria *</label>
                      <input
                        className={errors.category ? `${s.inputError} form-control` : "form-control"}
                        onChange={onInputChange}
                        value={product.category}
                        type="text"
                        name="category"
                        placeholder="Funko"
                      />
                    </div>
                    <div className={s.labelInput}>
                      <label>Cantidad disponible *</label>
                      <input
                        className={errors.stock ? `${s.inputError} form-control` : "form-control"}
                        onChange={onInputChange}
                        value={product.stock}
                        type="number"
                        name="stock"
                        placeholder="22"
                      />
                    </div>
                    <div className={s.labelInput}>
                      <label>Descuento (%) *</label>
                      <input
                        className={errors.discount ? `${s.inputError} form-control` : "form-control"}
                        onChange={onInputChange}
                        value={product.discount}
                        type="number"
                        name="discount"
                        placeholder="0 - 100"
                      />
                    </div>
                    <div style={{marginTop: "25px", marginLeft: "18%", display: "flex", justifyContent: "end", gap: "10px", width: "max-content"}}>
                    <button onClick={(e) => onBack(e)} className={`${s.btn} btn btn-light`}>
                      Volver
                    </button>
                    <button
                      type="submit"
                      className={`${s.btn} btn btn-primary`}
                      > 
                      Guardar
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
