import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RenderRelevantPanel from "./componnets/RenderRelevantPanel";
import useUserType from "./hooks/useUserType";

function App() {
  const {userType}=useUserType()

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />   
        <Route
          path="/exercise/:exerciseId"
          element={<RenderRelevantPanel panelType={userType}/>}
        />
      </Routes>
    </>
  );
}
export default App;
