import "./faireParts.scss";
import faireParts from "../../../assets/faire-parts_V01.png";

export default function FaireParts() {
  return (
    <main className={"main"} id={"faire_parts"}>
      <figure className={"fairePartsWrapper"}>
        <a
          className={"fairePartsWrapper__link"}
          href={"https://i.imgur.com/gBR8H2N.png"}
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
    </main>
  );
}