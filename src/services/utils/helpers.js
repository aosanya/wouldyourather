export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }

export function formatQuestion (question, user, authedUser) {
    if (user === undefined) return undefined

    const { id, author , timestamp, optionOne, optionTwo } = question
    const { name, avatarURL } = user
    return {
      name,
      id,
      author,
      optionOne,
      optionTwo,
      avatar : avatarURL,
      timestamp,
      hasResponded : optionOne['votes'].includes(authedUser) || optionTwo['votes'].includes(authedUser),
    }
}

