import { createContext, FC, ReactNode, useCallback, useState } from "react";
import { useFetchItems } from "../hooks/useFetchItems";
import { useQuery } from "../hooks/useQuery";

type TDataContext = {
  loading: boolean;
  error: ItemsError;
  data: ItemsResponse | null;
  state: RequestParams;
  updateState: (
    field: keyof RequestParams,
    value: ValueOf<RequestParams>
  ) => void;
};

const DataContext = createContext<TDataContext>(null!);

type Props = {
  children: ReactNode;
};

export const DataContextProvider: FC<Props> = ({ children }) => {
  const queries = useQuery();
  const [state, setState] = useState<RequestParams>({
    ...queries,
  });
  const { error, loading, data } = useFetchItems(state);

  const updateState = useCallback(
    (field: KeyOf<typeof state>, value: ValueOf<typeof state>) => {
      setState((state) => ({
        ...state,
        [field]: value,
      }));
    },
    []
  );

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
  );
};
