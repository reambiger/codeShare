import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
const styles = stylex.create({
  bar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    zIndex: "10",
    width: "10px",
    height: "10px",
    border: "1px solid black",
    display: "inline-block",
    margin: "0 auto",
    padding: "0 auto",
  },
  cubes: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "10px",
    border:"1px solid gray"
  },
  text:{
    marginBottom: "5px",
    marginLeft:"5px",
    color:colors.spiceyBlue

  },
  red: { backgroundColor: "red" },
  yellow: { backgroundColor: "yellow" },
  green: { backgroundColor: "green" },
});
const DifficultyLevelDisplay = ({ difficultyLevel }) => {
  let myColor = "green";
  let myArray = new Array(difficultyLevel).fill(1);
  switch (difficultyLevel) {
    case 5:
      myColor = "red";
      break;
    case 4:
      myColor = "yellow";
      break;
    default:
      myColor = "green";
      break;
  }
  return (
    <span {...stylex.props(styles.bar)}>
      <span {...stylex.props(styles.text)}>Difficulty Level</span>
      <span {...stylex.props(styles.cubes)}>
        {myArray.map((item, i) => (
          <span {...stylex.props(styles[myColor], styles.item)} key={i}></span>
        ))}
      </span>
    </span>
  );
};

export default DifficultyLevelDisplay;
