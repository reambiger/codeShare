import React, { Children } from "react";
import { colors } from "../tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { IoMdClose } from "react-icons/io";
const styles = stylex.create({
  spicey: {
    backgroundColor: colors.spiceyGray,
    color: colors.spiceyPurple,
    border: `2px solid ${colors.spiceyPurple})`,
    height:"200px",
    width:"200px"

  },
  MyBlue: {
    backgroundColor: colors.spiceyBlue,
    color: "whitesmoke",
    border: `2px solid ${colors.spiceyPurple})`,
    width: "100px",
    height: "50px",
    padding:"10px"
  },
  RefetchError: {
    backgroundColor: "whitesmoke",
    color: "red",
    width: "100px",
    height: "50px",
    padding:"10px",
    fontSize:"small"
  },
  MyYellow: {
    backgroundColor: "yellow",
    color: "whitesmoke",
    border: `2px solid ${colors.spiceyPurple})`,
    width: "100px",
    height: "50px",
    padding:"10px",
    fontSize:"xx-large"
  },
  close: {
    backgroundColor: "transparent",
    color: "whitesmoke",
  },
});
const MyButton = ({ Variant, callbackFunc, children }) => {
  if (Variant === "close") {
    return (
      <button onClick={() => callbackFunc()} {...stylex.props(styles.close)}>
        {children}
      </button>
    );
  }
  return (
    <button onClick={() => callbackFunc()} {...stylex.props(styles[Variant])}>
      {children}
    </button>
  );
};

export default MyButton;
