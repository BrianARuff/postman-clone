import { useState } from "react";
import { connect } from "react-redux";

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
      <label htmlFor="jsonData">Enter JSON in Text Area Below: </label>
      <textarea
        id="jsonData"
        rows={10}
        cols={100}
        name="json"
        onChange={handleSetFormData}
      />
    </>
  );
}

export default connect()(JSONTextArea);
