import React from "react";
import * as stylex from "@stylexjs/stylex";
import { useDispatch, useSelector } from "react-redux";
import MyCustomButton from "../ui/MyCustomButton";
import { closeError, selectError } from "../Redux/slices/errorSlice";
import { colors } from "../tokens.stylex";

const styles = stylex.create({
  MidScreenModel: {
    position: "fixed",
    zIndex: "10",
    top: "30vh",
    left: "40vw",
    width: "20vw",
    height: "40VH",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomLeftRadius: "30px",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
    backgroundColor: "white",
    boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px`,
  },
  error: { padding: "10%", color:colors.myRed,fontSize:"xx-large"},

  head: { fontSize: "xx-large" },
});
const MyErrorComponent = ({ children }) => {
  const isError = useSelector(selectError).shown;
  const dispatch = useDispatch();
  if (isError===null) {
    return <></>;
  }
  const customOnClick = () => {
    const closeCurrentError = () => {
      dispatch(closeError());
    };
    return closeCurrentError;
  };
  return (
    <div {...stylex.props(styles.MidScreenModel)}>
      <div {...stylex.props(styles.head)}>Error</div>
      <div {...stylex.props(styles.error)}>{children}</div>

      {/* <MyCustomButton callbackFunc={customOnClick()}  variant={"close"}>close</MyCustomButton> */}
    </div>
  );
};

export default MyErrorComponent;
