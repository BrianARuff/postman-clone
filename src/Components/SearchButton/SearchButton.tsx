import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchButton } from "../../content.json";
import { useState } from "react";
import ReactJson from "react-json-view";
import { mapAxiosRequest } from "../../utilities/mapAxiosRequest";
import { Button, Tooltip } from "@material-ui/core";

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
      <Tooltip style={{ margin: "1rem" }} title="Click to send request">
        <Button color="primary" variant="contained" onClick={handleHttpCall}>
          {searchButton.text}
        </Button>
      </Tooltip>
      <Tooltip title="Request Response">
        <ReactJson
          style={{ margin: "1rem" }}
          src={response}
          theme={"bright:inverted"}
        />
      </Tooltip>
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
