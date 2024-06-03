import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import socket from "../socket";
import SuccessModel from "./SuccessModel";
import MyButton from "../ui/MyButton";
import ErrorModel from "./ErrorModel";
import * as stylex from "@stylexjs/stylex";
import HomeButton from "./HomeButton";
import { compareAnything } from "../utils/obj";
const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
    height: "60vh",
    alignItems: "center",
    justifyContent: "center",
  },
});

const StudentSandBox = ({ codeBlock, testCases, exerciseName }) => {
  const [code, setCode] = useState(codeBlock);
  const [model, setModel] = useState({ value: "", type: "inactive" });
  const onEditorUpdate = (changeInCode) => {
    setCode(changeInCode);
    socket.emit("changeInCode", { code: changeInCode, exercise: exerciseName });
  };

  const executeCode = () => {
    try {
      for (const { funcInputs, result } of testCases) {
        const z = eval(`${code}myFunc(${funcInputs})`);
        if (!compareAnything(z, result)) {
          throw new Error("almost there, try again!");
        }

        setModel({ type: "success", value: "Great Job" });
        socket.emit("model", {
          type: "success",
          value: "Your student Succeed the assignment",
        });
      }
    } catch (err) {
      setModel({ type: "error", value: err.message });
      socket.emit("model", {
        type: "error",
        value: `Your student received: ${err.message}`,
      });
    }
  };

  return (
    <>
      <HomeButton />
      <div {...stylex.props(styles.container)}>
        <StudentEditor onEditorUpdate={onEditorUpdate}/>
        <MyButton Variant="MyBlue" callbackFunc={executeCode}>
          Run Code
        </MyButton>
        {model.type === "error" && (
          <ErrorModel error={model.value} setModel={setModel} />
        )}
        {model.type === "success" && (
          <SuccessModel setModel={setModel} msg={model.value} />
        )}
      </div>
    </>
  );
};
const StudentEditor = ({onEditorUpdate}) => {
  return (
    <AceEditor
      style={{
        width: "60%",
        height: "60vh",
        marginLeft: "10vw",
        marginRight: "5vw",
      }}
      mode="javascript"
      theme="monokai"
      onChange={onEditorUpdate}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={code}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};
export default StudentSandBox;
