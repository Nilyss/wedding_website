import "./navigation.scss";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation__itemWrapper">
          <li className="navigation__itemWrapper__item">
            <Link to={"/accueil"} className="navigation__itemWrapper__item__link">
              Accueil
            </Link>
          </li>
          <li className="navigation__itemWrapper__item">
            <Link to={"/galerie"} className="navigation__itemWrapper__item__link">
              Galerie
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
