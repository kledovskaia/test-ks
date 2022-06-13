type City = {
    name: string,
    date: number,
    count: number,
    distance: number,
}

type RequestParams = {
    sortBy?: Exclude<keyof City, 'date'>,
    filterBy?: string,
    pageNumber?: number,
    limit?: number,
}

type ItemsResponse = {
    items: City[],
    totalCount: number,
    currentPage: number,
}

type ItemsError = Error | null
type ItemsLoading = boolean