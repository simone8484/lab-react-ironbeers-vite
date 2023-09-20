import { Link } from "react-router-dom";
import { useContext } from "react"; // <== ADD
import { ThemeContext } from "../context/theme.context"; // <== ADD

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/">
          <img className="iconHome" src="src/assets/home-icon.png"></img>
        </Link>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "dark " : "light "}
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
