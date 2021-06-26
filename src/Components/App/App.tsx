import * as React from "react";
import MainHeader from "../MainHeader/MainHeader";
import QueryParams from "../QueryParams/QueryParams";
import SearchContainer from "../SearchContainer/SearchContainer";
import "./App.css";

function App() {
  return (
    <>
      <MainHeader />
      <SearchContainer />
      <QueryParams />
    </>
  );
}

export default App;
