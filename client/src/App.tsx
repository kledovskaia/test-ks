import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}

export default App;
