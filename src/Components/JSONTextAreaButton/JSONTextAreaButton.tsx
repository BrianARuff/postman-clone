interface Props {
  handleSetJSONData: () => void;
}

function JSONTextAreaButton(props: Props) {
  const { handleSetJSONData } = props;
  return (
    <button onClick={handleSetJSONData} style={{ width: "66%" }}>
      Set JSON
    </button>
  );
}

export default JSONTextAreaButton;
