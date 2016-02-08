import React, { PropTypes } from 'react'
import ActiveProfileLink from '../containers/ActiveProfileLink'

const Person = ({ id, firstName, lastName }) => (
  <li>
    <ActiveProfileLink profileId={id}>
      {firstName} {lastName}
    </ActiveProfileLink>
  </li>
)

Person.PropTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default Person