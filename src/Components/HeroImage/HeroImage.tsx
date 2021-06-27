import "./HeroImage.css";
import { HERO_IMAGE_COMPONENT_IMAGE } from "../../cypressTypes/types";

export default function HeroImage(props: { src: string }) {
  const { src } = props;
  return (
    <img
      data-testid={HERO_IMAGE_COMPONENT_IMAGE}
      className="img-align-center"
      alt="Hero"
      src={src}
    ></img>
  );
}
