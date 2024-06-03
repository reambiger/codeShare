import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import MyButton from "../ui/MyButton";
import DifficultyLevelDisplay from "./DifficultyLevelDisplay";
import { useQuery } from "@tanstack/react-query";
import { getAllExercises } from "../api";
import { useNavigate } from "react-router-dom";
import "../loader.css";
import Loader from "../ui/Loader";
import RefetchError from "./RefetchError";

const styles = stylex.create({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2,2fr)",
    justifyContent: "center",
    gap: "5%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    height: "200px",
    width: "200px",
  },
});
const CodeBlockButtons = () => {
  const navigate = useNavigate();

  const { data, status, refetch } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => getAllExercises(),
  });

  if (status === "pending") {
    return <Loader />;
  }
  if (status === "error") {
    return (
      <RefetchError
        refetch={refetch}
        msg={"concoction error could not provide exercises"}
      />
    );
  }

  return (
    <div {...stylex.props(styles.container)}>
      {data.exercises.length > 0 &&
        data.exercises.map(({ _id: id, name, difficultyLevel }) => (
          <div key={id} {...stylex.props(styles.buttonContainer)}>
            <DifficultyLevelDisplay difficultyLevel={difficultyLevel} />
            <MyButton
              Variant="spicey"
              callbackFunc={() => navigate(`/exercise/${id}`)}
            >
              {name}
            </MyButton>
          </div>
        ))}
    </div>
  );
};

export default CodeBlockButtons;
