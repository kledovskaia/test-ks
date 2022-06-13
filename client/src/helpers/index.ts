import { URLSearchParams } from "url";

const queryNames = ['limit', 'search', 'page', 'field', 'order']

type SelectQueries = (searchParams: URLSearchParams, targetNames?: typeof queryNames) => ({
    [key in OneOf<typeof queryNames>]: string
})

export const selectQueries: SelectQueries = (searchParams, targetNames = queryNames) => {
    return targetNames.reduce((obj, name) => ({
        ...obj,
        [name]: searchParams.get(name)
    }), {})
}