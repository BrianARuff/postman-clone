import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { dropDownMenu } from "../../content.json";
import { setQueryType } from "../../redux/actions/setQueryType";

function DropDownMenu(props: any) {
  const handleSelectQueryType = (e: any) => {
    const { setQueryType } = props;
    setQueryType({ queryType: e.target.value });
  };
  return (
    <select onChange={handleSelectQueryType} name="queryType">
      {dropDownMenu.options.map((option, index) => {
        return (
          <option value={option} key={index}>
            {option}
          </option>
        );
      })}
    </select>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setQueryType,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(DropDownMenu);
