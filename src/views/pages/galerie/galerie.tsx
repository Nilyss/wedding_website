// libraries
import { useEffect, useState } from "react";
import AOS from "aos"; // https://github.com/michalsnik/aos/tree/v2
import "aos/dist/aos.css";

// styles
import "./galerie.scss";

// images
import getImages from "../../../generated/images.js";
import flower1 from "../../../assets/flower1.png";
import flower3 from "../../../assets/flower3.png";

// components
import Lightbox from "../../components/lightbox/lightbox";

export default function Galerie() {
  const images = getImages;

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
    AOS.refresh();
  }, []);

  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const handleClick = (media: string) => {
    setSelectedMedia(media);
  };

  let isActive: boolean = true;

  return (
    <main className={"main"}>
      {isActive ? (
        <>
          <h2>Revivez ce jour avec nous !</h2>
          <blockquote>Si vous avez des photos ou vidéos en votre possession, merci de les envoyer en cliquant <a href={"mailto:decressac.nicolas@gmail.com"}>ici</a> pour les envoyer par mail,</blockquote>
          <blockquote>Ou <a href={"https://wa.me/0695593754"} target={"_blank"}>ici</a> pour les envoyer par WhatsApp ! </blockquote>

          <ul className={"listContainer"} data-aos="slide-up">
            {images.map((image: any, index: number) => (
              <li
                className={"listContainer__item"}
                key={index}
                data-aos="flip-up"
                onClick={() => handleClick(image)}
              >
                <figure className={"listContainer__item__imgWrapper"}>
                  <img
                    className={"listContainer__item__imgWrapper__img"}
                    src={image}
                    alt={image}
                  />
                </figure>
              </li>
            ))}
          </ul>
          <figure className={"FlowerWrapper"}>
            <img
              className={"FlowerWrapper__img"}
              src={flower3}
              alt={"Flower"}
            />
          </figure>
          <figure className={"FlowerWrapper2"}>
            <img
              className={"FlowerWrapper__img2"}
              src={flower1}
              alt={"Flower"}
            />
          </figure>
          {selectedMedia && (
              <Lightbox
                  media={selectedMedia}
                  onClose={() => setSelectedMedia(null)}
              />
          )}
        </>
      ) : (
        <>
          <h2>Galerie à venir !</h2>
        </>
      )}
    </main>
  );
}
