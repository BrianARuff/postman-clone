import { Button, Tooltip } from "@material-ui/core";
import content from "../../content.json";
import { JSON_TEXT_AREA_BUTTON_BUTTON } from "../../cypressTypes/types";

interface Props {
  handleSetJSONData: (e: any) => void;
}

function JSONTextAreaButton(props: Props) {
  const { JSONTextAreaButton } = content;
  const { buttonText } = JSONTextAreaButton;
  const { handleSetJSONData } = props;
  return (
    <Tooltip
      style={{ margin: "1rem" }}
      placement="top"
      title="Click to set JSON to send with request"
    >
      <Button
        data-testid={JSON_TEXT_AREA_BUTTON_BUTTON}
        color="primary"
        variant="contained"
        onClick={handleSetJSONData}
      >
        {buttonText}
      </Button>
    </Tooltip>
  );
}

export default JSONTextAreaButton;
