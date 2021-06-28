import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { dropDownMenu } from "../../content.json";
import { setQueryType } from "../../redux/actions/setQueryType";
import {
  DROP_DOWN_MENU_COMPONENT_OPTION_ITEM,
  DROP_DOWN_MENU_COMPONENT_SELECT_BOX,
} from "../../cypressTypes/types";
import { Tooltip } from "@material-ui/core";
import { Select, MenuItem } from "@material-ui/core";

function DropDownMenu(props: any) {
  const handleSelectQueryType = (e: any) => {
    const { setQueryType } = props;
    setQueryType({ queryType: e.target.value });
  };
  return (
    <div style={{ width: "300px" }} className="container">
      <Tooltip style={{ width: "300px" }} title="Click and Select an Method">
        <Select
          defaultValue={"GET"}
          data-testid={DROP_DOWN_MENU_COMPONENT_SELECT_BOX}
          onChange={handleSelectQueryType}
          name="queryType"
        >
          {dropDownMenu.options.map((option, index) => {
            return (
              <MenuItem
                data-testid={DROP_DOWN_MENU_COMPONENT_OPTION_ITEM}
                value={option}
                key={index}
              >
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </Tooltip>
    </div>
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
