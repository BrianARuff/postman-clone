import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteParamPair } from "../../redux/actions/deleteParamPair";
import content from "../../content.json";
import { TextField, Button } from "@material-ui/core";

function InputField(props: any) {
  const { id, deleteParamPair, valueValue, keyValue } = props;
  const { inputField } = content;
  const { buttonText } = inputField;

  const handleDeleteParamPair = (e: any) => {
    e.preventDefault();
    deleteParamPair(id);
  };
  return (
    <form
      style={{
        border: "1px solid black",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "3px",
      }}
      className="container"
    >
      <TextField
        style={{ width: "300px", margin: "1rem" }}
        disabled
        value={valueValue}
        type="text"
        name="keyValue"
        placeholder={valueValue}
      />
      <TextField
        style={{ width: "300px", margin: "1rem" }}
        disabled
        value={keyValue}
        type="text"
        placeholder={keyValue}
        name="value"
      />
      <Button
        color="secondary"
        variant="contained"
        onClick={handleDeleteParamPair}
      >
        {buttonText}
      </Button>
    </form>
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
