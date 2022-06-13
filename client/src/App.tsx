import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const App: FC<Props> = (props) => {
  return (
    <Routes {...props}>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
