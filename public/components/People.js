import React, { PropTypes } from 'react'
import PeopleList from './PeopleList'
import Profile from './Profile'

const People = ({ people, activePerson }) => (
  <section>
    <PeopleList people={people} />
    <Profile person={activePerson} />
  </section>
)

People.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default People