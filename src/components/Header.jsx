import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../assets/css/header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="site-identity">
        <Link to="#">
          <img src={logo} alt="Yu Gi Oh" />
        </Link>
        <h1>
          <Link to="/">Yu Gi Oh</Link>
        </h1>
      </div>
      <nav className="site-navigation">
        <ul className="nav">
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;