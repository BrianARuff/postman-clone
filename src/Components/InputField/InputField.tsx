import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteParamPair } from "../../redux/actions/deleteParamPair";

function InputField(props: any) {
  const { id, deleteParamPair, valueValue, keyValue } = props;
  const handleDeleteParamPair = (e: any) => {
    e.preventDefault();
    deleteParamPair(id);
  };
  return (
    <div>
      <input value={valueValue} type="text" placeholder="key" name="keyValue" />
      <input value={keyValue} type="text" placeholder="value" name="value" />
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
