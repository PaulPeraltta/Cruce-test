import React from 'react'

export default function Catalog() {
  return (
<div class="container-fluid mt-4">
  <div class="card">
    <div class="card-body">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="form.html">Producto 1</a></td>
            <td>$ 100,00</td>
            <td class="text-right">
              <a href="form.html" class="btn"><i class="fa fa-eye"></i></a>
              <a href="form.html" class="btn"><i class="fa fa-pencil"></i></a>
              <button type="button" class="btn"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td><a href="form.html">Producto 1</a></td>
            <td>$ 100,00</td>
            <td class="text-right">
              <a href="form.html" class="btn"><i class="fa fa-eye"></i></a>
              <a href="form.html" class="btn"><i class="fa fa-pencil"></i></a>
              <button type="button" class="btn"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td><a href="form.html">Producto 1</a></td>
            <td>$ 100,00</td>
            <td class="text-right">
              <a href="form.html" class="btn"><i class="fa fa-eye"></i></a>
              <a href="form.html" class="btn"><i class="fa fa-pencil"></i></a>
              <button type="button" class="btn"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}
