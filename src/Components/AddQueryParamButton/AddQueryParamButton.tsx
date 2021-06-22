import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setKeyValueToTotal } from "../../redux/actions/setKeyValueToTotal";

function AddQueryParamButton(props: any) {
  const handleSetKeyValueToTotal = (e: any) => {
    e.preventDefault();
    const { setKeyValueToTotal } = props;
    setKeyValueToTotal();
    props.addInputToState(Math.random() * 1000000);
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
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQueryParamButton);
