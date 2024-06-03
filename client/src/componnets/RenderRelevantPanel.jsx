import ExerciseStudentPage from "../pages/ExerciseStudentPage";
import ExerciseTeacherPage from "../pages/ExerciseTeacherPage";
import Loader from "../ui/Loader";
const RenderRelevantPanel = ({ panelType }) => {
  console.log("🚀 ~ RenderRelevantPanel ~ panelType:", panelType)
  if (panelType === "teacher") {
    return <ExerciseTeacherPage/>
  }
  if (panelType === "pending") {
    return <Loader/>
  }
  if (panelType === "student") {
    return <ExerciseStudentPage />;
  }
};

export default RenderRelevantPanel;
