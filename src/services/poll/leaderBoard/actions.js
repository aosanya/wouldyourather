export const RECEIVE_LEADERBOARD = 'RECEIVE_LEADERBOARD'

export function receiveLeaderBoard (leaderBoard) {
  return {
    type: RECEIVE_LEADERBOARD,
    leaderBoard,
  }
}