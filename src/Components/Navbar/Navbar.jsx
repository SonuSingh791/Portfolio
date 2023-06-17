import React, {useContext} from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Sonu</div>
        <Toggle />
      </div>
      {/* middle */}
      <div className="n-middle">
      <div className="n-list" >
          <ul style={{ listStyleType: "none" }}>
            <li >
              <Link style={{ color: darkMode ? "white" : "" }} activeClass="active" to="Intro" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link style={{ color: darkMode ? "white" : "" }} to="services" spy={true} smooth={true} >
                Skills
              </Link>
            </li>
            <li>
              <Link style={{ color: darkMode ? "white" : "" }} to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link style={{ color: darkMode ? "white" : "" }} to="portfolio" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link style={{ color: darkMode ? "white" : "" }} to="testimonial" spy={true} smooth={true}>
              Achievements
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* right */}
      <div className="n-right">
        
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;