import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setQueryParamsValue } from "../../redux/actions/setQueryParamsValue";
import { setQueryParamsKey } from "../../redux/actions/setQueryParamsKey";
import AddQueryParamButton from "../AddQueryParamButton/AddQueryParamButton";
import "./QueryParams";
import content from "../../content.json";

function QueryParams(props: any) {
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

  const { total } = props;
  const tupleTotal = total.reduce(function (r: any[][], a: [], i: number) {
    if (i % 2) {
      r[r.length - 1].push(a);
    } else {
      r.push([a]);
    }
    return r;
  }, []);

  const { queryParams } = content;
  const { header, keyValuePair } = queryParams;

  return (
    <div style={{ textAlign: "center" }}>
      <hr />
      <h4 style={{ textAlign: "center" }}>{header}</h4>
      <ul>
        {tupleTotal.map((items: []) => {
          return (
            <p>
              {keyValuePair} {JSON.stringify(items, null, 2)}
            </p>
          );
        })}
      </ul>
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
      <AddQueryParamButton />
      <hr />
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
