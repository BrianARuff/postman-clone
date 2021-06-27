import "./HeroImage.css";

export default function HeroImage(props: { src: string }) {
  const { src } = props;
  return <img className="img-align-center" alt="Hero" src={src}></img>;
}
