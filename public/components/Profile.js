import React, { PropTypes } from 'react'

const Profile = ({ person }) => (
  <div>
    <h2>Profile:</h2>
    <span>Name: {person.firstName} {person.lastName}</span>
    <br />
    <img src={person.avatar} width="100" />
  </div>
)

Profile.PropTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired
}

export default Profile