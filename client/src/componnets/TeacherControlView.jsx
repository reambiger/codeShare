import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";
import socket from "../socket";
import WaitingForStudentBox from "./WaitingForStudentBox";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import SuccessModel from "./SuccessModel";
import ErrorModel from "./ErrorModel";
import HomeButton from "./HomeButton";
const styles = stylex.create({
  container: {
    width: "50%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
});
const TeacherControlView = ({ exerciseName }) => {
  const [code, setCode] = useState("");
  const [waitingForStudent, setWaitingForStudent] = useState(true);
  const [model, setModel] = useState({ value: "", type: "inactive" });

  socket.on("receiveCode", ({ code, exercise }) => {
    if (waitingForStudent) {
      setWaitingForStudent(false);
    }
    if (exercise !== exerciseName) {
      setModel({
        value: `your are not on the same exercise as your student he is in ${exercise}`,
        type: "error",
      });
    } else {
      setModel({
        value: ``,
        type: "inactive",
      });

      setCode(code);
    }
  });
  socket.on("model", (modeData) => {
    setModel(modeData);
  });

  return (
    <div {...stylex.props(styles.container)}>
      <HomeButton />
      <TeacherEditor />
      {waitingForStudent && <WaitingForStudentBox />}

      {model.type === "error" && (
        <ErrorModel error={model.value} setModel={setModel} />
      )}
      {model.type === "success" && (
        <SuccessModel setModel={setModel} msg={model.value} />
      )}
    </div>
  );
};

const TeacherEditor = () => {
  return (
    <AceEditor
      style={{
        width: "100%",
        height: "60vh",
      }}
      mode="javascript"
      theme="monokai"
      readOnly
      name="mentorEditor"
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
export default TeacherControlView;
