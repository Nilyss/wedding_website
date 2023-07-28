import "./faireParts.scss";
import faireParts from "../../../assets/faire-parts_V01.png";
import flower1 from "../../../assets/flower1.png";

export default function FaireParts() {
  return (
    <main className={"main"} id={"faire_parts"}>
      <figure className={"fairePartsWrapper"}>
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
        <img className={"FlowerWrapper__img"} src={flower1} alt={"Flower"} />
      </figure>
      <figure className={"FlowerWrapper2"}>
        <img className={"FlowerWrapper__img2"} src={flower1} alt={"Flower"} />
      </figure>
    </main>
  );
}
