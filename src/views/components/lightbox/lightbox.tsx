// styles
import "./lightbox.scss";

interface LightboxProps {
  media: string;
  onClose: () => void;
}

export default function Lightbox({ media, onClose }: LightboxProps) {
  return (
    <>
      <section className={"Lightbox"}>
        <figure className={"lightBox__mediaWrapper"}>
          <img
            className={"lightBox__mediaWrapper__img"}
            src={media}
            alt={"selected media"}
            onClick={onClose}
          />
        </figure>
      </section>
    </>
  );
}
