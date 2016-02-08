import React, { PropTypes } from 'react'
import Person from './Person'

const PeopleList = ({ people }) => (
  <ul>
    {people.map(person =>
      <Person
        key={person.id}
        {...person}
      />
    )}
  </ul>
)

PeopleList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default PeopleList