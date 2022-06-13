import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { selectQueries } from "../helpers";

export const useQuery = () => {
    const { search } = useLocation();
  
    return useMemo(() => selectQueries(new URLSearchParams(search)), [search]);
}