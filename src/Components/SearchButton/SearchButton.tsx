import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchButton } from "../../content.json";
import { useState } from "react";
import ReactJson from "react-json-view";
import { mapAxiosRequest } from "../../utilities/mapAxiosRequest";

function SearchButton(props: any) {
  const { queryType, searchAddress } = props;
  const [response, setResponse] = useState({
    responseData: {},
  });
  const handleHttpCall = () => {
    console.log(props.searchAddress);
    return mapAxiosRequest(queryType, searchAddress, {}, setResponse);
  };

  return (
    <>
      <button style={{ marginBottom: "20px" }} onClick={handleHttpCall}>
        {searchButton.text}
      </button>
      <ReactJson src={response} theme={"bright:inverted"} />
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchButton);
