// libraries
import { useEffect, useState } from "react";
import AOS from "aos"; // https://github.com/michalsnik/aos/tree/v2
import "aos/dist/aos.css";

// styles
import "./galerie.scss";

// images & videos
import getImages from "../../../generated/images.js";
import getVideos from "../../../generated/videos.js";
import flower1 from "../../../assets/flower1.png";
import flower3 from "../../../assets/flower3.png";

// components
import Lightbox from "../../components/lightbox/lightbox";

export default function Galerie() {
  const images = getImages;
  const videos = getVideos;
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
    AOS.refresh();
  }, []);

  const [isPhotoSection, setIsPhotoSection] = useState<boolean>(true);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const toggleSection = () => {
    if (isPhotoSection) setIsPhotoSection(false);
    else setIsPhotoSection(true);
  };
  const selectMedia = (media: string) => {
    setSelectedMedia(media);
  };

  let isActive: boolean = true;

  return (
    <main className={"main"}>
      {isActive ? (
        <>
          <h2>Revivez ce jour avec nous !</h2>
          <blockquote>
            Si vous avez des photos ou vidéos en votre possession, merci de les
            envoyer en cliquant{" "}
            <a href={"mailto:decressac.nicolas@gmail.com"}>ici</a> pour les
            envoyer par mail,
          </blockquote>
          <blockquote>
            Ou{" "}
            <a href={"https://wa.me/0695593754"} target={"_blank"}>
              ici
            </a>{" "}
            pour les envoyer par WhatsApp !
          </blockquote>
          <nav>
            <div className={"buttonWrapper"}>
              <button className={isPhotoSection ? ("buttonStyle--active") : ("buttonStyle")} onClick={toggleSection}>
                Voir les photos
              </button>
            </div>
            <div className={"buttonWrapper"}>
              <button className={isPhotoSection ? ("buttonStyle") : ("buttonStyle--active")} onClick={toggleSection}>
                Voir les videos
              </button>
            </div>
          </nav>
          <ul className={"listContainer"}>
            {isPhotoSection
              ? images.map((image: any, index: number) => (
                  <li
                    className={"listContainer__item"}
                    key={index}
                    data-aos="flip-up"
                    onClick={() => selectMedia(image)}
                  >
                    <figure className={"listContainer__item__imgWrapper"}>
                      <img
                        className={"listContainer__item__imgWrapper__img"}
                        src={image}
                        alt={image}
                      />
                    </figure>
                  </li>
                ))
              : videos.map((video: any, index: number) => (
                  <li
                    className={"listContainer__item"}
                    key={index}
                    data-aos="flip-up"
                  >
                    <video
                      className={"listContainer__item__videoWrapper"}
                      controls={true}
                    >
                      <source
                        className={"listContainer__item__videoWrapper__video"}
                        src={video}
                        type={"video/mp4"}
                      />
                    </video>
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
