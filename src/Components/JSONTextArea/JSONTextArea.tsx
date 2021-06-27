import { useState } from "react";
import { connect } from "react-redux";
import { TextareaAutosize } from "@material-ui/core";

interface JSONText {
  json: string;
}

function JSONTextArea(): JSX.Element {
  const [formData, setFormData] = useState<JSONText>({ json: "" });
  const handleSetFormData = (e: any) => {
    setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <label mx-3 htmlFor="jsonData">
        Enter JSON in Text Area Below:{" "}
      </label>
      <TextareaAutosize
        id="jsonData"
        rows={20}
        cols={100}
        name="json"
        onChange={handleSetFormData}
      />
    </>
  );
}

export default connect()(JSONTextArea);
