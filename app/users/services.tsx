import { sort, createNewSortInstance } from 'fast-sort';

export const nameSort = createNewSortInstance({
    comparer: (a, b) => a.name.localeCompare(b.name),
    inPlaceSorting :true
})

export const emailSort = createNewSortInstance({
    comparer: (a, b) => a.email.localeCompare(b.email),
    inPlaceSorting :true
})