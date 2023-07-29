// libraries
import {useEffect} from "react";
import AOS from "aos"; // https://github.com/michalsnik/aos/tree/v2
import 'aos/dist/aos.css';

// styles
import "./faireParts.scss";

// assets
import faireParts from "../../../assets/faire-parts_V01.png";
import flower1 from "../../../assets/flower1.png";
import flower3 from "../../../assets/flower3.png";

export default function FaireParts() {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
        AOS.refresh();

    }, []);
  return (
    <main className={"main"} id={"faire_parts"}>
      <figure className={"fairePartsWrapper"} data-aos="flip-up">
        <a
          className={"fairePartsWrapper__link"}
          href={faireParts}
          target={"_blank"}
          title={"Télécharger"}
        >
          <img
            className={"fairePartsWrapper__link__img"}
            src={faireParts}
            alt={"faire-parts"}
          />
        </a>
      </figure>
      <figure className={"FlowerWrapper"}>
        <img className={"FlowerWrapper__img"} src={flower3} alt={"Flower"} />
      </figure>
      <figure className={"FlowerWrapper2"}>
        <img className={"FlowerWrapper__img2"} src={flower1} alt={"Flower"} />
      </figure>
    </main>
  );
}
