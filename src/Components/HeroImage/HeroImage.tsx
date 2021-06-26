export default function HeroImage(props: { src: string }) {
  const { src } = props;
  return <img style={{ textAlign: "center" }} alt="Hero" src={src}></img>;
}
