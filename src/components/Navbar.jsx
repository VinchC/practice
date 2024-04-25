import { useNavigate } from "react-router-dom";
import "../assets/css/navbar.css";
import { useTheme } from "../contexts/theme";

function Navbar() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const navigate = useNavigate();

  return (
    <nav className={theme}>
      <h1 onClick={() => navigate("/")}>React context</h1>
      <label id="switch" className="switch">
        <input onClick={toggleMode} type="checkbox" id="slider" />
        <span className="slider round"></span>
      </label>
    </nav>
  );
}

export default Navbar;
