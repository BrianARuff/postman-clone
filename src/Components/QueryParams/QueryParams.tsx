import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setQueryParamsValue } from "../../redux/actions/setQueryParamsValue";
import { setQueryParamsKey } from "../../redux/actions/setQueryParamsKey";
import AddQueryParamButton from "../AddQueryParamButton/AddQueryParamButton";
import "./QueryParams";
import content from "../../content.json";
import { useState } from "react";

function QueryParams(props: any) {
  const [inputs, setInputs] = useState<any[]>([]);

  function addInputToState(index: number) {
    const inputField = (
      <div style={{ margin: "1.6rem 0" }} key={index}>
        <input
          onChange={handleSetQueryParamsKey}
          type="text"
          placeholder="key"
          name="keyValue"
        />
        <input
          onChange={handleSetQueryParamsValue}
          type="text"
          placeholder="value"
          name="value"
        />
        <br />
      </div>
    );
    setInputs(() => [...inputs, inputField]);
  }

  const handleSetQueryParamsKey = (e: any) => {
    const { setQueryParamsKey } = props;
    setQueryParamsKey({
      [e.target.name]: e.target.value,
    });
  };

  const handleSetQueryParamsValue = (e: any) => {
    const { setQueryParamsValue } = props;
    setQueryParamsValue({
      [e.target.name]: e.target.value,
    });
  };

  const { queryParams } = content;
  const { header } = queryParams;

  return (
    <div style={{ textAlign: "center" }}>
      <h4 style={{ textAlign: "center" }}>{header}</h4>
      <AddQueryParamButton addInputToState={addInputToState} /> <br />
      <input
        onChange={handleSetQueryParamsKey}
        type="text"
        placeholder="key"
        name="keyValue"
      />
      <input
        onChange={handleSetQueryParamsValue}
        type="text"
        placeholder="value"
        name="value"
      />
      {inputs.map((input) => {
        return { ...input };
      })}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    total: state.queryParamReducer.total,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setQueryParamsValue,
      setQueryParamsKey,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryParams);
