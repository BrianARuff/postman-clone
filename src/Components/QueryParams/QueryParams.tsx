import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setQueryParamsValue } from "../../redux/actions/setQueryParamsValue";
import { setQueryParamsKey } from "../../redux/actions/setQueryParamsKey";
import { setQueryParamsId } from "../../redux/actions/setQueryParamsId";
import { deleteParamPair } from "../../redux/actions/deleteParamPair";
import AddQueryParamButton from "../AddQueryParamButton/AddQueryParamButton";
import "./QueryParams";
import content from "../../content.json";
import { useState } from "react";
import InputField from "../InputField/InputField";

function QueryParams(props: any) {
  const [id, setId] = useState(0);

  const handleDeleteParamPair = (e: any) => {
    e.preventDefault();
    const { deleteParamPair } = props;
    deleteParamPair(props.total[0]?.id);
  };

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
      <div>
        <AddQueryParamButton id={id} setId={setId} /> <br />
        <input
          onChange={handleSetQueryParamsKey}
          type="text"
          placeholder="new key"
          name="keyValue"
        />
        <input
          onChange={handleSetQueryParamsValue}
          type="text"
          placeholder="newvalue"
          name="value"
        />
        <button onClick={handleDeleteParamPair}>Delete</button>
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          flexFlow: "column nowrap",
        }}
      >
        {props.total.map((param: any) => {
          return (
            <InputField
              id={param.id}
              key={param.id}
              handleSetQueryParamsKey={handleSetQueryParamsKey}
              handleSetQueryParamsValue={handleSetQueryParamsValue}
            />
          );
        })}
      </div>
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
      setQueryParamsId,
      deleteParamPair,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryParams);
