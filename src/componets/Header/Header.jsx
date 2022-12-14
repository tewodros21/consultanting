import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { AiOutlinePhone } from "react-icons/ai";
//import logo from '../../assets/images/sunlog11.ico'
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center">
              <i class="ri-pantone-line"></i>Sunrise
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu">
              <ul className="nav__list">
                <Link to="/" className="nav__item">
                  Home
                </Link>
                <Link to="about" className="nav__item">
                  About
                </Link>
                <Link to="/" className="nav__item">
                  Register
                </Link>
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <AiOutlinePhone /> +251095674
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
