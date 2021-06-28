import { Typography } from "@material-ui/core";

function ShowURL(props?: any) {
  const { searchAddress } = props;
  return <Typography variant="subtitle2">{searchAddress}</Typography>;
}

export default ShowURL;
