import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteParamPair } from "../../redux/actions/deleteParamPair";

function InputField(props: any) {
  const handleDeleteParamPair = (e: any) => {
    e.preventDefault();
    const { id, deleteParamPair } = props;
    deleteParamPair(id + 1);
  };
  return (
    <div>
      <input
        onChange={props.handleSetQueryParamsKey}
        type="text"
        placeholder="key"
        name="keyValue"
      />
      <input
        onChange={props.handleSetQueryParamsValue}
        type="text"
        placeholder="value"
        name="value"
      />
      <button onClick={handleDeleteParamPair}>Delete</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      deleteParamPair,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(InputField);
