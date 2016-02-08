import { connect } from 'react-redux'
import { setActiveProfileId } from '../actions/index'
import ProfileLink from '../components/ProfileLink'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.profileId === state.activeProfileId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setActiveProfileId(ownProps.profileId))
    }
  }
}

const ActiveProfileLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileLink)

export default ActiveProfileLink