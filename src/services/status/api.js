import { fetchingData, fetchedData } from './actions'

export function handleFetchingData (fetching) {
    return (dispatch) => {
        dispatch(fetchingData(fetching))
    }
}

export function handleFetchedData (fetching) {
    return (dispatch) => {
        dispatch(fetchedData(fetching))
    }
}