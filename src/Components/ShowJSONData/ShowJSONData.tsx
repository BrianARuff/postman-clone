import { Typography } from "@material-ui/core";
import { connect } from "react-redux";

function ShowJSONData(props: any) {
  const { jsonData } = props;
  return <Typography variant="body1">{jsonData}</Typography>;
}

const mapStateToProps = (state: any) => {
  return {
    jsonData: state.JSONDataReducer.jsonData,
  };
};

export default connect(mapStateToProps, null)(ShowJSONData);
