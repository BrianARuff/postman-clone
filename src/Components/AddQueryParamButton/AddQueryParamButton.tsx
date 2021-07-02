import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setKeyValueToTotal } from "../../redux/actions/setKeyValueToTotal";
import { setQueryParamsId } from "../../redux/actions/setQueryParamsId";
import { setSearchItem } from "../../redux/actions/setSearchItem";
import { addQueryParamButton } from "../.../../../content.json";
import { ADD_QUERY_PARAM_BUTTON_COMPONENT_BUTTON } from "../../cypressTypes/types";
import "./AddQueryParamButton.css";
import { Tooltip } from "@material-ui/core";

interface Props {
  setKeyValueToTotal: any;
  setId: any;
  id: number;
  setQueryParamsId: any;
  handleSetQueryParamsKey: any;
  handleSetQueryParamsValue: any;
}

class AddQueryParamButton extends React.Component<Props> {
  handleSetKeyValueToTotal = () => {
    let {
      setKeyValueToTotal,
      setId,
      id,
      setQueryParamsId,
      handleSetQueryParamsKey,
      handleSetQueryParamsValue,
    } = this.props;
    handleSetQueryParamsKey();
    handleSetQueryParamsValue();
    setQueryParamsId({ id });
    setId(id + 1);
    setKeyValueToTotal();
  };

  render() {
    const { buttonText } = addQueryParamButton;
    return (
      <Tooltip title="Click to add params to list of params">
        <button
          data-testid={ADD_QUERY_PARAM_BUTTON_COMPONENT_BUTTON}
          onClick={this.handleSetKeyValueToTotal}
        >
          {buttonText}
        </button>
      </Tooltip>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    keyValue: state.queryParamReducer.keyValue,
    value: state.queryParamReducer.value,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setKeyValueToTotal,
      setQueryParamsId,
      setSearchItem,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQueryParamButton);
