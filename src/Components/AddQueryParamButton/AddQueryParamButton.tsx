import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setKeyValueToTotal } from "../../redux/actions/setKeyValueToTotal";
import { setQueryParamsId } from "../../redux/actions/setQueryParamsId";
import { setSearchItem } from "../../redux/actions/setSearchItem";

interface SearchItem {
  keyValue: string;
  value: string;
  id: number;
}

function AddQueryParamButton(props: any) {
  const handleSetKeyValueToTotal = () => {
    let {
      setKeyValueToTotal,
      setId,
      id,
      setQueryParamsId,
      handleSetQueryParamsKey,
      handleSetQueryParamsValue,
      setSearchItem,
      searchAddress,
      total,
    } = props;
    total.map((item: SearchItem) => {
      if (!searchAddress.includes("?")) {
        setSearchItem({
          address: (searchAddress += `?${item.keyValue}=${item.value}`),
        });
      } else {
        setSearchItem({
          address: (searchAddress += `&${item.keyValue}=${item.value}`),
        });
      }
    });
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
