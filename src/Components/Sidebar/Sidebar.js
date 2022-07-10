import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { slide as Menu } from 'react-burger-menu'

const Sidebar = () => {
    
  return (
    <div className="sidebar">
      <Link className="logo" to="/">
        <img src="/assets/images/Icon.png" className="compass-icon" />
        <p className="my-name">Julia Machin</p>
      </Link>
      <Menu>
        <NavLink
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          <p className="p">HOME</p>
        </NavLink>
        <br />
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          <p className="p">ABOUT</p>
        </NavLink>
        <br />
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          <p className="p">PORTFOLIO</p>
        </NavLink>
        <br />
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          <p className="p">CONTACT</p>
        </NavLink>
      </Menu>
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          className="link"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          <p className="item">HOME</p>
        </NavLink>
        <br />
        <NavLink activeclassname="active" className="link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          <p className="item">ABOUT</p>
        </NavLink>
        <br />
        <NavLink
          activeclassname="active"
          className="link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" className="link"/>
          <p className="item">PORTFOLIO</p>
        </NavLink>
        <br />
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" className="link"/>
          <p className="item">CONTACT</p>
        </NavLink>
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

export default Sidebar;
