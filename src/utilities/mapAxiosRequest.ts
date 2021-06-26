import axios from "axios";

export const mapAxiosRequest = (
  queryType = "",
  url = "",
  data = {},
  setResponseData?: any,
  options = {}
) => {
  if (queryType === "GET")
    return (
      axios
        .get(url, data)
        // @ts-ignore
        .then((res) => setResponseData(res))
        .catch((err) => setResponseData(err))
    );

  if (queryType === "POST")
    return axios
      .post(url, data)
      .then((res) => res)
      .catch((err) => err);

  if (queryType === "PUT") return axios.put(url, data).catch((err) => err);

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
