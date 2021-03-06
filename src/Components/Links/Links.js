import "./Links.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const Links = () => {
  const [hamburger, setHamburger] = useState("false");
  const [burger, setBurger] = useState("false");

  const toggleClass = () => {
    setHamburger(!hamburger);
    setBurger(!burger);
  };
  return (
    <div className="sidebar">
      <a className="logo" href="/React-Portfolio">
        <p className="my-name">Julia Machin</p>
      </a>
      <nav className={hamburger ? "hamburger" : "menu"}>
        <div onClick={toggleClass} className="ham">
          <span className="topBun"></span>
          <span className="patty"></span>
          <span className="bottomBun"></span>
        </div>
        <div className={burger ? "burger" : "navMenu"}>
          <NavLink
            exact="true"
            activeclassname="active"
            className="item"
            to="/React-Portfolio"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            <p className="p">HOME</p>
          </NavLink>
          <br />
          <NavLink activeclassname="active" className="item" to="/React-Portfolio/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            <p className="p">ABOUT</p>
          </NavLink>
          <br />
          <NavLink activeclassname="active" className="item" to="/React-Portfolio/portfolio">
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            <p className="p">PORTFOLIO</p>
          </NavLink>
          <br />
          <NavLink activeclassname="active" className="item" to="/React-Portfolio/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            <p className="p">CONTACT</p>
          </NavLink>
        </div>
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/juliamachin/"
            target="_blank"
            rel="noreferrer"
            className="a"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/juliamachin"
            target="_blank"
            rel="noreferrer"
            className="a"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
