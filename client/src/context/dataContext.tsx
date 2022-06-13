import { useEffect } from 'react'
import { createContext, FC, ReactNode, useCallback, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useFetchItems } from '../hooks/useFetchItems'
import { useQuery } from '../hooks/useQuery'

export type DataContext = {
  loading: boolean
  error: ItemsError
  data: ItemsResponse | null
  state: RequestParams
  updateState: (
    field: keyof RequestParams,
    value: ValueOf<RequestParams>,
  ) => void
}

export const DataContext = createContext<DataContext>(null!)

type Props = {
  children: ReactNode
}

export const DataContextProvider: FC<Props> = ({ children }) => {
  const [ , setSearchParams] = useSearchParams();
  const queries = useQuery()
  const [state, setState] = useState<RequestParams>({
    ...queries,
  })
  const { error, loading, data } = useFetchItems(state)

  const updateState = useCallback(
    (field: KeyOf<typeof state>, value: ValueOf<typeof state>) => {
      setState(state => ({
        ...state,
        [field]: value,
      }))
    },
    [],
  )

  useEffect(() => {
    const filteredState = Object.fromEntries(Object.entries(state).filter(([key, value]) => value))
    setSearchParams(filteredState as {}, { replace: true })
  }, [state])

  return (
    <DataContext.Provider
      value={{
        error,
        updateState,
        loading,
        data,
        state,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
