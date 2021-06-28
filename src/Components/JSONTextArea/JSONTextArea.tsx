import { useState } from "react";
import { connect } from "react-redux";
import { InputLabel } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { setJsonData } from "../../redux/actions/setJSONData";
import JSONTextAreaButton from "../JSONTextAreaButton/JSONTextAreaButton";
import ShowJSONData from "../ShowJSONData/ShowJSONData";
import { TextareaAutosize } from "@material-ui/core";
import content from "../../content.json";

interface JSONText {
  jsonData: string;
}

function JSONTextArea(props: any): JSX.Element {
  const { JSONTextArea } = content;
  const { labelText } = JSONTextArea;
  const [formData, setFormData] = useState<JSONText>({ jsonData: "" });
  const handleSetFormData = (e: any) => {
    setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
  };
  const handleSetJSONData = (e: any) => {
    e.preventDefault();
    const { setJsonData } = props;
    setJsonData({ ...formData });
  };
  return (
    <form className="container">
      <InputLabel htmlFor="jsonData">{labelText}</InputLabel>
      <TextareaAutosize
        id="jsonData"
        rows={20}
        cols={100}
        name="jsonData"
        onChange={handleSetFormData}
      />
      <ShowJSONData />
      <JSONTextAreaButton handleSetJSONData={handleSetJSONData} />
    </form>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setJsonData,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(JSONTextArea);
