import { useState } from "react";
import { connect } from "react-redux";
import { InputLabel } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { setJsonData } from "../../redux/actions/setJSONData";
import JSONTextAreaButton from "../JSONTextAreaButton/JSONTextAreaButton";
import ShowJSONData from "../ShowJSONData/ShowJSONData";

interface JSONText {
  jsonData: string;
}

function JSONTextArea(props: any): JSX.Element {
  const [formData, setFormData] = useState<JSONText>({ jsonData: "" });
  const handleSetFormData = (e: any) => {
    setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
  };
  const handleSetJSONData = () => {
    const { setJsonData } = props;
    setJsonData({ ...formData });
  };
  return (
    <div className="container">
      <InputLabel htmlFor="jsonData">
        Enter JSON in Text Area Below:{" "}
      </InputLabel>
      <textarea
        id="jsonData"
        rows={20}
        cols={100}
        name="jsonData"
        onChange={handleSetFormData}
      />
      <ShowJSONData />
      <JSONTextAreaButton handleSetJSONData={handleSetJSONData} />
    </div>
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
