import { Button } from "@material-ui/core";
import content from "../../content.json";

interface Props {
  handleSetJSONData: (e: any) => void;
}

function JSONTextAreaButton(props: Props) {
  const { JSONTextAreaButton } = content;
  const { buttonText } = JSONTextAreaButton;
  const { handleSetJSONData } = props;
  return (
    <Button color="primary" variant="contained" onClick={handleSetJSONData}>
      {buttonText}
    </Button>
  );
}

export default JSONTextAreaButton;
