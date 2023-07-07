import "./Nav.css";
import { useState } from "react";

const Navigation = ({ page, setPage }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    console.log('Menu toggled');
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="nav">
      <img src="./pics/campinggreen.jpg" width="30" height="30" alt="Our logo"></img>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line"></span>
        <span className="menu-icon__line"></span>
      </div>
      <section>
        <ul className={menuOpen ? "menu-list menu-list--active" : "menu-list"}>
          <li onClick={() => setPage("home")}>
            <a href="/home" onClick={(event) => event.preventDefault()}>
              Home Page
            </a>
          </li>

          <li onClick={() => setPage("nationalParks")}>
            <a
              href="/nationalParks"
              onClick={(event) => event.preventDefault()}
            >
              National Parks
            </a>
          </li>

          <li onClick={() => setPage("mountains")}>
            <a href="/mountains" onClick={(event) => event.preventDefault()}>
              Mountains Information
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};
export default Navigation;
