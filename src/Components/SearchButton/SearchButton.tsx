import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchButton } from "../../content.json";
import { useState } from "react";
import { mapAxiosRequest } from "../../utilities/mapAxiosRequest";
import { Button, Tooltip } from "@material-ui/core";
import JSONViewer from "../JSONViewer/JSONViewer";

function SearchButton(props: any) {
  const { queryType, searchAddress, jsonData } = props;
  const [response, setResponse] = useState({
    responseData: {},
  });
  const handleHttpCall = () => {
    return mapAxiosRequest(queryType, searchAddress, jsonData, setResponse);
  };

  return (
    <>
      <Tooltip style={{ margin: "1rem" }} title="Click to send request">
        <Button color="primary" variant="contained" onClick={handleHttpCall}>
          {searchButton.text}
        </Button>
      </Tooltip>
      <Tooltip title="Request Response">
        <JSONViewer response={response} />
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
