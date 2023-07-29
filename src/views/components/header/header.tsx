// librairies
import {useEffect} from "react";
import { Link } from "react-router-dom";
import AOS from 'aos' // https://github.com/michalsnik/aos/tree/v2
import 'aos/dist/aos.css';

// styles
import "./header.scss";


// assets
import brandingLogo from "../../../assets/logo.png";

export default function Header() {

    useEffect(() => {
        AOS.init({
            duration: 1300,
        });
        AOS.refresh();

    }, []);


  return (
    <header className={"header"}>
      <figure className={"header__logoWrapper"} data-aos="slide-down">
        <Link to={"/accueil"} className={"header__logoWrapper__goToHome"}>
          <img
            className={"header__logoWrapper__goToHome__img"}
            src={brandingLogo}
            alt="logo"
          />
        </Link>
      </figure>
      <div className={"header__titleWrapper"}>
        <h1 className={"header__titleWrapper__title"}>Melissa & Nicolas</h1>
        <blockquote className={"header__titleWrapper__blockquote"}>Oui, le 07 octobre 2023</blockquote>
      </div>
    </header>
  );
}
