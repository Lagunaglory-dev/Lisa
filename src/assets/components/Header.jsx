import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="playwrite-tz-guides-regular">Lisa</h1>
      <nav>
        <ul className="header-nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="aboutme">A propos de moi</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
