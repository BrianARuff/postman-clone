interface Props {
  handleSetJSONData: () => void;
}

function JSONTextAreaButton(props: Props) {
  const { handleSetJSONData } = props;
  return <button onClick={handleSetJSONData}>Set JSON</button>;
}

export default JSONTextAreaButton;
