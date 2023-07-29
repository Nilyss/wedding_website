// librairies
import {useEffect} from "react";
import { Link } from "react-router-dom";
import AOS from 'aos' // https://github.com/michalsnik/aos/tree/v2
import 'aos/dist/aos.css';

// styles
import "./navigation.scss";

// assets
import separator from "../../../assets/separator.png";


export default function Navigation() {


  return (
    <>
      <nav className="navigation" data-aos="slide-right">
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
