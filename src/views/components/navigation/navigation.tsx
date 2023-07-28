import "./navigation.scss";
import { Link } from "react-router-dom";
import separator from "../../../assets/separator.png";

export default function Navigation() {
  return (
    <>
      <nav className="navigation">
        <figure className={"separatorWrapper"}>
          <img
              className={"separatorWrapper__img"}
              src={separator}
              alt="separator"
          />
        </figure>
        <ul className="navigation__itemWrapper">
          <li className="navigation__itemWrapper__item">
            <Link
              to={"/accueil"}
              className="navigation__itemWrapper__item__link"
            >
              Accueil
            </Link>
          </li>
          <li className="navigation__itemWrapper__item">
            <Link
              to={"/galerie"}
              className="navigation__itemWrapper__item__link"
            >
              Galerie
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
