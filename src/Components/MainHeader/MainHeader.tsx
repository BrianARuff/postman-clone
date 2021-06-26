import content from "../../content.json";
import "./MainHeader.css";

export default function MainHeader() {
  const { mainHeader } = content;
  return <h1 className={"main-header"}>{mainHeader}</h1>;
}
