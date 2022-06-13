import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useFetchItems } from "./hooks/useFetchItems";
import { useQuery } from "./hooks/useQuery";

const App = () => {
  const query = useQuery()
  console.log({ query })
  const [state, setState] = useState<RequestParams>({
    limit: 10,
    pageNumber: 0,
  })
  const { error, loading, data } = useFetchItems(state)

  const updateState = useCallback((
      field: KeyOf<typeof state>, 
      value: ValueOf<typeof state>
    ) => {
    setState((state) => ({
      ...state,
      [field]: value,
    }))
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}

export default App;
