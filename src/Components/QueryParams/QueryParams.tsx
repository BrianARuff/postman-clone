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
  const { setQueryParamsKey, setQueryParamsValue } = props;

  const [id, setId] = useState(0);
  const [formData, setFormData] = useState<{ value: string; keyValue: string }>(
    { value: "", keyValue: "" }
  );

  const handleSetQueryParamsKey = (e: any) => {
    setQueryParamsKey(formData);
  };

  const handleSetQueryParamsValue = (e: any) => {
    setQueryParamsValue(formData);
  };

  const handleKeyChange = (e: any) => {
    setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
  };

  const { queryParams } = content;
  const { header } = queryParams;

  return (
    <div className="container">
      <h4>{header}</h4>
      <div className="container">
        <AddQueryParamButton
          id={id}
          setId={setId}
          handleSetQueryParamsKey={handleSetQueryParamsKey}
          handleSetQueryParamsValue={handleSetQueryParamsValue}
        />
        <input
          onChange={handleKeyChange}
          type="text"
          placeholder="new key"
          name="keyValue"
        />
        <input
          onChange={handleKeyChange}
          type="text"
          placeholder="new value"
          name="value"
        />
      </div>
      <div>
        {props.total.map(
          ({
            id,
            keyValue,
            value,
          }: {
            id: number;
            keyValue: string;
            value: string;
          }) => {
            return (
              <InputField
                id={id}
                key={id}
                keyValue={keyValue}
                valueValue={value}
                setQueryParamsId={setQueryParamsId}
              />
            );
          }
        )}
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
