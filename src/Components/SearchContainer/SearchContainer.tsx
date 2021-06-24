import DropDownMenu from "../DropdownMenu/DropDownMenu";
import SearchAddress from "../SearchAddress/SearchAddress";
import SearchButton from "../SearchButton/SearchButton";
import content from "../../content.json";
import { connect } from "react-redux";

function SearchContainer(props: any) {
  const { queryType, searchAddress } = props;
  const { searchContainer } = content;
  const { header } = searchContainer;
  return (
    <div style={{ textAlign: "center", marginTop: "1.6rem" }}>
      <h4>{header}</h4>
      <DropDownMenu />
      <SearchAddress />
      <SearchButton queryType={queryType} searchAddress={searchAddress} />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    queryType: state.searchReducer.queryType,
    searchAddress: state.searchReducer.searchAddress,
  };
};

export default connect(mapStateToProps)(SearchContainer);
