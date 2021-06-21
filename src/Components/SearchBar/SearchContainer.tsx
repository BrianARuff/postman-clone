import React from "react";
import DropDownMenu from "../DropdownMenu/DropDownMenu";
import SearchAddress from "../SearchAddress/SearchAddress";
import SearchButton from "../SearchButton/SearchButton";

function SearchContainer() {
  return (
    <>
      <DropDownMenu />
      <SearchAddress />
      <SearchButton />
    </>
  );
}

export default SearchContainer;
