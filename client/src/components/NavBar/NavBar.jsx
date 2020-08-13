import React, { useEffect } from "react";
import "./NavBar.css";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, []);

  const background =
    location.pathname === "/"
      ? "#ffffff"
      : "linear-gradient(-45deg, #bb4927, #a71d52, #039be5, #1a9d4e)";

  const color = location.pathname === "/" ? "#039be5" : "#ffffff";

  return (
    <Navbar
      alignLinks="right"
      brand={
        <NavLink to="/" className="brand-logo" style={{color}}>
          Jonathan J. Watson
        </NavLink>
      }
      menuIcon={<FontAwesomeIcon icon={faBars}>Menu</FontAwesomeIcon>}
      id="mobile-nav"
      options={{
        draggable: true,
        edge: "right",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
      style={{ background }}
    >
      <NavItem href="/about" style={{color}}>About</NavItem>
      <NavItem href="/portfolio" style={{color}}>Portfolio</NavItem>
      <NavItem href="/contact" style={{color}}>Contact</NavItem>
    </Navbar>
  );
};

export default NavBar;
