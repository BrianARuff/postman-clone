import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchButton } from "../../content.json";
import axios from "axios";
import { useState } from "react";
import ReactJsonPrint from "react-json-print";

function SearchButton(props: any) {
  const { queryType, searchAddress } = props;

  const [response, setResponse] = useState({
    responseData: {},
  });

  const mapAxiosRequest = (url = "", data = {}) => {
    if (queryType === "GET")
      return (
        axios
          .get(url)
          // @ts-ignore
          .then((res) => setResponse(res))
          .catch((err) => setResponse(err))
      );

    if (queryType === "POST")
      return axios
        .post(url, data)
        .then((res) => res)
        .catch((err) => err);

    if (queryType === "PUT")
      return axios
        .put(url, data)
        .then((res) => res)
        .catch((err) => err);

    if (queryType === "PATCH")
      return axios
        .patch(url, data)
        .then((res) => res)
        .catch((err) => err);

    if (queryType === "DELETE")
      return axios
        .delete(url, data)
        .then((res) => res)
        .catch((err) => err);
  };

  const handleHttpCall = () => {
    return mapAxiosRequest(searchAddress, {});
  };

  return (
    <>
      <button onClick={handleHttpCall}>{searchButton.text}</button>
      <br />
      <br />
      <ReactJsonPrint dataObject={response} />
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
