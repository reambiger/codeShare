import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import MyButton from "../ui/MyButton";
import { IoMdClose } from "react-icons/io";
const styles = stylex.create({
  box: {
    height: "10vh",
    width: "100%",
    position: "fixed",
    bottom: "0",
    left: "0",
    color: "white",
    backgroundColor: "green",
    opacity: "70%",
    padding: "2vh",
    textAlign: "center",
    fontSize: "xx-large",
  },
  buttonContainer:{
    position:"absolute",
    top:"10%",
    right:"0"
  }
});
const SuccessModel = ({ setModel,msg }) => {
  return (
    <div {...stylex.props(styles.box)}>
      {msg}
      <div {...stylex.props(styles.buttonContainer)}>
        <MyButton
          callbackFunc={() => setModel({ value: "", type: "inactive" })}
          Variant={"close"}
        >
          <IoMdClose />
        </MyButton>
      </div>
    </div>
  );
};

export default SuccessModel;
