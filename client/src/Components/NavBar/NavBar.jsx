import React from "react";

export default function NavBar() {
  return (
    <nav id="header" class="navbar navbar-expand-sm bg-light navbar-light">
      <a class="navbar-brand" href="http://localhost:3000/">
        <img
          src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg"
          alt="logo"
        />
      </a>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="./form.html">
            Catálogo
          </a>
        </li>
      </ul>
    </nav>
  );
}
