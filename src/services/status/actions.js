export const FETCHING_DATA = 'FETCHING_DATA'

export function fetchingData (fetchingData) {
  return {
    type: FETCHING_DATA,
    fetchingData,
  }
}