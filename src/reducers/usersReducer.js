export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'RECENT_MOVIES':
      return action.users
    default:
      return state
  }
}