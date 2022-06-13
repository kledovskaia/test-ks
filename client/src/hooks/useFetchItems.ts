import axios from "axios"
import { useCallback, useEffect, useState } from "react"

type UseFetchItems = (obj: RequestParams) => {
    loading: ItemsLoading,
    error: ItemsError | null,
    data: ItemsResponse | null
}

const url = process.env.REACT_APP_API

export const useFetchItems: UseFetchItems = ({ sortBy, filterBy, pageNumber, limit }) => {
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<ItemsResponse | null>(null)

    const fetchItems = useCallback(async () => {
        if (!url) return;
        setError(null)
        setLoading(true)
        try {
            const { data } = await axios.post<ItemsResponse>(url, {
                sortBy,
                filterBy,
                pageNumber,
                limit
            })
            setData(data)
        } catch (error) {
            setError(error as Error)
        } finally {
            setLoading(false)
        }
    }, [
        sortBy,
        filterBy,
        pageNumber,
        limit,
    ])

    useEffect(() => {
        fetchItems()
    }, [fetchItems])

    return { error, loading, data }
}