type KeyOf<T> = keyof T;
type ValueOf<T> = T[KeyOf<T>];

type City = {
    name: string,
    date: number,
    count: number,
    distance: number,
}

type RequestParams = {
    sortField?: Exclude<keyof City, 'date'>,
    sortOrder?: string,
    search?: string,
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