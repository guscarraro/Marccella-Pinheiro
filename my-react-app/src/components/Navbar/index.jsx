import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import logoMar from "../../images/logoMar.svg";
import logoNome from "../../images/NomeLogo.svg";

function NavbarPC(args) {
  return (
    <div>
      <Navbar className="my-2" color="dark" dark fixed="top">
        <NavbarBrand
          href="/"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            alt="logo veterinaria"
            src={logoMar}
            style={{
              height: 50,
              width: 50,
            }}
          />
          <img
            alt="logo Nome"
            src={logoNome}
            style={{
              width: 200,
            }}
          />
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavbarPC;
