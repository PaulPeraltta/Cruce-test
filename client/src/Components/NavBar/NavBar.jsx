import React from "react";

export default function NavBar() {
  return (
    <nav id="header" className="navbar navbar-expand-sm bg-light navbar-light">
      <a className="navbar-brand" href="http://localhost:3000/">
        <img
          src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg"
          alt="logo"
        />
      </a>

      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/catalog">
            Catálogo
          </a>
        </li>
      </ul>
    </nav>
  );
}
