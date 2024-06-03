import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import MyButton from "../ui/MyButton";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const styles = stylex.create({
  buttonContainer: {
    position: "fixed",
    top: "2vh",
    left: "1vw",
  },
});
const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <div {...stylex.props(styles.buttonContainer)}>
      <MyButton Variant="MyYellow" callbackFunc={()=>navigate("/")}>
        <IoHomeOutline />
      </MyButton>
    </div>
  );
};

export default HomeButton;
