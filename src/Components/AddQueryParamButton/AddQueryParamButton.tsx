import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setKeyValueToTotal } from "../../redux/actions/setKeyValueToTotal";
import { setQueryParamsId } from "../../redux/actions/setQueryParamsId";

function AddQueryParamButton(props: any) {
  const handleSetKeyValueToTotal = (e: any) => {
    const {
      setKeyValueToTotal,
      setId,
      id,
      setQueryParamsId,
      handleSetQueryParamsKey,
      handleSetQueryParamsValue,
    } = props;
    handleSetQueryParamsKey();
    handleSetQueryParamsValue();
    setQueryParamsId({ id });
    setId(id + 1);
    setKeyValueToTotal();
  };
  return (
    <>
      <button style={{ margin: "1.6rem 0" }} onClick={handleSetKeyValueToTotal}>
        Add Params
      </button>
    </>
  );
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
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQueryParamButton);
