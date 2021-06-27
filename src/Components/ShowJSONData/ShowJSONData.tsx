import { connect } from "react-redux";

function ShowJSONData(props: any) {
  const { jsonData } = props;
  return (
    <div>
      <pre>{jsonData}</pre>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    jsonData: state.JSONDataReducer.jsonData,
  };
};

export default connect(mapStateToProps, null)(ShowJSONData);
