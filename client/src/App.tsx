import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useFetchItems } from "./hooks/useFetchItems";
import { useQuery } from "./hooks/useQuery";
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
