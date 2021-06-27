import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setKeyValueToTotal } from "../../redux/actions/setKeyValueToTotal";
import { setQueryParamsId } from "../../redux/actions/setQueryParamsId";
import { setSearchItem } from "../../redux/actions/setSearchItem";
import content from "../../content.json";
import { Tooltip } from "@material-ui/core";

interface SearchItem {
  keyValue: string;
  value: string;
  id: number;
}

interface Props {
  setSearchItem: any;
  searchAddress: string;
  total: any[];
}

class SetParamsButton extends React.Component<Props> {
  state = { count: 0 };
  handleSetKeyValueToTotal = () => {
    let { setSearchItem, searchAddress, total } = this.props;
    total.map((item: SearchItem) => {
      if (!searchAddress.includes("?")) {
        return setSearchItem({
          address: (searchAddress += `?${item.keyValue}=${item.value}`),
        });
      } else {
        return setSearchItem({
          address: (searchAddress += `&${item.keyValue}=${item.value}`),
        });
      }
    });
    setKeyValueToTotal();
  };
  render() {
    const { buttontext } = content.setParams;
    return (
      <Tooltip title="Click to set your added params to the search URL">
        <button onClick={this.handleSetKeyValueToTotal}>{buttontext}</button>
      </Tooltip>
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

export default connect(mapStateToProps, mapDispatchToProps)(SetParamsButton);
