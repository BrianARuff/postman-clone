import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setKeyValueToTotal } from "../../redux/actions/setKeyValueToTotal";
import { setQueryParamsId } from "../../redux/actions/setQueryParamsId";
import { setSearchItem } from "../../redux/actions/setSearchItem";

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
    return (
      <>
        <button
          style={{ margin: "1.6rem 0" }}
          onClick={this.handleSetKeyValueToTotal}
        >
          Add Params
        </button>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    keyValue: state.queryParamReducer.keyValue,
    value: state.queryParamReducer.value,
    total: state.queryParamReducer.total,
    searchAddress: state.searchReducer.searchAddress,
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
