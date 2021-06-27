import * as React from "react";
import HeroImage from "../HeroImage/HeroImage";
import MainHeader from "../MainHeader/MainHeader";
import QueryParams from "../QueryParams/QueryParams";
import SearchContainer from "../SearchContainer/SearchContainer";
import SetParams from "../SetParamsButton/SetParamsButton";
import JSONTextArea from "../JSONTextArea/JSONTextArea";
import "./App.css";
import { APP_COMPONENT_MAIN_CONTAINER } from "../../cypressTypes/types";

function App() {
  return (
    <div data-testid={APP_COMPONENT_MAIN_CONTAINER} className={"app-container"}>
      <HeroImage
        src={process.env.PUBLIC_URL + "/postman-logo+text-320x132.png"}
      />
      <MainHeader />
      <SearchContainer />
      <QueryParams />
      <SetParams />
      <JSONTextArea />
    </div>
  );
}

export default App;
