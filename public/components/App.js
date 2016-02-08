import React from 'react'
import Footer from './Footer'
import PeopleContainer from '../containers/PeopleContainer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <PeopleContainer />
  </div>
)

export default App