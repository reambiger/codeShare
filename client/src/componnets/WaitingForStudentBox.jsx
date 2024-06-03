import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
const styles = stylex.create({
  box: {
    // border: `1px solid ${colors.spiceyPurple}`,
    height:"100%",
    marginTop:"10vh",
    width: "100%",
    color: "white",
    backgroundColor: "black",
    opacity: "50%",
    padding:"2vh",
    textAlign:"center",
    borderRadius:"8px",
    position:"absolute",
    top:"0",
    zIndex:"20"

  },
});
const WaitingForStudentBox = () => {
  return <div {...stylex.props(styles.box)}>
    Waiting for student 
</div>;
};

export default WaitingForStudentBox;
