import { searchAddress } from "../../content.json";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSearchItem } from "../../redux/actions/setSearchItem";

function SearchAddress(props: any) {
  const handleSetAddress = (e: any) => {
    const { setSearchItem } = props;
    setSearchItem({ address: e.target.value });
  };
  return (
    <input
      type="search"
      name="address"
      placeholder={searchAddress.placehoder}
      onChange={handleSetAddress}
    />
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setSearchItem,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SearchAddress);
