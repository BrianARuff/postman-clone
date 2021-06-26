import * as React from "react";
import HeroImage from "../HeroImage/HeroImage";
import MainHeader from "../MainHeader/MainHeader";
import QueryParams from "../QueryParams/QueryParams";
import SearchContainer from "../SearchContainer/SearchContainer";
import "./App.css";

function App() {
  return (
    <div
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
    </div>
  );
}

export default App;
