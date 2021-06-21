import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setQueryParamsValue } from "../../redux/actions/setQueryParamsValue";
import { setQueryParamsKey } from "../../redux/actions/setQueryParamsKey";

function QueryParams(props: any) {
  const handleSetQueryParamsKey = (e: any) => {
    props.setQueryParamsKey({
      [e.target.name]: e.target.value,
    });
  };

  const handleSetQueryParamsValue = (e: any) => {
    props.setQueryParamsValue({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h4>Query Params</h4>
      <input
        onChange={handleSetQueryParamsKey}
        type="text"
        placeholder="key"
        name="key"
      />
      <input
        onChange={handleSetQueryParamsValue}
        type="text"
        placeholder="value"
        name="value"
      />
      <button>Add</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setQueryParamsValue,
      setQueryParamsKey,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(QueryParams);
