import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteParamPair } from "../../redux/actions/deleteParamPair";
import content from "../../content.json";
import { TextField, Button } from "@material-ui/core";
import {
  INPUT_FIELD_COMPONENT_FORM,
  INPUT_FIELD_COMPONENT_KEY_VALUE_INPUT,
  INPUT_FIELD_COMPONENT_VALUE_INPUT,
} from "../../cypressTypes/types";
import "./InputField.css";

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
      className="container input-field-form"
      data-testid={INPUT_FIELD_COMPONENT_FORM}
    >
      <TextField
        disabled
        className="text-field"
        value={valueValue}
        type="text"
        name="keyValue"
        placeholder={valueValue}
        data-testid={INPUT_FIELD_COMPONENT_KEY_VALUE_INPUT}
      />
      <TextField
        className="text-field"
        disabled
        value={keyValue}
        type="text"
        placeholder={keyValue}
        name="value"
        data-testid={INPUT_FIELD_COMPONENT_VALUE_INPUT}
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
