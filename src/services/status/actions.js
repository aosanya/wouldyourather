export const FETCHING_DATA = 'FETCHING_DATA'

export function fetchingData (fetchingData) {
  return {
    type: FETCHING_DATA,
    fetchingData,
  }
}

export const FETCHED_DATA = 'FETCHED_DATA'

export function fetchedData (fetchedData) {
  return {
    type: FETCHED_DATA,
    fetchedData,
  }
}
