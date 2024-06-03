import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
const styles = stylex.create({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "x-large",
    marginTop: "10vh",
    padding: "2%",
    marginHorizontal: "10vh",
    color: "whitesmoke",
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
  },
});
const ExplanationBox = ({ explanation }) => {
  return <div {...stylex.props(styles.box)}>{explanation}</div>;
};

export default ExplanationBox;
