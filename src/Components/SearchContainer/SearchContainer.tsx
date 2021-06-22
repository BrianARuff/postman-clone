import DropDownMenu from "../DropdownMenu/DropDownMenu";
import SearchAddress from "../SearchAddress/SearchAddress";
import SearchButton from "../SearchButton/SearchButton";
import content from "../../content.json";

function SearchContainer() {
  const { searchContainer } = content;
  const { header } = searchContainer;
  return (
    <div style={{ textAlign: "center", marginTop: "1.6rem" }}>
      <h4>{header}</h4>
      <DropDownMenu />
      <SearchAddress />
      <SearchButton />
    </div>
  );
}

export default SearchContainer;
