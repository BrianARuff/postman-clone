import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchButton } from "../../content.json";
import { setSearchItem } from "../../redux/actions/setSearchItem";

function SearchButton(props: any) {
  const handleSetAddress = (e: any) => {
    e.preventDefault();
    const { setSearchItem, address } = props;
    setSearchItem({ address: address });
  };
  return <button onClick={handleSetAddress}>{searchButton.text}</button>;
}

const mapStateToProps = (state: any) => {
  return {
    address: state.searchReducer.searchAddress,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setSearchItem,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
