import * as React from "react";
import HeroImage from "../HeroImage/HeroImage";
import MainHeader from "../MainHeader/MainHeader";
import QueryParams from "../QueryParams/QueryParams";
import SearchContainer from "../SearchContainer/SearchContainer";
import SetParams from "../SetParams/SetParam";
import "./App.css";
import { APP_PAGE_MAIN_CONTAINER } from "../../../cypress/types";

function App() {
  return (
    <div
      data-testid={APP_PAGE_MAIN_CONTAINER}
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <HeroImage
        src={process.env.PUBLIC_URL + "/postman-logo+text-320x132.png"}
      />
      <MainHeader />
      <SearchContainer />
      <QueryParams />
      <SetParams />
    </div>
  );
}

export default App;
