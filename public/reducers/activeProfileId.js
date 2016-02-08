const activeProfileId = (state = 0, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PROFILE_ID':
      return action.profileId
    default:
      return state
  }
}

export default activeProfileId