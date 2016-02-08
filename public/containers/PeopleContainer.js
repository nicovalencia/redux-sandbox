import { connect } from 'react-redux'
import People from '../components/People'

const mapStateToProps = (state) => {
  let people = state.people
  let activePerson = state.people[0]

  state.people.forEach((person) => {
    if (state.activeProfileId == person.id)
      activePerson = person
  })

  return { people, activePerson }
}

const PeopleContainer = connect(mapStateToProps)(People)

export default PeopleContainer