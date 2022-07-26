const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DRAWER_OPEN':
      return {
        ...state,
        drawer: {
          open: action.open
        }
      }

    case 'UPDATE_EMAIL_NOTIFICATION':
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.name]: action.value
        }
      }
    case 'UPDATE_PROFILE_INPUT':
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.name]: action.value
        }
      }
    default:
      return state
  }

}

export default reducer
