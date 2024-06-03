import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import MyButton from "../ui/MyButton";
import { IoMdClose } from "react-icons/io";
const styles = stylex.create({
  box: {
    height: "30vh",
    width: "60vw",
    position: "fixed",
    bottom: "35%",
    left: "20%",
    color: "white",
    backgroundColor: "red",
    opacity: "70%",
    padding: "2vh",
    textAlign: "center",
    padding: "30px",
    fontSize: "xx-large",
  },
  closeContainer: {
    position: "absolute",
    top: "10%",
    right: "0",
  },
  refetchContainer: {
    position: "absolute",
    top: "50%",
    left: "43%",
  },
});
const RefetchError = ({ refetch, msg }) => {
  return (
    <div {...stylex.props(styles.box)}>
      {msg}
      <div {...stylex.props(styles.refetchContainer)}>
        <MyButton callbackFunc={() => refetch()} Variant={"RefetchError"}>
          refetch
        </MyButton>
      </div>
      <div {...stylex.props(styles.closeContainer)}>
        <MyButton callbackFunc={() => setModel()} Variant={"close"}>
          <IoMdClose />
        </MyButton>
      </div>
    </div>
  );
};

export default RefetchError;
