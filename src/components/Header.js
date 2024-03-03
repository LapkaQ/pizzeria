import "./Header.css";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink className="NavLinkClass" to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLinkClass" to="/cart">
            Koszyk
          </NavLink>
        </li>
        <li>
          <NavLink className="NavLinkClass" to="/contact">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
