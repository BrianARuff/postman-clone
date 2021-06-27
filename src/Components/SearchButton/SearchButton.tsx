import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchButton } from "../../content.json";
import { useState } from "react";
import ReactJson from "react-json-view";
import { mapAxiosRequest } from "../../utilities/mapAxiosRequest";
import { Tooltip } from "@material-ui/core";

function SearchButton(props: any) {
  const { queryType, searchAddress, jsonData } = props;
  const { jsonData: json } = jsonData;
  const [response, setResponse] = useState({
    responseData: {},
  });
  const handleHttpCall = () => {
    return mapAxiosRequest(queryType, searchAddress, json, setResponse);
  };

  return (
    <>
      <Tooltip title="Click to send request">
        <button onClick={handleHttpCall}>{searchButton.text}</button>
      </Tooltip>
      <ReactJson src={response} theme={"bright:inverted"} />
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    jsonData: state.JSONDataReducer.jsonData,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
