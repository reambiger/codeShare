import * as stylex from "@stylexjs/stylex";
import { colors } from "../tokens.stylex";
import { useQuery } from "@tanstack/react-query";
import { getExerciseById } from "../api";
import { useParams } from "react-router-dom";
import ExplanationBox from "../componnets/ExplanationBox";
import StudentSandBox from "../componnets/StudentSandBox";
import Loader from "../ui/Loader";
import RefetchError from "../componnets/RefetchError";

const styles = stylex.create({
  page: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});

const ExerciseStudentPage = () => {
  const { exerciseId } = useParams();
  console.log("🚀 ~ ExerciseStudentPage ~ exerciseId :", exerciseId )
  const { data, status,refetch } = useQuery({
    queryKey: ["exercise", exerciseId],
    queryFn: () => getExerciseById(exerciseId),
  });
  if (status === "pending") {
    return (
      <div {...stylex.props(styles.page)}>
        <Loader />
      </div>
    );
  }
  if (status === "error") {
    return (
      <div {...stylex.props(styles.page)}>
        <RefetchError
          refetch={refetch}
          msg={"concoction error could not provide wanted exercise"}
        />
        ;
      </div>
    );
  }

  return (
    <div {...stylex.props(styles.page)}>
      <ExplanationBox explanation={data.exercise.explanation} />
      <StudentSandBox
        codeBlock={data.exercise.codeBlock}
        exerciseName={data.exercise.name}
        testCases={data.exercise.testCases}
      />
    </div>
  );
};

export default ExerciseStudentPage;
