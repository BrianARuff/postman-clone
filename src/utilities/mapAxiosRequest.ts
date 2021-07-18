import axios from "axios";

export const mapAxiosRequest = (
  queryType = "",
  url = "",
  data = {},
  setResponseData?: any,
) => {
  if (queryType === "GET")
    return (
      axios
        .get(url, data)
        // @ts-ignore
        .then((res) => setResponseData(res))
        .catch((err) => setResponseData(err))
    );

  if (queryType === "POST") {
  console.log(data)
    return axios
      .post(url, data)
      .then((res) => setResponseData(res))
      .catch((err) => setResponseData(err));
  }
  if (queryType === "PUT")
    return axios
      .patch(url, data)
      .then((res) => setResponseData(res))
      .catch((err) => setResponseData(err));

  if (queryType === "PATCH") {
    return axios
      .patch(url, data)
      .then((res) => setResponseData(res))
      .catch((err) => setResponseData(err));
  }

  if (queryType === "DELETE")
    return axios
      .delete(url, data)
      .then((res) => setResponseData(res))
      .catch((err) => setResponseData(err));
};
