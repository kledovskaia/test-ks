import { createContext, FC, ReactNode, useCallback, useState } from "react"
import { useFetchItems } from "../hooks/useFetchItems"
import { useQuery } from "../hooks/useQuery"

type DataContext = { 
  loading: boolean; 
  error: ItemsError; 
  data: ItemsResponse | null; 
  state: RequestParams; 
  updateState: (field: keyof RequestParams, value: ValueOf<RequestParams>) => void; 
}

const DataContext = createContext<DataContext>(null!)

type Props = {
  children: ReactNode
}

export const DataContextProvider: FC<Props> = ({ children }) => {
  const query = useQuery()
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

  return <DataContext.Provider value={{
    error,
    updateState,
    loading,
    data,
    state
  }}>{children}</DataContext.Provider>
}